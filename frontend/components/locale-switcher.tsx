'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

import { useSlugContext } from '@/app/context/SlugContext';
import { cn } from '@/lib/utils';

type StrapiLocale = { code: string };

const norm = (l: string) => (l || '').toLowerCase().split('-')[0]; // "hu-HU" -> "hu"

export function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  // ✅ Hookok MINDIG futnak, így nincs rules-of-hooks error
  const pathname = usePathname() || '/';
  const { state } = useSlugContext();

  // feature off 🚫 (de csak HOOKOK UTÁN térünk vissza!)
  const hidden = true;

  // Stabil deps: ne csináljunk minden rendernél új {}-t
  const localizedSlugsRaw = state?.localizedSlugs ?? null;

  // 1) Normalizáljuk a localizedSlugs kulcsokat is ("hu-HU" -> "hu")
  const localizedSlugs = useMemo(() => {
    const raw = localizedSlugsRaw ?? {};
    const out: Record<string, string> = {};
    for (const [k, v] of Object.entries(raw)) out[norm(k)] = v as string;
    return out;
  }, [localizedSlugsRaw]);

  // 2) Globális locale lista Strapi-ból (nem beégetett)
  const [allLocales, setAllLocales] = useState<string[]>([]);

  useEffect(() => {
    const base = (
      process.env.NEXT_PUBLIC_STRAPI_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      ''
    ).replace(/\/$/, '');

    if (!base) return;

    fetch(`${base}/api/i18n/locales`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data: StrapiLocale[]) => {
        const codes = (Array.isArray(data) ? data : [])
          .map((x) => norm(x.code))
          .filter(Boolean);

        setAllLocales(Array.from(new Set(codes)));
      })
      .catch(() => setAllLocales([]));
  }, []);

  // ✅ most már lehet early return
  if (hidden) return null;

  // 3) Aktuális locale normalizálva
  const current = norm(currentLocale);

  // 4) Saját szabályod: product oldalon ne legyen switcher
  if (pathname.includes('/products/')) return null;

  // 5) Ha nincs 2 locale, nincs mit mutatni
  if (allLocales.length < 2) return null;

  // 6) Lokális link generálás:
  // - ha van localization slug a cél nyelvhez -> oda menj
  // - ha nincs -> ne engedd kattintani (disabled), így nem lesz crash
  const buildHref = (targetLocale: string) => {
    const target = norm(targetLocale);

    const parts = pathname.split('/').filter(Boolean); // pl. ["hu","valami","slug"]
    const hasLocalePrefix = allLocales.includes(norm(parts[0] || ''));
    const rest = hasLocalePrefix ? parts.slice(1) : parts;

    // homepage
    if (rest.length === 0) return `/${target}`;

    const slug = localizedSlugs[target];
    if (slug) {
      const nextRest = [...rest];
      nextRest[nextRest.length - 1] = slug;
      return '/' + [target, ...nextRest].join('/');
    }

    return `/${target}`;
  };

  return (
    <div className="flex gap-2 p-1 rounded-md">
      {allLocales.map((l) => {
        const locale = norm(l);
        const isActive = locale === current;

        const isHome = pathname.split('/').filter(Boolean).length <= 1; // "/hu" vagy "/en"
        const hasTranslation = Boolean(localizedSlugs[locale]);
        const isEnabled = isHome || hasTranslation;

        const href = buildHref(locale);

        const Chip = (
          <div
            className={cn(
              'flex items-center justify-center text-sm leading-[110%] w-8 py-1 rounded-md transition duration-200',
              isEnabled
                ? 'cursor-pointer hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_var(--neutral-600)_inset]'
                : 'cursor-not-allowed opacity-40 text-white',
              isActive
                ? 'bg-neutral-800 text-white shadow-[0px_1px_0px_0px_var(--neutral-600)_inset]'
                : ''
            )}
            title={!isEnabled ? 'Ehhez az oldalhoz nincs fordítás' : undefined}
          >
            {locale}
          </div>
        );

        return isEnabled ? (
          <Link key={locale} href={href}>
            {Chip}
          </Link>
        ) : (
          <span key={locale}>{Chip}</span>
        );
      })}
    </div>
  );
}
