// app/robots.txt/route.ts
import { NextResponse } from 'next/server';

export const revalidate = 600; // 12 óra

function stripSlash(u: string) {
  return u.replace(/\/$/, '');
}

function getBaseUrl(req: Request) {
  const env = (process.env.WEBSITE_URL || '').trim();
  if (env) return stripSlash(env);
  const u = new URL(req.url);
  return `${u.protocol}//${u.host}`;
}

export async function GET(req: Request) {
  const base = getBaseUrl(req);

  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${base}/sitemap.xml`,
    '',
  ].join('\n');

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
