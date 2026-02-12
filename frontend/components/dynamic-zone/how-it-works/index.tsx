// components/dynamic-zone/how-it-works/index.tsx
'use client';

import {
  AnimatePresence,
  type AnimationPlaybackControls,
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  Calendar,
  type LucideIcon,
  MessageCircle,
  Paintbrush,
  Scissors,
} from 'lucide-react';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Container } from '../../container';
import { Heading } from '../../elements/heading';
import { Subheading } from '../../elements/subheading';
import { Card } from './card';

// components/dynamic-zone/how-it-works/index.tsx

// components/dynamic-zone/how-it-works/index.tsx

type StepInput = {
  title?: string | null;
  description?: string | null;
  ctaText?: string | null;
  ctaHref?: string | null;
};

type Step = {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  icon: LucideIcon;
};

// -----------------------------
// Utils
// -----------------------------
const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));
const pad2 = (n: number) => String(n).padStart(2, '0');
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// -----------------------------
// Params
// -----------------------------
const PARAMS = {
  GOLD: '#B2933D',

  STAGE_H: { mobile: 320, desktop: 360 },
  BASE_Y: { mobile: 140, desktop: 154 },
  CURVE_AMP: { mobile: 18, desktop: 22 },

  // denser ticks
  TICK_LEN: {
    minor: { mobile: 14, desktop: 16 },
    mid: { mobile: 28, desktop: 32 },
    major: { mobile: 62, desktop: 72 },
  },

  DROP_LEN: { mobile: 60, desktop: 80 },
  BIG_LABEL_Y: { mobile: 42, desktop: 48 },

  // rotation motion
  SPRING: { type: 'spring' as const, stiffness: 220, damping: 30, mass: 1.0 },
  SOFT: { duration: 0.34, ease: [0.22, 1, 0.36, 1] as const },

  // content motion (milestone-like “slide + settle” feel)
  CONTENT: { type: 'spring' as const, stiffness: 520, damping: 46, mass: 0.9 },

  AUTO_INTERVAL_MS: { min: 2200, max: 2900 },
  AUTO_PAUSE_MS: 11000,
} as const;

function TogglePill({
  value,
  onChange,
  reduce,
}: {
  value: boolean;
  onChange: (v: boolean) => void;
  reduce: boolean;
}) {
  return (
    <div className="mt-4 inline-flex rounded-full bg-white/10 p-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
      <div className="relative flex">
        <motion.span
          aria-hidden
          className="absolute bottom-0 top-0 rounded-full bg-white/15 shadow-[0_12px_30px_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(255,255,255,0.08)]"
          animate={{ left: value ? 0 : '50%', width: '50%' }}
          transition={
            reduce
              ? { duration: 0 }
              : { type: 'spring', stiffness: 420, damping: 34 }
          }
        />
        <button
          type="button"
          onClick={() => onChange(true)}
          className={[
            'relative z-10 rounded-full px-6 py-2 text-sm',
            'text-white/85 transition',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25',
            value ? 'text-white' : 'hover:text-white',
          ].join(' ')}
        >
          Igen
        </button>
        <button
          type="button"
          onClick={() => onChange(false)}
          className={[
            'relative z-10 rounded-full px-6 py-2 text-sm',
            'text-white/85 transition',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25',
            !value ? 'text-white' : 'hover:text-white',
          ].join(' ')}
        >
          Nem
        </button>
      </div>
    </div>
  );
}

// -----------------------------
// Arc helpers (2D true circular arc)
// -----------------------------
const safeAsin = (x: number) => Math.asin(clamp(x, -0.98, 0.98));

function TickArc({
  k,
  offsetIndex,
  stepAngle,
  tickAngle,
  radius,
  arcY0,
  thetaMax,
  lenPx,
  baseOpacity,
  tilt,
}: {
  k: number;
  offsetIndex: ReturnType<typeof useMotionValue<number>>;
  stepAngle: number;
  tickAngle: number;
  radius: number;
  arcY0: number;
  thetaMax: number;
  lenPx: number;
  baseOpacity: number;
  tilt: ReturnType<typeof useSpring>;
}) {
  const theta = useTransform(offsetIndex, (o) => k * tickAngle - o * stepAngle);

  const x = useTransform(theta, (t) => radius * Math.sin(t));
  const y = useTransform(theta, (t) => arcY0 + radius * (1 - Math.cos(t)));

  const fade = useTransform(theta, (t) =>
    clamp(1 - Math.abs(t) / Math.max(1e-4, thetaMax), 0, 1)
  );
  const opacity = useTransform(fade, (f) => baseOpacity * (0.18 + 0.82 * f));

  const tiltTick = useTransform(tilt, (t) => t);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0"
      style={{ x, y, opacity }}
    >
      <motion.span
        className="block w-px bg-white"
        style={{
          height: lenPx,
          rotate: tiltTick,
          transformOrigin: 'top center',
        }}
      />
    </motion.div>
  );
}

function StepMarkerArc({
  index,
  step,
  offsetIndex,
  stepAngle,
  radius,
  arcY0,
  thetaMax,
  dropLen,
  isActive,
  reduce,
  onPick,
  tilt,
}: {
  index: number;
  step: Step;
  offsetIndex: ReturnType<typeof useMotionValue<number>>;
  stepAngle: number;
  radius: number;
  arcY0: number;
  thetaMax: number;
  dropLen: number;
  isActive: boolean;
  reduce: boolean;
  onPick: () => void;
  tilt: ReturnType<typeof useSpring>;
}) {
  const Icon = step.icon;

  const theta = useTransform(offsetIndex, (o) => (index - o) * stepAngle);
  const x = useTransform(theta, (t) => radius * Math.sin(t));
  const y = useTransform(theta, (t) => arcY0 + radius * (1 - Math.cos(t)));

  const tVis = useTransform(theta, (th) => {
    const d = Math.abs(th);
    return clamp(1 - d / Math.max(1e-4, thetaMax * 0.9), 0, 1);
  });

  const op = useTransform(tVis, (v) => lerp(0.14, 0.82, v));
  const scale = useTransform(tVis, (v) => lerp(0.96, 1.02, v));
  const iconOp = useTransform(tVis, (v) => lerp(0.1, 0.55, v));
  const labelOp = useTransform(tVis, (v) => lerp(0.08, 0.58, v));
  const lineOp = useTransform(tVis, (v) => lerp(0.08, 0.92, v));

  const tiltMarker = useTransform(tilt, (t) => t * 0.75);

  return (
    <motion.div
      className="absolute left-0 top-0"
      style={{
        x,
        y,
        opacity: op,
        scale,
        rotate: tiltMarker,
        transformOrigin: 'center top',
      }}
    >
      <motion.div
        aria-hidden
        className="absolute left-0 -translate-x-1/2 whitespace-nowrap text-[12px] font-semibold tracking-wide text-white/70"
        style={{ top: -64, opacity: isActive ? 0 : labelOp }}
      >
        {pad2(index + 1)}
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0"
        style={{ opacity: isActive ? 0 : lineOp }}
      >
        <span
          className="block w-px bg-white/70"
          style={{
            height: dropLen,
            transform: 'translateX(-0.5px)',
            borderRadius: 999,
            filter: 'drop-shadow(0 22px 30px rgba(0,0,0,0.42))',
          }}
        />
      </motion.div>

      <div className="absolute left-0 top-0 -translate-x-1/2">
        <motion.button
          type="button"
          onClick={onPick}
          className="relative rounded-[18px] bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
          style={{ width: 78, height: dropLen + 92 }}
          whileHover={reduce ? undefined : { y: -0.5, scale: 1.01 }}
          whileTap={reduce ? undefined : { scale: 0.99 }}
          transition={
            reduce ? undefined : { type: 'spring', stiffness: 320, damping: 26 }
          }
          aria-label={`${pad2(index + 1)} – ${step.title}`}
        >
          <motion.div
            aria-hidden
            className="absolute left-1/2"
            style={{
              top: dropLen + 14,
              transform: 'translateX(-50%)',
              opacity: isActive ? 0 : iconOp,
            }}
          >
            <div
              className="rounded-full"
              style={{
                padding: 9,
                background: 'rgba(255,255,255,0.02)',
                boxShadow:
                  '0 24px 60px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.06)',
              }}
            >
              <Icon className="h-5 w-5 text-white/86" />
            </div>
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
}

function ActiveMarker({
  y,
  dropLen,
  title,
  Icon,
  motionKey,
  dir,
  reduce,
  tilt,
}: {
  y: number;
  dropLen: number;
  title: string;
  Icon: LucideIcon;
  motionKey: number;
  dir: 1 | -1;
  reduce: boolean;
  tilt: ReturnType<typeof useSpring>;
}) {
  const enterX = dir * 14;
  const exitX = -dir * 10;

  const tiltActive = useTransform(tilt, (t) => t * 0.55);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 z-20"
      style={{ transform: `translateX(-50%) translateY(${y}px)` }}
    >
      <motion.div style={{ rotate: tiltActive, transformOrigin: 'center top' }}>
        {reduce ? (
          <span
            className="block"
            style={{
              width: 2,
              height: dropLen,
              transform: 'translateX(-1px)',
              borderRadius: 999,
              backgroundImage:
                'linear-gradient(to bottom, rgba(178,147,61,0.00), rgba(178,147,61,0.98), rgba(178,147,61,0.28))',
              filter:
                'drop-shadow(0 24px 34px rgba(0,0,0,0.42)) drop-shadow(0 18px 30px rgba(178,147,61,0.28))',
            }}
          />
        ) : (
          <motion.span
            key={`gold-line-${motionKey}`}
            className="block"
            initial={{ scaleY: 0.9, y: -4 }}
            animate={{ scaleY: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 420, damping: 34 }}
            style={{
              width: 2,
              height: dropLen,
              transform: 'translateX(-1px)',
              transformOrigin: 'top',
              borderRadius: 999,
              backgroundImage:
                'linear-gradient(to bottom, rgba(178,147,61,0.00), rgba(178,147,61,0.98), rgba(178,147,61,0.28))',
              filter:
                'drop-shadow(0 24px 34px rgba(0,0,0,0.42)) drop-shadow(0 18px 30px rgba(178,147,61,0.28))',
            }}
          />
        )}

        <div
          className="absolute left-1/2"
          style={{ top: dropLen + 14, transform: 'translateX(-50%)' }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`active-content-${motionKey}`}
              initial={
                reduce
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: enterX, y: 6 }
              }
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={
                reduce
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: exitX, y: -4 }
              }
              transition={reduce ? { duration: 0 } : (PARAMS.CONTENT as any)}
              className="flex flex-col items-center"
            >
              <Icon className="h-7 w-7 text-white/92 drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)]" />
              <div className="mt-3 text-center text-base md:text-lg font-semibold tracking-tight text-white/88">
                {title}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export const HowItWorks = ({
  heading,
  sub_heading,
  steps,
}: {
  heading?: string | null;
  sub_heading?: string | null;
  steps?: StepInput[] | null;
}) => {
  const reduce = useReducedMotion();

  const fallback: Omit<Step, 'icon'>[] = useMemo(
    () => [
      {
        title: 'Időpont foglalás',
        description:
          'Kezdje meg útját a megújulás felé. Válassza ki az Önnek legmegfelelőbb időpontot kényelmes online rendszerünkön keresztül, vagy hívjon minket bizalommal egyedi igényeivel.',
        ctaText: 'Foglalás most',
        ctaHref: '#',
      },
      {
        title: 'Konzultáció',
        description:
          'Személyes találkozó szakértőinkkel, ahol részletesen felmérjük igényeit, hajtípusát és stílusát. Egy közös beszélgetés során megalkotjuk az Önre szabott, egyedi tervet.',
      },
      {
        title: 'Szolgáltatás',
        description:
          'Dőljön hátra és élvezze a prémium kezelést nyugodt, luxus környezetben. A legkiválóbb anyagok és legmodernebb technikák felhasználásával varázsoljuk újjá megjelenését.',
      },
      {
        title: 'Utóápolás',
        description:
          'A törődés nem ér véget a szalonban. Személyre szabott tanácsokkal és professzionális termék-ajánlással segítünk, hogy az eredmény tartósan ragyogó maradjon.',
        ctaText: 'Kapcsolat',
        ctaHref: '#',
      },
    ],
    []
  );

  const iconByIndex: LucideIcon[] = useMemo(
    () => [Calendar, MessageCircle, Scissors, Paintbrush],
    []
  );

  const resolvedSteps: Step[] = useMemo(() => {
    const src = Array.isArray(steps) && steps.length ? steps : fallback;
    return src.map((s, i) => ({
      title: (s.title ?? fallback[i]?.title ?? `Lépés ${i + 1}`) as string,
      description: (s.description ?? fallback[i]?.description ?? '') as string,
      ctaText: (s as any).ctaText ?? fallback[i]?.ctaText ?? undefined,
      ctaHref: (s as any).ctaHref ?? fallback[i]?.ctaHref ?? undefined,
      icon: iconByIndex[i % iconByIndex.length] ?? Scissors,
    }));
  }, [steps, fallback, iconByIndex]);

  const len = resolvedSteps.length;

  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState<boolean>(() => !reduce);
  const [dragging, setDragging] = useState(false);

  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    if (reduce) setAuto(false);
  }, [reduce]);

  // ---- panel width ----
  const panelRef = useRef<HTMLDivElement>(null);
  const [vw, setVw] = useState(0);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries?.[0]?.contentRect?.width ?? 0;
      setVw(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const geom = useMemo(() => {
    const viewportW = Math.max(340, vw || 0);
    const isMobile = viewportW < 560;

    const stageH = isMobile ? PARAMS.STAGE_H.mobile : PARAMS.STAGE_H.desktop;

    const baseY = isMobile ? PARAMS.BASE_Y.mobile : PARAMS.BASE_Y.desktop;
    const amp = isMobile ? PARAMS.CURVE_AMP.mobile : PARAMS.CURVE_AMP.desktop;
    const arcY0 = baseY - amp;

    const radius = clamp(viewportW * (isMobile ? 4.6 : 5.0), 1600, 5600);

    const desiredPx = isMobile ? 175 : 230;
    const stepAngle = clamp(desiredPx / Math.max(1, radius), 0.055, 0.13);

    const ticksPerStep = isMobile ? 18 : 22;
    const tickAngle = stepAngle / ticksPerStep;

    const dropLen = isMobile ? PARAMS.DROP_LEN.mobile : PARAMS.DROP_LEN.desktop;

    const tickLen = {
      minor: isMobile
        ? PARAMS.TICK_LEN.minor.mobile
        : PARAMS.TICK_LEN.minor.desktop,
      mid: isMobile ? PARAMS.TICK_LEN.mid.mobile : PARAMS.TICK_LEN.mid.desktop,
      major: isMobile
        ? PARAMS.TICK_LEN.major.mobile
        : PARAMS.TICK_LEN.major.desktop,
    };

    const bigLabelY = isMobile
      ? PARAMS.BIG_LABEL_Y.mobile
      : PARAMS.BIG_LABEL_Y.desktop;

    const overscan = isMobile ? 220 : 320;
    const half = viewportW * 0.54 + overscan;
    const thetaMax = safeAsin(half / Math.max(1, radius));

    const pxPerStep = Math.max(1, radius * stepAngle);

    return {
      viewportW,
      isMobile,
      stageH,
      arcY0,
      radius,
      stepAngle,
      tickAngle,
      thetaMax,
      pxPerStep,
      dropLen,
      tickLen,
      bigLabelY,
      ticksPerStep,
    };
  }, [vw]);

  // ---- ring rotation ----
  const offsetIndex = useMotionValue(0);
  const animRef = useRef<AnimationPlaybackControls | null>(null);

  const stopAnim = useCallback(() => {
    animRef.current?.stop();
    animRef.current = null;
  }, []);

  const pauseUntilRef = useRef(0);
  const isDraggingRef = useRef(false);
  const hoveringRef = useRef(false);

  const pauseAuto = useCallback((ms: number = PARAMS.AUTO_PAUSE_MS) => {
    pauseUntilRef.current = Date.now() + ms;
  }, []);

  const nearestIndex = useCallback(
    (v: number) => clamp(Math.round(v), 0, Math.max(0, len - 1)),
    [len]
  );

  const snapTo = useCallback(
    (idx: number, soft = false) => {
      const i = clamp(idx, 0, Math.max(0, len - 1));
      stopAnim();

      if (reduce) {
        offsetIndex.set(i);
        return;
      }

      animRef.current = animate(offsetIndex, i, {
        ...(soft ? PARAMS.SOFT : (PARAMS.SPRING as any)),
      } as any);
    },
    [len, reduce, offsetIndex, stopAnim]
  );

  useEffect(() => {
    if (len <= 0) return;
    const i = clamp(activeRef.current, 0, Math.max(0, len - 1));
    offsetIndex.set(i);
  }, [len, offsetIndex]);

  useEffect(() => {
    if (len <= 0) return;
    snapTo(activeRef.current, true);
  }, [geom.viewportW, len, snapTo]);

  const [liveActive, setLiveActive] = useState(0);
  const lastLiveRef = useRef(0);
  const lastIdxRef = useRef(-1);

  const [dir, setDir] = useState<1 | -1>(1);

  // tilt (movement feedback)
  const tiltRaw = useMotionValue(0);
  const tilt = useSpring(tiltRaw, { stiffness: 260, damping: 28, mass: 0.7 });
  const prevOffRef = useRef(0);
  const prevTRef = useRef(0);
  const tiltZeroTRef = useRef<number | null>(null);

  useEffect(() => {
    prevOffRef.current = offsetIndex.get();
    prevTRef.current = performance.now();
    return () => {
      if (tiltZeroTRef.current) window.clearTimeout(tiltZeroTRef.current);
    };
  }, [offsetIndex]);

  useMotionValueEvent(offsetIndex, 'change', (latest) => {
    const t = performance.now();
    const dt = Math.max(1, t - (prevTRef.current || t));
    const dv = latest - (prevOffRef.current ?? latest);
    const v = (dv / dt) * 1000; // steps / sec
    prevOffRef.current = latest;
    prevTRef.current = t;

    tiltRaw.set(clamp(v * 4.6, -10, 10));

    if (tiltZeroTRef.current) window.clearTimeout(tiltZeroTRef.current);
    tiltZeroTRef.current = window.setTimeout(() => {
      tiltRaw.set(0);
    }, 90);

    const now = t;
    if (now - lastLiveRef.current < 34) return;
    lastLiveRef.current = now;

    const idx = nearestIndex(latest);
    if (idx === lastIdxRef.current) return;

    const prev = lastIdxRef.current;
    lastIdxRef.current = idx;

    if (prev !== -1) setDir(idx > prev ? 1 : -1);

    setLiveActive(idx);
    setActive(idx);
  });

  const displayIndex = dragging ? liveActive : active;
  const displayStep =
    resolvedSteps[clamp(displayIndex, 0, Math.max(0, len - 1))] ??
    resolvedSteps[0];

  // auto loop
  useEffect(() => {
    if (reduce) return;
    if (!auto) return;
    if (len <= 1) return;

    let t: number | null = null;
    let cancelled = false;

    const schedule = () => {
      if (cancelled) return;

      const ms = Math.floor(
        lerp(
          PARAMS.AUTO_INTERVAL_MS.min,
          PARAMS.AUTO_INTERVAL_MS.max,
          Math.random()
        )
      );

      t = window.setTimeout(() => {
        if (cancelled) return;

        if (hoveringRef.current) return schedule();
        if (isDraggingRef.current) return schedule();
        if (Date.now() < pauseUntilRef.current) return schedule();

        const next = (active + 1) % len;
        snapTo(next);
        schedule();
      }, ms);
    };

    schedule();

    return () => {
      cancelled = true;
      if (t) window.clearTimeout(t);
    };
  }, [auto, reduce, len, active, snapTo]);

  // drag
  const dragStartOffsetRef = useRef(0);

  const onDragStart = () => {
    pauseAuto();
    hoveringRef.current = false;
    isDraggingRef.current = true;
    setDragging(true);
    stopAnim();
    dragStartOffsetRef.current = offsetIndex.get();
  };

  const onDragEnd = () => {
    isDraggingRef.current = false;
    setDragging(false);
    const idx = nearestIndex(offsetIndex.get());
    snapTo(idx);
  };

  const dragLayerRef = useRef<HTMLDivElement | null>(null);
  const pointerIdRef = useRef<number | null>(null);
  const pointerStartXRef = useRef(0);
  const scrubStartedRef = useRef(false);
  const suppressPickRef = useRef(false);

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (len <= 1) return;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      pauseAuto();
      snapTo(clamp(active - 1, 0, Math.max(0, len - 1)));
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      pauseAuto();
      snapTo(clamp(active + 1, 0, Math.max(0, len - 1)));
    }
  };

  const tickSlots = useMemo(() => {
    const K = Math.ceil(geom.thetaMax / Math.max(1e-4, geom.tickAngle)) + 10;
    return Array.from({ length: K * 2 + 1 }, (_, i) => i - K);
  }, [geom.thetaMax, geom.tickAngle]);

  return (
    <section className="relative">
      <Container className="mx-auto max-w-7xl py-20 md:py-28">
        {(heading || sub_heading) && (
          <header className="mb-12">
            {heading ? (
              <Heading className="text-left text-4xl md:text-6xl lg:text-7xl font-light text-secondary leading-tight">
                {heading}
              </Heading>
            ) : null}
            {sub_heading ? (
              <Subheading className="mt-4 max-w-xl text-sm leading-relaxed text-lightblack text-left">
                {sub_heading}
              </Subheading>
            ) : null}
          </header>
        )}

        <div
          ref={panelRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          className={[
            'relative overflow-hidden rounded-[28px] md:rounded-[32px]',
            'border border-white/10',
            'bg-[#0b0c0e]',
            'outline-none',
            'shadow-[0_40px_140px_rgba(0,0,0,0.55)]',
            'min-h-[610px] md:min-h-[710px]',
          ].join(' ')}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(900px circle at 20% 12%, rgba(255,255,255,0.10), transparent 58%), radial-gradient(820px circle at 78% 18%, rgba(255,255,255,0.08), transparent 62%), radial-gradient(1200px circle at 50% 120%, rgba(0,0,0,0.88), transparent 58%), radial-gradient(1200px circle at 50% 50%, rgba(0,0,0,0.55), transparent 70%)',
            }}
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay"
          >
            <svg
              className="h-full w-full"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.9"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
              </filter>
              <rect
                width="100%"
                height="100%"
                filter="url(#noiseFilter)"
                opacity="0.6"
              />
            </svg>
          </div>

          <div className="relative z-10 flex h-full flex-col items-center px-6 py-10 md:px-10 md:py-12">
            <div className="mt-2 text-center">
              <div className="text-sm font-medium text-white/85">
                Automatikus váltás
              </div>

              <TogglePill
                reduce={!!reduce}
                value={auto}
                onChange={(v) => {
                  pauseAuto(2500);
                  setAuto(v);
                }}
              />

              <div className="mt-6 max-w-xl text-center text-sm leading-relaxed text-white/55">
                Kattints az ikonokra, vagy húzd a vonalat – billentyűzeten a
                nyilakkal is navigálhatsz.
              </div>
            </div>

            <div className="relative mt-10 w-full flex-1">
              <div
                className="relative mx-auto w-full overflow-hidden"
                style={{ height: geom.stageH, touchAction: 'pan-y' }}
                onMouseEnter={() => {
                  hoveringRef.current = true;
                }}
                onMouseLeave={() => {
                  hoveringRef.current = false;
                  pauseAuto(1800);
                }}
                onPointerDown={(e) => {
                  if (reduce) return;
                  if (e.pointerType === 'mouse' && e.button !== 0) return;
                  if (e.target === dragLayerRef.current) return;

                  pointerIdRef.current = e.pointerId;
                  pointerStartXRef.current = e.clientX;
                  scrubStartedRef.current = false;

                  pauseAuto();
                }}
                onPointerMove={(e) => {
                  if (reduce) return;
                  if (pointerIdRef.current == null) return;
                  if (e.pointerId !== pointerIdRef.current) return;

                  const dx = e.clientX - pointerStartXRef.current;

                  if (!scrubStartedRef.current) {
                    if (Math.abs(dx) < 6) return;

                    scrubStartedRef.current = true;
                    suppressPickRef.current = true;

                    onDragStart();

                    try {
                      (e.currentTarget as any).setPointerCapture?.(e.pointerId);
                    } catch {}
                  }

                  e.preventDefault();

                  const delta = dx / Math.max(1, geom.pxPerStep);
                  const next = clamp(
                    dragStartOffsetRef.current - delta,
                    0,
                    Math.max(0, len - 1)
                  );

                  offsetIndex.set(next);
                  pauseAuto();
                }}
                onPointerUp={(e) => {
                  if (pointerIdRef.current == null) return;
                  if (e.pointerId !== pointerIdRef.current) return;

                  pointerIdRef.current = null;

                  if (scrubStartedRef.current) {
                    scrubStartedRef.current = false;

                    try {
                      (e.currentTarget as any).releasePointerCapture?.(
                        e.pointerId
                      );
                    } catch {}

                    onDragEnd();

                    requestAnimationFrame(() => {
                      suppressPickRef.current = false;
                    });
                  } else {
                    suppressPickRef.current = false;
                  }
                }}
                onPointerCancel={(e) => {
                  if (pointerIdRef.current == null) return;
                  if (e.pointerId !== pointerIdRef.current) return;

                  pointerIdRef.current = null;

                  if (scrubStartedRef.current) {
                    scrubStartedRef.current = false;

                    try {
                      (e.currentTarget as any).releasePointerCapture?.(
                        e.pointerId
                      );
                    } catch {}

                    onDragEnd();

                    requestAnimationFrame(() => {
                      suppressPickRef.current = false;
                    });
                  } else {
                    suppressPickRef.current = false;
                  }
                }}
              >
                <motion.div
                  ref={dragLayerRef}
                  aria-hidden
                  className="absolute inset-0 touch-pan-y"
                  drag={reduce ? false : 'x'}
                  dragConstraints={{ left: -520, right: 520 }}
                  dragElastic={0.06}
                  dragMomentum={false}
                  onDragStart={reduce ? undefined : onDragStart}
                  onDrag={(e, info) => {
                    if (reduce) return;
                    const delta = info.offset.x / Math.max(1, geom.pxPerStep);
                    const next = clamp(
                      dragStartOffsetRef.current - delta,
                      0,
                      Math.max(0, len - 1)
                    );
                    offsetIndex.set(next);
                    pauseAuto();
                  }}
                  onDragEnd={reduce ? undefined : onDragEnd}
                />

                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 z-30 select-none"
                  style={{ top: geom.bigLabelY, transform: 'translateX(-50%)' }}
                >
                  <motion.div
                    key={`big-${displayIndex}`}
                    initial={
                      reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                    transition={
                      reduce ? { duration: 0 } : (PARAMS.CONTENT as any)
                    }
                    className="text-[54px] md:text-[66px] font-semibold tracking-tight text-white/90 drop-shadow-[0_18px_36px_rgba(0,0,0,0.45)]"
                  >
                    {pad2(displayIndex + 1)}
                  </motion.div>
                </div>

                <div
                  className="absolute inset-0"
                  style={{
                    WebkitMaskImage:
                      'linear-gradient(to right, transparent, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent)',
                    maskImage:
                      'linear-gradient(to right, transparent, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent)',
                  }}
                >
                  <div className="absolute left-1/2 top-0 h-full w-0">
                    <ActiveMarker
                      y={geom.arcY0}
                      dropLen={geom.dropLen}
                      title={displayStep?.title ?? ''}
                      Icon={displayStep?.icon ?? Scissors}
                      motionKey={displayIndex}
                      dir={dir}
                      reduce={!!reduce}
                      tilt={tilt}
                    />

                    {tickSlots.map((k) => {
                      const absK = Math.abs(k);

                      const isStepSlot = absK % geom.ticksPerStep === 0;
                      if (absK === 0) return null;

                      const half = Math.max(
                        2,
                        Math.round(geom.ticksPerStep / 2)
                      );
                      const isMid = absK % half === 0;

                      const lenPx = isStepSlot
                        ? geom.tickLen.major
                        : isMid
                          ? geom.tickLen.mid
                          : geom.tickLen.minor;

                      const baseOpacity = isStepSlot
                        ? 0.28
                        : isMid
                          ? 0.23
                          : 0.14;

                      return (
                        <TickArc
                          key={`tick-${k}`}
                          k={k}
                          offsetIndex={offsetIndex}
                          stepAngle={geom.stepAngle}
                          tickAngle={geom.tickAngle}
                          radius={geom.radius}
                          arcY0={geom.arcY0}
                          thetaMax={geom.thetaMax}
                          lenPx={lenPx}
                          baseOpacity={baseOpacity}
                          tilt={tilt}
                        />
                      );
                    })}

                    {resolvedSteps.map((s, i) => (
                      <StepMarkerArc
                        key={`step-${i}`}
                        index={i}
                        step={s}
                        offsetIndex={offsetIndex}
                        stepAngle={geom.stepAngle}
                        radius={geom.radius}
                        arcY0={geom.arcY0}
                        thetaMax={geom.thetaMax}
                        dropLen={geom.dropLen}
                        isActive={i === displayIndex}
                        reduce={!!reduce}
                        tilt={tilt}
                        onPick={() => {
                          if (suppressPickRef.current) return;
                          pauseAuto();
                          snapTo(i);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center text-center">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`card-${displayIndex}`}
                    initial={
                      reduce
                        ? { opacity: 1, y: 0, x: 0 }
                        : { opacity: 0, y: 10, x: dir * 16 }
                    }
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={
                      reduce
                        ? { opacity: 1, y: 0, x: 0 }
                        : { opacity: 0, y: -8, x: -dir * 10 }
                    }
                    transition={
                      reduce ? { duration: 0 } : (PARAMS.CONTENT as any)
                    }
                    className="w-full"
                  >
                    <Card step={displayStep} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="sr-only" aria-hidden>
                {resolvedSteps.map((s, i) => (
                  <span key={`sr-step-${i}`}>{s.title}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
