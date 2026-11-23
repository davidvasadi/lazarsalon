'use client';

// A valódi Google-értékelés (pl. 4,8 · 185 értékelés) a kliens-komponenseknek (hero, foglalás-kártya). Egy oldalbetöltésen
// belül csak egyszer kéri le a /api/google-reviews-t (az pedig a Google-t hetente egyszer).
import { useEffect, useState } from 'react';

export type GoogleRating = {
  rating: number;
  count: number;
  mapsUrl: string | null;
};

let pending: Promise<GoogleRating | null> | null = null;

function load(): Promise<GoogleRating | null> {
  pending ??= fetch('/api/google-reviews')
    .then((r) => (r.ok ? r.json() : null))
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
