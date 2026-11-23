// index.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import { DesktopNavbar } from './desktop-navbar';
import { MobileNavbar } from './mobile-navbar';
import { NavRevealContext } from './nav-reveal';

// index.tsx

// A menü görgetésre — a davelopment booking (NavOnScrollUp) bevált mintája szerint, telefonon sem szaggat:
// - a lap tetején (400 px-ig) `absolute`: a tartalommal együtt, NATÍVAN gördül fel (képkockánként semmi JS);
// - lejjebb: felfelé görgetésre lecsúszik (fixed), lefelé görgetésre kicsúszik — csak IRÁNYVÁLTÁSKOR változik az állapot,
//   a csúszást a böngésző CSS-átmenete végzi;
// - nyitott menünél nincs transform (különben a teljes képernyős menü a sáv méretére zsugorodna).
type Mode = 'top' | 'shown' | 'hidden';
const TOP_ZONE = 400;
const DIR = 6;

export function Navbar({ data, locale }: { data: any; locale: string }) {
  const [mode, setMode] = useState<Mode>('top');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(false);

  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      if (menuRef.current) return;
      const y = window.scrollY;
      if (y < TOP_ZONE) setMode('top');
      else if (y < last - DIR) setMode('shown');
      else if (y > last + DIR) setMode('hidden');
      if (Math.abs(y - last) > DIR || y < TOP_ZONE) last = y;
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const ctx = useMemo(
    () => ({
      revealed: mode === 'shown',
      setMenuOpen: (open: boolean) => {
        menuRef.current = open;
        setMenuOpen(open);
      },
    }),
    [mode]
  );

  const cls = menuOpen
    ? mode === 'top'
      ? 'absolute inset-x-0 top-0'
      : 'fixed inset-x-0 top-0'
    : mode === 'top'
      ? 'absolute inset-x-0 top-0'
      : mode === 'shown'
        ? 'fixed inset-x-0 top-0 translate-y-0 transition-transform duration-300 ease-out'
        : 'pointer-events-none invisible fixed inset-x-0 top-0 -translate-y-full transition-[transform,visibility] duration-300 ease-out';

  return (
    <NavRevealContext.Provider value={ctx}>
      <nav className={`${cls} z-50 w-full`}>
        <div className="hidden w-full lg:block">
          {data?.left_navbar_items && (
            <DesktopNavbar
              locale={locale}
              leftNavbarItems={data?.left_navbar_items}
              rightNavbarItems={data?.right_navbar_items}
              logo={data?.logo}
            />
          )}
        </div>

        <div className="flex w-full items-center lg:hidden">
          {data?.left_navbar_items && (
            <MobileNavbar
              locale={locale}
              leftNavbarItems={data?.left_navbar_items}
              rightNavbarItems={data?.right_navbar_items}
              logo={data?.logo}
            />
          )}
        </div>
      </nav>
    </NavRevealContext.Provider>
  );
}
