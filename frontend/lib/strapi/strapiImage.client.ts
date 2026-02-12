// frontend/lib/strapi/strapiImage.client.ts

export function strapiImageClient(url: string): string {
  if (!url) return url;

  // ha véletlen /api-val van beállítva az env, azt levágjuk
  const base = (process.env.NEXT_PUBLIC_API_URL ?? '')
    .replace(/\/api\/?$/, '')
    .replace(/\/$/, '');

  if (url.startsWith('/')) {
    // strapidemo fallback (csak böngészőben)
    if (
      !base &&
      typeof window !== 'undefined' &&
      window.location.host.endsWith('.strapidemo.com')
    ) {
      return `https://${window.location.host.replace('client-', 'api-')}${url}`;
    }

    return base ? `${base}${url}` : url;
  }

  return url;
}
