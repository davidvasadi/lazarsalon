import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// Azonnali frissítés a gyorsítótárazott oldalakhoz (2026-11-27). Az oldalak óránként maguktól is frissülnek; ezt a
// Strapi webhook hívja meg mentés/publikálás után, hogy a változás azonnal kint legyen.
// Strapi → Beállítások → Webhooks: URL = https://lazarsalon.com/api/revalidate, fejléc: x-revalidate-secret = <REVALIDATE_SECRET>,
// események: Entry create / update / delete / publish / unpublish, Media update / delete.
// Fejlesztéskor (next dev) titok nélkül is hívható.
function authorized(req: NextRequest) {
  if (process.env.NODE_ENV !== 'production') return true;
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return false;
  const given =
    req.headers.get('x-revalidate-secret') ??
    req.nextUrl.searchParams.get('secret');
  return given === secret;
}

async function handle(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  revalidatePath('/', 'layout');
  return NextResponse.json({ ok: true, revalidated: true, at: Date.now() });
}

export const POST = handle;
export const GET = handle;
