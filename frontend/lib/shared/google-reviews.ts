// Google-értékelés és -vélemények (Places API) — HETENTE egyszer kéri le (Dave kérése: maradjon a havi ingyenes kereten
// belül; a kulcs a hello@davelopment.hu fiók `davelopment-509415` projektjéé, ahol a GetPlace napi 1-re van korlátozva).
// A választ a Next adat-gyorsítótára tárolja (újraindítás után is), a hibát pedig a folyamat 1 napig megjegyzi, hogy
// hibánál se kérdezzen újra és újra.
import { unstable_cache } from 'next/cache';
import fs from 'node:fs';
import path from 'node:path';

import SEED_JSON from './google-place-seed.json';

const WEEK = 60 * 60 * 24 * 7;

export type GoogleReview = {
  name: string;
  photo: string | null;
  rating: number;
  text: string;
  when: string | null; // pl. „2 hónapja”
  url: string | null;
};
export type GooglePlace = {
  rating: number | null;
  count: number | null;
  mapsUrl: string | null;
  reviews: GoogleReview[];
};

// A Google-t csak ez kérdezi. Hibánál KIVÉTELT dob: így a gyorsítótár nem írja felül a korábbi, sikeres adatot —
// a Next (és élesben a Vercel adat-gyorsítótára, ami deployok között is megmarad) a régit adja tovább, nem tűnik el.
async function fetchPlace(): Promise<GooglePlace> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const id = process.env.GOOGLE_PLACE_ID;
  if (!key || !id) throw new Error('nincs beállítva');
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(id)}?languageCode=hu`,
    {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews,googleMapsUri',
      },
      cache: 'no-store', // a tárolást az unstable_cache végzi (hiba esetén a régit tartja meg)
    }
  );
  if (!res.ok) throw new Error(`Google Places ${res.status}`);
  const d: any = await res.json();
  return {
    rating: typeof d?.rating === 'number' ? d.rating : null,
    count: typeof d?.userRatingCount === 'number' ? d.userRatingCount : null,
    mapsUrl: d?.googleMapsUri ?? null,
    reviews: (d?.reviews ?? []).map((r: any) => ({
      name: r?.authorAttribution?.displayName ?? '',
      photo: r?.authorAttribution?.photoUri ?? null,
      rating: Number(r?.rating ?? 0),
      text: (r?.text?.text ?? r?.originalText?.text ?? '').trim(),
      when: r?.relativePublishTimeDescription ?? null,
      url: r?.googleMapsUri ?? null,
    })),
  };
}

const cachedPlace = unstable_cache(fetchPlace, ['google-place-lazars-v1'], {
  revalidate: WEEK,
  tags: ['google-place'],
});

// Végső tartalék: a 2026-11-23-i valós lekérés (a kódban). Ha nincs kulcs, a Google nem érhető el vagy betelt a napi
// keret, akkor is a VALÓDI értékelés és vélemények látszanak — soha nem üres hely vagy régi, kitalált szöveg.
// Amint egy élő lekérés sikerül, az felülírja (hetente frissül).
const SEED = SEED_JSON as GooglePlace;

let lastError = 0;

// Tartalék-tár: a legutóbbi sikeres lekérés egy fájlban (.cache/, gitignore-olt). Ahol a fájlrendszer nem írható (pl.
// Vercel), csendben kimarad — ott a Vercel adat-gyorsítótára őrzi meg az adatot a deployok között.
const LAST_GOOD = path.join(process.cwd(), '.cache', 'google-place.json');
function saveLastGood(p: GooglePlace) {
  try {
    fs.mkdirSync(path.dirname(LAST_GOOD), { recursive: true });
    fs.writeFileSync(LAST_GOOD, JSON.stringify(p));
  } catch {}
}
function readLastGood(): GooglePlace | null {
  try {
    return JSON.parse(fs.readFileSync(LAST_GOOD, 'utf8')) as GooglePlace;
  } catch {
    return null;
  }
}

export async function getGooglePlace(): Promise<GooglePlace> {
  if (!process.env.GOOGLE_PLACES_API_KEY || !process.env.GOOGLE_PLACE_ID)
    return readLastGood() ?? SEED;
  // ha még SOSINCS elmentett adat és épp most volt hiba, egy napig ne próbálkozzon újra
  if (
    process.env.NODE_ENV === 'production' &&
    Date.now() - lastError < 24 * 3600 * 1000
  )
    return readLastGood() ?? SEED;
  try {
    const place = await cachedPlace();
    saveLastGood(place);
    return place;
  } catch (e) {
    lastError = Date.now();
    // a legutóbbi sikeres lekérés fájlból — így hiba / betelt napi keret esetén sem tűnik el semmi
    const last = readLastGood();
    if (!last)
      console.warn('[google-place]', e instanceof Error ? e.message : e);
    return last ?? SEED;
  }
}

/** saját feltöltött profilkép? (a Google alapértelmezett, betűs avatarja `/a/…` címen jön, a valódi fotó `/a-/…` címen) */
const hasRealPhoto = (u: string | null) =>
  !!u && /googleusercontent\.com\/a-\//.test(u);

/** a megjelenítendő vélemények: csak 5 csillagos, szöveggel — elöl a valódi profilképesek, utánuk a betűs avatarosak
 *  (a Google egyszerre csak 5 véleményt ad, ebből ritkán több a fotós) */
export const showcaseReviews = (p: GooglePlace | null) =>
  (p?.reviews ?? [])
    .filter((r) => r.rating === 5 && r.text && r.name)
    .sort(
      (a, b) => Number(hasRealPhoto(b.photo)) - Number(hasRealPhoto(a.photo))
    );
