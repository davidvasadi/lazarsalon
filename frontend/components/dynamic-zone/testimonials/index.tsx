// components/dynamic-zone/testimonials/index.tsx
'use client';

import { type Variants, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';

import { Container } from '../../container';
import { AmbientColor } from '../../decorations/ambient-color';
import { Heading } from '../../elements/heading';
import { Subheading } from '../../elements/subheading';
import { TestimonialsSlider } from './slider';

// components/dynamic-zone/testimonials/index.tsx

type StrapiTestimonial = {
  id?: number | string;
  text?: string | null;
  user?: {
    firstname?: string | null;
    lastname?: string | null;
    job?: string | null;
    image?: any;
  } | null;
};

type GoogleLocalizedText = { text?: string; languageCode?: string };

type GoogleReview = {
  name?: string;
  relativePublishTimeDescription?: string;
  text?: GoogleLocalizedText;
  originalText?: GoogleLocalizedText;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

type GooglePlacePayload = {
  configured?: boolean;
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
};

export type UITestimonial = {
  key: string;
  text: string;
  name: string;
  job?: string;
  avatarUrl?: string | null;
  publishedAtLabel?: string | null;
  source: 'strapi' | 'google';
};

const STRAPI_BASE = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(
  /\/$/,
  ''
);
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.26 } as const;

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
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.04 } },
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
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
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

function toAbsUrl(url?: string | null) {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  if (!STRAPI_BASE) return url;
  return `${STRAPI_BASE}${url.startsWith('/') ? '' : '/'}${url}`;
}

function getMediaUrl(media: any): string | null {
  if (!media) return null;

  if (typeof media?.url === 'string' && media.url.length)
    return toAbsUrl(media.url);

  const directFormats = media?.formats;
  const directCandidates = [
    directFormats?.medium?.url,
    directFormats?.small?.url,
    directFormats?.thumbnail?.url,
    directFormats?.large?.url,
  ].filter(Boolean);
  if (directCandidates.length) return toAbsUrl(directCandidates[0]);

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

function isBlank(v?: string | null) {
  return !v || !v.trim().length;
}

function pickGoogleReviewText(r?: GoogleReview | null) {
  const t = r?.text?.text ?? r?.originalText?.text ?? '';
  return t?.trim?.() ? t.trim() : '';
}

function buildGooglePlaceHref(placeId?: string | null) {
  const id = (placeId ?? '').trim();
  if (!id) return null;
  return `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${encodeURIComponent(id)}`;
}

/* ──────────────────────────────────────────────
   TYPEWRITER (karakterenként) – CTA feeling, csak pontosabb
────────────────────────────────────────────── */

function Typewriter({
  text,
  className,
  as,
  kind,
}: {
  text: string;
  className?: string;
  as: 'h2' | 'p';
  kind: 'heading' | 'subheading';
}) {
  const reduce = useReducedMotion();
  const chars = useMemo(() => Array.from(text ?? ''), [text]);

  const wrap: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: {
          transition: {
            staggerChildren: kind === 'heading' ? 0.018 : 0.012,
            delayChildren: kind === 'heading' ? 0.02 : 0.06,
          },
        },
      };

  const charV: Variants = reduce
    ? {
        hidden: { opacity: 1, y: 0, filter: 'blur(0px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }
    : {
        hidden: {
          opacity: 0,
          y: kind === 'heading' ? 12 : 8,
          filter: 'blur(10px)',
        },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: kind === 'heading' ? 0.5 : 0.38, ease: EASE },
        },
      };

  if (reduce) {
    return as === 'h2' ? (
      <Heading as="h2" className={className}>
        {text}
      </Heading>
    ) : (
      <Subheading className={className}>{text}</Subheading>
    );
  }

  return (
    <motion.div
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      aria-label={text}
    >
      {as === 'h2' ? (
        <Heading as="h2" className={className}>
          {chars.map((c, i) => (
            <motion.span
              key={`${c}-${i}`}
              variants={charV}
              className="inline-block"
            >
              {c === ' ' ? '\u00A0' : c}
            </motion.span>
          ))}
        </Heading>
      ) : (
        <Subheading className={className}>
          {chars.map((c, i) => (
            <motion.span
              key={`${c}-${i}`}
              variants={charV}
              className="inline-block"
            >
              {c === ' ' ? '\u00A0' : c}
            </motion.span>
          ))}
        </Subheading>
      )}
    </motion.div>
  );
}

export const Testimonials = ({
  heading,
  sub_heading,
  testimonials,
}: {
  heading: string;
  sub_heading: string;
  testimonials: any;
}) => {
  const reduce = useReducedMotion();

  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? '';
  const googleHref = buildGooglePlaceHref(placeId);

  const strapiList: StrapiTestimonial[] = useMemo(() => {
    if (Array.isArray(testimonials)) return testimonials as StrapiTestimonial[];
    return [];
  }, [testimonials]);

  const [google, setGoogle] = useState<GooglePlacePayload | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch('/api/google-reviews', { method: 'GET' });
        if (!res.ok) return;
        const data = (await res.json()) as GooglePlacePayload;
        if (!alive) return;
        setGoogle(data);
      } catch {}
    })();
    return () => {
      alive = false;
    };
  }, []);

  const googleReviews = (google?.reviews ?? []).filter(Boolean);

  const uiTestimonials: UITestimonial[] = useMemo(() => {
    const merged: UITestimonial[] = [];

    for (let i = 0; i < strapiList.length; i++) {
      const s = strapiList[i];
      const g = googleReviews[i];

      const sText = (s?.text ?? '').trim();
      const gText = pickGoogleReviewText(g);

      const sFirst = (s?.user?.firstname ?? '').trim();
      const sLast = (s?.user?.lastname ?? '').trim();
      const sName = [sFirst, sLast].filter(Boolean).join(' ').trim();
      const gName = (g?.authorAttribution?.displayName ?? '').trim();

      const sJob = (s?.user?.job ?? '').trim();

      const avatarStrapi = getMediaUrl(s?.user?.image);
      const avatarGoogle = (g?.authorAttribution?.photoUri ?? '').trim();

      const text = !isBlank(sText) ? sText : gText;
      if (!text) continue;

      merged.push({
        key: `s-${String(s?.id ?? i)}`,
        text,
        name: !isBlank(sName) ? sName : gName || 'Vendég',
        job: !isBlank(sJob) ? sJob : g ? 'Google értékelő' : '',
        avatarUrl: avatarStrapi || avatarGoogle || null,
        publishedAtLabel: g?.relativePublishTimeDescription ?? null,
        source: 'strapi',
      });
    }

    if (merged.length < 6 && googleReviews.length > merged.length) {
      const need = 6 - merged.length;
      const extra = googleReviews.slice(merged.length, merged.length + need);

      extra.forEach((g, idx) => {
        const text = pickGoogleReviewText(g);
        if (!text) return;
        const name =
          (g?.authorAttribution?.displayName ?? '').trim() || 'Google értékelő';
        const avatar = (g?.authorAttribution?.photoUri ?? '').trim();

        merged.push({
          key: `g-${g?.name ?? `${merged.length}-${idx}`}`,
          text,
          name,
          job: 'Google értékelő',
          avatarUrl: avatar || null,
          publishedAtLabel: g?.relativePublishTimeDescription ?? null,
          source: 'google',
        });
      });
    }

    return merged;
  }, [strapiList, googleReviews]);

  const avgRating = google?.rating;
  const totalReviews = google?.userRatingCount;

  return (
    <div className="relative">
      <AmbientColor />

      <motion.section
        variants={sectionV}
        initial={reduce ? false : 'hidden'}
        whileInView={reduce ? undefined : 'show'}
        viewport={VIEWPORT}
        className="relative mx-4 overflow-hidden rounded-3xl border border-charcoal bg-white"
      >
        {/* prémium háttér – nincs extra “folt” */}
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
          >
            {/* LEFT */}
            <motion.div variants={colV} className="md:col-span-5">
              <motion.div variants={leftStackV} className="flex flex-col">
                <motion.div variants={itemV}>
                  <Typewriter
                    text={heading}
                    as="h2"
                    kind="heading"
                    className="text-left text-4xl md:text-5xl font-light text-secondary leading-tight"
                  />
                </motion.div>

                <motion.div variants={itemV} className="mt-4">
                  <div className="h-px w-16 bg-muted/80" />
                </motion.div>

                <motion.div variants={itemV}>
                  <Typewriter
                    text={sub_heading}
                    as="p"
                    kind="subheading"
                    className="mt-5 md:mt-6 text-secondary text-sm md:text-base leading-relaxed text-center md:text-left max-w-xl mx-auto md:mx-0"
                  />
                </motion.div>

                <motion.div variants={itemV} className="mt-7">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-muted fill-muted"
                        strokeWidth={1.25}
                      />
                    ))}
                  </div>

                  <div className="mt-2 text-secondary text-sm md:text-base">
                    {typeof avgRating === 'number' &&
                    typeof totalReviews === 'number' ? (
                      <>
                        <span className="font-semibold">
                          {avgRating.toFixed(1)}
                        </span>{' '}
                        / 5.0{' '}
                        <span className="text-secondary/60">
                          több mint {totalReviews} értékelés alapján
                        </span>
                      </>
                    ) : (
                      <span className="text-secondary/60">
                        Google értékelések: nincs konfigurálva / nincs adat
                        (Strapi megy tovább)
                      </span>
                    )}
                  </div>

                  {googleHref ? (
                    <a
                      href={googleHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-4 inline-flex items-center gap-2 text-secondary"
                    >
                      <span className="text-sm tracking-wide">
                        További vélemények
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : null}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div variants={colV} className="md:col-span-7 w-full">
              <TestimonialsSlider testimonials={uiTestimonials} />
            </motion.div>
          </motion.div>

          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-charcoal/10 to-transparent" />
        </Container>
      </motion.section>
    </div>
  );
};
