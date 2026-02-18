// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type IncomingPayload = {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
  service?: string;
  page_url?: string;
  submission_status?: 'new' | 'read' | 'archived' | string;
};

const norm = (v: any) => String(v ?? '').trim();

console.log('[api/contact] cwd:', process.cwd());
console.log('[api/contact] token present:', !!process.env.STRAPI_API_TOKEN);
console.log('[api/contact] strapi url:', process.env.NEXT_PUBLIC_STRAPI_URL);

export async function POST(req: Request) {
  try {
    const STRAPI_URL = norm(process.env.NEXT_PUBLIC_STRAPI_URL).replace(
      /\/$/,
      ''
    );
    const TOKEN = norm(process.env.STRAPI_API_TOKEN);

    if (!STRAPI_URL) {
      return NextResponse.json(
        { ok: false, error: 'Missing NEXT_PUBLIC_STRAPI_URL' },
        { status: 500 }
      );
    }
    if (!TOKEN) {
      return NextResponse.json(
        { ok: false, error: 'Missing STRAPI_API_TOKEN' },
        { status: 500 }
      );
    }

    const body = (await req.json().catch(() => ({}))) as IncomingPayload;

    const name = norm(body?.name);
    const email = norm(body?.email);
    const message = norm(body?.message);
    const phone = norm(body?.phone);
    const service = norm(body?.service);
    const page_url = norm(body?.page_url);
    const submission_status = norm(body?.submission_status) || 'new';

    // minimal server-side validation (defense in depth)
    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Name is required';
    if (!email || !email.includes('@'))
      errors.email = 'Valid email is required';
    if (!message) errors.message = 'Message is required';
    if (!service) errors.service = 'Service is required';

    if (Object.keys(errors).length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const res = await fetch(`${STRAPI_URL}/api/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          name,
          email,
          message,
          phone,
          service,
          page_url,
          submission_status,
        },
      }),
      cache: 'no-store',
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      return NextResponse.json(
        {
          ok: false,
          error: 'Strapi create failed',
          detail: txt.slice(0, 2000),
        },
        { status: 502 }
      );
    }

    const json = await res.json().catch(() => ({}));
    return NextResponse.json(
      { ok: true, data: json?.data ?? null },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Unexpected error',
        detail: String(err?.message ?? err),
      },
      { status: 500 }
    );
  }
}
