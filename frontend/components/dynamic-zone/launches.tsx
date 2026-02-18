'use client';

import { type Variants, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

import { Heading } from '../elements/heading';
import { Subheading } from '../elements/subheading';

const isExternalHref = (href: string) => /^https?:\/\//i.test(href);

const pickText = (entry: any, keys: string[]) => {
  for (const k of keys) {
    const v = entry?.[k];
    if (typeof v === 'string' && v.trim()) return v.trim();
  }
  return '';
};

type Slide = {
  key: string;
  no: number;
  title: string;
  desc?: string;
  ctaText?: string;
  ctaHref?: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.26 } as const;

// lassú, “szemmel látható” mozgás
const LAZY_T = { duration: 1.15, ease: [0.16, 1, 0.3, 1] as const };

const mod = (n: number, m: number) => ((n % m) + m) % m;

// ✅ signed offset: -2,-1,0,1,2 … (a legrövidebb irány)
function signedOffset(idx: number, active: number, total: number) {
  if (total <= 0) return 0;
  let d = idx - active;
  const half = Math.floor(total / 2);
  if (d > half) d -= total;
  if (d < -half) d += total;
  return d;
}

/* ──────────────────────────────────────────────
   Write-in typography (mint a CTA-ban)
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

function GoldLine({ align }: { align: 'center' | 'left' }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      initial={reduce ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.2 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={VIEWPORT}
      transition={
        reduce ? { duration: 0 } : { duration: 0.65, ease: EASE, delay: 0.05 }
      }
      className={[
        'mt-5 h-px w-20 origin-left rounded-full bg-muted',
        align === 'center' ? 'mx-auto' : 'mx-0',
      ].join(' ')}
    />
  );
}

/* ──────────────────────────────────────────────
   UI bits
────────────────────────────────────────────── */
function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function UnderlineCTA({ text, href }: { text: string; href: string }) {
  const base =
    'group inline-flex items-center gap-2 text-sm font-semibold text-secondary underline underline-offset-4 decoration-secondary/40 transition-colors hover:text-muted hover:decoration-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/15 focus-visible:rounded-md';

  const icon =
    'h-4 w-4 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0';

  const external = isExternalHref(href);

  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={base}
      aria-label={text}
    >
      <span>{text}</span>
      <ArrowUpRightIcon className={icon} />
    </a>
  ) : (
    <Link href={href} className={base} aria-label={text}>
      <span>{text}</span>
      <ArrowUpRightIcon className={icon} />
    </Link>
  );
}

export const Launches = ({
  heading,
  sub_heading,
  launches,
}: {
  heading: string;
  sub_heading: string;
  launches: any[];
}) => {
  const reduce = useReducedMotion();

  const slides: Slide[] = useMemo(() => {
    const src = Array.isArray(launches) ? launches : [];
    return src.map((entry, i) => {
      const raw = entry?.mission_number ?? i + 1;
      const no = typeof raw === 'number' ? raw : i + 1;

      const title =
        pickText(entry, ['title', 'heading', 'name']) || `Lépés ${i + 1}`;
      const desc = pickText(entry, [
        'description',
        'desc',
        'text',
        'excerpt',
        'summary',
        'sub_heading',
      ]);

      const ctaText =
        typeof entry?.ctaText === 'string' ? entry.ctaText.trim() : '';
      const ctaHref =
        typeof entry?.ctaHref === 'string' ? entry.ctaHref.trim() : '';
      const hasCta = !!(ctaText && ctaHref);

      return {
        key: String(entry?.id ?? entry?.documentId ?? i),
        no,
        title,
        desc: desc || undefined,
        ctaText: hasCta ? ctaText : undefined,
        ctaHref: hasCta ? ctaHref : undefined,
      };
    });
  }, [launches]);

  const total = slides.length;
  const [active, setActive] = useState(0);
  const safeActive = total ? mod(active, total) : 0;

  // autoloop (pause hover/focus; reduced motion off)
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduce || paused || total <= 1) return;
    const id = window.setInterval(() => {
      setActive((p) => mod(p + 1, total));
    }, 6800);
    return () => window.clearInterval(id);
  }, [reduce, paused, total]);

  const go = (dir: number) => {
    if (total <= 1) return;
    setActive((p) => mod(p + dir, total));
  };

  // ✅ “peek” tuning (StepCarousel érzet)
  const PEEK_1 = 18;
  const PEEK_2 = 34;
  const ROT_1 = 1.1;
  const ROT_2 = 2.1;

  return (
    <section className="w-full relative h-full pt-20 md:pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[420px_1fr] md:gap-8 md:items-start">
          {/* LEFT: header */}
          <div className="text-left md:pt-12">
            <WriteInHeading
              text={heading}
              className="text-left text-4xl md:text-6xl lg:text-7xl font-light text-secondary leading-[1.02]"
            />

            <GoldLine align="left" />

            <WriteInSubheading
              text={sub_heading}
              className="mt-5 max-w-2xl mx-auto md:mx-0 text-left text-sm md:text-base leading-relaxed text-lightblack/80"
            />
          </div>

          {/* RIGHT: carousel */}
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') go(-1);
              if (e.key === 'ArrowRight') go(1);
            }}
            aria-label="Lépések karusszel"
          >
            <div
              className="relative h-[350px] md:h-[420px] overflow-visible"
              style={{ perspective: '900px' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {slides.map((s, idx) => {
                  if (!total) return null;

                  const d = signedOffset(idx, safeActive, total);

                  // csak a közeli kártyákat tartsuk “életben”
                  const isFront = d === 0;
                  const isNear = Math.abs(d) <= 2;
                  if (!isNear) return null;

                  const dir = Math.sign(d); // -1 = bal, +1 = jobb

                  const state =
                    d === 0
                      ? { x: 0, y: 0, rotateZ: 0, scale: 1, opacity: 1 }
                      : Math.abs(d) === 1
                        ? {
                            x: dir * PEEK_1,
                            y: -26,
                            rotateZ: dir * ROT_1,
                            scale: 0.95,
                            opacity: 0.92,
                          }
                        : {
                            x: dir * PEEK_2,
                            y: -50,
                            rotateZ: dir * ROT_2,
                            scale: 0.9,
                            opacity: 0.82,
                          };

                  const z = 50 - Math.abs(d) * 10;

                  return (
                    <motion.div
                      key={s.key}
                      className="absolute w-[92%] sm:w-[86%] md:w-[86%] lg:w-[78%]"
                      style={{
                        zIndex: z,
                        pointerEvents: isFront ? 'auto' : 'none',
                        transformStyle: 'preserve-3d',
                      }}
                      initial={false}
                      animate={state}
                      transition={reduce ? { duration: 0 } : LAZY_T}
                    >
                      <motion.div
                        className={[
                          'relative overflow-hidden rounded-[26px] bg-white',
                          'border border-charcoal/15',
                          isFront
                            ? 'shadow-[0_10px_24px_rgba(0,0,0,0.08)]'
                            : 'shadow-[0_8px_18px_rgba(0,0,0,0.05)]',
                        ].join(' ')}
                        drag={isFront && !reduce && total > 1 ? 'x' : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.06}
                        onDragEnd={(_, info) => {
                          if (!isFront || reduce || total <= 1) return;
                          if (info.offset.x < -70) go(1);
                          if (info.offset.x > 70) go(-1);
                        }}
                        whileTap={
                          isFront && !reduce ? { scale: 0.995 } : undefined
                        }
                        transition={
                          reduce
                            ? { duration: 0 }
                            : { duration: 0.25, ease: EASE }
                        }
                        aria-hidden={!isFront}
                      >
                        {/* ✅ FIX: hátsó kártyákon ne látszódjon a tartalom (csak a “lap”) */}
                        <div className="relative p-6 md:p-8">
                          {/* (opcionális) a kártya magasság stabil legyen, akkor is ha a content el van rejtve */}
                          <div className="min-h-[240px] md:min-h-[290px]">
                            {/* ✅ sarokszám: maradhat, de csak fronton látszódjon (különben “átüt”) */}
                            <div
                              className={[
                                'pointer-events-none absolute right-4 top-3 md:right-8 md:top-2',
                                'select-none tabular-nums font-semibold',
                                'text-secondary',
                                'text-[34px] md:text-[72px]',
                                isFront ? '' : 'invisible',
                              ].join(' ')}
                            >
                              <span className="relative">
                                <span className="relative z-10">
                                  {String(s.no).padStart(2, '0')}
                                </span>
                                <span
                                  className="absolute inset-[-6px] -z-10 md:hidden rounded-lg blur-[10px]"
                                  style={{
                                    background: 'rgba(255,255,255,0.65)',
                                  }}
                                  aria-hidden
                                />
                              </span>
                            </div>

                            {/* ✅ content blokk: csak fronton látható */}
                            <div
                              className={[
                                'max-w-2xl',
                                isFront
                                  ? 'opacity-100 visible'
                                  : 'opacity-0 invisible pointer-events-none select-none',
                              ].join(' ')}
                              aria-hidden={!isFront}
                            >
                              <div
                                className={[
                                  'text-secondary leading-[1.06]',
                                  'text-[26px] sm:text-[30px]',
                                  'md:text-5xl',
                                  'break-words',
                                  'hyphens-auto',
                                ].join(' ')}
                                style={{ textWrap: 'balance' as any }}
                              >
                                {s.title}
                              </div>

                              <GoldLine align="left" />

                              {s.desc ? (
                                <p className="mt-4 text-sm md:text-base leading-relaxed text-lightblack/80">
                                  {s.desc}
                                </p>
                              ) : null}

                              {s.ctaText && s.ctaHref ? (
                                <div className="mt-6">
                                  <UnderlineCTA
                                    text={s.ctaText}
                                    href={s.ctaHref}
                                  />
                                </div>
                              ) : null}

                              <div className="mt-8 flex items-center justify-center gap-2">
                                {Array.from({ length: Math.max(1, total) }).map(
                                  (_, d2) => {
                                    const on = d2 === safeActive;
                                    return (
                                      <button
                                        key={d2}
                                        type="button"
                                        onClick={() => setActive(d2)}
                                        className={[
                                          'h-2.5 w-2.5 rounded-full transition',
                                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/15',
                                          on
                                            ? 'bg-secondary'
                                            : 'bg-lightblack/25 hover:bg-charcoal/35',
                                        ].join(' ')}
                                        aria-label={`Ugrás: ${d2 + 1}.`}
                                        aria-pressed={on}
                                      />
                                    );
                                  }
                                )}
                              </div>
                            </div>

                            {/* ✅ BACK kártyákon csak “blank lap” marad (nem transzparens content) */}
                            {!isFront ? (
                              <div
                                aria-hidden
                                className="absolute inset-0 rounded-[26px] bg-white"
                              />
                            ) : null}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* alul nyilak */}
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={total <= 1}
                className={[
                  'inline-flex h-11 w-11 items-center justify-center rounded-xl',
                  'bg-white border border-charcoal/15',
                  'text-secondary',
                  'shadow-[0_6px_14px_rgba(0,0,0,0.06)]',
                  'transition hover:opacity-90',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/15',
                  'disabled:opacity-50',
                ].join(' ')}
                aria-label="Előző"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => go(1)}
                disabled={total <= 1}
                className={[
                  'inline-flex h-11 w-11 items-center justify-center rounded-xl',
                  'bg-white border border-charcoal/15',
                  'text-secondary',
                  'shadow-[0_6px_14px_rgba(0,0,0,0.06)]',
                  'transition hover:opacity-90',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/15',
                  'disabled:opacity-50',
                ].join(' ')}
                aria-label="Következő"
              >
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
