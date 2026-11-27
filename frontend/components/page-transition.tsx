'use client';

// Lapváltás-animáció framer-motionnel (2026-11-27, Dave: „alulról felfelé, húzzák egymást, ne villanjon”):
// - kattintásos navigáció: az új oldal alulról felfelé becsúszik, és közben felfelé kitolja a régit — a kettő egymáshoz
//   tapad (ugyanannyit mozognak, ugyanazzal a lassulással), így nincs rés és nincs villanás
// - a régi oldal onnan indul, ahol a látogató épp állt (a görgetési pozícióban „lefagyasztva”, position: fixed)
// - AnimatePresence + „befagyasztott” router (FrozenRouter): a kicsúszó réteg a régi oldal tartalmát mutatja
// - vissza/előre gomb (popstate): fordított irány — az előző oldal felülről csúszik be, lefelé tolja ki a mostanit.
//   A görgetési pozíciót MI mentjük oldalanként és állítjuk vissza (history.scrollRestoration = 'manual'), mert a böngésző
//   a még látszó régi oldalon állítaná vissza (ez volt a korábbi „lap aljára ugrik” hiba oka)
// - első betöltésnél nincs animáció; akadálymentes (reduced motion) beállításnál sincs
import {
  AnimatePresence,
  motion,
  useIsPresent,
  useReducedMotion,
} from 'framer-motion';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';

const TRANSITION = { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const };

let popNav = false;
// oldalanként az utolsó görgetési pozíció (útvonal → y), a vissza/előre gombhoz
const scrollPos = new Map<string, number>();
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
  window.addEventListener('popstate', () => {
    popNav = true;
  });
  let raf = 0;
  window.addEventListener(
    'scroll',
    () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        scrollPos.set(window.location.pathname, window.scrollY);
      });
    },
    { passive: true }
  );
}

function FrozenRouter({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;
  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

const vh = () => (typeof window !== 'undefined' ? window.innerHeight : 800);
const variants = {
  // custom = vissza/előre gomb volt-e: akkor fordított irány (felülről jön az előző oldal, lefelé megy a mostani)
  enter: (pop: boolean) => ({ y: pop ? -vh() : vh() }),
  center: { y: 0, transition: TRANSITION },
  exit: (pop: boolean) => ({ y: pop ? vh() : -vh(), transition: TRANSITION }),
};

function Slide({ children, pop }: { children: React.ReactNode; pop: boolean }) {
  const isPresent = useIsPresent();
  // a kicsúszó (régi) oldal a navigáció pillanatában látott pozícióban marad (fixed), onnan tolódik fel —
  // így a folyamban azonnal az új oldal van, teljes magasságban (a vissza gomb görgetése ezért jó)
  const frozenY = useRef<number | null>(null);
  if (!isPresent && frozenY.current === null && typeof window !== 'undefined')
    frozenY.current = window.scrollY;

  // vissza/előre gombnál: az új (előző) oldal a mentett pozíciójára görget, még a kirajzolás előtt
  useLayoutEffect(() => {
    if (!pop) return;
    window.scrollTo(0, scrollPos.get(window.location.pathname) ?? 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      custom={pop}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      style={
        isPresent
          ? undefined
          : {
              // a régi oldalból csak a képernyőnyi rész látszik (ami a kattintáskor a képernyőn volt) — ami alatta
              // volt, az nem úszik rá az új oldalra
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height:
                typeof window !== 'undefined' ? window.innerHeight : '100vh',
              overflow: 'hidden',
              zIndex: 1,
              pointerEvents: 'none',
            }
      }
    >
      <div
        style={
          isPresent
            ? undefined
            : { transform: `translate3d(0, ${-(frozenY.current ?? 0)}px, 0)` }
        }
      >
        <FrozenRouter>{children}</FrozenRouter>
      </div>
    </motion.div>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const isPop = popNav;

  useEffect(() => {
    popNav = false;
  }, [pathname]);

  if (reduce) return <>{children}</>;

  return (
    <AnimatePresence initial={false} custom={isPop}>
      <Slide key={pathname} pop={isPop}>
        {children}
      </Slide>
    </AnimatePresence>
  );
}
