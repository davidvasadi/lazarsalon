'use client';

import {
  type Transition,
  type Variants,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { ArrowUpRight, ChevronRight, Clock, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';

import { Container } from '../container';
import { Button } from '../elements/button';
import { Heading } from '../elements/heading';
import { Subheading } from '../elements/subheading';

type ButtonTarget = '_self' | '_blank' | '_parent' | '_top' | string;

type CTAButton = {
  id?: number;
  text?: string | null;
  URL?: string | null;
  target?: ButtonTarget | null;
  variant?: string | null;
};

type Props = {
  heading: string;
  sub_heading?: string | null;

  location?: string | null;
  address?: string | null;
  maps_url?: string | null;
  opening_hours?: string | null;
  phone?: string | null;
  phone_note?: string | null; // ❗️kérés szerint NEM rendereljük
  CTAs?: CTAButton[] | null;

  cover?: any;
  locale: string;
};

const STRAPI_BASE = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(
  /\/$/,
  ''
);

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.26 } as const;

function toAbsUrl(url?: string | null) {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  if (!STRAPI_BASE) return url;
  return `${STRAPI_BASE}${url.startsWith('/') ? '' : '/'}${url}`;
}

function getMediaUrl(media: any): string | null {
  if (!media) return null;

  // Strapi v5 direct
  if (typeof media?.url === 'string' && media.url.length)
    return toAbsUrl(media.url);

  // v5 direct formats
  const directFormats = media?.formats;
  const directCandidates = [
    directFormats?.medium?.url,
    directFormats?.small?.url,
    directFormats?.thumbnail?.url,
    directFormats?.large?.url,
  ].filter(Boolean);
  if (directCandidates.length) return toAbsUrl(directCandidates[0]);

  // v4-ish
  const attr = media?.data?.attributes;
  if (typeof attr?.url === 'string' && attr.url.length)
    return toAbsUrl(attr.url);

  const fmts = attr?.formats;
  const candidates = [
    fmts?.medium?.url,
    fmts?.small?.url,
    fmts?.thumbnail?.url,
    fmts?.large?.url,
  ].filter(Boolean);
  if (candidates.length) return toAbsUrl(candidates[0]);

  return null;
}

function joinLocaleHref(locale: string, url?: string | null) {
  const u = (url ?? '').trim();
  const path = u ? (u.startsWith('/') ? u : `/${u}`) : '/';
  return `/${locale}${path}`;
}

function toTel(phone?: string | null) {
  if (!phone) return null;
  const cleaned = phone.replace(/[^\d+]/g, '');
  return cleaned ? `tel:${cleaned}` : null;
}

function mapSearchUrl(address?: string | null, location?: string | null) {
  const q = (address || location || '').trim();
  if (!q) return null;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

/* ──────────────────────────────────────────────
   Gallery-slider “write-in” typography (word-by-word)
────────────────────────────────────────────── */

function WriteInHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  const wrap: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: { transition: { staggerChildren: 0.035, delayChildren: 0.02 } },
      };

  const word: Variants = reduce
    ? {
        hidden: { opacity: 1, y: 0, filter: 'blur(0px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }
    : {
        hidden: { opacity: 0, y: 16, filter: 'blur(12px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.55, ease: EASE },
        },
      };

  if (reduce)
    return (
      <Heading as="h2" className={className}>
        {text}
      </Heading>
    );

  return (
    <motion.div
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      <Heading as="h2" className={className}>
        {words.map((w, i) => (
          <motion.span
            key={`${w}-${i}`}
            variants={word}
            className="inline-block"
          >
            {w}&nbsp;
          </motion.span>
        ))}
      </Heading>
    </motion.div>
  );
}

function WriteInSubheading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  const wrap: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: { transition: { staggerChildren: 0.028, delayChildren: 0.06 } },
      };

  const word: Variants = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: EASE } },
      };

  if (reduce) return <Subheading className={className}>{text}</Subheading>;

  return (
    <motion.div
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      <Subheading className={className}>
        {words.map((w, i) => (
          <motion.span
            key={`${w}-${i}`}
            variants={word}
            className="inline-block"
          >
            {w}&nbsp;
          </motion.span>
        ))}
      </Subheading>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Motion – sequential (stagger) + slower
────────────────────────────────────────────── */

const sectionV: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(14px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE },
  },
};

const gridV: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.04 },
  },
};

const colV: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(12px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: EASE },
  },
};

const leftStackV: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

const itemV: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.72, ease: EASE },
  },
};

export const CTA = ({
  heading,
  sub_heading,
  location,
  address,
  maps_url,
  opening_hours,
  phone,
  phone_note, // ignored
  CTAs,
  cover,
  locale,
}: Props) => {
  const reduce = useReducedMotion();

  const coverUrl = getMediaUrl(cover);
  const telHref = toTel(phone);
  const mapsHref = maps_url || mapSearchUrl(address, location);

  const primaryCta = CTAs?.[0];
  const secondaryCta = CTAs?.[1];

  const placeLine = [location, address].filter(Boolean).join(' • ').trim();
  const hasPlace = !!(placeLine || mapsHref);
  const hasHours = !!opening_hours;

  const actionGridCols =
    primaryCta && secondaryCta
      ? 'sm:grid-cols-[260px_260px_260px]'
      : 'sm:grid-cols-[260px_260px]';

  const hoverLift = reduce ? undefined : { y: -2 };
  const hoverTransition: Transition = { duration: 0.22, ease: EASE };

  return (
    <motion.section
      variants={sectionV}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={VIEWPORT}
      className="relative mx-4 overflow-hidden rounded-3xl border border-charcoal bg-white"
    >
      {/* 2026 premium background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/20 via-white to-white" />
        <div
          className="absolute inset-0 opacity-[0.18]
          [background-image:linear-gradient(to_right,rgba(41,38,36,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(41,38,36,0.08)_1px,transparent_1px)]
          [background-size:52px_52px]"
        />
      </div>

      <Container className="relative z-10 py-10 md:py-14">
        <motion.div
          variants={gridV}
          className="grid grid-cols-1 md:grid-cols-12 gap-9 md:gap-12 items-start"
          whileHover={hoverLift}
          transition={hoverTransition}
        >
          {/* LEFT */}
          <motion.div variants={colV} className="md:col-span-7">
            <motion.div variants={leftStackV} className="flex flex-col">
              <WriteInHeading
                text={heading}
                className="text-left text-4xl md:text-5xl font-light text-secondary leading-tight"
              />

              {sub_heading ? (
                <WriteInSubheading
                  text={sub_heading}
                  className="mt-5 md:mt-6 text-secondary text-sm md:text-base leading-relaxed text-center md:text-left max-w-xl mx-auto md:mx-0"
                />
              ) : null}

              {/* ✅ INFO: mobilon ELŐBB, desktopon a gombok alatt */}
              {hasPlace || hasHours ? (
                <motion.div
                  variants={itemV}
                  className="mt-6 md:mt-7 order-3 md:order-4"
                >
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start justify-start gap-2">
                    {hasPlace ? (
                      <motion.div
                        whileHover={reduce ? undefined : { y: -1 }}
                        transition={{ duration: 0.2, ease: EASE }}
                      >
                        {mapsHref ? (
                          <a
                            href={mapsHref}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="group inline-flex items-center gap-2  py-2 text-sm text-secondary"
                          >
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-charcoal/70 text-lightblack">
                              <MapPin className="h-4 w-4" />
                            </span>
                            <span className="max-w-[26rem] truncate">
                              {placeLine || 'Térkép'}
                            </span>
                            <span className="text-muted opacity-80 group-hover:opacity-100 transition-opacity">
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                          </a>
                        ) : (
                          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm text-secondary shadow-sm">
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-charcoal/70 text-lightblack">
                              <MapPin className="h-4 w-4" />
                            </span>
                            <span className="max-w-[26rem] truncate">
                              {placeLine}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    ) : null}

                    {hasHours ? (
                      <motion.div
                        whileHover={reduce ? undefined : { y: -1 }}
                        transition={{ duration: 0.2, ease: EASE }}
                      >
                        <div className="inline-flex items-center gap-2 md:px-3 py-2 text-sm text-secondary ">
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-charcoal/70 text-lightblack">
                            <Clock className="h-4 w-4" />
                          </span>
                          <span className="truncate">{opening_hours}</span>
                        </div>
                      </motion.div>
                    ) : null}
                  </div>
                </motion.div>
              ) : null}

              {/* ✅ ACTION ROW: mobilon a két info UTÁN, desktopon előtte */}
              {primaryCta || secondaryCta || phone ? (
                <motion.div
                  variants={itemV}
                  className="mt-7 md:mt-8 order-4 md:order-3"
                >
                  <div
                    className={`grid grid-cols-1 gap-3 items-stretch ${actionGridCols}`}
                  >
                    {primaryCta ? (
                      <Button
                        as={Link}
                        href={joinLocaleHref(locale, primaryCta.URL)}
                        variant={primaryCta.variant as any}
                        target={(primaryCta.target ?? undefined) as any}
                        rel={
                          primaryCta.target === '_blank'
                            ? ('noreferrer noopener' as any)
                            : undefined
                        }
                        className="group relative overflow-hidden w-full h-12 inline-flex items-center justify-center rounded-xl bg-secondary text-white border-none px-5"
                      >
                        <span className="relative z-10 inline-flex items-center gap-2">
                          {primaryCta.text}
                          <ChevronRight className="h-4 w-4 text-muted transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                        <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/0 via-white/25 to-white/0" />
                      </Button>
                    ) : null}

                    {secondaryCta ? (
                      <Button
                        as={Link}
                        href={joinLocaleHref(locale, secondaryCta.URL)}
                        variant={secondaryCta.variant as any}
                        target={(secondaryCta.target ?? undefined) as any}
                        rel={
                          secondaryCta.target === '_blank'
                            ? ('noreferrer noopener' as any)
                            : undefined
                        }
                        className="group relative overflow-hidden w-full h-12 inline-flex items-center justify-center rounded-xl bg-white text-lightblack border border-charcoal hover:border-secondary/40 px-5"
                      >
                        <span className="inline-flex items-center gap-2">
                          {secondaryCta.text}
                          <ChevronRight className="h-4 w-4 text-muted transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                        <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/0 via-white/18 to-white/0" />
                      </Button>
                    ) : null}

                    {phone ? (
                      <motion.div
                        whileHover={reduce ? undefined : { y: -1 }}
                        transition={{ duration: 0.2, ease: EASE }}
                      >
                        {telHref ? (
                          <a
                            href={telHref}
                            className="group inline-flex w-full h-12 items-center justify-center gap-2 rounded-xl border border-charcoal bg-white px-4 text-sm text-lightblack shadow-sm hover:border-secondary/40 transition-colors"
                          >
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-charcoal/70 text-lightblack">
                              <Phone className="h-4 w-4" />
                            </span>
                            <span className="font-semibold">{phone}</span>
                            <span className="text-muted opacity-80 group-hover:opacity-100 transition-opacity">
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                          </a>
                        ) : (
                          <div className="inline-flex w-full h-12 items-center justify-center gap-2 rounded-xl border border-charcoal bg-white px-4 text-sm text-lightblack shadow-sm">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-charcoal/70 text-lightblack">
                              <Phone className="h-4 w-4" />
                            </span>
                            <span className="font-semibold">{phone}</span>
                          </div>
                        )}
                      </motion.div>
                    ) : null}
                  </div>
                </motion.div>
              ) : null}
            </motion.div>
          </motion.div>

          {/* RIGHT (Cover) */}
          <motion.div
            variants={colV}
            whileHover={reduce ? undefined : { y: -4 }}
            transition={{ duration: 0.24, ease: EASE }}
            className="md:col-span-5 w-full"
          >
            <div className="group relative w-full overflow-hidden rounded-3xl border border-charcoal bg-white shadow-sm">
              <div className="relative h-[240px] md:h-[360px] w-full">
                {coverUrl ? (
                  <Image
                    src={coverUrl}
                    alt={heading || 'CTA cover'}
                    fill
                    sizes="(min-width: 768px) 520px, 100vw"
                    className="object-cover object-center"
                    priority={false}
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/30 via-white to-white" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-lightblack/10 via-transparent to-muted/12" />
                  </>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lightblack/28 via-transparent to-transparent" />

                <motion.div
                  initial={reduce ? false : { x: -220, opacity: 0 }}
                  animate={reduce ? undefined : { x: -220, opacity: 0 }}
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          x: 220,
                          opacity: 1,
                          transition: { duration: 0.95, ease: EASE },
                        }
                  }
                  className="pointer-events-none absolute -inset-y-16 left-1/2 w-[220%] -translate-x-1/2 rotate-12 bg-gradient-to-r from-white/0 via-white/18 to-white/0 blur-[2px]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-muted/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
};
