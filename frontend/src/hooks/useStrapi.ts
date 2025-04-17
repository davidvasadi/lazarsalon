// src/hooks/useStrapi.ts

import { useState, useEffect } from 'react';

export interface UseStrapiReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * useStrapi egy univerzális hook, amely a megadott Strapi API végpontról kéri le az adatokat.
 *
 * @param endpoint - A Strapi API végpontja (például "/api/header-setting?populate=*")
 * @returns { data, loading, error } - az adatokat, a betöltési állapotot és az esetleges hibát.
 */
function useStrapi<T>(endpoint: string): UseStrapiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Vite esetében a környezeti változókat import.meta.env-en keresztül érjük el.
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}${endpoint}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, baseUrl]);

  return { data, loading, error };
}

export default useStrapi;
