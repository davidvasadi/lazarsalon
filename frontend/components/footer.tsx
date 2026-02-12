import { Link } from 'next-view-transitions';
import React from 'react';

import { Logo } from '@/components/logo';

type FooterLink = {
  id?: number;
  text?: string | null;
  URL?: string | null;
  target?: string | null;
};

const TOKENS: Array<{ label: string; href: string }> = [
  { label: '[davelopment]®', href: 'https://davelopment.hu' },
  { label: 'davelopment', href: 'https://davelopment.hu' },
  { label: 'Strapi', href: 'https://strapi.io' },
  { label: 'Next.js', href: 'https://nextjs.org' },
  { label: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { label: 'Framer Motion', href: 'https://www.framer.com/motion/' },
];

const isExternal = (url: string) => /^https?:\/\//i.test(url);

const hrefWithLocale = (url: string, locale: string) => {
  const u = (url || '/').trim();
  if (!u) return `/${locale}`;
  if (isExternal(u)) return u;
  return `/${locale}${u.startsWith('/') ? '' : '/'}${u}`;
};

export const Footer = async ({
  data,
  locale,
}: {
  data: any;
  locale: string;
}) => {
  return (
    <footer className="relative bg-primary">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-700/60 to-transparent" />

      <div className="px-6 sm:px-8 pt-16 pb-10">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-12">
          {/* Left */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              {data?.logo?.image ? (
                <div className="shrink-0">
                  <Logo image={data.logo.image} />
                </div>
              ) : null}

              <div className="h-8 w-px bg-neutral-900/80 hidden sm:block" />

              {data?.brand_name || data?.brand_tagline ? (
                <div className="hidden sm:block">
                  {data?.brand_name ? (
                    <div className="text-neutral-200 text-sm font-medium leading-none">
                      {data.brand_name}
                    </div>
                  ) : null}
                  {data?.brand_tagline ? (
                    <div className="mt-1 text-xs text-neutral-500">
                      {data.brand_tagline}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>

            {data?.description ? (
              <p className="mt-5 max-w-md text-neutral-400 leading-relaxed">
                {data.description}
              </p>
            ) : null}
          </div>

          {/* Right */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              <LinkSection
                title={data?.internal_title ?? 'Menü'}
                links={data?.internal_links}
                locale={locale}
              />
              <LinkSection
                title={data?.policy_title ?? 'Információ'}
                links={data?.policy_links}
                locale={locale}
              />
              <LinkSection
                title={data?.social_title ?? 'Közösség'}
                links={data?.social_media_links}
                locale={locale}
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-neutral-900/70 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="text-xs text-secondary">{data?.copyright ?? ''}</div>

          <div className="text-xs text-secondary flex flex-col md:items-end gap-2">
            {data?.designed_developed_by ? (
              <div className="text-secondary">
                <LinkifiedMeta text={data.designed_developed_by} />
              </div>
            ) : null}

            {data?.built_with ? (
              <div className="text-secondary">
                <LinkifiedMeta text={data.built_with} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
};

function LinkSection({
  title,
  links,
  locale,
}: {
  title: string;
  links: any;
  locale: string;
}) {
  const safeLinks: Array<{
    id?: number;
    text?: string;
    URL?: string;
    target?: string | null;
  }> = Array.isArray(links) ? links : [];

  const titleCls =
    'text-xs tracking-wide uppercase font-semibold text-secondary';
  // ✅ menüpontok: NEM aláhúzottak, csak szín hover
  const itemCls =
    'text-xs sm:text-sm text-secondary/80 hover:text-secondary transition-colors';

  return (
    <div className="flex flex-col">
      <div className={titleCls}>{title}</div>

      <div className="mt-4 flex flex-col gap-3">
        {safeLinks
          .filter((l) => (l?.text || '').trim() && (l?.URL || '').trim())
          .map((link, i) => {
            const text = (link.text || '').trim();
            const url = (link.URL || '').trim();
            const isExternal = /^https?:\/\//i.test(url);

            const href = isExternal
              ? url
              : `/${locale}${url.startsWith('/') ? '' : '/'}${url}`;

            if (isExternal) {
              return (
                <a
                  key={`${link.id ?? ''}-${text}-${url}-${i}`}
                  href={href}
                  target={link.target ?? '_blank'}
                  rel="noreferrer noopener"
                  className={itemCls}
                >
                  {text}
                </a>
              );
            }

            // ✅ internal: span-en a class, biztosan érvényesül
            return (
              <Link
                key={`${link.id ?? ''}-${text}-${url}-${i}`}
                href={href}
                className="w-fit"
              >
                <span className={itemCls}>{text}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

function LinkifiedMeta({ text }: { text?: string | null }) {
  const raw = (text ?? '').trim();
  if (!raw) return null;

  const linkCls =
    'text-secondary underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary/70 transition-colors';

  const nodes: React.ReactNode[] = [];
  const lower = raw.toLowerCase();
  const tokens = [...TOKENS].sort((a, b) => b.label.length - a.label.length);

  let cursor = 0;

  while (cursor < raw.length) {
    let best: { start: number; end: number; href: string } | null = null;

    for (const t of tokens) {
      const idx = lower.indexOf(t.label.toLowerCase(), cursor);
      if (idx === -1) continue;
      const cand = { start: idx, end: idx + t.label.length, href: t.href };
      if (!best || cand.start < best.start) best = cand;
    }

    if (!best) {
      nodes.push(raw.slice(cursor));
      break;
    }

    if (best.start > cursor) nodes.push(raw.slice(cursor, best.start));

    const visible = raw.slice(best.start, best.end);
    nodes.push(
      <a
        key={`${best.href}-${best.start}`}
        href={best.href}
        target="_blank"
        rel="noreferrer noopener"
        className={linkCls}
      >
        {visible}
      </a>
    );

    cursor = best.end;
  }

  return <>{nodes}</>;
}
