'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * SPA route-váltásoknál küld egy page_view-t,
 * de az első renderen NEM (mert a "consent-replay" már küldött).
 * Suspense mögött van a layoutban, így a 404 prerender nem hibázik.
 */
export default function GAViews() {
  const pathname = usePathname();
  const search = useSearchParams();
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true; // ne küldjünk PV-t az első renderkor
      return;
    }
    try {
      const granted = localStorage.getItem('consent.choice.v1') === 'granted';
      if (!granted) return;
      (window as any).__sendPV?.();
    } catch {}
  }, [pathname, search]);

  return null;
}
