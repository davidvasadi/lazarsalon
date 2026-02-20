'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ClockIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useRef } from 'react';

// <-- igazítsd a pathot ha máshol van
import { Button } from '../elements/button';
import { Heading } from '../elements/heading';
import { Subheading } from '../elements/subheading';
import { AmbientColor } from '@/components/decorations/ambient-color';

/* ──────────────────────────────────────────────────────────────
  Constants
────────────────────────────────────────────────────────────── */
const GOLD = '#B4943E';
const DEFAULT_SCROLL_ID = 'services';

const BG_IMG_CLASS =
  'object-cover filter grayscale saturate-0 contrast-125 brightness-[0.72]';

const OVERLAY_GRADIENT_CLASS =
  'bg-gradient-to-r from-[#1D1D1E]/95 via-[#1D1D1E]/80 to-transparent';
const OVERLAY_DARK_CLASS = 'bg-[#1D1D1E]/20';

/* ──────────────────────────────────────────────────────────────
  Strapi helpers
────────────────────────────────────────────────────────────── */
const STRAPI_BASE = (
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  ''
).replace(/\/$/, '');

const toAbs = (u?: string | null) => {
  if (!u) return '';
  if (u.startsWith('http')) return u;
  return STRAPI_BASE ? `${STRAPI_BASE}${u}` : u;
};

/* ──────────────────────────────────────────────────────────────
  URL helpers
────────────────────────────────────────────────────────────── */
function isExternalUrl(url?: string | null) {
  const u = (url ?? '').trim();
  if (!u) return false;
  if (u.startsWith('#')) return false;
  return /^(https?:)?\/\//i.test(u) || /^(mailto:|tel:)/i.test(u);
}

function joinLocaleHref(locale: string, url?: string | null) {
  const u = (url ?? '').trim();
  if (!u) return `/${locale}`;
  if (u.startsWith('#')) return u;
  if (isExternalUrl(u)) return u;
  const path = u.startsWith('/') ? u : `/${u}`;
  return `/${locale}${path}`.replace(/\/{2,}/g, '/');
}

/* ──────────────────────────────────────────────────────────────
  Tiny icons
────────────────────────────────────────────────────────────── */
function StarGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.75l2.93 6.12 6.76.98-4.89 4.77 1.16 6.73L12 18.98 6.04 21.35l1.16-6.73L2.31 9.85l6.76-.98L12 2.75z" />
    </svg>
  );
}

function LocationGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────
  Theme-color driver (MINIMAL)
  Hero látszik => dark
  Hero után => világos
────────────────────────────────────────────────────────────── */
function setThemeColor(color: string) {
  const metas = Array.from(
    document.querySelectorAll('meta[name="theme-color"]')
  ) as HTMLMetaElement[];

  if (metas.length === 0) {
    const m = document.createElement('meta');
    m.setAttribute('name', 'theme-color');
    m.setAttribute('content', color);
    document.head.appendChild(m);
    return;
  }

  metas.forEach((m) => m.setAttribute('content', color));
}

function ThemeColorOnHero({
  heroId,
  heroColor,
  pageColor,
}: {
  heroId: string;
  heroColor: string;
  pageColor: string;
}) {
  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;

    // init
    setThemeColor(heroColor);

    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio > 0;
        setThemeColor(visible ? heroColor : pageColor);
      },
      { threshold: [0, 0.01] }
    );

    io.observe(hero);
    return () => io.disconnect();
  }, [heroId, heroColor, pageColor]);

  return null;
}

/* ──────────────────────────────────────────────────────────────
  Types
────────────────────────────────────────────────────────────── */
type CTA = {
  id: number;
  text: string;
  URL: string;
  target?: string | null;
  variant?: 'primary' | 'outline' | 'muted' | 'simple' | string;
};

type StrapiImageFormat = {
  url?: string | null;
  width?: number | null;
  height?: number | null;
};

type StrapiMediaImage = {
  id: number;
  url?: string | null;
  alternativeText?: string | null;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
    [key: string]: StrapiImageFormat | undefined;
  } | null;
};

type Props = {
  heading: string;
  sub_heading: string;
  CTAs: CTA[];
  locale: string;
  image?: StrapiMediaImage | null;
  duration?: string | null;
  scrollToId?: string;
  parallax?: boolean;
};

export const Hero = ({
  heading,
  sub_heading,
  CTAs,
  locale,
  image,
  duration,
  scrollToId = DEFAULT_SCROLL_ID,
  parallax = false,
}: Props) => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const pathname = usePathname() || '';
  const parts = pathname.split('/').filter(Boolean);
  const isHome = parts.length <= 1;

  const homeLabel = locale?.toLowerCase().startsWith('en')
    ? 'Home'
    : locale?.toLowerCase().startsWith('de')
      ? 'Startseite'
      : 'Főoldal';

  const preferred =
    image?.formats?.large?.url ||
    image?.formats?.medium?.url ||
    image?.formats?.small?.url ||
    image?.url ||
    null;

  const imgSrc = toAbs(preferred);
  const hasImage = Boolean(imgSrc);
  const imgAlt = image?.alternativeText || heading || 'Hero image';

  const toButtonVariant = (
    v?: string | null
  ): 'simple' | 'outline' | 'primary' | 'muted' => {
    return v === 'simple' || v === 'outline' || v === 'primary' || v === 'muted'
      ? v
      : 'primary';
  };

  const instant = { duration: 0.01 };

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], [0, -120]);

  const onScrollCue = useCallback(() => {
    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    const next = sectionRef.current?.nextElementSibling as HTMLElement | null;
    next?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [scrollToId]);

  const primaryCtaClass =
    'group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-light flex items-center justify-center gap-2 ' +
    'hover:bg-white hover:text-[#1D1D1E] transition-all duration-300 transform hover:scale-[1.02]';

  const secondaryCtaClass =
    'group border border-white/20 text-white px-8 py-4 rounded-lg font-light flex items-center justify-center gap-2 ' +
    'hover:bg-white/10 transition-all duration-300';

  const infoTitleClass =
    'text-[12px] sm:text-sm font-light text-muted opacity-90 flex items-center gap-2';
  const infoSubClass =
    'mt-1 text-[10px] sm:text-xs font-light tracking-wide text-charcoal opacity-70 uppercase';

  const dur = (duration ?? '').trim();
  const hasDuration = dur.length > 0;

  // ezek csak meta theme-colorhoz — vizuális “notch szín” most a hero backgroundból jön!
  const HERO_THEME = '#141414';
  const PAGE_THEME = '#F5F5F5';

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={
        // pt safe-area: a tartalom nem megy fel a notch alá,
        // de a háttér (absolute) igen, ezért NINCS külön cap szükség
        'relative isolate min-h-[100svh] overflow-hidden bg-[#1D1D1E] pt-[env(safe-area-inset-top)]'
      }
    >
      {/* ONLY meta theme-color handling */}
      <ThemeColorOnHero
        heroId="hero"
        heroColor={HERO_THEME}
        pageColor={PAGE_THEME}
      />

      {/* Background */}
      <motion.div
        className="absolute inset-0 -z-10 will-change-transform"
        aria-hidden="true"
        style={!reduceMotion && parallax ? { y: bgY } : undefined}
      >
        {hasImage ? (
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            priority
            sizes="100vw"
            className={BG_IMG_CLASS}
          />
        ) : (
          <div className="absolute inset-0 bg-black" />
        )}

        <div className={`absolute inset-0 ${OVERLAY_GRADIENT_CLASS}`} />
        <div className={`absolute inset-0 ${OVERLAY_DARK_CLASS}`} />

        {/* Left animated line */}
        <motion.div
          className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-white/80 to-transparent"
          initial={
            reduceMotion
              ? { width: '25%', opacity: 1 }
              : { width: 0, opacity: 0 }
          }
          animate={{ width: '25%', opacity: 1 }}
          transition={
            reduceMotion
              ? instant
              : { duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
          }
        />
      </motion.div>

      {/* Ambient glow — MUST be inside hero so notch area matches */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* AmbientColor eredetileg z-40 volt; itt a hero-n belül legyen finomabb */}
        <div className="absolute inset-0 opacity-80">
          <AmbientColor />
        </div>
      </div>

      {/* Right side static label */}
      <motion.div
        className="pointer-events-none absolute right-2 top-[10%] z-20 -translate-y-1/2 transform-gpu sm:right-6 md:top-[58%]"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={reduceMotion ? instant : { duration: 0.8, delay: 1.0 }}
      >
        <div className="origin-right -rotate-90 transform-gpu flex items-center gap-3 sm:gap-4">
          <span className="text-xs font-light tracking-[0.35em] text-charcoal opacity-40 md:text-md">
            EST. 2010
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 py-16 md:px-8">
        <div className="w-full max-w-3xl">
          {/* Heading */}
          <motion.div
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? instant : { duration: 1, delay: 0.4 }}
            className="relative"
          >
            {!isHome ? (
              <nav aria-label="Breadcrumb" className="mb-3">
                <ol className="flex flex-wrap items-center gap-2 text-xs font-light text-white/60 sm:text-sm">
                  <li>
                    <Link
                      href={`/${locale}`}
                      className="hover:text-white/85 transition-colors"
                    >
                      {homeLabel}
                    </Link>
                  </li>
                  <li className="text-white/35">
                    <ChevronRightIcon className="h-3.5 w-3.5" />
                  </li>
                  <li className="text-white/85">{heading}</li>
                </ol>
              </nav>
            ) : null}

            <span className="text-muted text-xs font-light leading-tight">
              LAZAR&apos;S SZÉPSÉGSZALON BUDAPEST
            </span>

            <Heading
              as="h1"
              className="text-left text-4xl font-light leading-tight text-white md:text-6xl lg:text-7xl"
            >
              <span className="relative inline-block">
                <span className="relative z-10">{heading}</span>

                <motion.span
                  className="pointer-events-none absolute -right-10 top-1/2 block h-px w-16 origin-left z-0 sm:w-20 md:-right-30 md:w-24"
                  style={{ backgroundColor: GOLD }}
                  initial={
                    reduceMotion
                      ? { scaleX: 1, opacity: 1 }
                      : { scaleX: 0, opacity: 0 }
                  }
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={
                    reduceMotion ? instant : { duration: 1, delay: 1.2 }
                  }
                />
              </span>
            </Heading>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? instant : { duration: 1, delay: 0.6 }}
            className="mt-4 sm:mt-6"
          >
            <Subheading className="text-left text-base font-light text-white/80 sm:text-lg md:text-xl">
              {sub_heading}
            </Subheading>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? instant : { duration: 1, delay: 0.8 }}
            className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row"
          >
            {CTAs?.map((cta, idx) => {
              const href = joinLocaleHref(locale, cta.URL);
              const target = cta.target || undefined;
              const rel =
                target === '_blank' ? 'noopener noreferrer' : undefined;

              const external = isExternalUrl(cta.URL);
              const Cmp: any = external ? 'a' : Link;

              if (idx === 0) {
                return (
                  <Button
                    key={cta.id}
                    variant={toButtonVariant(cta.variant)}
                    asChild
                    className={primaryCtaClass}
                  >
                    <Cmp href={href} target={target} rel={rel}>
                      <CalendarIcon size={20} />
                      <span>{cta.text}</span>
                      <span className="w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-6">
                        →
                      </span>
                    </Cmp>
                  </Button>
                );
              }

              if (idx === 1) {
                return (
                  <Button
                    key={cta.id}
                    variant={toButtonVariant(cta.variant)}
                    asChild
                    className={secondaryCtaClass}
                  >
                    <Cmp href={href} target={target} rel={rel}>
                      <span>{cta.text}</span>
                      <span className="w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-6">
                        →
                      </span>
                    </Cmp>
                  </Button>
                );
              }

              return (
                <Button
                  key={cta.id}
                  variant={toButtonVariant(cta.variant)}
                  asChild
                  className={secondaryCtaClass}
                >
                  <Cmp href={href} target={target} rel={rel}>
                    <span>{cta.text}</span>
                  </Cmp>
                </Button>
              );
            })}
          </motion.div>

          {/* Duration */}
          {hasDuration ? (
            <motion.div
              initial={
                reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduceMotion ? instant : { duration: 0.9, delay: 0.9 }
              }
              className="mt-8 flex items-center gap-4"
            >
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-sm md:h-10 md:w-10">
                <ClockIcon className="h-5 w-5 text-muted" />
              </div>

              <div className="min-w-0">
                <div className="text-[12px] font-light text-muted/90 sm:text-sm">
                  Átlagos időtartam:
                </div>
                <div className="text-xs font-light text-white sm:text-lg">
                  {dur}
                </div>
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>

      {/* Bottom info clusters */}
      <div className="absolute inset-x-0 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-20 sm:bottom-10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-end justify-between gap-3">
            <motion.div
              initial={
                reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduceMotion ? instant : { duration: 0.9, delay: 1.05 }
              }
              className="min-w-0 flex-1"
            >
              <div className={infoTitleClass}>
                <StarGlyph className="h-3.5 w-3.5 shrink-0 text-muted sm:h-4 sm:w-4" />
                <span className="truncate text-muted opacity-90">
                  <span className="text-charcoal">4.9</span>{' '}
                  <span className="text-muted opacity-90">
                    Prémium Értékelés
                  </span>
                </span>
              </div>
              <div className={`${infoSubClass} truncate`}>
                TÖBB MINT 160+ ELÉGEDETT VENDÉG
              </div>
            </motion.div>

            <motion.div
              initial={
                reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduceMotion ? instant : { duration: 0.9, delay: 1.15 }
              }
              className="min-w-0 flex-1 text-right"
            >
              <div className={`${infoTitleClass} justify-end`}>
                <LocationGlyph className="h-3.5 w-3.5 shrink-0 text-muted sm:h-4 sm:w-4" />
                <span className="truncate text-muted opacity-90">
                  <span className="font-semibold text-muted opacity-90">
                    Budapest, VI. kerület
                  </span>
                </span>
              </div>
              <div className={`${infoSubClass} ml-auto truncate`}>
                NYITVA: H–Szo 09:00 – 20:00
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute left-1/2 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-30 -translate-x-1/2 sm:bottom-8">
        <motion.button
          type="button"
          onClick={onScrollCue}
          aria-label="Görgess lejjebb"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduceMotion ? instant : { duration: 1, delay: 1.5 }}
          className="flex flex-col items-center cursor-pointer text-white/60 transition hover:text-white/80"
        >
          <span className="hidden touch-manipulation cursor-pointer flex-col items-center gap-2 text-white/60 transition hover:text-white/80 sm:flex">
            Görgess lejjebb
          </span>
          <motion.span
            aria-hidden="true"
            animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
            transition={
              reduceMotion
                ? instant
                : { duration: 1.5, repeat: Infinity, repeatType: 'reverse' }
            }
          >
            <ChevronDownIcon size={20} />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
};
