// components/dynamic-zone/testimonials/slider.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import type { UITestimonial } from './index';
import { cn } from '@/lib/utils';

// components/dynamic-zone/testimonials/slider.tsx

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function isNoDragTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  // bármi interaktív (button/a/input/…) vagy explicit data-no-drag
  return !!target.closest(
    '[data-no-drag],button,a,input,textarea,select,option,label'
  );
}

export const TestimonialsSlider = ({
  testimonials,
}: {
  testimonials: UITestimonial[];
}) => {
  const reduce = useReducedMotion();
  const items = useMemo(
    () => (Array.isArray(testimonials) ? testimonials : []),
    [testimonials]
  );

  const trackRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const drag = useRef({
    isDown: false,
    startX: 0,
    startScrollLeft: 0,
    pointerId: -1,
    moved: false,
  });

  const scrollToIndex = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children.item(idx) as HTMLElement | null;
    if (!child) return;
    track.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
  };

  // autoplay
  useEffect(() => {
    if (!autorotate) return;
    if (items.length <= 1) return;

    const t = setInterval(() => {
      setActive((prev) => {
        const next = prev + 1 >= items.length ? 0 : prev + 1;
        requestAnimationFrame(() => scrollToIndex(next));
        return next;
      });
    }, 5200);

    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autorotate, items.length]);

  // active sync scroll-snap alapján
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      if (!children.length) return;

      const left = track.scrollLeft;
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      for (let i = 0; i < children.length; i++) {
        const d = Math.abs(children[i].offsetLeft - left);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      }
      setActive(best);
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [items.length]);

  const toggleExpand = (key: string) => {
    setExpanded((p) => ({ ...p, [key]: !p[key] }));
    setAutorotate(false);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // ✅ ha gombra/linkre kattintunk: NEM dragolunk, így a click működik
    if (isNoDragTarget(e.target)) return;

    const el = trackRef.current;
    if (!el) return;

    setAutorotate(false);

    drag.current.isDown = true;
    drag.current.moved = false;
    drag.current.startX = e.clientX;
    drag.current.startScrollLeft = el.scrollLeft;
    drag.current.pointerId = e.pointerId;

    try {
      el.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    if (!drag.current.isDown) return;
    if (drag.current.pointerId !== e.pointerId) return;

    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true; // kis küszöb, hogy click ne vesszen el
    el.scrollLeft = drag.current.startScrollLeft - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;

    if (drag.current.pointerId === e.pointerId) {
      drag.current.isDown = false;
      drag.current.pointerId = -1;
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  if (!items.length) {
    return (
      <div className="rounded-3xl border border-charcoal bg-white p-8 text-secondary/60">
        Még nincs megjeleníthető vélemény.
      </div>
    );
  }

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10, filter: 'blur(10px)' }}
      whileInView={
        reduce ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }
      }
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="w-full"
    >
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={cn(
          'flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory',
          'pb-4 select-none',
          'cursor-grab active:cursor-grabbing',
          '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
        )}
        style={{ touchAction: 'pan-y' }}
      >
        {items.map((r, idx) => {
          const isExpanded = !!expanded[r.key];
          const text = r.text ?? '';
          const preview = text.length > 120 ? `${text.slice(0, 120)}…` : text;

          const isActive = idx === active;

          return (
            <div
              key={r.key}
              className={cn(
                'snap-start shrink-0',
                'basis-full md:basis-[calc(50%-12px)]'
              )}
            >
              <div className="group h-full bg-white rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-md transition-all duration-500 border border-charcoal/40 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="h-14 w-14 rounded-full overflow-hidden aspect-square bg-charcoal/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.avatarUrl || '/default-avatar.png'}
                        alt={r.name}
                        className={cn(
                          'h-full w-full object-cover transition-all duration-500',
                          'grayscale',
                          'group-hover:grayscale-0',
                          isActive ? 'grayscale-0' : ''
                        )}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        draggable={false}
                      />
                    </div>

                    {/* muted kör + fehér csillag (ahogy “a jobb volt”) */}
                    <div className="absolute -bottom-1 -right-1 rounded-full bg-muted p-1">
                      <Star
                        className="h-3 w-3 text-white fill-white"
                        strokeWidth={1.2}
                      />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="font-medium text-secondary truncate">
                      {r.name}
                    </div>
                    <div className="text-sm text-secondary/60 flex items-center gap-2">
                      {r.publishedAtLabel ? (
                        <span className="truncate">{r.publishedAtLabel}</span>
                      ) : null}
                      {r.job ? (
                        <>
                          <span className="text-secondary/30">•</span>
                          <span className="truncate">{r.job}</span>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-secondary/90 leading-relaxed">
                    {isExpanded ? text : preview}
                  </p>
                </div>

                {text.length > 120 ? (
                  <button
                    type="button"
                    data-no-drag
                    onClick={() => toggleExpand(r.key)}
                    className="mt-4 flex justify-start text-sm font-medium text-muted hover:opacity-70 transition-opacity duration-300"
                  >
                    {isExpanded ? 'Bezárom' : 'Tovább olvasom'}
                  </button>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={`dot-${i}`}
            type="button"
            data-no-drag
            aria-label={`Ugrás a(z) ${i + 1}. véleményre`}
            onClick={() => {
              setAutorotate(false);
              const idx = clamp(i, 0, items.length - 1);
              setActive(idx);
              scrollToIndex(idx);
            }}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-all',
              i === active
                ? 'bg-muted scale-110'
                : 'bg-secondary/30 hover:bg-secondary/50'
            )}
          />
        ))}
      </div>
    </motion.div>
  );
};
