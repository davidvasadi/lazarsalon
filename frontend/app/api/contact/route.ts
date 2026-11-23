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

const esc = (v: string) =>
  v.replace(
    /[&<>"]/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string
  );

/** „Új üzenet a weboldalról” — a szalon Google-címére; a Válasz gomb a vendégnek válaszol */
async function notifySalon(d: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  page_url: string;
}) {
  const key = norm(process.env.RESEND_API_KEY);
  const from = norm(process.env.CONTACT_FROM_EMAIL);
  const to = norm(process.env.CONTACT_NOTIFY_TO);
  if (!key || !from || !to) return;
  const rows = [
    ['Név', d.name],
    ['Telefon', d.phone || '–'],
    ['E-mail', d.email],
    ['Szolgáltatás', d.service],
    ['Oldal', d.page_url || '–'],
  ];
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#292624">
<p><strong>Új üzenet érkezett a lazarsalon.com-ról.</strong></p>
<table style="border-collapse:collapse">${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#77736a">${k}</td><td style="padding:4px 0">${esc(v)}</td></tr>`).join('')}</table>
<p style="margin-top:14px;white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:8px">${esc(d.message)}</p>
<p style="color:#77736a;font-size:13px">A „Válasz” gombbal közvetlenül a vendégnek válaszolsz.</p></div>`;
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `LAZAR'S weboldal <${from}>`,
      to: [to],
      reply_to: d.email,
      subject: `Új üzenet a weboldalról – ${d.service} – ${d.name}`,
      html,
    }),
    cache: 'no-store',
  });
}

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
    // egyszerű értesítő e-mail a szalonnak (Resend) — ha nem sikerül, az űrlap ettől még sikeres (az üzenet a Strapiban van)
    await notifySalon({ name, email, phone, service, message, page_url }).catch(
      () => {}
    );
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
