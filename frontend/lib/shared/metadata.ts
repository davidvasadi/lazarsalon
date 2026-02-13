import type { Metadata } from 'next';

import { strapiImage } from '../strapi/strapiImage';

const SITE = (
  process.env.WEBSITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://lazarsalon.com')
).replace(/\/+$/, '');

function absUrl(u?: string | null) {
  const s = (u ?? '').trim();
  if (!s) return '';
  if (/^https?:\/\//i.test(s)) return s.replace(/\/+$/, '');
  return `${SITE}/${s.replace(/^\/+/, '').replace(/\/+$/, '')}`;
}

function parseRobots(input?: string | null): NonNullable<Metadata['robots']> {
  const out: any = {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  };

  const raw = (input ?? '').trim();
  if (!raw) return out;

  for (const t of raw.split(',').map((x) => x.trim().toLowerCase())) {
    if (!t) continue;
    if (t === 'noindex') out.index = false;
    if (t === 'nofollow') out.follow = false;
    if (t === 'index') out.index = true;
    if (t === 'follow') out.follow = true;

    if (t.startsWith('max-snippet:')) out.maxSnippet = Number(t.split(':')[1]);
    if (t.startsWith('max-image-preview:'))
      out.maxImagePreview = t.split(':')[1];
    if (t.startsWith('max-video-preview:'))
      out.maxVideoPreview = Number(t.split(':')[1]);
  }
  return out;
}

function keywordsToList(s?: string | null) {
  const raw = (s ?? '').trim();
  if (!raw) return undefined;
  return raw
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean)
    .slice(0, 30);
}

export type MetadataOpts = {
  locale: string;
  pathname: string; // "/hu" vagy "/hu/galeria"
  localizedPathnames?: Record<string, string>; // locale -> "/{locale}/..."
  xDefaultLocale?: string; // default: "hu"
};

export function generateMetadataObject(
  seo: any,
  opts?: Partial<MetadataOpts>
): Metadata {
  const title = seo?.metaTitle || 'LAZARS®';
  const description = seo?.metaDescription || '';

  const ogImg = seo?.metaImage?.url
    ? strapiImage(seo.metaImage.url)
    : undefined;

  // ✅ canonical csak akkor, ha tényleg tudjuk a path-ot VAGY Strapi canonicalURL-t adtak meg
  const canonicalFromSeo = absUrl(seo?.canonicalURL);
  const canonical =
    canonicalFromSeo ||
    (opts?.pathname
      ? `${SITE}${opts.pathname}`.replace(/\/+$/, '')
      : undefined);

  // ✅ alternates csak akkor, ha van canonical + van értelmes lokalizált map
  let alternates: Metadata['alternates'] | undefined = undefined;
  if (canonical && (opts?.localizedPathnames || opts?.locale)) {
    const languages: Record<string, string> = {};

    if (opts?.localizedPathnames) {
      for (const [lng, path] of Object.entries(opts.localizedPathnames)) {
        if (!lng || !path) continue;
        languages[lng] = `${SITE}${path}`.replace(/\/+$/, '');
      }
    }

    if (opts?.locale && opts?.pathname && !languages[opts.locale]) {
      languages[opts.locale] = `${SITE}${opts.pathname}`.replace(/\/+$/, '');
    }

    const xDefault = opts?.xDefaultLocale ?? 'hu';
    if (languages[xDefault] || languages[opts?.locale || '']) {
      languages['x-default'] =
        languages[xDefault] ?? languages[opts?.locale || '']!;
    }

    alternates = { canonical, languages };
  }

  return {
    metadataBase: new URL(SITE),

    title,
    description,
    keywords: keywordsToList(seo?.keywords),

    ...(alternates ? { alternates } : {}),

    robots: parseRobots(seo?.metaRobots),

    openGraph: {
      title: seo?.ogTitle || title,
      description: seo?.ogDescription || description,
      ...(canonical ? { url: canonical } : {}),
      type: 'website',
      images: ogImg ? [{ url: ogImg }] : [],
    },

    twitter: {
      card: seo?.twitterCard || 'summary_large_image',
      title: seo?.twitterTitle || title,
      description: seo?.twitterDescription || description,
      images: ogImg ? [ogImg] : [],
    },
  };
}
