'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { ExternalLinkIcon } from '@/components/icons/external-link';
import { XIcon } from '@/components/icons/x';

const CONSENT_KEY = 'consent.choice.v1';

function updateGtagConsent(granted: boolean) {
  if (typeof window === 'undefined') return;

  const mode = granted ? 'granted' : 'denied';

  try {
    (window as any).gtag?.('consent', 'update', {
      ad_storage: mode,
      analytics_storage: mode,
      ad_user_data: mode,
      ad_personalization: mode,
    });

    // elfogadáskor egy PV azonnal (nálad van __sendPV)
    if (granted && typeof (window as any).__sendPV === 'function') {
      (window as any).__sendPV();
    }
  } catch {}
}

export const AIToast = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(CONSENT_KEY);

      // ✅ ha már döntött, azonnal alkalmazzuk (nem csak elrejtjük)
      if (v === 'granted') {
        updateGtagConsent(true);
        return;
      }
      if (v === 'denied') {
        updateGtagConsent(false);
        return;
      }
    } catch {}

    const t = window.setTimeout(() => setIsOpen(true), 2000);
    return () => window.clearTimeout(t);
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'granted');
    } catch {}
    updateGtagConsent(true);
    setIsOpen(false);
  };

  const reject = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'denied');
    } catch {}
    updateGtagConsent(false);
    setIsOpen(false);
  };

  return (
    <div
      className={clsx(
        // ✅ mobil: alul középen (left+right), desktop: bal alul fix
        'fixed z-50',
        'left-4 right-4 bottom-4',
        'sm:left-4 sm:right-auto sm:bottom-4',
        // ✅ safe-area iOS-hoz
        'pb-[env(safe-area-inset-bottom)]',
        // ✅ méret
        'w-auto sm:w-[420px]',
        'max-w-[min(420px,calc(100vw-2rem))]',

        // ✅ biztos megjelenés
        'opacity-0 transition-all',
        isOpen && 'opacity-100',

        // ✅ skin
        'bg-white border border-charcoal shadow-lg rounded-2xl',
        'px-5 py-4 sm:px-6 sm:py-3',
        'flex items-start gap-4'
      )}
      role="dialog"
      aria-modal="false"
      aria-label="Süti hozzájárulás"
    >
      <div className="flex-1">
        <p className="text-sm font-semibold text-secondary">LAZARS®</p>

        <p className="mt-1 text-sm text-secondary/70">
          Analitikai és marketing sütiket használunk a jobb élményért.
        </p>

        {/* ✅ Desktop: 1 sorban (no-wrap), link a gombok mellett jobbra
            ✅ Mobil: link külön sorban a gombok alatt */}
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 sm:flex-nowrap">
          {/* Buttons */}
          <div className="flex flex-wrap gap-2 sm:flex-nowrap">
            <button
              type="button"
              onClick={accept}
              className="h-9 px-4 rounded-md bg-secondary text-white text-sm font-semibold hover:opacity-90 transition whitespace-nowrap"
            >
              Elfogadom
            </button>

            <button
              type="button"
              onClick={reject}
              className="h-9 px-4 rounded-md border border-charcoal text-secondary text-sm font-semibold hover:border-secondary/40 transition whitespace-nowrap"
            >
              Elutasítom
            </button>
          </div>

          {/* Link */}
          <a
            href="https://lazarsalon.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              // mobil: külön sor, diszkrétebb
              'inline-flex items-center gap-1.5',
              'text-xs font-medium text-secondary/70 hover:text-secondary transition-colors',
              // desktop: gombok mellé jobbra, nagyobb
              'sm:ml-auto sm:shrink-0 sm:text-sm sm:font-medium sm:text-secondary sm:hover:text-secondary/80'
            )}
          >
            Adatkezelés
            {/* muted csak az ikonon */}
            <ExternalLinkIcon className="h-3.5 w-3.5 text-muted" />
          </a>
        </div>
      </div>

      {/* X = elutasítom */}
      <button
        type="button"
        onClick={reject}
        className="inline-flex rounded-md p-1 text-secondary/60 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-muted/40 transition-colors"
      >
        <span className="sr-only">Bezár</span>
        <XIcon className="h-5 w-5" />
      </button>
    </div>
  );
};
