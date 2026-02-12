/** @type {import('next').NextConfig} */

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:1337';

const u = new URL(STRAPI_URL);
const protocol = u.protocol.replace(':', ''); // "http" | "https"
const hostname = u.hostname;                 // "localhost" | "api.domain.hu"
const port = u.port || undefined;            // "1337" | undefined

const nextConfig = {
  turbopack: {
    root: process.cwd().replace('/next', ''),
  },

  images: {
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
    let redirections = [];
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/redirections`);
      const result = await res.json();

      const redirectItems = (result?.data ?? []).map(({ source, destination }) => ({
        source: `/:locale${source}`,
        destination: `/:locale${destination}`,
        permanent: false,
      }));

      redirections = redirections.concat(redirectItems);
      return redirections;
    } catch (error) {
      return [];
    }
  },
};

export default nextConfig;
