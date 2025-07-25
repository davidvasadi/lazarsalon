import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GtagLoader = () => {
  useEffect(() => {
    const GA_ID = import.meta.env.VITE_GA_ID;
    if (!GA_ID) return;

    // Megengedjük az analytics-et
    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });

    // Beállítjuk a gtag függvényt, ha még nincs
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || ((...args) => window.dataLayer.push(args));

    // Inicializálás és config
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { send_page_view: true });

    console.log('[GtagLoader] consent granted, GA config fut');
  }, []);

  return null;
};
