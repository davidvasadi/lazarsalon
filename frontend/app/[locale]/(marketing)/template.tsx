'use client';

// Lapváltás (2026-11-28) — a The Place Studio mechanizmusa, Lazar-designban, logó nélkül:
//  1. View Transitions (app/globals.css, ::view-transition-old/new(root); lib/view-transition-nav.ts): a régi oldal
//     felfelé kicsúszik, az új alulról feltolódik.
//  2. Ez a template: az új oldal tetején egy sötét FÜGGÖNY van (a hero / notch színe), így a függöny tolja ki a régi oldalt;
//     utána egyenes éllel (ívelés nélkül) felfelé elhúzódik, és előbukkan az új oldal.
// Ahol a böngésző nem tud View Transitions-t, és a vissza/előre gombnál: csak a függöny megy (azonnal takar, majd felhúzódik).
// - Első betöltéskor NINCS függöny, és a szerver sosem rajzolja (különben a HTML-ben eltakarná a tartalmat).
// - Csökkentett mozgásnál nincs függöny.
// - A (marketing) csoportban van, mert a főoldal és az aloldalak itt vannak (minden lapváltáskor újra létrejön).
import { m as motion, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';

import { STATUS_BAR_COLOR } from '@/components/status-bar-tint';

const CURTAIN_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];
/** a függöny felhúzódása ennyi után indul — a View Transitions tolás (0,6 s) után */
const LIFT_DELAY = 0.6;

// az első megjelenés UTÁN (useEffect) állítjuk át — így az első betöltésnél (szerver-HTML, hydration) sosincs függöny
let appHydrated = false;

export default function MarketingTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const navigated = typeof window !== 'undefined' && appHydrated;
  useEffect(() => {
    appHydrated = true;
  }, []);

  if (reduce || !navigated) return <>{children}</>;

  return (
    <>
      {children}

      <motion.div
        aria-hidden
        // a menü FÖLÖTT: a menü az oldallal együtt tolódik ki, a függöny takarja, és a felhúzódáskor tűnik el
        className="pointer-events-none fixed inset-0 z-[9997]"
        // teteje = a notch színe (a felső sáv végig sötét marad), lefelé a hero sötétje
        style={{
          background: `linear-gradient(180deg, ${STATUS_BAR_COLOR} 0%, #1D1D1E 55%, #141414 100%)`,
        }}
        initial={{ y: '0%' }}
        animate={{ y: '-100%' }}
        transition={{ duration: 0.7, ease: CURTAIN_EASE, delay: LIFT_DELAY }}
      />
    </>
  );
}
