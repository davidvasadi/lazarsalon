'use client';

// Az oldalon belüli linkekre kattintva View Transitionnel vált lapot (lib/view-transition-nav.ts), és útvonal-váltáskor
// jelzi, hogy az új oldal kész. Nem fut: menü ([data-no-page-leave] — annak saját kezelése van), külső / tel: / foglalás
// link, #ugrás ugyanazon az oldalon, új lap, módosító billentyű, vissza/előre gomb.
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import {
  finishViewTransition,
  navigateWithTransition,
} from '@/lib/view-transition-nav';

export function ViewTransitionLinks() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    finishViewTransition();
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.(
        'a[href]'
      ) as HTMLAnchorElement | null;
      if (!a || a.hasAttribute('download')) return;
      if (a.target && a.target !== '_self') return;
      if (a.closest('[data-no-page-leave]')) return;
      let url: URL;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      )
        return;
      if (url.pathname.startsWith('/api/')) return;
      e.preventDefault();
      e.stopPropagation();
      navigateWithTransition(router, url.pathname + url.search + url.hash);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [router]);

  return null;
}
