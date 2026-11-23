// components/dynamic-zone/services/index.tsx
'use client';

// Szolgáltatások blokk (főoldal + Szolgáltatások oldal) — átrajzolva 2026-11-23:
// - fejléc: kulcsszavas cím + alcím, mellette a foglalás gomb (Altegio)
// - gépen: 1 nagy kiemelt kártya (az első szolgáltatás) + kisebb kártyák + foglalás-kártya, mind kitölti a rácsot
// - telefonon: tömör lista (bélyegkép, név, ár, idő), alatta a foglalás gomb
// - minden kártyán „X Ft-tól · időtartam”: az ár élőben a Strapi árlistájából (plans), az idő a szolgáltatás hero-jából
import { type Transition, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Calendar,
  ChevronRight,
  Phone,
  Star,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

import { Container } from '@/components/container';
import { RatingStars } from '@/components/elements/rating-stars';
import { huf, pageOfPlan, parsePrice } from '@/lib/shared/plan-pages';
import { SECTION_TITLE } from '@/lib/shared/typography';
import { fmtRating, useGoogleRating } from '@/lib/shared/use-google-rating';

// components/dynamic-zone/services/index.tsx

/** IMPORTANT: ne defaultolj localhostra prod miatt */
const STRAPI_BASE = (
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  ''
)
  .replace(/\/$/, '')
  .replace(/\/api$/, '');

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const PHONE = '+36 20 348 8481';

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
  duration?: string | null;
  cover?: StrapiMedia | null;
};

type PageLike = {
  id: number;
  documentId?: string;
  slug: string;
  label?: string | null;
  dynamic_zone?: DZItem[];
};

type ButtonItem = {
  text?: string | null;
  URL?: string | null;
  href?: string | null;
  target?: string | null;
  newTab?: boolean | null;
};

type CTAComponent = {
  heading?: string | null;
  sub_heading?: string | null;
  CTAs?: ButtonItem[] | null;
};

const hero = (p: PageLike) =>
  p.dynamic_zone?.find((x) => x.__component === 'dynamic-zone.hero');
const titleOf = (p: PageLike) =>
  p.label?.trim() || hero(p)?.heading?.trim() || p.slug;
const subOf = (p: PageLike) => hero(p)?.sub_heading?.trim() || null;
const durationOf = (p: PageLike) =>
  hero(p)
    ?.duration?.trim()
    .replace(/\s*—\s*/g, '–') || null;

function mediaUrl(m?: StrapiMedia | null) {
  const url =
    m?.data?.attributes?.url ?? m?.attributes?.url ?? m?.url ?? undefined;
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  return STRAPI_BASE
    ? `${STRAPI_BASE}${url.startsWith('/') ? '' : '/'}${url}`
    : url;
}
const coverOf = (p: PageLike) => mediaUrl(hero(p)?.cover ?? null);

/** szolgáltatásoldal → legalacsonyabb ár az árlistából (élőben a Strapiból) */
function useMinPrices() {
  const [min, setMin] = useState<Record<string, number>>({});
  useEffect(() => {
    if (!STRAPI_BASE) return;
    const ac = new AbortController();
    const q = new URLSearchParams({
      locale: 'hu',
      'fields[0]': 'name',
      'fields[1]': 'price',
      'pagination[pageSize]': '100',
    });
    fetch(`${STRAPI_BASE}/api/plans?${q}`, { signal: ac.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        const out: Record<string, number> = {};
        for (const p of j?.data ?? []) {
          const v = parsePrice(p?.price).min;
          if (!p?.name || !v) continue;
          const slug = pageOfPlan(p.name);
          out[slug] = Math.min(out[slug] ?? Infinity, v);
        }
        setMin(out);
      })
      .catch(() => {});
    return () => ac.abort();
  }, []);
  return min;
}

function metaLine(p: PageLike, min: Record<string, number>) {
  const price = min[p.slug];
  const dur = durationOf(p);
  return (
    [price ? `${huf(price)}-tól` : null, dur].filter(Boolean).join(' · ') ||
    null
  );
}

const hrefOf = (p: PageLike) => `/hu/${p.slug}`;

const LG_SPAN: Record<number, string> = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
};

export const Services = ({
  heading,
  sub_heading,
  pages,
  CTAs,
}: {
  heading?: string | null;
  sub_heading?: string | null;
  pages?: PageLike[] | null;
  CTAs?: CTAComponent | null;
}) => {
  const reduce = useReducedMotion();
  const min = useMinPrices();
  const gRating = useGoogleRating(); // valódi Google-értékelés (hetente frissül)

  const items: PageLike[] = useMemo(() => {
    const raw: any = pages as any;
    const list: any[] = Array.isArray(raw) ? raw : (raw?.data ?? []);
    return Array.isArray(list)
      ? (list.filter((p) => p?.slug) as PageLike[])
      : [];
  }, [pages]);

  const btn = CTAs?.CTAs?.find((b) => (b?.URL ?? b?.href) && b?.text) ?? null;
  const bookHref = (btn?.URL ??
    btn?.href ??
    'https://n474969.alteg.io') as string;
  const bookText = btn?.text?.trim() || 'Időpontfoglalás';
  const ctaTitle = CTAs?.heading?.trim() || 'Foglalj időpontot';
  const ctaSub =
    CTAs?.sub_heading?.trim() || 'Foglalj időpontot online, pár kattintással.';

  if (!items.length && !heading) return null;

  const fade = (delay = 0) => ({
    initial: reduce ? undefined : { opacity: 0, y: 22 },
    whileInView: reduce ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: (reduce
      ? { duration: 0.01 }
      : { duration: 0.75, ease: EASE, delay }) as Transition,
  });

  const [featured, ...rest] = items;

  return (
    <section className="py-24 md:py-32" id="szolgaltatasok">
      <Container>
        {/* FEJLÉC */}
        <motion.div
          {...fade()}
          className="mb-12 flex flex-col gap-8 md:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            {heading ? (
              <h2 className={`text-left ${SECTION_TITLE} text-lightblack`}>
                {heading}
              </h2>
            ) : null}
            <div className="mt-6 h-[2px] w-28 rounded-full bg-muted/80" />
            {sub_heading ? (
              <p className="mt-6 max-w-2xl text-left text-[15px] lg:text-[17px] leading-relaxed text-secondary/70">
                {sub_heading}
              </p>
            ) : null}
          </div>
          <a
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-lightblack px-6 py-3.5 text-[15px] text-white transition hover:opacity-90 lg:inline-flex"
          >
            <Calendar size={18} />
            {bookText}
          </a>
        </motion.div>

        {/* TELEFON: tömör lista */}
        <ul className="divide-y divide-secondary/10 overflow-hidden rounded-3xl border border-secondary/10 bg-white sm:hidden">
          {items.map((p) => {
            const img = coverOf(p);
            const meta = metaLine(p, min);
            return (
              <li key={p.documentId ?? p.id}>
                <Link
                  href={hrefOf(p)}
                  className="flex items-center gap-4 p-3 pr-4 active:bg-charcoal"
                >
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-lightblack/90">
                    {img ? (
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    ) : null}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[16px] font-medium leading-tight text-lightblack">
                      {titleOf(p)}
                    </span>
                    {meta ? (
                      <span className="mt-1 block text-[13px] text-muted">
                        {meta}
                      </span>
                    ) : null}
                  </span>
                  <ChevronRight
                    size={18}
                    className="shrink-0 text-secondary/50"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href={bookHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-lightblack py-4 text-[15px] text-white sm:hidden"
        >
          <Calendar size={18} />
          {bookText}
        </a>

        {/* TABLET / GÉP: kiemelt kártya + kártyák + foglalás-kártya */}
        <div className="hidden gap-2.5 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {featured ? (
            <Card
              p={featured}
              meta={metaLine(featured, min)}
              big
              motionProps={fade(0.05)}
            />
          ) : null}
          {rest.map((p, i) => (
            <Card
              key={p.documentId ?? p.id}
              p={p}
              meta={metaLine(p, min)}
              motionProps={fade(0.08 + i * 0.05)}
            />
          ))}

          {/* foglalás-kártya: kitölti a rács maradékát */}
          <motion.div
            {...fade(0.1)}
            className={[
              'flex flex-col justify-between rounded-3xl bg-lightblack p-7 text-white lg:p-8',
              rest.length % 2 === 0 ? 'sm:col-span-2' : '',
              // gépen 4 oszlop: a kiemelt kártya mellé (2 sor × 2 hely) 4 kártya fér, a többi alatta sorban → a
              // foglalás-kártya pontosan annyi oszlopot kap, amennyi az utolsó sorból hiányzik (ne maradjon lyuk)
              LG_SPAN[4 - (Math.max(0, rest.length - 4) % 4)] ??
                'lg:col-span-4',
            ].join(' ')}
          >
            <div>
              {/* értékelés — bizalom a foglalás előtt */}
              {gRating ? (
                <a
                  href={gRating.mapsUrl ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 hover:opacity-90"
                >
                  <RatingStars value={gRating.rating} size={18} />
                  <span className="text-[15px] text-white">
                    <strong className="font-medium">
                      {fmtRating(gRating.rating)}
                    </strong>
                    <span className="text-white/60">
                      {' '}
                      · {gRating.count} Google-értékelés
                    </span>
                  </span>
                </a>
              ) : null}
              <p className="text-2xl font-light leading-tight md:text-3xl">
                {ctaTitle}
              </p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/70">
                {ctaSub}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={bookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[15px] text-lightblack transition hover:bg-white/90"
              >
                <Calendar size={18} />
                {bookText}
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-[15px] text-white/80 ring-1 ring-white/20 transition hover:text-white"
              >
                <Phone size={16} />
                {PHONE}
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

function Card({
  p,
  meta,
  big = false,
  motionProps,
}: {
  p: PageLike;
  meta: string | null;
  big?: boolean;
  motionProps: any;
}) {
  const img = coverOf(p);
  const sub = subOf(p);
  return (
    <motion.div
      {...motionProps}
      className={big ? 'sm:col-span-2 lg:row-span-2' : ''}
    >
      <Link
        href={hrefOf(p)}
        className={[
          'group relative block h-full overflow-hidden rounded-3xl bg-lightblack',
          big
            ? 'aspect-[4/5] sm:aspect-auto sm:min-h-[420px] lg:min-h-0'
            : 'aspect-[4/5]',
        ].join(' ')}
      >
        {img ? (
          <Image
            src={img}
            alt={titleOf(p)}
            fill
            sizes={
              big
                ? '(max-width: 1024px) 100vw, 50vw'
                : '(max-width: 1024px) 50vw, 25vw'
            }
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/0" />

        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lightblack transition duration-300 group-hover:bg-white">
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
          {meta ? (
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[12px] text-white ring-1 ring-white/20 backdrop-blur-md">
              {meta}
            </span>
          ) : null}
          <h3
            className={[
              'mt-3 font-light leading-tight text-white',
              big ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl',
            ].join(' ')}
          >
            {titleOf(p)}
          </h3>
          {sub ? (
            <p
              className={[
                'mt-2 text-[14px] leading-relaxed text-white/75',
                big ? 'line-clamp-3 max-w-lg' : 'line-clamp-2',
              ].join(' ')}
            >
              {sub}
            </p>
          ) : null}
        </div>
      </Link>
    </motion.div>
  );
}
