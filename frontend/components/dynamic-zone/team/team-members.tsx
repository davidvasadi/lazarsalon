'use client';

import { m as motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Facebook,
  Globe,
  Instagram,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

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

  photo?: {
    url?: string | null;
    alternativeText?: string | null;
    formats?: {
      thumbnail?: { url?: string | null };
      small?: { url?: string | null };
      medium?: { url?: string | null };
      large?: { url?: string | null };
    };
  } | null;

  button?: {
    text?: string | null;
    URL?: string | null;
    target?: ButtonTarget | null;
    variant?: string | null;
  } | null;

  // legacy kompat
  Name?: string | null;
  Role?: string | null;
  Specialty?: string | null;
  Experience?: string | null;
  Booking?: string | null;
  Image?: Array<{ url?: string | null }> | null;
};

type Props = {
  members: TeamMember[];
  showBooking?: boolean;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function norm(v?: string | null) {
  const s = (v ?? '').trim();
  return s.length ? s : null;
}

function absStrapiUrl(maybeRelative: string) {
  if (maybeRelative.startsWith('http')) return maybeRelative;
  if (!STRAPI_BASE) return maybeRelative;
  return `${STRAPI_BASE}${maybeRelative.startsWith('/') ? '' : '/'}${maybeRelative}`;
}

function getMemberImageUrl(m: TeamMember) {
  const f = m.photo?.formats;
  const best =
    f?.medium?.url || f?.small?.url || f?.thumbnail?.url || m.photo?.url;

  if (typeof best === 'string' && best) return absStrapiUrl(best);

  const legacy = m.Image?.[0]?.url;
  if (typeof legacy === 'string' && legacy) return absStrapiUrl(legacy);

  return null;
}

function isInternalHref(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

export const TeamMembers: React.FC<Props> = ({
  members,
  showBooking = true,
}) => {
  return (
    <motion.div
      className={[
        'grid grid-cols-1 gap-4',
        'sm:[grid-template-columns:repeat(auto-fit,minmax(240px,280px))]',
        'sm:justify-center sm:justify-items-stretch',
        'md:gap-6',
      ].join(' ')}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {members.map((member) => {
        const name = norm(member.name ?? member.Name ?? null);
        const role = norm(member.role ?? member.Role ?? null);
        const specialty = norm(member.specialty ?? member.Specialty ?? null);
        const experience = norm(member.experience ?? member.Experience ?? null);

        const imageUrl =
          getMemberImageUrl(member) ?? 'https://via.placeholder.com/400';

        const btnText = norm(member.button?.text ?? null);
        const btnUrl = norm(member.button?.URL ?? null);
        const btnTarget = (member.button?.target ?? '_self') as ButtonTarget;

        const bookingUrl = norm(member.Booking ?? null);

        const finalHref = btnUrl ?? bookingUrl ?? null;
        const finalLabel = btnText ?? (bookingUrl ? 'Időpont' : null);
        const canRenderCTA = showBooking && !!finalHref && !!finalLabel;

        const SocialIcon = ({
          href,
          children,
          label,
        }: {
          href: string;
          children: React.ReactNode;
          label: string;
        }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-white/90 hover:text-white transition-colors"
            aria-label={label}
          >
            {children}
          </a>
        );

        const CTA = canRenderCTA ? (
          isInternalHref(finalHref!) ? (
            <Link
              href={finalHref!}
              target={btnUrl ? btnTarget : '_blank'}
              className="ml-auto flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-md text-sm text-white hover:bg-white/20 transition-transform duration-300"
            >
              <Calendar size={16} />
              <span>{finalLabel}</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          ) : (
            <a
              href={finalHref!}
              target={btnUrl ? btnTarget : '_blank'}
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-md text-sm text-white hover:bg-white/20 transition-transform duration-300"
            >
              <Calendar size={16} />
              <span>{finalLabel}</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          )
        ) : null;

        return (
          <motion.div
            key={member.documentId ?? String(member.id)}
            variants={cardVariants}
            className="group w-full"
          >
            <div className="relative overflow-hidden rounded-xl aspect-[3/4] w-full">
              <Image
                src={imageUrl}
                alt={name ?? ''}
                fill
                sizes="(max-width: 640px) 100vw, 280px"
                className="object-cover object-center transition-transform duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110"
                loading="lazy"
                quality={85}
              />

              {member.featured ? (
                <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs ring-1 ring-white/15 backdrop-blur">
                  <span className="tracking-wide text-white">Kiemelt</span>
                </div>
              ) : null}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute inset-0 p-4 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="space-y-1.5">
                  {name ? (
                    <h3 className="text-white text-lg font-medium leading-tight">
                      {name}
                    </h3>
                  ) : null}
                  {role ? (
                    <p className="text-muted font-light text-base">{role}</p>
                  ) : null}
                  {specialty ? (
                    <p className="text-white/90 text-sm">{specialty}</p>
                  ) : null}
                  {experience ? (
                    <p className="text-white/80 text-sm mb-3">{experience}</p>
                  ) : null}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/20">
                  {member.Instagram ? (
                    <SocialIcon href={member.Instagram} label="Instagram">
                      <Instagram size={18} />
                    </SocialIcon>
                  ) : null}

                  {member.Facebook ? (
                    <SocialIcon href={member.Facebook} label="Facebook">
                      <Facebook size={18} />
                    </SocialIcon>
                  ) : null}

                  {member.Website ? (
                    <SocialIcon href={member.Website} label="Website">
                      <Globe size={18} />
                    </SocialIcon>
                  ) : null}

                  {CTA}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TeamMembers;

/* ───────────── 2026-11-23: kompakt sor (főoldal) és váltakozó blokkok (Csapat oldal) ───────────── */

/** a név → horgony a Csapat oldalon (pl. „Mezei Melinda” → mezei-melinda) */
export function memberSlug(name?: string | null) {
  return (name ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function memberCta(member: TeamMember) {
  const btnText = norm(member.button?.text ?? null);
  const btnUrl = norm(member.button?.URL ?? null);
  const bookingUrl = norm(member.Booking ?? null);
  const href = btnUrl ?? bookingUrl ?? null;
  const label = btnText ?? (bookingUrl ? 'Időpontfoglalás' : null);
  const target = btnUrl
    ? ((member.button?.target ?? '_self') as ButtonTarget)
    : '_blank';
  if (href && label) return { href, label, target };
  // akinél nincs saját foglalás gomb, ott a szalon telefonszáma a foglalás — az alapítónál (Lázár József) nincs gomb
  const role = norm(member.role ?? member.Role ?? null) ?? '';
  if (/alapító/i.test(role)) return null;
  return {
    href: 'tel:+36203488481',
    label: 'Időpontfoglalás: +36 20 348 8481',
    target: '_self' as ButtonTarget,
  };
}

/** Főoldal: kis kártyák — fekete-fehér; gépen rámutatásra színes + nyíl (kattintásra a Csapat oldal adott blokkja),
 *  telefonon az első érintés színessé teszi és megmutatja a nyilat, a nyíl visz át a Csapat oldalra */
export function TeamCompact({
  members,
  locale = 'hu',
}: {
  members: TeamMember[];
  locale?: string;
}) {
  const router = useRouter();
  const [active, setActive] = React.useState<string | null>(null);
  return (
    <motion.ul
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {members.map((m) => {
        const key = m.documentId ?? String(m.id);
        const name = norm(m.name ?? m.Name ?? null);
        const role = norm(m.role ?? m.Role ?? null);
        const img = getMemberImageUrl(m);
        const href = `/${locale}/csapat#${memberSlug(name)}`;
        const on = active === key;
        return (
          <motion.li key={key} variants={cardVariants}>
            <div
              role="button"
              tabIndex={0}
              aria-label={name ?? undefined}
              onPointerUp={(e) => {
                // egérrel: egyből a Csapat oldalra; érintésre: csak kijelöl (színes + nyíl) — átvinni csak a nyíl visz
                if ((e.target as HTMLElement).closest('a')) return;
                if (e.pointerType === 'mouse') router.push(href);
                else setActive(on ? null : key);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') router.push(href);
              }}
              className="group block cursor-pointer outline-none"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-secondary/10">
                {img ? (
                  <Image
                    src={img}
                    alt={name ?? ''}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                    className={[
                      'object-cover object-top transition duration-500 [@media(hover:hover)]:group-hover:grayscale-0 group-focus-visible:grayscale-0',
                      on ? 'grayscale-0' : 'grayscale',
                    ].join(' ')}
                    loading="lazy"
                    quality={85}
                  />
                ) : null}
                <Link
                  href={href}
                  aria-label={`${name ?? ''} – a csapat oldalon`}
                  onClick={(e) => e.stopPropagation()}
                  className={[
                    'absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lightblack shadow-md transition duration-300',
                    '[@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100',
                    on
                      ? 'translate-y-0 opacity-100'
                      : 'pointer-events-none -translate-y-2 opacity-0 [@media(hover:hover)]:group-hover:pointer-events-auto',
                  ].join(' ')}
                >
                  <ArrowUpRight size={16} />
                </Link>
              </div>
              {name ? (
                <p className="mt-3 text-[14px] font-medium leading-tight text-lightblack">
                  {name}
                </p>
              ) : null}
              {role ? (
                <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-secondary/70">
                  {role}
                </p>
              ) : null}
            </div>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

/** Csapat oldal: felül kis avatar-sor (ugrás a blokkhoz), alatta mindenki saját blokkja — kép és szöveg felváltva */
export function TeamRows({ members }: { members: TeamMember[] }) {
  return (
    <div>
      <nav aria-label="Szakemberek" className="mb-16 flex flex-wrap gap-3">
        {members.map((m) => {
          const name = norm(m.name ?? m.Name ?? null);
          const img = getMemberImageUrl(m);
          return (
            <a
              key={m.documentId ?? String(m.id)}
              href={`#${memberSlug(name)}`}
              className="flex items-center gap-2 rounded-full border border-secondary/15 bg-white/60 py-1 pl-1 pr-4 text-[13px] text-lightblack transition hover:bg-white"
            >
              <span className="relative h-8 w-8 overflow-hidden rounded-full bg-secondary/10">
                {img ? (
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="32px"
                    className="object-cover object-top"
                    quality={85}
                  />
                ) : null}
              </span>
              {name}
            </a>
          );
        })}
      </nav>

      <div className="space-y-20 lg:space-y-28">
        {members.map((m, i) => {
          const name = norm(m.name ?? m.Name ?? null);
          const role = norm(m.role ?? m.Role ?? null);
          const specialty = norm(m.specialty ?? m.Specialty ?? null);
          const experience = norm(m.experience ?? m.Experience ?? null);
          const img = getMemberImageUrl(m);
          const cta = memberCta(m);
          const flip = i % 2 === 1;
          return (
            <motion.article
              key={m.documentId ?? String(m.id)}
              id={memberSlug(name)}
              className="grid scroll-mt-28 grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <div
                className={['lg:col-span-4', flip ? 'lg:order-2' : ''].join(
                  ' '
                )}
              >
                {/* négyzetes, keskenyebb oszlop: a korábbi 4:5-ös, ~650 px magas fotók túl nagyok voltak (2026-11-28) */}
                <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-3xl bg-secondary/10 lg:max-w-none">
                  {img ? (
                    <Image
                      src={img}
                      alt={name ?? ''}
                      fill
                      sizes="(max-width: 440px) 100vw, 420px"
                      className="object-cover object-top"
                      loading="lazy"
                      quality={85}
                    />
                  ) : null}
                </div>
              </div>
              <div
                className={['lg:col-span-8', flip ? 'lg:order-1' : ''].join(
                  ' '
                )}
              >
                {name ? (
                  <h3 className="text-3xl font-light leading-tight text-lightblack md:text-4xl">
                    {name}
                  </h3>
                ) : null}
                <div className="mt-5 h-[2px] w-20 rounded-full bg-muted/80" />
                {role ? (
                  <p className="mt-5 text-[16px] leading-relaxed text-secondary/80 lg:text-[18px]">
                    {role}
                  </p>
                ) : null}
                {specialty ? (
                  <p className="mt-3 text-[15px] text-secondary/70">
                    {specialty}
                  </p>
                ) : null}
                {experience ? (
                  <p className="mt-2 text-[15px] text-secondary/70">
                    {experience}
                  </p>
                ) : null}
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  {cta ? (
                    <a
                      href={cta.href}
                      target={cta.target}
                      rel={
                        cta.target === '_blank'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="inline-flex items-center gap-2 rounded-full bg-lightblack px-5 py-2.5 text-[14px] text-white transition hover:opacity-90"
                    >
                      <Calendar size={16} />
                      {cta.label}
                    </a>
                  ) : null}
                  {m.Instagram ? (
                    <a
                      href={m.Instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} Instagram`}
                      className="text-secondary/70 transition hover:text-lightblack"
                    >
                      <Instagram size={20} />
                    </a>
                  ) : null}
                  {m.Facebook ? (
                    <a
                      href={m.Facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} Facebook`}
                      className="text-secondary/70 transition hover:text-lightblack"
                    >
                      <Facebook size={20} />
                    </a>
                  ) : null}
                  {m.Website ? (
                    <a
                      href={m.Website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} weboldal`}
                      className="text-secondary/70 transition hover:text-lightblack"
                    >
                      <Globe size={20} />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
