'use client';

import { type Transition, motion, useReducedMotion } from 'framer-motion';
import { Droplets, Gem, Palette, Scissors, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';

import { Container } from '@/components/container';
import { cn } from '@/lib/utils';

/** IMPORTANT: ne defaultolj localhostra prod miatt */
const STRAPI_BASE = (
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  ''
)
  .replace(/\/$/, '')
  .replace(/\/api$/, '');

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.26 } as const;

type StrapiMedia = {
  data?: {
    attributes?: { url?: string; alternativeText?: string | null } | null;
  } | null;
  url?: string;
  alternativeText?: string | null;
  attributes?: { url?: string; alternativeText?: string | null } | null;
};

type DZItem = {
  __component: string;
  id: number;
  heading?: string | null;
  sub_heading?: string | null;
  cover?: StrapiMedia | null;
};

type PageLike = {
  id?: number;
  documentId?: string;
  slug?: string | null;
  label?: string | null;
  dynamic_zone?: DZItem[] | null;
  attributes?: any; // strapi v4 compat
};

export type ServiceCardBlock = {
  // Strapi component key: category.name
  __component: 'items.service-card' | 'dynamic-zone.service-card' | string;
  id: number;
  pages?: any; // relation: manyWay with Pages (v4/v5 shape)
  locale?: string;
  [key: string]: any;
};

// ---------- helpers ----------
function pickAttrs<T = any>(x: any): T {
  return (x?.attributes ?? x?.data?.attributes ?? x) as T;
}

function asArray<T = any>(v: any): T[] {
  if (Array.isArray(v)) return v as T[];
  if (Array.isArray(v?.data)) return v.data as T[];
  return [];
}

function getHero(page: PageLike) {
  const p: any = pickAttrs(page);
  const dz = asArray<DZItem>(p?.dynamic_zone);
  return dz.find((x) => (x as any)?.__component === 'dynamic-zone.hero') as
    | DZItem
    | undefined;
}

function getPageTitle(page: PageLike) {
  const p: any = pickAttrs(page);
  const label = (p?.label ?? '')?.trim();
  if (label) return label;

  const hero = getHero(p);
  const t = (hero?.heading ?? '')?.trim();
  return t ? t : (p?.slug ?? '').trim();
}

function getPageSubheading(page: PageLike): string | null {
  const p: any = pickAttrs(page);
  const hero = getHero(p);
  const s = (hero?.sub_heading ?? '')?.trim();
  return s ? s : null;
}

function getMediaUrl(m?: StrapiMedia | null) {
  const url =
    m?.data?.attributes?.url ?? m?.attributes?.url ?? m?.url ?? undefined;
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  return STRAPI_BASE
    ? `${STRAPI_BASE}${url.startsWith('/') ? '' : '/'}${url}`
    : url;
}

function getMediaAlt(m?: StrapiMedia | null, fallback = '') {
  return (
    (m?.data?.attributes?.alternativeText ??
      m?.attributes?.alternativeText ??
      m?.alternativeText ??
      fallback) ||
    fallback
  );
}

function getPageCover(page: PageLike) {
  const p: any = pickAttrs(page);
  const hero: any = getHero(p);
  const cover: StrapiMedia | null | undefined = hero?.cover ?? null;
  const src = getMediaUrl(cover);
  if (!src) return null;
  return { src, alt: getMediaAlt(cover, getPageTitle(p)) };
}

function toPageHref(slugRaw: string | null | undefined, locale?: string) {
  const slug = (slugRaw ?? '').replace(/^\/+/, '').trim();
  if (!slug) return '#';

  // ha már locale-val kezdődik (pl. "hu/..." vagy "en/...") akkor nem prefixálunk
  const first = slug.split('/')[0]?.toLowerCase();
  const alreadyPrefixed = first && first.length === 2;

  if (locale && !alreadyPrefixed && !slug.startsWith(`${locale}/`)) {
    return `/${locale}/${slug}`;
  }
  return `/${slug}`;
}

/**
 * Icon mapping: title+slug alapján.
 * (később ezt érdemes Strapi enum fieldből vezérelni, de most gyors és stabil)
 */
function pickIcon(title: string, slug = '') {
  const t = `${title} ${slug}`.toLowerCase();

  // köröm
  if (
    t.includes('gél') ||
    t.includes('gellakk') ||
    t.includes('géllakk') ||
    t.includes('manik') ||
    t.includes('pedik') ||
    t.includes('műköröm') ||
    t.includes('mukorom') ||
    t.includes('köröm') ||
    t.includes('korom')
  )
    return Gem;

  // festés / szőkítés / balayage
  if (
    t.includes('balayage') ||
    t.includes('airtouch') ||
    t.includes('melir') ||
    t.includes('fest') ||
    t.includes('szők') ||
    t.includes('szok') ||
    t.includes('ombre') ||
    t.includes('color') ||
    t.includes('szín') ||
    t.includes('szin')
  )
    return Palette;

  // ápolás / kezelés
  if (
    t.includes('kezel') ||
    t.includes('ápol') ||
    t.includes('apol') ||
    t.includes('care') ||
    t.includes('hydr') ||
    t.includes('keratin') ||
    t.includes('olaplex') ||
    t.includes('k18') ||
    t.includes('botox')
  )
    return Droplets;

  // vágás / styling
  if (
    t.includes('vág') ||
    t.includes('vag') ||
    t.includes('friz') ||
    t.includes('styling') ||
    t.includes('stíl') ||
    t.includes('stil') ||
    t.includes('style')
  )
    return Scissors;

  return Sparkles;
}

// 3 soros clamp (Services mintára)
function Clamp3({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={className}
      style={{
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {children}
    </p>
  );
}

// ---------- component ----------
export function ServiceCard(props: ServiceCardBlock) {
  const reduce = useReducedMotion();

  const pages = useMemo(() => {
    const raw = (props as any)?.pages;
    const list = asArray<any>(raw);
    return list.map((x) => pickAttrs<PageLike>(x)).filter(Boolean);
  }, [props]);

  if (!pages.length) return null;

  const cardInitial = reduce
    ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
    : { opacity: 0, y: 26, scale: 0.985, filter: 'blur(14px)' };
  const cardInView = { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' };
  const cardTransition: Transition = reduce
    ? { duration: 0.01 }
    : { duration: 0.85, ease: EASE };

  return (
    <section className="bg-charcoal py-14 sm:py-16">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((p, i) => {
            const title = getPageTitle(p) || `Szolgáltatás ${i + 1}`;
            const desc = getPageSubheading(p);
            const cover = getPageCover(p);
            const href = toPageHref(p?.slug ?? null, (props as any)?.locale);

            const Icon = pickIcon(title, p?.slug ?? '');

            // ha van cover → “dark image card”, különben “white card”
            const isDark = Boolean(cover?.src);

            // “Kiemelt” badge
            const isFeatured = i === 0;

            return (
              <motion.div
                key={`${p?.documentId ?? p?.id ?? i}`}
                initial={cardInitial}
                whileInView={cardInView}
                viewport={VIEWPORT}
                transition={{
                  ...cardTransition,
                  delay: reduce ? 0 : Math.min(i * 0.06, 0.18),
                }}
              >
                <Link
                  href={href}
                  className={cn(
                    'group relative block overflow-hidden rounded-lg',
                    'ring-1 ring-black/10',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-muted/60',
                    'transition-[transform,box-shadow] duration-200',
                    'hover:-translate-y-1 hover:shadow-[0_18px_60px_-35px_rgba(0,0,0,0.35)]',
                    isDark ? 'bg-lightblack' : 'bg-white'
                  )}
                >
                  {/* BG image (NO padding, full bleed) */}
                  {cover?.src ? (
                    <div className="absolute inset-0">
                      <Image
                        src={cover.src}
                        alt={cover.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                      {/* overlays (premium) */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/70" />
                      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_35%_20%,rgba(255,255,255,0.14),transparent_55%)]" />
                    </div>
                  ) : null}

                  {/* content */}
                  <div className="relative z-10 flex min-h-[420px] flex-col p-8">
                    {/* top row */}
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={cn(
                          'inline-flex h-11 w-11 items-center justify-center rounded-full',
                          isDark
                            ? 'bg-black/25 ring-1 ring-white/15 backdrop-blur-md'
                            : 'bg-charcoal ring-1 ring-black/10'
                        )}
                      >
                        <Icon className="h-5 w-5 text-muted" />
                      </div>

                      {isFeatured ? (
                        <span className="rounded-full bg-muted px-3 py-1 text-[11px] font-extrabold tracking-wide text-lightblack">
                          Kiemelt
                        </span>
                      ) : null}
                    </div>

                    {/* title */}
                    <div className="mt-auto">
                      <div
                        className={cn(
                          'text-[28px] font-semibold leading-[1.1] tracking-tight',
                          isDark
                            ? 'text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]'
                            : 'text-lightblack'
                        )}
                      >
                        {title}
                      </div>

                      {/* gold underline */}
                      <div className="mt-4 h-[2px] w-10 rounded-full bg-muted/80" />

                      {/* desc */}
                      {desc ? (
                        <Clamp3
                          className={cn(
                            'mt-4 text-[13px] leading-relaxed',
                            isDark ? 'text-charcoal/90' : 'text-secondary'
                          )}
                        >
                          {desc}
                        </Clamp3>
                      ) : null}

                      {/* CTA */}
                      <div className="mt-7">
                        {isDark ? (
                          <span
                            className={cn(
                              'inline-flex items-center gap-3 rounded-xl px-4 py-3',
                              'ring-1 ring-white/15 bg-black/20 backdrop-blur',
                              'text-[12px] font-semibold tracking-wide text-charcoal',
                              'transition-colors duration-150',
                              'group-hover:bg-black/28'
                            )}
                          >
                            Fedezze fel
                            <span
                              aria-hidden
                              className="text-muted transition-transform duration-150 group-hover:translate-x-1"
                            >
                              →
                            </span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-wide text-muted">
                            Fedezze fel
                            <span
                              aria-hidden
                              className="transition-transform duration-150 group-hover:translate-x-1"
                            >
                              →
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* subtle shine */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="absolute -inset-40 rotate-12 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
