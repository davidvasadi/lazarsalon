// components/dynamic-zone/testimonials/index.tsx
'use client';

import { type Variants, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';

import { Container } from '../../container';
// import { AmbientColor } from '../../decorations/ambient-color';
import { Heading } from '../../elements/heading';
import { Subheading } from '../../elements/subheading';
import { TestimonialsSlider } from './slider';
import { RatingStars } from '@/components/elements/rating-stars';
import { SECTION_TITLE } from '@/lib/shared/typography';

// components/dynamic-zone/testimonials/index.tsx

// components/dynamic-zone/testimonials/index.tsx

// components/dynamic-zone/testimonials/index.tsx

// components/dynamic-zone/testimonials/index.tsx

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

// a /api/google-reviews válasza (lib/shared/google-reviews.ts): már szűrve — csak 5 csillagos, képes vélemények
type GooglePlacePayload = {
  configured?: boolean;
  rating?: number | null;
  count?: number | null;
  mapsUrl?: string | null;
  reviews?: {
    name: string;
    photo: string | null;
    rating: number;
    text: string;
    when: string | null;
    url: string | null;
  }[];
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
const VIEWPORT = { once: true, amount: 0.26 } as const;

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

  let n = 0;
  const letters = (text ?? '').split(' ').map((word, wi, arr) => (
    <React.Fragment key={`w-${wi}`}>
      <span className="inline-block whitespace-nowrap">
        {Array.from(word).map((c) => (
          <motion.span
            key={`c-${n++}`}
            variants={charV}
            className="inline-block"
          >
            {c}
          </motion.span>
        ))}
      </span>
      {wi < arr.length - 1 ? ' ' : null}
    </React.Fragment>
  ));

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
          {letters}
        </Heading>
      ) : (
        <Subheading className={className}>{letters}</Subheading>
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
  const googleHrefFallback = buildGooglePlaceHref(placeId);

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
  const googleHref = google?.mapsUrl || googleHrefFallback;

  // 1) a valódi Google-vélemények (5 csillag, profilképpel) „Google” jelöléssel; 2) ha ezek nincsenek, a Strapiban
  //    kézzel felvett vélemények — de SOSEM kapnak Google-jelölést vagy Google-dátumot (korábban összekeveredtek)
  const uiTestimonials: UITestimonial[] = useMemo(() => {
    if (googleReviews.length) {
      return googleReviews.slice(0, 6).map((g, i) => ({
        key: `g-${i}-${g.name}`,
        text: g.text,
        name: g.name,
        job: 'Google-értékelés',
        avatarUrl: g.photo,
        publishedAtLabel: null, // a dátum nem kell (Dave)
        source: 'google' as const,
      }));
    }
    return strapiList
      .map((s, i) => {
        const text = (s?.text ?? '').trim();
        if (!text) return null;
        const name =
          [s?.user?.firstname, s?.user?.lastname]
            .map((x) => (x ?? '').trim())
            .filter(Boolean)
            .join(' ') || 'Vendég';
        return {
          key: `s-${String(s?.id ?? i)}`,
          text,
          name,
          job: (s?.user?.job ?? '').trim(),
          avatarUrl: getMediaUrl(s?.user?.image),
          publishedAtLabel: null,
          source: 'strapi' as const,
        };
      })
      .filter(Boolean) as UITestimonial[];
  }, [strapiList, googleReviews]);

  const avgRating = google?.rating ?? undefined;
  const totalReviews = google?.count ?? undefined;

  return (
    <div className="relative">
      {/* <AmbientColor /> */}

      <motion.section
        variants={sectionV}
        initial={reduce ? false : 'hidden'}
        whileInView={reduce ? undefined : 'show'}
        viewport={VIEWPORT}
        className="relative mx-4 my-6 overflow-hidden rounded-3xl border border-charcoal bg-white md:my-10"
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
                    className={`text-left ${SECTION_TITLE} text-secondary`}
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
                    className="mt-5 md:mt-6 text-secondary text-[15px] lg:text-[17px] leading-relaxed text-left max-w-xl mx-auto md:mx-0"
                  />
                </motion.div>

                <motion.div variants={itemV} className="mt-7">
                  {/* valódi Google-értékelés, arányos csillagokkal (4,8 → 4 és 4/5 csillag) */}
                  {typeof avgRating === 'number' &&
                  typeof totalReviews === 'number' ? (
                    <>
                      <RatingStars value={avgRating} size={20} />
                      <div className="mt-2 text-secondary text-sm md:text-base">
                        <span className="font-semibold">
                          {avgRating.toFixed(1).replace('.', ',')}
                        </span>{' '}
                        / 5{' '}
                        <span className="text-secondary/60">
                          · {totalReviews} Google-értékelés alapján
                        </span>
                      </div>
                    </>
                  ) : null}

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
