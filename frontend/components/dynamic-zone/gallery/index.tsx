'use client';

import {
  AnimatePresence,
  type Variants,
  motion,
  useReducedMotion,
} from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Instagram,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import { Container } from '@/components/container';
import { Heading } from '@/components/elements/heading';
import { Subheading } from '@/components/elements/subheading';
import { cn } from '@/lib/utils';

/** IMPORTANT: ne defaultolj localhostra prod miatt */
const STRAPI_BASE = (
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  ''
)
  .replace(/\/$/, '')
  .replace(/\/api$/, '');

type StrapiMedia =
  | {
      url?: string;
      alternativeText?: string | null;
      data?: {
        attributes?: { url?: string; alternativeText?: string | null } | null;
      } | null;
    }
  | null
  | undefined;

type GalleryItem = {
  id?: number;
  image?: StrapiMedia;
  kicker?: string | null;
  title?: string | null;

  /** Insta post/profil URL — ha üres: nincs insta ikon */
  link_url?: string | null;
  link_target?: '_self' | '_blank' | string | null;
};

type ButtonCfg = {
  id?: number;
  text?: string | null;
  URL?: string | null;
  target?: '_self' | '_blank' | string | null;
  variant?: string | null;
};

type Props = {
  heading?: string | null;
  sub_heading?: string | null;
  gallery_item?: GalleryItem[] | null;

  /** fejléc jobb oldali link (ha üres: semmi) */
  button?: ButtonCfg | null;

  /** ✅ Strapi boolean */
  enable_grayscale?: boolean | null;

  locale?: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.26 } as const;

function mediaUrl(m?: StrapiMedia) {
  const u = (m as any)?.url ?? (m as any)?.data?.attributes?.url;
  if (!u) return '';
  return u.startsWith('http') ? u : `${STRAPI_BASE}${u}`;
}

function mediaAlt(m?: StrapiMedia, fallback?: string) {
  return (
    (m as any)?.alternativeText ??
    (m as any)?.data?.attributes?.alternativeText ??
    fallback ??
    ''
  );
}

/* ──────────────────────────────────────────────
   Write-in anim (word-by-word) — Heading/Subheading
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

  if (reduce) {
    return (
      <Heading as="h2" className={className}>
        {text}
      </Heading>
    );
  }

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

  if (reduce) {
    return <Subheading className={className}>{text}</Subheading>;
  }

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

/** Arany vonal (muted) */
function GoldRule({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const v: Variants = reduce
    ? { hidden: { opacity: 1, scaleX: 1 }, show: { opacity: 1, scaleX: 1 } }
    : {
        hidden: { opacity: 0, scaleX: 0 },
        show: {
          opacity: 1,
          scaleX: 1,
          transition: { duration: 0.6, ease: EASE, delay: 0.06 },
        },
      };

  return (
    <motion.div
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={cn('origin-left', className)}
    >
      <div className="h-px w-16 bg-muted/90" />
    </motion.div>
  );
}

/** MOBIL: 2×8 elrendezés az első 6 elemre */
function mobilePlacement(idx: number) {
  switch (idx) {
    case 0:
      return 'col-start-1 row-start-1 row-span-2';
    case 1:
      return 'col-start-1 row-start-3 row-span-2';
    case 2:
      return 'col-start-2 row-start-1 row-span-4';
    case 3:
      return 'col-start-1 row-start-5 row-span-4';
    case 4:
      return 'col-start-2 row-start-5 row-span-2';
    case 5:
      return 'col-start-2 row-start-7 row-span-2';
    default:
      return '';
  }
}

/** DESKTOP: 5-ös blokk minta + tükrözés */
function desktopPlacementInBlock(pos: 0 | 1 | 2 | 3 | 4, mirror: boolean) {
  if (!mirror) {
    switch (pos) {
      case 0:
        return 'md:col-start-1 md:row-start-1 md:row-span-2';
      case 1:
        return 'md:col-start-2 md:row-start-1 md:row-span-2';
      case 2:
        return 'md:col-start-3 md:row-start-1 md:row-span-3';
      case 3:
        return 'md:col-start-3 md:row-start-4 md:row-span-3';
      case 4:
        return 'md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-4';
    }
  }

  switch (pos) {
    case 0:
      return 'md:col-start-3 md:row-start-1 md:row-span-2';
    case 1:
      return 'md:col-start-2 md:row-start-1 md:row-span-2';
    case 2:
      return 'md:col-start-1 md:row-start-1 md:row-span-3';
    case 3:
      return 'md:col-start-1 md:row-start-4 md:row-span-3';
    case 4:
      return 'md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-4';
  }
}

function isExternal(url: string) {
  return /^https?:\/\//i.test(url);
}

function HeaderButton({
  text,
  href,
  target,
}: {
  text: string;
  href: string;
  target: string;
}) {
  const subLike =
    'text-secondary text-sm md:text-base leading-relaxed transition-colors group-hover:text-lightblack';

  const content = (
    <>
      <span className={subLike}>{text}</span>
      <ChevronRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:translate-x-0.5" />
    </>
  );

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className="group inline-flex items-center gap-2 whitespace-nowrap"
        aria-label={text}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      target={target}
      className="group inline-flex items-center gap-2 whitespace-nowrap"
      aria-label={text}
    >
      {content}
    </Link>
  );
}

export function Gallery({
  heading,
  sub_heading,
  gallery_item,
  button,
  enable_grayscale,
}: Props) {
  const reduce = useReducedMotion();
  const isGrayscale = !!enable_grayscale;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (gallery_item ?? []).filter(Boolean) as GalleryItem[],
    [gallery_item]
  );

  // ✅ HOOK FIX: blocks useMemo NEM lehet a korai return után
  const blocks = useMemo(() => {
    const out: GalleryItem[][] = [];
    for (let i = 0; i < items.length; i += 5) out.push(items.slice(i, i + 5));
    return out;
  }, [items]);

  const current = openIndex == null ? null : items[openIndex];

  useEffect(() => {
    if (openIndex == null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null);
      if (e.key === 'ArrowLeft') {
        setOpenIndex((i) =>
          i == null ? i : (i - 1 + items.length) % items.length
        );
      }
      if (e.key === 'ArrowRight') {
        setOpenIndex((i) => (i == null ? i : (i + 1) % items.length));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openIndex, items.length]);

  if (!items.length) return null;

  const btnText = (button?.text ?? '').trim();
  const btnUrl = (button?.URL ?? '').trim();
  const btnTarget = ((button?.target ?? '_self') as string) || '_self';
  const showHeaderButton = Boolean(btnText && btnUrl);

  const isMosaicMobile = items.length >= 6;
  const mobileMosaic = isMosaicMobile ? items.slice(0, 6) : [];
  const mobileRest = isMosaicMobile ? items.slice(6) : items;

  function CardVisual(it: GalleryItem, variant: 'mosaic' | 'simple') {
    const img = mediaUrl(it.image);
    const alt = mediaAlt(it.image, it.title ?? undefined);

    return (
      <div className="relative h-full overflow-hidden rounded-lg border border-secondary/25 bg-lightblack/[0.03]">
        <div
          className={cn(
            'relative',
            variant === 'mosaic' ? 'h-full' : 'aspect-[4/3]'
          )}
        >
          {img ? (
            <Image
              src={img}
              alt={alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={cn(
                'object-cover transition-all duration-700',
                isGrayscale ? 'grayscale group-hover:grayscale-0' : '',
                'group-hover:scale-110'
              )}
            />
          ) : null}

          <div className="absolute inset-0 bg-gradient-to-t from-lightblack/80 via-lightblack/18 to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute bottom-4 left-4 right-14 z-10">
            {it.kicker ? (
              <div className="text-muted text-[11px] md:text-xs">
                {it.kicker}
              </div>
            ) : null}
            {it.title ? (
              <div className="mt-1 text-charcoal text-lg font-semibold leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                {it.title}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  function Card(it: GalleryItem, idx: number, variant: 'mosaic' | 'simple') {
    const instaHref = (it.link_url ?? '').trim();
    const instaTarget = ((it.link_target ?? '_blank') as string) || '_blank';

    return (
      <div
        className="group relative h-full"
        role="button"
        tabIndex={0}
        onClick={() => setOpenIndex(idx)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpenIndex(idx);
          }
        }}
        aria-label={it.title ? `Megnyitás: ${it.title}` : 'Megnyitás'}
      >
        <div className="absolute right-3 top-3 z-30 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex(idx);
            }}
            className="grid h-9 w-9 place-items-center rounded-full border border-lightblack/15 bg-white/95 text-lightblack shadow-sm backdrop-blur-sm transition-transform duration-200 hover:scale-[1.03]"
            aria-label="Kép megnyitása"
          >
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {instaHref ? (
          <a
            href={instaHref}
            target={instaTarget}
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-3 right-3 z-30 grid h-9 w-9 place-items-center rounded-full border border-lightblack/15 bg-white/95 text-lightblack shadow-sm backdrop-blur-sm transition-transform duration-200 hover:scale-[1.03]"
            aria-label="Megnyitás Instagramon"
          >
            <Instagram className="h-4 w-4" />
          </a>
        ) : null}

        {CardVisual(it, variant)}
      </div>
    );
  }

  return (
    <section className="bg-charcoal">
      <Container className="py-10 md:py-14">
        {heading || sub_heading || showHeaderButton ? (
          <div className="mb-6 md:mb-8">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                {heading ? (
                  <WriteInHeading
                    text={heading}
                    className="text-left text-4xl font-light leading-tight text-secondary md:text-5xl"
                  />
                ) : null}

                {heading ? <GoldRule className="mt-4" /> : null}

                {sub_heading ? (
                  <WriteInSubheading
                    text={sub_heading}
                    className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-secondary md:mx-0 md:mt-6 md:text-left md:text-base"
                  />
                ) : null}
              </div>

              {showHeaderButton ? (
                <HeaderButton text={btnText} href={btnUrl} target={btnTarget} />
              ) : null}
            </div>
          </div>
        ) : null}

        {/* MOBILE */}
        <div className="md:hidden">
          {isMosaicMobile ? (
            <>
              <div className="grid grid-cols-2 grid-rows-[repeat(8,clamp(72px,12vw,108px))] gap-2">
                {mobileMosaic.map((it, i) => (
                  <div
                    key={it.id ?? `m-${i}`}
                    className={cn(mobilePlacement(i), 'min-w-0 h-full')}
                  >
                    {Card(it, i, 'mosaic')}
                  </div>
                ))}
              </div>

              {mobileRest.length ? (
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {mobileRest.map((it, j) => {
                    const idx = 6 + j;
                    return (
                      <div key={it.id ?? `mr-${j}`} className="min-w-0">
                        {Card(it, idx, 'simple')}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {items.map((it, idx) => (
                <div key={it.id ?? `ms-${idx}`} className="min-w-0">
                  {Card(it, idx, 'simple')}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block">
          <div className="space-y-2">
            {blocks.map((block, bi) => {
              const mirror = bi % 2 === 1;
              const isFull = block.length === 5;

              return (
                <div
                  key={`b-${bi}`}
                  className={cn(
                    'grid grid-cols-3 gap-2',
                    isFull ? 'grid-rows-[repeat(6,clamp(96px,8vw,128px))]' : ''
                  )}
                >
                  {block.map((it, pos) => {
                    const globalIndex = bi * 5 + pos;
                    const place = isFull
                      ? desktopPlacementInBlock(
                          pos as 0 | 1 | 2 | 3 | 4,
                          mirror
                        )
                      : '';

                    return (
                      <div
                        key={it.id ?? `d-${bi}-${pos}`}
                        className={cn('min-w-0', isFull ? 'h-full' : '', place)}
                      >
                        {Card(it, globalIndex, isFull ? 'mosaic' : 'simple')}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {current ? (
          <motion.div
            className="fixed inset-0 z-[80]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: reduce ? { duration: 0 } : { duration: 0.2 },
            }}
            exit={{
              opacity: 0,
              transition: reduce ? { duration: 0 } : { duration: 0.2 },
            }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-lightblack/70 backdrop-blur-sm"
              aria-label="Bezárás"
              onClick={() => setOpenIndex(null)}
            />

            <div className="absolute inset-0 flex items-stretch justify-center p-0 md:items-center md:p-6">
              {(() => {
                const curSrc = mediaUrl(current.image);

                return (
                  <motion.div
                    initial={{ y: 18, opacity: 0, scale: 0.98 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: reduce
                        ? { duration: 0 }
                        : { duration: 0.28, ease: EASE },
                    }}
                    exit={{
                      y: 12,
                      opacity: 0,
                      scale: 0.98,
                      transition: reduce
                        ? { duration: 0 }
                        : { duration: 0.18, ease: EASE },
                    }}
                    className={cn(
                      'relative flex w-full flex-col overflow-hidden border border-secondary/25 bg-charcoal shadow-2xl',
                      // mobil: full screen
                      'h-[100svh] supports-[height:100dvh]:h-[100dvh] rounded-none',
                      // desktop: kapjon magasságot is, különben a kép 0px
                      'md:h-[min(85vh,720px)] md:w-[min(100%-1.5rem,980px)] md:rounded-lg'
                    )}
                  >
                    <div className="relative flex-1 min-h-0 bg-lightblack/[0.03]">
                      {curSrc ? (
                        <Image
                          src={curSrc}
                          alt={mediaAlt(
                            current.image,
                            current.title ?? undefined
                          )}
                          fill
                          sizes="(max-width: 768px) 100vw, 980px"
                          className="object-contain filter-none"
                        />
                      ) : null}
                    </div>

                    <div className="flex shrink-0 items-center justify-between gap-4 p-4 md:p-5">
                      <div className="min-w-0">
                        {current.kicker ? (
                          <div className="text-muted text-xs">
                            {current.kicker}
                          </div>
                        ) : null}
                        {current.title ? (
                          <div className="mt-1 truncate text-lg font-semibold text-lightblack md:text-xl">
                            {current.title}
                          </div>
                        ) : null}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="grid h-10 w-10 place-items-center rounded-full border border-secondary/30 bg-lightblack/[0.03] text-lightblack"
                          onClick={() =>
                            setOpenIndex((i) =>
                              i == null
                                ? i
                                : (i - 1 + items.length) % items.length
                            )
                          }
                          aria-label="Előző"
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          className="grid h-10 w-10 place-items-center rounded-full border border-secondary/30 bg-lightblack/[0.03] text-lightblack"
                          onClick={() =>
                            setOpenIndex((i) =>
                              i == null ? i : (i + 1) % items.length
                            )
                          }
                          aria-label="Következő"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          className="grid h-10 w-10 place-items-center rounded-full border border-secondary/30 bg-lightblack/[0.03] text-lightblack"
                          onClick={() => setOpenIndex(null)}
                          aria-label="Bezárás"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
