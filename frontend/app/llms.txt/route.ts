// llms.txt (llmstxt.org) — hogy az AI-keresők (ChatGPT, Perplexity, Claude, Google AI) gyorsan és PONTOSAN megértsék, mit
// kínál a LAZAR'S®, mennyiért, hol, kik dolgoznak itt és hogyan lehet foglalni. Csak valós adatból készül:
// - cégadatok (cím, koordináta, telefon, nyitvatartás, márkák): a kódból (lib/shared/structured-data.ts → BUSINESS)
// - szolgáltatások, árak, időtartam, foglalási mód (online / csak telefon): élőben a Strapiból (plans + CTA gombok)
// - csapat (team-members) és gyakori kérdések (faqs): élőben a Strapiból
// - értékelés és vélemények: Google (getGooglePlace — ugyanaz, ami az oldalon látszik)
// Bővítve 2026-11-27 (Dave: „minden fontos menjen be”).
import { getGooglePlace } from '@/lib/shared/google-reviews';
import { fmtDuration, fmtPrice } from '@/lib/shared/plan-pages';
import { BUSINESS } from '@/lib/shared/structured-data';
import { fetchCollectionType } from '@/lib/strapi';

export const revalidate = 3600;

const SITE = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.WEBSITE_URL ||
  'https://lazarsalon.com'
).replace(/\/+$/, '');

const PHONE = '+36 20 348 8481';

const PAGES: [string, string, RegExp][] = [
  ['Női hajvágás', 'noi-hajvagas', /női hajvágás|női hajszárítás/i],
  ['Férfi hajvágás', 'ferfi-hajvagas', /férfi/i],
  ['Hajfestés (ammóniamentes)', 'hajfestes', /festés|szín|szőkítés/i],
  ['Balayage hajfestés', 'balayage', /balayage|melír/i],
  ['Göndör haj – Curly Hair & Styling', 'curly-hair-styling', /curly|styling/i],
  ['Hajápoló kezelések', 'hajapolo-kezelesek', /miracle|hajápoló/i],
  ['Műköröm és manikűr', 'mukorom-es-manikur', /géllak|manikűr|műköröm|kéz/i],
];

type PlanRow = {
  name: string;
  price?: string | null;
  number?: string | null;
  CTA?: { URL?: string | null; url?: string | null }[] | null;
};

const clean = (s?: string | null) =>
  String(s ?? '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

async function safe<T>(p: Promise<T>, fallback: T): Promise<T> {
  try {
    return (await p) ?? fallback;
  } catch {
    return fallback;
  }
}

export async function GET() {
  const [plans, team, faqs, place] = await Promise.all([
    safe(
      fetchCollectionType<PlanRow[]>('plans', {
        locale: 'hu',
        fields: ['name', 'price', 'number'],
        populate: { CTA: true },
        pagination: { pageSize: 100 },
      } as any),
      [] as PlanRow[]
    ),
    safe(
      fetchCollectionType<any[]>('team-members', {
        locale: 'hu',
        fields: ['name', 'role', 'experience'],
        sort: ['order:asc'],
        pagination: { pageSize: 50 },
      } as any),
      [] as any[]
    ),
    safe(
      fetchCollectionType<any[]>('faqs', {
        locale: 'hu',
        fields: ['question', 'answer'],
        pagination: { pageSize: 200 },
      } as any),
      [] as any[]
    ),
    getGooglePlace(),
  ]);

  // csak telefonon foglalható: minden gombja tel: link (pl. hosszú szőkítések, műköröm)
  const phoneOnly = (p: PlanRow) => {
    const urls = (p.CTA ?? []).map((c) => String(c?.URL ?? c?.url ?? ''));
    return urls.length > 0 && urls.every((u) => u.startsWith('tel:'));
  };

  const used = new Set<string>();
  const sections = PAGES.map(([title, slug, re]) => {
    const items = plans.filter(
      (p) => p?.name && !used.has(p.name) && re.test(p.name)
    );
    items.forEach((p) => used.add(p.name));
    const lines = items.map(
      (p) =>
        `  - ${clean(p.name)}: ${fmtPrice(p.price)}${p.number ? ` (${fmtDuration(p.number)})` : ''}${phoneOnly(p) ? ' — csak telefonos egyeztetéssel' : ''}`
    );
    return `- [${title}](${SITE}/hu/${slug})${lines.length ? '\n' + lines.join('\n') : ''}`;
  }).join('\n');

  const phoneOnlyNames = plans.filter(phoneOnly).map((p) => clean(p.name));

  const teamLines = team
    .filter((m) => m?.name)
    .map(
      (m) =>
        `- ${clean(m.name)}${m.role ? ` — ${clean(m.role)}` : m.experience ? ` — ${clean(m.experience)}` : ''}`
    )
    .join('\n');

  const seenQ = new Set<string>();
  const faqLines = faqs
    .filter((f) => f?.question && f?.answer)
    .filter((f) => {
      const k = clean(f.question).toLowerCase();
      if (seenQ.has(k)) return false;
      seenQ.add(k);
      return true;
    })
    .map((f) => `### ${clean(f.question)}\n${clean(f.answer)}`)
    .join('\n\n');

  const rating =
    place?.rating && place?.count
      ? `${String(place.rating).replace('.', ',')} / 5 (${place.count} Google-vélemény)`
      : null;
  // A vélemények SZÖVEGE és a vendégek NEVE szándékosan nincs itt: a Google feltételei csak megjelenítésre engedik
  // (nem továbbadásra), a név pedig személyes adat (GDPR). Csak az összesített értékelés + link a Google-profilra.

  const content = `# ${BUSINESS.name}

> Fodrászat és szépségszalon Budapest VI. kerületében, Terézvárosban (${BUSINESS.address.postalCode} Budapest, ${BUSINESS.address.streetAddress}): női és férfi hajvágás, balayage és melírtechnikák, ammóniamentes hajfestés, szőkítés, göndör haj (curly) szárítás, vágás és styling, hajápoló kezelések, műköröm és manikűr. ${BUSINESS.brands.join(' és ')} termékekkel.${rating ? ` Google-értékelés: ${rating}.` : ''}

## Röviden

- Helyszín: Budapest belváros, VI. kerület (Terézváros), ${BUSINESS.address.streetAddress}
- Szakterületek: balayage és melírtechnikák, ammóniamentes hajfestés, göndör haj (curly technika), női és férfi hajvágás, műköröm
- Termékek: ${BUSINESS.brands.join(', ')}
- Foglalás: online (${BUSINESS.bookingUrl}) vagy telefonon (${PHONE})${rating ? `\n- Értékelés: ${rating}` : ''}

## Elérhetőség és helyszín

- Cím: ${BUSINESS.address.postalCode} Budapest, ${BUSINESS.address.streetAddress} (VI. kerület, Terézváros), Magyarország
- Koordináták: ${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}
- Telefon: ${PHONE}
- Nyitvatartás: ${BUSINESS.hoursText}; vasárnap zárva
- [Útvonal (Google Maps)](${BUSINESS.mapUrl})
- Instagram: ${BUSINESS.social[0]}
- [Kapcsolat](${SITE}/hu/kapcsolat)

## Időpontfoglalás

- A legtöbb szolgáltatás online foglalható: [Online időpontfoglalás](${BUSINESS.bookingUrl})
- Telefonon is lehet foglalni: ${PHONE}${phoneOnlyNames.length ? `\n- Csak telefonos egyeztetéssel foglalható: ${phoneOnlyNames.join(', ')}` : ''}

## Szolgáltatások és árak

Az árak a hajhossztól és a hajmennyiségtől függően a megadott sávban mozognak; a pontos árat a konzultáción mondjuk meg.

${sections}
- [Összes szolgáltatás és ár](${SITE}/hu/szolgaltatasok)
${teamLines ? `\n## Csapat\n\n${teamLines}\n- [A csapat bemutatása](${SITE}/hu/csapat)\n` : ''}${rating ? `\n## Értékelések\n\n- Google: ${rating}\n- [A vélemények elolvasása a Google-profilon](${place?.mapsUrl ?? BUSINESS.mapUrl})\n` : ''}${faqLines ? `\n## Gyakori kérdések\n\n${faqLines}\n` : ''}
## Továbbiak

- [Galéria (valódi munkáink)](${SITE}/hu/galeria)
- [Csapat](${SITE}/hu/csapat)
- [Kapcsolat](${SITE}/hu/kapcsolat)
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
