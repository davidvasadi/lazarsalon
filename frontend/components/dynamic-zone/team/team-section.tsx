'use client';

import {
  type Transition,
  type Variants,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

import TeamMembers from './team-members';
import { Container } from '@/components/container';
import { Heading } from '@/components/elements/heading';
import { Subheading } from '@/components/elements/subheading';

/** IMPORTANT: ne defaultolj localhostra prod miatt */
const STRAPI_BASE = (
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  ''
)
  .replace(/\/$/, '')
  .replace(/\/api$/, '');

type ButtonTarget = '_self' | '_blank' | '_parent' | '_top' | string;

export type TeamMember = {
  id: number;
  documentId?: string;

  name?: string | null;
  role?: string | null;
  specialty?: string | null;
  experience?: string | null;
  featured?: boolean | null;
  order?: number | null;

  Instagram?: string | null;
  Facebook?: string | null;
  Website?: string | null;

  photo?: any | null;

  button?: {
    text?: string | null;
    URL?: string | null;
    target?: ButtonTarget | null;
    variant?: string | null;
  } | null;
};

type CTAButton = {
  id?: number;
  text?: string | null;
  URL?: string | null;
  target?: ButtonTarget | null;
  variant?: string | null;
};

type CTA = {
  id?: number;
  heading?: string | null;
  sub_heading?: string | null;
  CTAs?: CTAButton[] | null;
  cover?: any | null;
};

type Avatar = {
  id?: number;
  name?: string | null;
  role?: string | null;
  image?: any | null;
};

type Props = {
  id: number;
  __component: 'dynamic-zone.team-section';

  eyebrow?: string | null;
  heading?: string | null;
  sub_heading?: string | null;

  show_booking?: boolean | null;
  team_members?: Array<Partial<TeamMember>> | null;

  cta?: CTA | null;
  avatar?: Avatar | null;

  locale?: string;
};

type TeamMembersResponse = {
  data: TeamMember[];
  meta?: any;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: false, amount: 0.26 } as const;

function norm(v?: string | null) {
  const s = (v ?? '').trim();
  return s.length ? s : null;
}

function apiBase() {
  return STRAPI_BASE ? `${STRAPI_BASE}/api` : '/api';
}

function buildInFilterDocumentIds(documentIds: string[]) {
  const params = new URLSearchParams();
  documentIds.forEach((id, i) => {
    params.set(`filters[documentId][$in][${i}]`, id);
  });
  return params;
}

function absUrl(url?: string | null) {
  const u = norm(url);
  if (!u) return null;
  if (/^https?:\/\//i.test(u)) return u;
  if (!STRAPI_BASE) return u;
  return `${STRAPI_BASE}${u.startsWith('/') ? '' : '/'}${u}`;
}

function mediaUrl(maybe: any): string | null {
  if (!maybe) return null;

  // v5: { url }
  const direct = norm(maybe?.url);
  if (direct) return absUrl(direct);

  // v4: { data: { attributes: { url } } }
  const v4 = norm(maybe?.data?.attributes?.url);
  if (v4) return absUrl(v4);

  // alt
  const alt1 = norm(maybe?.data?.url);
  if (alt1) return absUrl(alt1);

  const alt2 = norm(maybe?.attributes?.url);
  if (alt2) return absUrl(alt2);

  return null;
}

function mediaAlt(maybe: any, fallback?: string | null) {
  return (
    norm(maybe?.alternativeText) ??
    norm(maybe?.data?.attributes?.alternativeText) ??
    norm(maybe?.attributes?.alternativeText) ??
    norm(fallback) ??
    ''
  );
}

// --- “íródós” Heading (szavanként) ---
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

// --- “íródós” Subheading (szavanként) ---
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

// --- “íródós” sima text (avatar name/role-hoz) ---
function WriteInText({
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

  if (reduce) return <div className={className}>{text}</div>;

  return (
    <motion.div
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={className}
    >
      {words.map((w, i) => (
        <motion.span key={`${w}-${i}`} variants={word} className="inline-block">
          {w}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
}

/** A kért CTA “gomb”: secondary szöveg + muted chevron (szár nélkül) */
function CtaLink({
  text,
  href,
  target,
}: {
  text: string;
  href: string;
  target?: ButtonTarget | null;
}) {
  const t = target ?? undefined;
  const rel = t === '_blank' ? 'noreferrer noopener' : undefined;

  return (
    <Link
      href={href}
      target={t}
      rel={rel}
      className="group inline-flex items-center gap-2 text-secondary transition-colors hover:text-secondary/80"
    >
      <span className="text-sm font-medium">{text}</span>
      <ChevronRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

/** Avatar strip — write-in anim, fallback nélkül */
function AvatarStrip({ avatar }: { avatar: Avatar }) {
  const name = norm(avatar?.name);
  const role = norm(avatar?.role);
  const img = mediaUrl(avatar?.image);

  if (!name || !role || !img) return null;

  return (
    <div className="mt-10 flex items-center gap-4">
      <div className="relative h-14 w-14 overflow-hidden rounded-full">
        <Image
          src={img}
          alt={mediaAlt(avatar?.image, name)}
          fill
          sizes="56px"
          className="object-cover"
        />
      </div>

      <div className="leading-tight">
        <WriteInText
          text={name}
          className="text-[15px] font-medium text-lightblack"
        />
        <WriteInText text={role} className="mt-1 text-[12px] text-muted" />
      </div>
    </div>
  );
}

/**
 * CTA blokk — premium split layout, szöveg balra, write-in anim, fallback nélkül
 *
 * CTA kép “szélesség” állítás:
 * - a két oszlop aránya a col-span-okkal állítható:
 *   - content: lg:col-span-7 / image: lg:col-span-5  (default)
 *   - content: lg:col-span-8 / image: lg:col-span-4  (keskenyebb kép)
 *   - content: lg:col-span-6 / image: lg:col-span-6  (fele-fele)
 */
function TeamCTA({ cta, avatar }: { cta: CTA; avatar?: Avatar | null }) {
  const reduce = useReducedMotion();

  const title = norm(cta?.heading);
  const sub = norm(cta?.sub_heading);
  const cover = mediaUrl(cta?.cover);

  const btn = (Array.isArray(cta?.CTAs) ? cta.CTAs : [])
    .map((b) => ({
      text: norm(b?.text),
      url: norm(b?.URL),
      target: b?.target ?? null,
    }))
    .find((b) => b.text && b.url);

  if (!title && !sub && !cover && !btn && !avatar) return null;

  // gomb “beúszás” — ugyanaz a vibe, mint a szöveg
  const btnEnter: Variants = reduce
    ? {
        hidden: { opacity: 1, x: 0, filter: 'blur(0px)' },
        show: { opacity: 1, x: 0, filter: 'blur(0px)' },
      }
    : {
        hidden: { opacity: 0, x: -14, filter: 'blur(10px)' },
        show: {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.55, ease: EASE, delay: 0.12 },
        },
      };

  const imageEnter: Variants = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: EASE, delay: 0.04 },
        },
      };

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={reduce ? undefined : { duration: 0.75, ease: EASE }}
      className="my-16"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
        {/* CONTENT */}
        <div className="text-left lg:col-span-7">
          {title ? (
            <WriteInHeading
              text={title}
              className="text-left text-2xl sm:text-3xl md:text-4xl font-light text-lightblack leading-tight"
            />
          ) : null}

          {sub ? (
            <WriteInSubheading
              text={sub}
              className="mt-5 text-left text-secondary/70 leading-relaxed text-[15px] sm:text-[16px] md:text-[18px]"
            />
          ) : null}

          {btn ? (
            <motion.div
              variants={btnEnter}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className="my-6"
            >
              <CtaLink text={btn.text!} href={btn.url!} target={btn.target} />
            </motion.div>
          ) : null}

          {avatar ? <AvatarStrip avatar={avatar} /> : null}
        </div>

        {/* IMAGE */}
        {cover ? (
          <motion.div
            variants={imageEnter}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl border border-secondary/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src={cover}
                  alt={mediaAlt(cta?.cover, title)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-fit"
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </motion.div>
  );
}

export const TeamSection: React.FC<Props> = ({
  eyebrow,
  heading,
  sub_heading,
  show_booking = true,
  team_members,
  cta,
  avatar,
  locale = 'hu',
}) => {
  const reduce = useReducedMotion();

  const title = norm(heading);
  const sub = norm(sub_heading);

  // page-ből jövő team_members
  const fromPage = useMemo(() => {
    const list = Array.isArray(team_members)
      ? (team_members as TeamMember[])
      : [];
    const hasOrder = list.some((m) => typeof (m as any)?.order === 'number');
    return hasOrder
      ? [...list].sort((a, b) => (a?.order ?? 9999) - (b?.order ?? 9999))
      : list;
  }, [team_members]);

  const wantedDocIds = useMemo(() => {
    return fromPage
      .map((m) => (m as any)?.documentId as string | undefined)
      .filter(Boolean) as string[];
  }, [fromPage]);

  // ha mindenkinél van photo, nem kell ráfetch
  const pageHasPhotos = useMemo(() => {
    if (!fromPage.length) return true;
    return fromPage.every((m) => !!(m as any)?.photo);
  }, [fromPage]);

  const [team, setTeam] = useState<TeamMember[]>(fromPage);

  useEffect(() => {
    let mounted = true;

    setTeam(fromPage);

    if (!wantedDocIds.length || pageHasPhotos) return;

    const ac = new AbortController();

    const run = async () => {
      try {
        const params = new URLSearchParams();
        params.set('locale', locale);
        params.set('populate', '*');
        params.set('sort', 'order:asc');

        const inParams = buildInFilterDocumentIds(wantedDocIds);
        inParams.forEach((v, k) => params.set(k, v));

        const url = `${apiBase()}/team-members?${params.toString()}`;
        const res = await fetch(url, { signal: ac.signal, cache: 'no-store' });
        if (!res.ok) return;

        const json = (await res.json()) as TeamMembersResponse;
        const list = Array.isArray(json?.data) ? json.data : [];

        // merge: page sorrend marad, hiányzó mezők full rekordból
        const byDoc = new Map(list.map((m) => [m.documentId, m]));
        const merged = fromPage
          .map((m) => {
            const full = m?.documentId ? byDoc.get(m.documentId) : undefined;
            return full ? { ...full, ...m } : (m as TeamMember);
          })
          .filter(Boolean) as TeamMember[];

        if (!mounted) return;
        setTeam(merged);
      } catch {
        // no fallback UI
      }
    };

    run();

    return () => {
      mounted = false;
      ac.abort();
    };
  }, [fromPage, wantedDocIds, pageHasPhotos, locale]);

  // underline anim
  const underlineInitial = reduce
    ? { scaleX: 1, opacity: 1 }
    : { scaleX: 0.12, opacity: 0 };

  const underlineInView = { scaleX: 1, opacity: 1 };

  const underlineTransition: Transition = reduce
    ? { duration: 0.01 }
    : { duration: 0.95, ease: EASE, delay: 0.18 };

  const hasHeader = !!(title || sub);
  const hasMembers = team.length > 0;
  const hasCTA = !!cta;

  if (!hasHeader && !hasCTA && !avatar && !hasMembers) return null;

  return (
    <section className="py-32 ">
      <Container>
        {/* HEADER */}
        {hasHeader ? (
          <div className="max-w-2xl mb-16 text-left">
            {title ? (
              <WriteInHeading
                text={title}
                className={[
                  'text-left text-4xl md:text-6xl',
                  'font-light text-lightblack',
                  'leading-tight',
                  'max-w-xl',
                ].join(' ')}
              />
            ) : null}

            {title ? (
              <motion.div
                className="mt-6 h-[2px] w-28 origin-left rounded-full bg-muted/80"
                initial={underlineInitial}
                whileInView={underlineInView}
                viewport={VIEWPORT}
                transition={underlineTransition}
              />
            ) : null}

            {sub ? (
              <WriteInSubheading
                text={sub}
                className={[
                  'mt-6 text-left text-secondary/70',
                  'text-[15px] sm:text-[16px] lg:text-[18px]',
                  'leading-relaxed',
                  'max-w-2xl',
                ].join(' ')}
              />
            ) : null}
          </div>
        ) : null}

        {/* TEAM MEMBERS UTÁNA */}
        {hasMembers ? (
          <TeamMembers members={team} showBooking={!!show_booking} />
        ) : null}
        {/* SORREND: CTA + AVATAR ELŐBB */}
        {cta ? (
          <TeamCTA cta={cta} avatar={avatar} />
        ) : avatar ? (
          <AvatarStrip avatar={avatar} />
        ) : null}
      </Container>
    </section>
  );
};

export default TeamSection;
