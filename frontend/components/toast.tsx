'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { ExternalLinkIcon } from '@/components/icons/external-link';
import { XIcon } from '@/components/icons/x';

const CONSENT_KEY = 'consent.choice.v1';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

let __gaLoaded = false;

function loadGAOnce() {
  if (typeof window === 'undefined') return;
  if (!GA_ID) return;
  if (__gaLoaded) return;

  // ha már van gtag/js script, ne duplázzunk
  const existing = document.querySelector(
    `script[src^="https://www.googletagmanager.com/gtag/js?id="]`
  );
  if (existing) {
    __gaLoaded = true;
    return;
  }

  // gtag stub
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).gtag =
    (window as any).gtag ||
    function gtag() {
      (window as any).dataLayer.push(arguments);
    };

  // script inject
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    GA_ID
  )}`;

  s.onload = () => {
    try {
      (window as any).gtag?.('js', new Date());
      (window as any).gtag?.('config', GA_ID, {
        anonymize_ip: true,
      });
    } catch {}
  };

  document.head.appendChild(s);
  __gaLoaded = true;
}

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

      // ✅ ha már döntött, alkalmazzuk
      if (v === 'granted') {
        loadGAOnce(); // ✅ GA csak itt
        updateGtagConsent(true); // ✅ consent update csak ha van gtag
        return;
      }
      if (v === 'denied') {
        // ✅ nem töltünk GA-t
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

    loadGAOnce(); // ✅ GA betöltés CSAK elfogadás után
    updateGtagConsent(true); // ✅ consent + PV
    setIsOpen(false);
  };

  const reject = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'denied');
    } catch {}
    // ✅ nem töltünk GA-t
    updateGtagConsent(false);
    setIsOpen(false);
  };

  return (
    <div
      className={clsx(
        'fixed z-50',
        'left-4 right-4 bottom-4',
        'sm:left-4 sm:right-auto sm:bottom-4',
        'pb-[env(safe-area-inset-bottom)]',
        'w-auto sm:w-[420px]',
        'max-w-[min(420px,calc(100vw-2rem))]',
        'transition-all duration-200',
        isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-2 pointer-events-none',
        'bg-white border border-charcoal shadow-lg rounded-2xl',
        'px-5 py-4 sm:px-6 sm:py-3',
        'flex items-start gap-4'
      )}
      role="dialog"
      aria-modal="false"
      aria-label="Süti hozzájárulás"
    >
      <div className="flex-1">
        <p className="text-sm font-semibold text-secondary">LAZAR&apos;S®</p>

        <p className="mt-1 text-sm text-secondary/70">
          Analitikai sütiket használunk a jobb élményért.
        </p>

        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 sm:flex-nowrap">
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

          <a
            href="https://lazarsalon.com/adatkezelesi-tajekoztato"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'inline-flex items-center gap-1.5',
              'text-xs font-medium text-secondary/70 hover:text-secondary transition-colors',
              'sm:ml-auto sm:shrink-0 sm:text-sm sm:font-medium sm:text-secondary sm:hover:text-secondary/80'
            )}
          >
            Adatkezelés
            <ExternalLinkIcon className="h-3.5 w-3.5 text-muted" />
          </a>
        </div>
      </div>

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
