'use client';

import {
  type Transition,
  type Variants,
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
} from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';
import Image from 'next/image';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Container } from '@/components/container';
import { Heading } from '@/components/elements/heading';
import { Subheading } from '@/components/elements/subheading';
import { cn } from '@/lib/utils';

type MediaLike = any;

type BeforeAfterPair = {
  id?: number;
  label?: string | null;
  before_label?: string | null;
  after_label?: string | null;
  before_image?: MediaLike | null;
  after_image?: MediaLike | null;
};

export type GallerySliderBlock = {
  __component: 'dynamic-zone.gallery-slider' | string;
  id: number;
  heading?: string | null;
  sub_heading?: string | null;
  before_after_pair?: BeforeAfterPair[] | null;
  [key: string]: any;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.26 } as const;

/** IMPORTANT: ne defaultolj localhostra prod miatt */
const STRAPI_BASE = (
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  ''
)
  .replace(/\/$/, '')
  .replace(/\/api$/, '');

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

function pickMediaAttrs(media: any) {
  return media?.data?.attributes ?? media?.attributes ?? media ?? null;
}

function getMediaAlt(media: any, fallback = ''): string {
  const m = pickMediaAttrs(media);
  return (m?.alternativeText || fallback || '').trim();
}

function getBestMediaUrl(media: any): string {
  const m = pickMediaAttrs(media);
  const f = m?.formats;

  const u =
    f?.large?.url ||
    f?.medium?.url ||
    f?.small?.url ||
    f?.thumbnail?.url ||
    m?.url ||
    '';

  return typeof u === 'string' ? u : '';
}

function toAbsUrl(url: string) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return STRAPI_BASE ? `${STRAPI_BASE}${url}` : url;
}

function MediaFillImage({ media, alt }: { media: any; alt: string }) {
  const src = toAbsUrl(getBestMediaUrl(media));
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      draggable={false}
      sizes="(max-width: 1024px) 100vw, 720px"
      className="pointer-events-none select-none object-cover"
    />
  );
}

// --- “íródós” Heading (szavanként, folyamatosabb) ---
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
        show: {
          transition: {
            staggerChildren: 0.035,
            delayChildren: 0.02,
          },
        },
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

// --- “íródós” Subheading (szavanként, folyamatosabb) ---
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
        show: {
          transition: {
            staggerChildren: 0.028,
            delayChildren: 0.06,
          },
        },
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

/**
 * DynamicZoneManager: <Component {...componentData} locale={locale} />
 * => nincs data prop.
 */
export function GallerySliderSection(
  props: GallerySliderBlock & { data?: GallerySliderBlock }
) {
  const reduce = useReducedMotion();
  const data = (props.data ?? props) as GallerySliderBlock;

  const heading = data?.heading?.trim() || 'Előtte–utána átalakulások';
  const sub = data?.sub_heading?.trim() || '';

  const pairs = useMemo(
    () => (data?.before_after_pair ?? []).filter(Boolean) as BeforeAfterPair[],
    [data?.before_after_pair]
  );

  const [active, setActive] = useState(0);
  const current = pairs[active] ?? pairs[0];

  useEffect(() => {
    if (!pairs.length) return;
    if (active > pairs.length - 1) setActive(0);
  }, [pairs.length, active]);

  if (!pairs.length) return null;

  // underline anim (Services-szerű)
  const underlineInitial = reduce
    ? { scaleX: 1, opacity: 1 }
    : { scaleX: 0.12, opacity: 0 };

  const underlineInView = { scaleX: 1, opacity: 1 };

  const underlineTransition: Transition = reduce
    ? { duration: 0.01 }
    : { duration: 0.95, ease: EASE, delay: 0.18 };

  const chipsWrap: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: { transition: { staggerChildren: 0.06, delayChildren: 0.22 } },
      };

  const chipItem: Variants = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
      };

  // RIGHT card: látványosabb beúszás
  const rightCardInitial = reduce
    ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' }
    : {
        opacity: 0,
        x: 90,
        y: 10,
        scale: 0.965,
        rotate: 0.8,
        filter: 'blur(18px)',
      };

  const rightCardInView = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: 'blur(0px)',
  };

  const rightCardTransition: Transition = reduce
    ? { duration: 0.01 }
    : { type: 'spring', stiffness: 140, damping: 18, mass: 0.85 };

  return (
    <section className="bg-charcoal">
      <div className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* LEFT */}
            <div className="lg:col-span-5">
              <WriteInHeading
                text={heading}
                className={[
                  'text-left text-4xl md:text-6xl',
                  'lg:text-7xl font-light text-secondary',
                  'leading-tight',
                  'max-w-xl',
                ].join(' ')}
              />

              <motion.div
                className="mt-6 h-[2px] w-28 origin-left rounded-full bg-muted/80"
                initial={underlineInitial}
                whileInView={underlineInView}
                viewport={VIEWPORT}
                transition={underlineTransition}
              />

              {!!sub ? (
                <WriteInSubheading
                  text={sub}
                  className={[
                    'mt-6 text-left text-secondary',
                    'text-[15px] sm:text-[16px] lg:text-[18px]',
                    'leading-relaxed',
                    'max-w-2xl',
                  ].join(' ')}
                />
              ) : null}

              {/* chips — no “ugrás”: ring-et használunk border helyett */}
              {pairs.length > 1 ? (
                <motion.div
                  className="mt-7 flex flex-wrap gap-2"
                  variants={chipsWrap}
                  initial="hidden"
                  whileInView="show"
                  viewport={VIEWPORT}
                >
                  {pairs.map((p, i) => {
                    const isActive = i === active;
                    const label =
                      p?.label?.trim() ||
                      `Átalakulás ${String(i + 1).padStart(2, '0')}`;

                    return (
                      <motion.button
                        key={p?.id ?? i}
                        type="button"
                        variants={chipItem}
                        onClick={() => setActive(i)}
                        className={cn(
                          // shape / type
                          'rounded-full px-3 py-1.5 text-sm font-medium',
                          // a11y
                          'focus:outline-none focus-visible:ring-2 focus-visible:ring-muted/60 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal',
                          // base (inactive) — “premium pill”
                          'bg-secondary/10 text-secondary ring-1 ring-secondary/20',
                          // hover — finom kontraszt, nem full secondary
                          'hover:bg-secondary/15 hover:text-lightblack hover:ring-secondary/30',
                          // active — sötét pill + arany finom ring
                          isActive &&
                            'bg-lightblack text-charcoal ring-1 ring-muted/40'
                        )}
                      >
                        {label}
                      </motion.button>
                    );
                  })}
                </motion.div>
              ) : null}
            </div>

            {/* RIGHT */}
            <motion.div
              className="lg:col-span-7"
              initial={rightCardInitial}
              whileInView={rightCardInView}
              viewport={VIEWPORT}
              transition={rightCardTransition}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <BeforeAfterSlider
                before={current?.before_image}
                after={current?.after_image}
                beforeLabel={current?.before_label ?? 'Előtte'}
                afterLabel={current?.after_label ?? 'Utána'}
                altFallback={current?.label?.trim() || heading}
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function BeforeAfterSlider({
  before,
  after,
  beforeLabel,
  afterLabel,
  altFallback,
}: {
  before?: MediaLike | null;
  after?: MediaLike | null;
  beforeLabel: string;
  afterLabel: string;
  altFallback: string;
}) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const dragOffsetRef = useRef(0);

  const pos = useMotionValue(0.5);
  const pct = useTransform(pos, (v) => `${v * 100}%`);

  const clipPath = useTransform(pos, (v) => {
    const right = clamp(100 - v * 100, 0, 100);
    return `inset(0 ${right.toFixed(3)}% 0 0)`;
  });

  const [ariaNow, setAriaNow] = useState(50);
  useMotionValueEvent(pos, 'change', (v) => setAriaNow(Math.round(v * 100)));

  const setFromClientX = useCallback(
    (clientX: number, offsetPx = 0) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const v = (clientX - offsetPx - r.left) / r.width;
      pos.set(clamp(v, 0.02, 0.98));
    },
    [pos]
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX, dragOffsetRef.current);
    };

    const onUp = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;

      const v = pos.get();
      if (Math.abs(v - 0.5) <= 0.07) {
        if (reduce) pos.set(0.5);
        else animate(pos, 0.5, { duration: 0.18, ease: EASE });
      }
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, [pos, reduce, setFromClientX]);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = wrapRef.current;
    if (!el) return;

    draggingRef.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);

    const r = el.getBoundingClientRect();
    const handleCenterX = r.left + pos.get() * r.width;

    const target = e.target as Element | null;
    const isHandle = !!target?.closest?.('[data-ba-handle="1"]');

    if (isHandle) {
      dragOffsetRef.current = e.clientX - handleCenterX;
      return;
    }

    dragOffsetRef.current = 0;
    setFromClientX(e.clientX, 0);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 0.05 : 0.02;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      pos.set(clamp(pos.get() - step, 0.02, 0.98));
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      pos.set(clamp(pos.get() + step, 0.02, 0.98));
    }
    if (e.key === 'Home') {
      e.preventDefault();
      pos.set(0.02);
    }
    if (e.key === 'End') {
      e.preventDefault();
      pos.set(0.98);
    }
  };

  const alt =
    getMediaAlt(after, '') || getMediaAlt(before, '') || altFallback || '';

  return (
    <div
      className={cn(
        'rounded-3xl bg-white/70',
        'border border-black/10',
        'shadow-[0_18px_60px_-35px_rgba(0,0,0,0.35)]'
      )}
    >
      <div
        ref={wrapRef}
        className={cn(
          'relative isolate overflow-hidden rounded-3xl bg-black/5',
          'aspect-[16/10] sm:aspect-[16/9]',
          'select-none touch-none',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-muted/60'
        )}
        onPointerDown={onPointerDown}
        role="slider"
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label="Előtte-utána kép összehasonlító"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={ariaNow}
      >
        <div className="absolute inset-0">
          <MediaFillImage media={after} alt={alt} />
        </div>

        <motion.div className="absolute inset-0" style={{ clipPath }}>
          <MediaFillImage media={before} alt={alt} />
        </motion.div>

        <motion.div
          className="absolute top-0 bottom-0 w-[3px] -translate-x-1/2 bg-white/85 shadow-[0_0_0_1px_rgba(0,0,0,0.10)]"
          style={{ left: pct }}
        />

        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
          style={{ left: pct }}
        >
          <motion.button
            data-ba-handle="1"
            type="button"
            className={cn(
              'grid h-12 w-12 place-items-center rounded-full',
              'bg-white border border-black/10',
              'shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)]'
            )}
            whileHover={reduce ? undefined : { scale: 1.04 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            aria-label="Csúszka mozgatása"
          >
            <ArrowLeftRight className="h-5 w-5 text-lightblack" />
          </motion.button>
        </motion.div>

        <div className="pointer-events-none absolute left-4 top-4">
          <div className="rounded-lg bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
            {beforeLabel}
          </div>
        </div>
        <div className="pointer-events-none absolute right-4 top-4">
          <div className="rounded-lg bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
            {afterLabel}
          </div>
        </div>
      </div>
    </div>
  );
}
