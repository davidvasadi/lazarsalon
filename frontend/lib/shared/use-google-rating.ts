'use client';

// A valódi Google-értékelés (pl. 4,8 · 185 értékelés) a kliens-komponenseknek (hero, foglalás-kártya). Egy oldalbetöltésen
// belül csak egyszer kéri le a /api/google-reviews-t (az pedig a Google-t hetente egyszer).
import { useEffect, useState } from 'react';

export type GoogleRating = {
  rating: number;
  count: number;
  mapsUrl: string | null;
};

let raw: Promise<any | null> | null = null;
let pending: Promise<GoogleRating | null> | null = null;

/** a teljes /api/google-reviews válasz — látogatásonként EGYSZER kéri le (hero, foglalás-kártya, vélemények blokk is ezt
 *  használja; korábban a vélemények blokk külön is lekérte) */
export function loadGoogleReviews(): Promise<any | null> {
  raw ??= fetch('/api/google-reviews')
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null);
  return raw;
}

function load(): Promise<GoogleRating | null> {
  pending ??= loadGoogleReviews()
    .then((d) =>
      d?.configured &&
      typeof d.rating === 'number' &&
      typeof d.count === 'number'
        ? { rating: d.rating, count: d.count, mapsUrl: d.mapsUrl ?? null }
        : null
    )
    .catch(() => null);
  return pending;
}

export function useGoogleRating() {
  const [v, setV] = useState<GoogleRating | null>(null);
  useEffect(() => {
    let alive = true;
    load().then((r) => alive && setV(r));
    return () => {
      alive = false;
    };
  }, []);
  return v;
}

/** 4.8 → „4,8” */
export const fmtRating = (n: number) => n.toFixed(1).replace('.', ',');
