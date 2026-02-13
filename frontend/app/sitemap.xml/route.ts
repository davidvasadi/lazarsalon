// app/sitemap.xml/route.ts
import { i18n } from '@/i18n.config';

export const revalidate = 600;

/* ---------------------------
   URLS (dev-ben stabil)
---------------------------- */
const SITE = (
  process.env.WEBSITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://lazarsalon.com')
).replace(/\/+$/, '');

// STRAPI_BASE lehet:
// - https://domain
// - https://domain/api
// - http://localhost:1337
const STRAPI_BASE_RAW = (
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  process.env.STRAPI_URL ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : SITE)
).replace(/\/+$/, '');

// Mindig "origin" legyen (ne tartalmazzon /api-t)
const STRAPI_ORIGIN = (() => {
  let base = STRAPI_BASE_RAW.replace(/\/api\/?$/, '');

  // ✅ DEV Mac fix: localhost → 127.0.0.1 (Node fetch néha ::1-re megy és elhasal)
  if (process.env.NODE_ENV === 'development') {
    base = base.replace('http://localhost', 'http://127.0.0.1');
    base = base.replace('https://localhost', 'http://127.0.0.1');
  }
  return base;
})();

/* ---------------------------
   i18n
---------------------------- */
const LOCALES =
  Array.isArray(i18n?.locales) && i18n.locales.length
    ? (i18n.locales as readonly string[]).map(String)
    : ['hu', 'en'];

const DEFAULT_LOCALE = String(i18n?.defaultLocale || LOCALES[0] || 'hu');

/* ---------------------------
   helpers
---------------------------- */
const xml = (literals: TemplateStringsArray, ...values: any[]) =>
  literals.reduce((acc, lit, i) => acc + lit + (values[i] ?? ''), '');

function esc(s: string) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function norm(s?: string | null) {
  return (s ?? '').replace(/^\/|\/$/g, '').trim();
}

function urlNode(
  loc: string,
  opts?: {
    lastmod?: string;
    changefreq?:
      | 'always'
      | 'hourly'
      | 'daily'
      | 'weekly'
      | 'monthly'
      | 'yearly'
      | 'never';
    priority?: number;
    alternates?: { hreflang: string; href: string }[];
  }
) {
  const alt = (opts?.alternates ?? [])
    .map(
      (a) =>
        `<xhtml:link rel="alternate" hreflang="${esc(
          a.hreflang
        )}" href="${esc(a.href)}" />`
    )
    .join('');

  return xml`<url>
<loc>${esc(loc)}</loc>
${alt}
${opts?.lastmod ? `<lastmod>${esc(opts.lastmod)}</lastmod>` : ''}
${opts?.changefreq ? `<changefreq>${opts.changefreq}</changefreq>` : ''}
${
  typeof opts?.priority === 'number'
    ? `<priority>${opts.priority.toFixed(1)}</priority>`
    : ''
}
</url>`;
}

function dedupeHreflang(list: { hreflang: string; href: string }[]) {
  const seen = new Set<string>();
  return list.filter((a) =>
    seen.has(a.hreflang) ? false : (seen.add(a.hreflang), true)
  );
}

/**
 * Minimal qs.stringify replacement (Strapi nested query-hez)
 * - arrays: key[0]=...
 * - objects: key[sub]=...
 */
function toQuery(obj: any) {
  const parts: string[] = [];

  const walk = (value: any, key: string) => {
    if (value === undefined || value === null) return;

    if (Array.isArray(value)) {
      value.forEach((v, i) => walk(v, `${key}[${i}]`));
      return;
    }

    if (typeof value === 'object') {
      Object.keys(value).forEach((k) => walk(value[k], `${key}[${k}]`));
      return;
    }

    parts.push(
      `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    );
  };

  Object.keys(obj || {}).forEach((k) => walk(obj[k], k));
  return parts.join('&');
}

// token – opcionális; 401 esetén fallback public-ra
function validToken(): string | null {
  const t = (process.env.STRAPI_TOKEN ?? '').trim();
  if (!t) return null;
  if (/PASTE_YOUR_API_TOKEN/i.test(t)) return null;
  if (t.length < 20) return null;
  return t;
}

async function sFetch(path: string, params: Record<string, any>) {
  // path: "/api/pages" | "api/pages" | "/pages" -> "pages"
  const safePath = String(path || '')
    .replace(/^https?:\/\/[^/]+/i, '')
    .replace(/^\/+/, '')
    .replace(/^api\/+/, '');

  const query = toQuery({
    publicationState: 'live',
    ...params,
  });

  const url = `${STRAPI_ORIGIN}/api/${safePath}${query ? `?${query}` : ''}`;

  const token = validToken();

  if (token) {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate },
    });
    if (res.ok) return res.json();
    if (res.status !== 401) throw new Error(`Strapi ${res.status} → ${url}`);
  }

  const res2 = await fetch(url, { next: { revalidate } });
  if (!res2.ok) throw new Error(`Strapi ${res2.status} → ${url}`);
  return res2.json();
}

/**
 * Normalize Strapi v4/v5:
 * - v4: { id, attributes: {..., localizations: { data: [...] } } }
 * - v5: { id, ...fieldsAtTop, localizations: [...] }
 */
function attrs(x: any) {
  return x?.attributes ?? x ?? {};
}
function getLocale(x: any): string | undefined {
  const a = attrs(x);
  return a?.locale ?? x?.locale;
}
function getSlug(x: any): string | undefined {
  const a = attrs(x);
  return a?.slug ?? x?.slug;
}
function getUpdatedAt(x: any): string | undefined {
  const a = attrs(x);
  return a?.updatedAt ?? x?.updatedAt;
}
function getPublishedAt(x: any): string | undefined {
  const a = attrs(x);
  return a?.publishedAt ?? x?.publishedAt;
}
function getLocalizations(x: any): any[] {
  const a = attrs(x);
  const locs =
    a?.localizations?.data ??
    a?.localizations ??
    x?.localizations?.data ??
    x?.localizations ??
    [];
  return Array.isArray(locs) ? locs : [];
}

function lastmodOf(item?: any) {
  const d =
    getUpdatedAt(item) || getPublishedAt(item) || new Date().toISOString();
  return new Date(d).toISOString();
}

// --- fetch collection per-locale (NINCS locale=all) ---
async function fetchPages(locale: string, pageSize = 1000) {
  return sFetch('/api/pages', {
    locale,
    pagination: { pageSize },
    sort: ['updatedAt:desc'],
    fields: ['slug', 'locale', 'updatedAt', 'publishedAt'],
    populate: { localizations: { fields: ['slug', 'locale'] } },
  });
}

/* ---------------------------
   GET
---------------------------- */
export async function GET() {
  const nodes: string[] = [];
  const seen = new Set<string>();

  // HOME alternates
  const homeAlternates = dedupeHreflang([
    ...LOCALES.map((lng) => ({ hreflang: lng, href: `${SITE}/${lng}` })),
    { hreflang: 'x-default', href: `${SITE}/${DEFAULT_LOCALE}` },
  ]);

  for (const lng of LOCALES) {
    const loc = `${SITE}/${lng}`;
    if (!seen.has(loc)) {
      seen.add(loc);
      nodes.push(
        urlNode(loc, {
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: 1,
          alternates: homeAlternates,
        })
      );
    }
  }

  // PAGES (a projektedben ez a lényeg)
  try {
    for (const lng of LOCALES) {
      const pagesJson = await fetchPages(lng);
      const pages: any[] = pagesJson?.data ?? [];

      for (const item of pages) {
        const slugRaw = getSlug(item);
        const locale = getLocale(item);
        const slug = norm(slugRaw);

        if (!slug || !locale) continue;

        // home jellegű slugokat kihagyjuk (ha van ilyen a Strapi-ban)
        if (['home', 'homepage', 'kezdooldal'].includes(slug.toLowerCase()))
          continue;

        const loc = `${SITE}/${locale}/${slug}`;
        if (seen.has(loc)) continue;
        seen.add(loc);

        const alternates = dedupeHreflang([
          { hreflang: locale, href: `${SITE}/${locale}/${slug}` },
          ...getLocalizations(item)
            .map(attrs)
            .filter((l) => l?.locale && l?.slug)
            .map((l) => ({
              hreflang: String(l.locale),
              href: `${SITE}/${String(l.locale)}/${norm(l.slug)}`,
            })),
          {
            hreflang: 'x-default',
            href: `${SITE}/${DEFAULT_LOCALE}/${slug}`,
          },
        ]);

        const isKey = [
          'contact',
          'kapcsolat',
          'pricing',
          'arak',
          'gyik',
          'faq',
        ].includes(slug.toLowerCase());

        nodes.push(
          urlNode(loc, {
            lastmod: lastmodOf(item),
            changefreq: isKey ? 'monthly' : 'weekly',
            priority: isKey ? 0.7 : 0.6,
            alternates,
          })
        );
      }
    }
  } catch (e) {
    // ne dőljön el a sitemap, max kevesebb URL lesz benne
    console.error('[sitemap] pages fetch failed:', e);
  }

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    `${nodes.join('\n')}\n` +
    `</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
