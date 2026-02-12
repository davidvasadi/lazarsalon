'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Facebook, Globe, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
                unoptimized
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
