'use client';

import {
  AnimatePresence,
  LayoutGroup,
  type Variants,
  motion,
  useReducedMotion,
} from 'framer-motion';
import {
  ChevronRight,
  Clock3,
  Droplets,
  Gem,
  Palette,
  Scissors,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

import { Container } from '../container';
import { Heading } from '../elements/heading';
import { Subheading } from '../elements/subheading';
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

/* ──────────────────────────────────────────────
   Motion – CTA mintára (nem egyszeri)
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
    transition: { staggerChildren: 0.14, delayChildren: 0.04 },
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

const stackV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
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

type Perk = { id?: number; text?: string | null; [k: string]: any };
type CTA = {
  text?: string | null;
  URL?: string | null;
  target?: string | null;
  variant?: string | null;
  [k: string]: any;
};

type Plan = {
  id?: number;
  documentId?: string;
  name?: string | null;
  cover?: any;
  price?: number | null;
  perks?: Perk[];
  additional_perks?: Perk[];
  description?: string | null;
  long_description?: string | null;
  sub_text?: string | null;
  number?: string | null;
  featured?: boolean;
  CTA?: CTA | null;
  pages?: any;
  [k: string]: any;
};

type PageLike = {
  id?: number;
  documentId?: string;
  slug?: string | null;
  label?: string | null;
  dynamic_zone?: any[] | null;
  attributes?: any;
  [k: string]: any;
};

// ---------- Strapi shape helpers ----------
function pickAttrs<T = any>(x: any): T {
  return (x?.attributes ?? x?.data?.attributes ?? x) as T;
}
function asArray<T = any>(v: any): T[] {
  if (Array.isArray(v)) return v as T[];
  if (Array.isArray(v?.data)) return v.data as T[];
  return [];
}

function toAbsUrl(url?: string | null) {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  return STRAPI_BASE
    ? `${STRAPI_BASE}${url.startsWith('/') ? '' : '/'}${url}`
    : url;
}

/** Strapi v5/v4 media: formats prefer: medium->small->thumbnail->original */
function getMediaUrl(media: any): string | null {
  if (!media) return null;

  const m: any = pickAttrs(media);

  const fm =
    m?.formats ??
    m?.data?.attributes?.formats ??
    m?.attributes?.formats ??
    undefined;

  const candidate =
    fm?.medium?.url ||
    fm?.small?.url ||
    fm?.thumbnail?.url ||
    m?.url ||
    m?.data?.attributes?.url ||
    m?.attributes?.url ||
    null;

  return toAbsUrl(candidate);
}

function getMediaAlt(media: any, fallback = '') {
  const m: any = pickAttrs(media);
  return (
    m?.alternativeText ??
    m?.data?.attributes?.alternativeText ??
    m?.attributes?.alternativeText ??
    fallback
  );
}

function getPlanCover(plan?: Plan | null) {
  const src = getMediaUrl(plan?.cover);
  if (!src) return null;
  return {
    src,
    alt: getMediaAlt(plan?.cover, (plan?.name ?? 'Szolgáltatás') as string),
  };
}

function normalizePlan(raw: any): Plan {
  const p: any = pickAttrs(raw);

  const perks = asArray<Perk>(p?.perks)
    .map((x) => pickAttrs<Perk>(x))
    .filter(Boolean);

  const additional = asArray<Perk>(p?.additional_perks)
    .map((x) => pickAttrs<Perk>(x))
    .filter(Boolean);

  const CTA = p?.CTA ? (pickAttrs<CTA>(p.CTA) as CTA) : null;

  return {
    ...p,
    id: p?.id ?? raw?.id,
    documentId: p?.documentId ?? raw?.documentId,
    cover: p?.cover ?? null,
    perks,
    additional_perks: additional,
    CTA,
  };
}

function formatHuf(n?: number | null) {
  if (typeof n !== 'number' || !Number.isFinite(n)) return '';
  try {
    return new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'HUF',
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `${Math.round(n)} Ft`;
  }
}

function safeHref(u?: string | null) {
  const s = (u ?? '').trim();
  return s.length ? s : '#';
}
function safeTarget(t?: string | null) {
  const s = (t ?? '').trim();
  return s.length ? s : undefined;
}

function planMatchesPageSlug(plan: Plan, pageSlug: string) {
  const slug = (pageSlug ?? '').trim();
  if (!slug) return true;

  const pages = asArray<any>(plan.pages)
    .map((x) => pickAttrs<PageLike>(x))
    .filter(Boolean);

  return pages.some((p) => (p?.slug ?? '').trim() === slug);
}

// ---------- ikon mapping ----------
function pickIcon(name?: string | null) {
  const t = (name ?? '').toLowerCase();

  if (
    t.includes('gél') ||
    t.includes('gellakk') ||
    t.includes('géllakk') ||
    t.includes('manik') ||
    t.includes('köröm') ||
    t.includes('korom') ||
    t.includes('műköröm') ||
    t.includes('mukorom')
  )
    return Gem;

  if (
    t.includes('balayage') ||
    t.includes('airtouch') ||
    t.includes('melir') ||
    t.includes('fest') ||
    t.includes('szők') ||
    t.includes('szok') ||
    t.includes('ombre') ||
    t.includes('szín') ||
    t.includes('szin')
  )
    return Palette;

  if (
    t.includes('ápol') ||
    t.includes('apol') ||
    t.includes('kezel') ||
    t.includes('k18') ||
    t.includes('olaplex')
  )
    return Droplets;

  if (
    t.includes('vág') ||
    t.includes('vag') ||
    t.includes('friz') ||
    t.includes('styling') ||
    t.includes('stíl') ||
    t.includes('stil')
  )
    return Scissors;

  return Sparkles;
}

/* ──────────────────────────────────────────────
   “Write-in” typography (word-by-word)
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
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.38, ease: EASE },
        },
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

// -------------------- Component --------------------
export function Pricing({
  heading,
  sub_heading,
  plans,
  filterByPageSlug,
  stickyBar = true,
}: {
  heading: string;
  sub_heading?: string | null;
  plans: any[];
  filterByPageSlug?: string;
  stickyBar?: boolean;
}) {
  const reduce = useReducedMotion();
  const detailRef = useRef<HTMLDivElement | null>(null);

  const normalized = useMemo(
    () => asArray(plans).map(normalizePlan).filter(Boolean),
    [plans]
  );

  const filtered = useMemo(() => {
    const s = (filterByPageSlug ?? '').trim();
    if (!s) return normalized;
    return normalized.filter((p) => planMatchesPageSlug(p, s));
  }, [normalized, filterByPageSlug]);

  const initialIndex = useMemo(() => {
    const feat = filtered.findIndex((p) => !!p.featured);
    return feat >= 0 ? feat : 0;
  }, [filtered]);

  const [selected, setSelected] = useState(0);
  const [userPicked, setUserPicked] = useState(false);

  useEffect(() => {
    setSelected(initialIndex);
  }, [initialIndex]);

  const current =
    filtered[Math.min(Math.max(selected, 0), Math.max(0, filtered.length - 1))];

  useEffect(() => {
    if (!userPicked) return;
    if (typeof window === 'undefined') return;

    const isMobile = window.matchMedia('(max-width: 1023px)').matches;
    if (!isMobile) return;

    const behavior: ScrollBehavior = reduce ? 'auto' : 'smooth';

    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior, block: 'start' });
    });
  }, [selected, userPicked, reduce]);

  if (!filtered.length) return null;

  return (
    <motion.section
      variants={sectionV}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={VIEWPORT}
      className={cn(
        // ✅ mobilon extra bottom space a FIX bar magasságára
        'relative pt-14 pb-44 md:pt-20 md:pb-24',
        !stickyBar && 'pb-14 md:pb-24'
      )}
    >
      {/* ✅ mobil FIX sticky bar: ugyanaz a max-w + px, mint a Container (szélesség + “margók” egyeznek) */}
      {stickyBar && current ? (
        <div className="lg:hidden fixed inset-x-0 bottom-3 z-40 pointer-events-none">
          <div
            className={cn(
              'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
              'pointer-events-auto pb-[env(safe-area-inset-bottom)]'
            )}
          >
            <StickyBar plan={current} />
          </div>
        </div>
      ) : null}

      <Container>
        <div className="mb-8 md:mb-10">
          <WriteInHeading
            text={heading}
            className="text-left text-3xl sm:text-4xl md:text-5xl font-light text-secondary leading-tight"
          />

          {sub_heading ? (
            <WriteInSubheading
              text={sub_heading}
              className="mt-4 md:mt-6 text-secondary text-sm md:text-base leading-relaxed text-left max-w-xl"
            />
          ) : null}
        </div>

        <LayoutGroup>
          <motion.div
            variants={gridV}
            initial={reduce ? false : 'hidden'}
            whileInView={reduce ? undefined : 'show'}
            viewport={VIEWPORT}
            className={cn(
              'grid items-start',
              'gap-4 md:gap-5',
              'lg:grid-cols-2'
            )}
          >
            {/* LEFT */}
            <motion.div variants={colV} className="relative">
              <motion.div variants={stackV} className="relative">
                <motion.div variants={itemV}>
                  <div
                    className={cn(
                      'relative overflow-hidden rounded-2xl border border-black/10',
                      'bg-white',
                      'shadow-[0_18px_55px_rgba(0,0,0,0.18)]',
                      'p-4 md:p-5'
                    )}
                  >
                    <div className="mb-2 text-xs font-semibold tracking-wide text-secondary">
                      Válassz szolgáltatást
                    </div>

                    <div className="max-h-[60vh] overflow-y-auto pr-1">
                      <div className="flex flex-col">
                        {filtered.map((p, idx) => {
                          const isActive = idx === selected;
                          const Icon = pickIcon(p.name);
                          const price = formatHuf(p.price);
                          const duration = (p.number ?? p.sub_text ?? '')
                            .toString()
                            .trim();
                          const cover = getPlanCover(p);

                          return (
                            <motion.button
                              key={p.documentId ?? p.id ?? `${p.name}-${idx}`}
                              type="button"
                              onClick={() => {
                                setUserPicked(true);
                                setSelected(idx);
                              }}
                              className={cn(
                                'relative text-left outline-none',
                                'rounded-xl px-2.5 py-2.5 sm:px-3 sm:py-3',
                                'transition',
                                'focus-visible:ring-2 focus-visible:ring-black/10'
                              )}
                              whileHover={reduce ? undefined : { y: -0.5 }}
                              whileTap={reduce ? undefined : { scale: 0.995 }}
                            >
                              {isActive ? (
                                <motion.div
                                  layoutId="pricing-row"
                                  className="absolute inset-0 rounded-xl bg-black/5"
                                  transition={
                                    reduce
                                      ? { duration: 0 }
                                      : { duration: 0.26, ease: EASE }
                                  }
                                />
                              ) : null}

                              <div className="relative z-10 flex items-center gap-3">
                                <div
                                  className={cn(
                                    'relative overflow-hidden rounded-lg border bg-white',
                                    'border-black/10',
                                    'h-9 w-9 sm:h-10 sm:w-10'
                                  )}
                                >
                                  {cover?.src ? (
                                    <>
                                      <Image
                                        src={cover.src}
                                        alt={cover.alt}
                                        fill
                                        sizes="40px"
                                        className="object-cover"
                                        priority={false}
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                                    </>
                                  ) : (
                                    <div className="grid h-full w-full place-items-center">
                                      <Icon
                                        className={cn(
                                          'h-5 w-5',
                                          isActive
                                            ? 'text-muted'
                                            : 'text-secondary'
                                        )}
                                      />
                                    </div>
                                  )}
                                </div>

                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center justify-between gap-3">
                                    <div className="truncate text-sm font-semibold text-lightblack">
                                      {p.name ?? 'Szolgáltatás'}
                                    </div>

                                    {p.featured ? (
                                      <span className="shrink-0 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold bg-charcoal text-secondary">
                                        Kiemelt
                                      </span>
                                    ) : null}
                                  </div>

                                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                                    <div
                                      className={cn(
                                        'text-xs font-semibold',
                                        isActive
                                          ? 'text-lightblack'
                                          : 'text-secondary'
                                      )}
                                    >
                                      {price ? price : 'Árajánlat'}
                                    </div>

                                    {duration ? (
                                      <div className="flex items-center gap-1.5 text-xs text-secondary">
                                        <Clock3 className="h-3.5 w-3.5 text-muted" />
                                        <span className="truncate">
                                          {duration}
                                        </span>
                                      </div>
                                    ) : null}
                                  </div>
                                </div>

                                <ChevronRight
                                  className={cn(
                                    'h-4 w-4 shrink-0',
                                    isActive
                                      ? 'text-secondary'
                                      : 'text-secondary/60'
                                  )}
                                />
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={colV}
              ref={detailRef}
              className="relative scroll-mt-32"
            >
              <motion.div variants={stackV} className="relative">
                <motion.div variants={itemV}>
                  <div
                    className={cn(
                      'relative overflow-hidden rounded-2xl border border-black/10',
                      'bg-white',
                      'shadow-[0_18px_55px_rgba(0,0,0,0.18)]',
                      'p-4 md:p-5'
                    )}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={
                          current?.documentId ??
                          current?.id ??
                          current?.name ??
                          selected
                        }
                        initial={
                          reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        exit={
                          reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }
                        }
                        transition={
                          reduce
                            ? { duration: 0 }
                            : { duration: 0.28, ease: EASE }
                        }
                        className="relative"
                      >
                        <Detail plan={current} />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* ✅ desktopon a “kártya alatti” margó ugyanaz, mint eddig */}
                  {stickyBar && current ? (
                    <div className="hidden lg:block mt-3 md:mt-4 sticky bottom-3">
                      <StickyBar plan={current} />
                    </div>
                  ) : null}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </LayoutGroup>
      </Container>
    </motion.section>
  );
}

function Detail({ plan }: { plan: Plan }) {
  const reduce = useReducedMotion();

  const Icon = pickIcon(plan?.name);
  const price = formatHuf(plan?.price);
  const duration = (plan?.number ?? plan?.sub_text ?? '').toString().trim();

  const href = safeHref(plan?.CTA?.URL);
  const target = safeTarget(plan?.CTA?.target);
  const ctaText = (plan?.CTA?.text ?? 'Időpontfoglalás').toString().trim();

  const cover = getPlanCover(plan);

  const perks = Array.isArray(plan?.perks) ? plan.perks : [];
  const additional = Array.isArray(plan?.additional_perks)
    ? plan.additional_perks
    : [];

  const bullets = [...perks, ...additional]
    .filter((x) => (x?.text ?? '').toString().trim())
    .slice(0, 3);

  const longText = (
    plan?.long_description ??
    plan?.description ??
    plan?.sub_text ??
    ''
  )
    .toString()
    .trim();

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl border border-black/10 bg-white">
            <Icon className="h-5 w-5 text-muted" />
          </div>

          <div className="min-w-0">
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-lightblack truncate">
              {plan?.name ?? 'Szolgáltatás'}
            </div>
            <div className="mt-1 text-sm text-secondary">
              {plan?.featured
                ? 'Kiemelt szolgáltatás'
                : 'Ár + idő + foglalás egyben'}
            </div>
          </div>
        </div>

        {cover?.src ? (
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-xl border border-black/10 bg-white shrink-0">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="56px"
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
        <div className="text-base font-semibold text-lightblack">
          {price ? price : 'Árajánlat'}
        </div>

        {duration ? (
          <div className="flex items-center gap-2 text-sm text-secondary">
            <Clock3 className="h-4 w-4 text-muted" />
            <span className="truncate">{duration}</span>
          </div>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-secondary">
        {longText ||
          'Adj a Plan-hez egy hosszabb leírást (lásd lent: long_description), és ide automatikusan bekerül.'}
      </p>

      {bullets.length ? (
        <div className="mt-5 grid gap-2">
          {bullets.map((b, i) => (
            <div
              key={b?.id ?? i}
              className="flex items-start gap-2 text-sm text-secondary"
            >
              <span
                aria-hidden
                className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary/40"
              />
              <span>{(b?.text ?? '').toString()}</span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-6">
        <motion.div
          whileHover={reduce ? undefined : { y: -0.5 }}
          whileTap={reduce ? undefined : { scale: 0.995 }}
          transition={
            reduce
              ? { duration: 0 }
              : { type: 'spring', stiffness: 420, damping: 30 }
          }
        >
          <Link
            href={href}
            target={target}
            className={cn(
              'group inline-flex w-full items-center justify-center gap-2',
              'rounded-xl px-5 py-3 text-sm font-semibold',
              'bg-lightblack text-charcoal',
              'transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10',
              'hover:opacity-[0.96]'
            )}
          >
            {ctaText}
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <div className="mt-3 text-xs text-secondary">
          Tipp: ha bizonytalan vagy, írj rövid üzenetet – segítünk a
          választásban.
        </div>
      </div>
    </div>
  );
}

function StickyBar({ plan }: { plan: Plan }) {
  const reduce = useReducedMotion();

  const price = formatHuf(plan?.price);
  const duration = (plan?.number ?? plan?.sub_text ?? '').toString().trim();
  const href = safeHref(plan?.CTA?.URL);
  const target = safeTarget(plan?.CTA?.target);
  const ctaText = (plan?.CTA?.text ?? 'Időpontfoglalás').toString().trim();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduce ? { duration: 0 } : { duration: 0.24, ease: EASE }}
      className={cn(
        'w-full overflow-hidden rounded-2xl border border-black/10 bg-white',
        'shadow-[0_18px_55px_rgba(0,0,0,0.18)]',
        'p-4 md:p-5'
      )}
    >
      <div className="min-w-0">
        <div className="text-xs font-semibold tracking-wide text-secondary">
          Kiválasztott
        </div>

        <div className="mt-1 text-sm font-semibold text-lightblack line-clamp-2">
          {plan?.name ?? ''}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <div className="text-xs font-semibold text-secondary">
            {price ? price : 'Árajánlat'}
          </div>

          {duration ? (
            <div className="flex items-center gap-1.5 text-xs text-secondary">
              <Clock3 className="h-3.5 w-3.5 text-muted" />
              <span className="truncate">{duration}</span>
            </div>
          ) : null}
        </div>
      </div>

      <Link
        href={href}
        target={target}
        className={cn(
          'mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl',
          'px-4 py-3 text-xs font-semibold',
          'bg-lightblack text-charcoal transition hover:opacity-95'
        )}
      >
        {ctaText}
        <ChevronRight className="h-3.5 w-3.5" />
      </Link>
    </motion.div>
  );
}
