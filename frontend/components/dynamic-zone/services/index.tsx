// components/dynamic-zone/services/index.tsx
'use client';

import {
  type Transition,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Calendar, Gem, Scissors, Sparkles, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useRef } from 'react';

import { Container } from '@/components/container';
import { Button } from '@/components/elements/button';
import { Heading } from '@/components/elements/heading';
import { Subheading } from '@/components/elements/subheading';

// components/dynamic-zone/services/index.tsx

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
  id: number;
  documentId?: string;
  slug: string;
  label?: string | null;
  dynamic_zone?: DZItem[];
  order?: number;
  position?: number;
  sort?: number;
};

type ButtonTarget = '_self' | '_blank' | '_parent' | '_top' | string;

type ButtonItem = {
  id?: number;
  documentId?: string;
  text?: string | null;
  URL?: string | null;
  href?: string | null;
  variant?: string | null;
  target?: ButtonTarget | null;
  newTab?: boolean | null;
};

type CTAComponent = {
  id?: number;
  documentId?: string;
  heading?: string | null;
  sub_heading?: string | null;
  CTAs?: ButtonItem[] | null;
};

// ---------- helpers ----------
function getHero(p: PageLike) {
  return p.dynamic_zone?.find((x) => x.__component === 'dynamic-zone.hero');
}

function getPageTitle(p: PageLike) {
  const label = p.label?.trim();
  if (label) return label;
  const hero = getHero(p);
  const t = hero?.heading?.trim();
  return t && t.length > 0 ? t : p.slug;
}

function getPageSubheading(p: PageLike): string | null {
  const hero = getHero(p);
  const s = hero?.sub_heading?.trim();
  return s && s.length > 0 ? s : null;
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

function getPageCover(p: PageLike) {
  const hero: any = getHero(p);
  const cover: StrapiMedia | null | undefined = hero?.cover ?? null;
  const src = getMediaUrl(cover);
  if (!src) return null;
  return { src, alt: getMediaAlt(cover, getPageTitle(p)) };
}

function toHref(btn: ButtonItem) {
  return (btn.URL ?? btn.href ?? '#') as string;
}

function toTarget(btn: ButtonItem) {
  const target = btn.newTab ? '_blank' : (btn.target ?? undefined);
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
  return { target, rel };
}

// ---------- stable 3-line clamp + ellipsis (plugin nélkül is) ----------
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

// ---------- cursor-follow shine ----------
function useCursorShine(enabled: boolean) {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const op = useMotionValue(0);

  const mxS = useSpring(mx, { stiffness: 360, damping: 44, mass: 0.75 });
  const myS = useSpring(my, { stiffness: 360, damping: 44, mass: 0.75 });
  const opS = useSpring(op, { stiffness: 240, damping: 30, mass: 0.75 });

  const mxPct = useTransform(mxS, (v) => `${v.toFixed(2)}%`);
  const myPct = useTransform(myS, (v) => `${v.toFixed(2)}%`);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!enabled) return;
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  const onEnter = () => {
    if (!enabled) return;
    op.set(1);
  };

  const onLeave = () => {
    if (!enabled) return;
    op.set(0);
    mx.set(50);
    my.set(50);
  };

  return { mxPct, myPct, opS, onMove, onEnter, onLeave };
}

// ✅ kisebb + fehér shine (nem arany)
function CursorShineLayer({
  mxPct,
  myPct,
  op,
  variant = 'light',
}: {
  mxPct: any;
  myPct: any;
  op: any;
  variant?: 'light' | 'dark';
}) {
  const a1 = variant === 'dark' ? 0.22 : 0.12;
  const a2 = variant === 'dark' ? 0.14 : 0.08;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={
        {
          opacity: op,
          '--mx': mxPct,
          '--my': myPct,
        } as any
      }
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(240px circle at var(--mx) var(--my), rgba(255,255,255,${a1}), transparent 62%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(160px circle at var(--mx) var(--my), rgba(255,255,255,${a2}), transparent 64%)`,
        }}
      />
    </motion.div>
  );
}

// ---------- component ----------
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
  const shineEnabled = !reduce;

  const sectionRef = useRef<HTMLElement | null>(null);

  const pageItems: PageLike[] = useMemo(() => {
    const raw: any = pages as any;
    const list: any[] = Array.isArray(raw) ? raw : (raw?.data ?? []);
    if (!Array.isArray(list) || list.length === 0) return [];

    const getOrder = (p: any): number | null => {
      const v =
        p?.order ??
        p?.position ??
        p?.sort ??
        p?.__order ??
        p?.__pivot?.order ??
        p?.__pivot?.position ??
        p?.pivot?.order ??
        p?.pivot?.position ??
        p?.meta?.order ??
        p?.attributes?.order ??
        p?.attributes?.position;
      return typeof v === 'number' ? v : null;
    };

    const hasOrder = list.some((p) => getOrder(p) !== null);
    return hasOrder
      ? [...(list as PageLike[])].sort(
          (a, b) => (getOrder(a) ?? 1e9) - (getOrder(b) ?? 1e9)
        )
      : (list as PageLike[]);
  }, [pages]);

  const featured = pageItems[0];
  const rightTop = pageItems[1];
  const rightBottom = pageItems[2];
  const bottomLeft = pageItems[3];
  const bottomMid = pageItems[4];

  // CTA only if meaningful
  const primaryCTA = CTAs?.CTAs?.[0] ?? null;
  const ctaHref = primaryCTA ? toHref(primaryCTA) : null;
  const { target: ctaTarget, rel: ctaRel } = primaryCTA
    ? toTarget(primaryCTA)
    : { target: undefined, rel: undefined };

  const ctaTitle = (CTAs?.heading ?? '').trim();
  const ctaDesc = (CTAs?.sub_heading ?? '').trim();
  const ctaBtnText = (primaryCTA?.text ?? '').trim();

  const hasCtaCard = Boolean(
    ctaTitle ||
    ctaDesc ||
    (primaryCTA && ctaHref && ctaHref !== '#' && ctaBtnText)
  );

  const hasAny = Boolean(
    featured || rightTop || rightBottom || bottomLeft || bottomMid || hasCtaCard
  );

  // ---- animations (explicit props, TS-safe) ----
  const titleInitial = reduce
    ? { opacity: 1, y: 0, filter: 'blur(0px)' }
    : { opacity: 0, y: 18, filter: 'blur(12px)' };
  const titleInView = { opacity: 1, y: 0, filter: 'blur(0px)' };
  const titleTransition: Transition = reduce
    ? { duration: 0.01 }
    : { duration: 0.9, ease: EASE };

  const underlineInitial = reduce
    ? { scaleX: 1, opacity: 1 }
    : { scaleX: 0.1, opacity: 0 };
  const underlineInView = { scaleX: 1, opacity: 1 };
  const underlineTransition: Transition = reduce
    ? { duration: 0.01 }
    : { duration: 0.95, ease: EASE, delay: 0.14 };

  const subInitial = reduce
    ? { opacity: 1, y: 0, filter: 'blur(0px)' }
    : { opacity: 0, y: 14, filter: 'blur(10px)' };
  const subInView = { opacity: 1, y: 0, filter: 'blur(0px)' };
  const subTransition: Transition = reduce
    ? { duration: 0.01 }
    : { duration: 0.9, ease: EASE, delay: 0.26 };

  const cardInitial = reduce
    ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
    : { opacity: 0, y: 30, scale: 0.975, filter: 'blur(16px)' };
  const cardInView = { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' };
  const cardTransition: Transition = reduce
    ? { duration: 0.01 }
    : { duration: 0.95, ease: EASE };

  const hover = reduce ? undefined : { y: -6, scale: 1.01 };
  const tap = reduce ? undefined : { scale: 0.99 };

  // IconBadge (service-card mintára)
  const IconBadge = ({
    icon: Icon,
    variant = 'light',
  }: {
    icon: React.ComponentType<{ className?: string }>;
    variant?: 'light' | 'dark';
  }) => {
    const base =
      variant === 'dark'
        ? 'bg-black/25 ring-1 ring-white/15 backdrop-blur-md'
        : 'bg-charcoal ring-1 ring-black/10';

    return (
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${base}`}
      >
        <Icon className="h-5 w-5 text-muted" />
      </div>
    );
  };

  const CardShell = ({
    href,
    children,
    onMove,
    onEnter,
    onLeave,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    onMove?: (e: React.MouseEvent<HTMLElement>) => void;
    onEnter?: () => void;
    onLeave?: () => void;
    className: string;
  }) => (
    <Link
      href={href}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={[
        'group relative block h-full overflow-hidden rounded-xl',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-muted/60',
        className,
      ].join(' ')}
    >
      {children}
    </Link>
  );

  const WhiteCard = ({
    page,
    icon,
  }: {
    page: PageLike;
    icon: React.ComponentType<{ className?: string }>;
  }) => {
    const cover = getPageCover(page);
    const desc = getPageSubheading(page);
    const shine = useCursorShine(shineEnabled);

    const isDark = Boolean(cover?.src);

    return (
      <motion.div
        className="h-full"
        initial={cardInitial}
        whileInView={cardInView}
        viewport={VIEWPORT}
        transition={cardTransition}
        whileHover={hover}
        whileTap={tap}
      >
        <CardShell
          href={`/${page.slug}`}
          onMove={shine.onMove}
          onEnter={shine.onEnter}
          onLeave={shine.onLeave}
          className={[
            'flex flex-col p-8',
            'ring-1 ring-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]',
            'transition-shadow hover:shadow-[0_18px_54px_rgba(0,0,0,0.14)]',
            isDark ? 'bg-lightblack' : 'bg-white',
          ].join(' ')}
        >
          {/* BG image + overlays (pont mint a FeaturedCard-on) */}
          {cover?.src ? (
            <div className="absolute inset-0">
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/35 to-black/75" />
              <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_15%,rgba(255,255,255,0.16),transparent_55%)]" />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
            </div>
          ) : null}

          <CursorShineLayer
            mxPct={shine.mxPct}
            myPct={shine.myPct}
            op={shine.opS}
            variant={isDark ? 'dark' : 'light'}
          />

          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute -inset-40 rotate-12 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
          </div>

          <div className="relative z-10">
            <IconBadge icon={icon} variant={isDark ? 'dark' : 'light'} />

            <div className="mt-6">
              <div
                className={[
                  'text-[18px] font-semibold tracking-tight',
                  isDark
                    ? 'text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]'
                    : 'text-lightblack',
                ].join(' ')}
              >
                {getPageTitle(page)}
              </div>

              {desc ? (
                <Clamp3
                  className={[
                    'mt-2 text-[13px] leading-relaxed',
                    isDark ? 'text-charcoal/90' : 'text-secondary/80',
                  ].join(' ')}
                >
                  {desc}
                </Clamp3>
              ) : null}
            </div>
          </div>

          <div className="relative z-10 mt-auto pt-6">
            {isDark ? (
              <span
                className={[
                  'inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-muted',
                ].join(' ')}
              >
                <span className="transition-opacity group-hover:opacity-95">
                  Részletek Megtekintése
                </span>
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-2"
                >
                  →
                </span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-muted">
                <span className="transition-colors group-hover:text-muted/90">
                  Fedezze fel
                </span>
                <span
                  aria-hidden
                  className="transition-transform duration-150 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            )}
          </div>
        </CardShell>
      </motion.div>
    );
  };

  const FeaturedCard = ({ page }: { page: PageLike }) => {
    const cover = getPageCover(page);
    const desc = getPageSubheading(page);
    const shine = useCursorShine(shineEnabled);

    const px = useMotionValue(0);
    const py = useMotionValue(0);
    const rotX = useTransform(py, [-0.5, 0.5], [5, -5]);
    const rotY = useTransform(px, [-0.5, 0.5], [-6, 6]);

    const onMove = (e: React.MouseEvent<HTMLElement>) => {
      if (!reduce) {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width - 0.5);
        py.set((e.clientY - r.top) / r.height - 0.5);
      }
      shine.onMove(e);
    };

    const onLeave = () => {
      if (!reduce) {
        px.set(0);
        py.set(0);
      }
      shine.onLeave();
    };

    return (
      <motion.div
        className="h-full"
        initial={cardInitial}
        whileInView={cardInView}
        viewport={VIEWPORT}
        transition={cardTransition}
        whileHover={hover}
        whileTap={tap}
        style={reduce ? undefined : ({ perspective: 980 } as any)}
      >
        <CardShell
          href={`/${page.slug}`}
          onMove={onMove}
          onEnter={shine.onEnter}
          onLeave={onLeave}
          className={[
            'min-h-[400px] sm:min-h-[460px] lg:min-h-0',
            'ring-1 ring-black/5 shadow-[0_16px_60px_rgba(0,0,0,0.22)]',
          ].join(' ')}
        >
          <motion.div
            className="absolute inset-0"
            style={
              reduce
                ? undefined
                : ({
                    rotateX: rotX,
                    rotateY: rotY,
                    transformStyle: 'preserve-3d',
                  } as any)
            }
          >
            {cover ? (
              <div className="absolute inset-0">
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover opacity-95"
                />
              </div>
            ) : null}

            {/* overlays (maradnak) */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/35 to-black/75" />
            <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_15%,rgba(255,255,255,0.16),transparent_55%)]" />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
          </motion.div>

          <CursorShineLayer
            mxPct={shine.mxPct}
            myPct={shine.myPct}
            op={shine.opS}
            variant="dark"
          />

          <div className="absolute left-6 top-6">
            <IconBadge icon={Scissors} variant="dark" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
            <div className="max-w-2xl">
              <div className="text-[30px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[38px]">
                {getPageTitle(page)}
              </div>

              {desc ? (
                <Clamp3 className="mt-3 text-[13px] leading-relaxed text-charcoal/90">
                  {desc}
                </Clamp3>
              ) : null}

              <div className="mt-6">
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-muted">
                  <span className="transition-opacity group-hover:opacity-95">
                    Részletek Megtekintése
                  </span>
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute -inset-40 rotate-12 bg-gradient-to-r from-transparent via-white/14 to-transparent" />
          </div>
        </CardShell>
      </motion.div>
    );
  };

  const CTACard = () => {
    const shine = useCursorShine(shineEnabled);

    return (
      <motion.div
        className="h-full"
        initial={cardInitial}
        whileInView={cardInView}
        viewport={VIEWPORT}
        transition={cardTransition}
        whileHover={hover}
        whileTap={tap}
      >
        <div
          onMouseMove={shine.onMove as any}
          onMouseEnter={shine.onEnter as any}
          onMouseLeave={shine.onLeave as any}
          className={[
            'relative flex min-h-[210px] h-full flex-col items-center justify-center overflow-hidden rounded-xl p-10 text-center',
            'bg-gradient-to-br from-lightblack via-lightblack to-black',
            'ring-1 ring-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.32)]',
          ].join(' ')}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_25%,rgba(255,255,255,0.10),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

          <CursorShineLayer
            mxPct={shine.mxPct}
            myPct={shine.myPct}
            op={shine.opS}
            variant="dark"
          />

          <div className="relative">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
              <Calendar className="h-5 w-5 text-white" />
            </div>

            {ctaTitle ? (
              <div className="mt-6 text-[22px] font-semibold tracking-tight text-white">
                {ctaTitle}
              </div>
            ) : null}

            {ctaDesc ? (
              <Clamp3 className="mx-auto mt-2 max-w-xs text-[13px] leading-relaxed text-charcoal/80">
                {ctaDesc}
              </Clamp3>
            ) : null}

            {primaryCTA && ctaHref && ctaHref !== '#' && ctaBtnText ? (
              <div className="mt-7 flex justify-center">
                <Button
                  as="a"
                  href={ctaHref}
                  target={ctaTarget}
                  rel={ctaRel}
                  variant="primary"
                  className="h-11 rounded-xl bg-muted px-8 text-[12px] font-extrabold tracking-wide text-lightblack shadow-sm hover:bg-muted/90"
                >
                  {ctaBtnText}
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section ref={sectionRef}>
      <Container className="pb-24 pt-20">
        {/* Header: hero title left */}
        <div className="max-w-3xl">
          <motion.div
            initial={titleInitial}
            whileInView={titleInView}
            viewport={VIEWPORT}
            transition={titleTransition}
          >
            {!!heading && (
              <Heading
                className={[
                  'text-left text-4xl md:text-6xl',
                  'lg:text-7xl font-light text-secondary',
                  'leading-tight',
                ].join(' ')}
              >
                {heading}
              </Heading>
            )}
          </motion.div>

          <motion.div
            className="mt-6 h-[2px] w-28 origin-left rounded-full bg-muted/80"
            initial={underlineInitial}
            whileInView={underlineInView}
            viewport={VIEWPORT}
            transition={underlineTransition}
          />

          <motion.div
            initial={subInitial}
            whileInView={subInView}
            viewport={VIEWPORT}
            transition={subTransition}
          >
            {!!sub_heading ? (
              <Subheading
                className={[
                  'mt-6 text-left text-secondary',
                  'text-[15px] sm:text-[16px] lg:text-[18px]',
                  'leading-relaxed',
                  'max-w-2xl',
                ].join(' ')}
              >
                {sub_heading}
              </Subheading>
            ) : null}
          </motion.div>
        </div>

        {/* Grid */}
        {hasAny ? (
          <div className="mt-14 space-y-2">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:items-stretch">
              {featured ? (
                <div className="lg:col-span-2 h-full">
                  <FeaturedCard page={featured} />
                </div>
              ) : null}

              {rightTop || rightBottom ? (
                <div
                  className={
                    (featured ? 'lg:col-span-1' : 'lg:col-span-3') + ' h-full'
                  }
                >
                  <div className="grid h-full grid-cols-1 gap-2 lg:grid-rows-2">
                    {rightTop ? (
                      <WhiteCard page={rightTop} icon={Sparkles} />
                    ) : null}
                    {rightBottom ? (
                      <WhiteCard page={rightBottom} icon={Gem} />
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
              {bottomLeft ? (
                <WhiteCard page={bottomLeft} icon={Scissors} />
              ) : null}
              {bottomMid ? <WhiteCard page={bottomMid} icon={User} /> : null}
              {hasCtaCard ? <CTACard /> : null}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
};
