// lib/analytics/gtag.ts
const GA_ID = process.env.NEXT_PUBLIC_GA_ID as string | undefined;

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    __ga_inited?: boolean;
  }
}

/** Biztos inicializálás (ha valamiért mégsem lenne meg a gtag) */
export function initOnce() {
  if (typeof window === 'undefined' || window.__ga_inited || !GA_ID) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments as any);
    };
  window.gtag('js', new Date());
  // Fontos: send_page_view: false – manuálisan küldjük
  window.gtag('config', GA_ID, { anonymize_ip: true, send_page_view: false });
  window.__ga_inited = true;
}

/** Oldalmegtekintés küldése (Realtime/DebugView-hoz is) */
export function pageview(url?: string) {
  if (typeof window === 'undefined' || !window.gtag || !GA_ID) return;
  const href = typeof window !== 'undefined' ? window.location.href : undefined;
  const title = typeof document !== 'undefined' ? document.title : undefined;
  const path =
    url ??
    (typeof window !== 'undefined'
      ? window.location.pathname + window.location.search
      : undefined);

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: href,
    page_title: title,
    // debug_mode: true, // ha DebugView kell
  });
}

/** Általános esemény küldés */
export function event(name: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}

/** Consent frissítés – elfogadáskor azonnal küld egy page_view-t */
export function consentUpdate(granted: boolean) {
  if (typeof window === 'undefined') return;
  const mode = granted ? 'granted' : 'denied';

  if (!window.gtag) initOnce();

  window.gtag?.('consent', 'update', {
    ad_storage: mode,
    analytics_storage: mode,
    ad_user_data: mode,
    ad_personalization: mode,
  });

  if (granted) {
    // fontos: azonnal megy egy PV (nem duplikálódik a GAViews-szel, lásd ott skip-first-render)
    pageview();
  }
}
