// src/hooks/useGoogleMaps.ts
import { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

/**
 * Hook: Dynamically loads Google Maps JS API (v=weekly) with the Places library.
 * Returns true once window.google.maps.places is ready.
 */
export function useGoogleMaps(): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if ((window as any).google?.maps?.places) {
      setLoaded(true);
      return;
    }
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_API_KEY as string,
      version: 'weekly',
      libraries: ['places'],
    });
    loader
      .load()
      .then(() => setLoaded(true))
      .catch(err => console.error('Google Maps load error:', err));
  }, []);

  return loaded;
}
