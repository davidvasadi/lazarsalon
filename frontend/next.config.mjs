/** @type {import('next').NextConfig} */

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:1337';

const u = new URL(STRAPI_URL);
const protocol = u.protocol.replace(':', '');
const hostname = u.hostname;
const port = u.port || undefined;

const staticRedirects = [
  // Régi React URL-ek → új Next.js URL-ek
  { source: '/csapatunk',       destination: '/hu/csapat',         permanent: true },
  { source: '/szolgaltatasok',  destination: '/hu/szolgaltatasok', permanent: true },
  { source: '/rolunk',          destination: '/hu',                permanent: true },
  { source: '/gyik',            destination: '/hu',                permanent: true },
  { source: '/idopontfoglalas', destination: '/hu/kapcsolat',      permanent: true },
  { source: '/instagram',       destination: '/hu',                permanent: true },
  // Gyökér átirányítás
  { source: '/',                destination: '/hu',                permanent: true },
];

const nextConfig = {
  turbopack: {
    root: process.cwd().replace('/next', ''),
  },

  images: {
    // Képoptimalizálás BE (márciusban ki lett kapcsolva — valószínűleg az ingyenes Vercel-keret miatt: a Next alapból
    // 60 mp után újra átméretez). Most: 31 napos tárolás, csak WebP, kevés méretváltozat → havonta pár száz átméretezés,
    // jóval az ingyenes keret alatt.
    // fejlesztéskor is optimalizál, hogy helyben is az látszódjon, ami élesben (2026-11-28)
    unoptimized: false,
    qualities: [75, 85],
    minimumCacheTTL: 2678400,
    formats: ['image/webp'],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [96, 256, 384],
    remotePatterns: [
      {
        protocol,
        hostname,
        ...(port ? { port } : {}),
        pathname: '/uploads/**',
      },
    ],
  },

  pageExtensions: ['ts', 'tsx'],

  async redirects() {
    let dynamicRedirects = [];
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/redirections`);
      const result = await res.json();

      dynamicRedirects = (result?.data ?? []).map(({ source, destination }) => ({
        source: `/:locale${source}`,
        destination: `/:locale${destination}`,
        permanent: false,
      }));
    } catch (error) {
      console.warn('⚠️ Strapi redirections nem tölthetők be:', error.message);
    }

    return [...staticRedirects, ...dynamicRedirects];
  },
};

export default nextConfig;