// mobile-navbar.tsx
'use client';

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { CalendarIcon, ChevronDown } from 'lucide-react';
import { Link } from 'next-view-transitions';
import { usePathname, useRouter } from 'next/navigation';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { LocaleSwitcher } from '../locale-switcher';
import { Container } from '@/components/container';
import { Button } from '@/components/elements/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

const STRAPI_BASE = (
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  ''
)
  .replace(/\/$/, '')
  .replace(/\/api$/, '');

type PageLike = {
  id: number;
  slug: string;
  dynamic_zone?: Array<Record<string, unknown>>;
};

type NavItem = {
  id: number;
  URL: string;
  text: string;
  target?: string | null;
  pages?: PageLike[];
};

type Props = {
  leftNavbarItems: NavItem[];
  rightNavbarItems: { URL: string; text: string; target?: string | null }[];
  logo: any;
  locale: string;
};

const navHref = (locale: string, url: string) =>
  url === '/'
    ? `/${locale}`
    : `/${locale}${url.startsWith('/') ? url : `/${url}`}`;

const pageHref = (locale: string, p: PageLike) => `/${locale}/${p.slug}`;

const isBookingText = (t?: string | null) => {
  const s = (t ?? '').toLowerCase();
  return (
    s.includes('időpont') ||
    s.includes('idopont') ||
    s.includes('foglal') ||
    s.includes('booking') ||
    s.includes('appointment')
  );
};

function getCompanyText(logo: any): string | null {
  const c = logo?.company;
  if (!c) return null;
  if (typeof c === 'string') return c.trim() || null;
  return (
    (typeof c?.name === 'string' && c.name.trim()) ||
    (typeof c?.title === 'string' && c.title.trim()) ||
    (typeof c?.label === 'string' && c.label.trim()) ||
    null
  );
}

function findHeroLikeComponent(p: { dynamic_zone?: any[] } | null | undefined) {
  const dz = (p?.dynamic_zone ?? []) as any[];
  const hit = dz.find((x) => {
    const c = x?.__component;
    return typeof c === 'string' && c.toLowerCase().includes('hero');
  });
  return (hit as any) ?? null;
}

function heroForPage(p: PageLike) {
  const hero = findHeroLikeComponent(p) as {
    heading?: string | null;
    sub_heading?: string | null;
    [k: string]: any;
  } | null;

  return {
    heading: hero?.heading ?? p.slug,
    sub: hero?.sub_heading ?? null,
    hero,
  };
}

function absolutizeUrl(u?: string | null): string | null {
  if (!u) return null;
  const url = String(u);
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith('//')) return `https:${url}`;
  if (!STRAPI_BASE) return url;
  return `${STRAPI_BASE}${url.startsWith('/') ? url : `/${url}`}`;
}

function mediaUrlFromAny(m: any): string | null {
  if (!m) return null;
  if (typeof m === 'string') return absolutizeUrl(m);

  const urlDirect = typeof m?.url === 'string' ? m.url : null;
  if (urlDirect) return absolutizeUrl(urlDirect);

  const data = m?.data ?? null;
  const attrs = data?.attributes ?? data ?? null;

  const formats = attrs?.formats ?? null;
  const fmtUrl =
    formats?.large?.url ??
    formats?.medium?.url ??
    formats?.small?.url ??
    formats?.thumbnail?.url ??
    null;

  const url = fmtUrl ?? attrs?.url ?? null;
  return typeof url === 'string' ? absolutizeUrl(url) : null;
}

function coverUrlFromObjects(objs: any[]): string | null {
  const keys = [
    'cover',
    'cover_image',
    'coverImage',
    'hero_cover',
    'heroCover',
    'featured_image',
    'featuredImage',
    'image',
    'media',
    'photo',
    'picture',
    'background',
    'background_image',
    'backgroundImage',
  ];

  const candidates = objs.filter(Boolean);

  for (const obj of candidates) {
    for (const k of keys) {
      const v = obj?.[k];

      const u1 = mediaUrlFromAny(v);
      if (u1) return u1;

      const u2 = mediaUrlFromAny(v?.data ?? v?.data?.attributes);
      if (u2) return u2;

      const u3 = mediaUrlFromAny(obj?.[k]?.image);
      if (u3) return u3;

      const u4 = mediaUrlFromAny(obj?.[k]?.cover);
      if (u4) return u4;
    }
  }

  return null;
}

function coverUrlForPage(p: PageLike): string | null {
  const hero = findHeroLikeComponent(p);
  const dz = (p.dynamic_zone ?? []) as any[];
  return coverUrlFromObjects([hero, ...dz, p]);
}

type RGBA = { r: number; g: number; b: number; a: number };

function parseCssColor(input: string | null | undefined): RGBA | null {
  if (!input) return null;
  const s = input.trim().toLowerCase();
  if (!s || s === 'transparent') return null;

  const m = s.match(/^rgba?\((.+)\)$/);
  if (!m) return null;

  const parts = m[1]
    .split(',')
    .map((p) => p.trim())
    .filter(Boolean);

  if (parts.length < 3) return null;

  const toNum = (v: string) => {
    const n = Number.parseFloat(v);
    return Number.isFinite(n) ? n : 0;
  };

  const r = Math.max(0, Math.min(255, toNum(parts[0])));
  const g = Math.max(0, Math.min(255, toNum(parts[1])));
  const b = Math.max(0, Math.min(255, toNum(parts[2])));
  const a = parts.length >= 4 ? Math.max(0, Math.min(1, toNum(parts[3]))) : 1;

  return { r, g, b, a };
}

function blend(top: RGBA, bottom: RGBA): RGBA {
  const a = Math.max(0, Math.min(1, top.a));
  const r = Math.round(top.r * a + bottom.r * (1 - a));
  const g = Math.round(top.g * a + bottom.g * (1 - a));
  const b = Math.round(top.b * a + bottom.b * (1 - a));
  return { r, g, b, a: 1 };
}

function srgbToLinear(u: number) {
  const v = u / 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

function luminance(c: RGBA) {
  const r = srgbToLinear(c.r);
  const g = srgbToLinear(c.g);
  const b = srgbToLinear(c.b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function inferToneFromPoint(
  x: number,
  y: number,
  ignore: HTMLElement | null
): 'dark' | 'light' | null {
  if (typeof document === 'undefined') return null;

  const stack = document.elementsFromPoint(x, y);
  if (!stack?.length) return null;

  let c1: RGBA | null = null;
  let c2: RGBA | null = null;
  let textHint: RGBA | null = null;

  for (const el of stack) {
    if (!(el instanceof HTMLElement)) continue;
    if (ignore && (el === ignore || ignore.contains(el))) continue;

    const st = window.getComputedStyle(el);
    const bg = parseCssColor(st.backgroundColor);

    if (bg && bg.a > 0.02) {
      if (!c1) {
        c1 = bg;
        if (bg.a >= 0.98) break;
      } else {
        c2 = bg;
        break;
      }
      continue;
    }

    if (!textHint && st.backgroundImage && st.backgroundImage !== 'none') {
      const tc = parseCssColor(st.color);
      if (tc) textHint = tc;
    }
  }

  if (c1) {
    let final = c1;
    if (final.a < 0.98) {
      if (c2) final = blend(final, c2);
      else {
        const bodyBg =
          parseCssColor(
            window.getComputedStyle(document.body).backgroundColor
          ) ?? ({ r: 255, g: 255, b: 255, a: 1 } as RGBA);
        final = blend(final, bodyBg);
      }
    }
    return luminance(final) < 0.42 ? 'dark' : 'light';
  }

  if (textHint) {
    return luminance({ ...textHint, a: 1 }) > 0.6 ? 'dark' : 'light';
  }

  return null;
}

function shouldInterceptNav(
  e?: React.MouseEvent<HTMLElement>,
  target?: string | null
) {
  if (target === '_blank') return false;
  if (!e) return true;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return false;
  if (e.button !== 0) return false;
  return true;
}

const MenuToggle = React.forwardRef<
  HTMLButtonElement,
  { open: boolean; onClick: () => void; className?: string }
>(function MenuToggle({ open, onClick, className }, ref) {
  const LINE_W = 50;
  const LINE_H = 2;
  const OFFSET = 3;
  const BTN = 40;

  const baseLineStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    width: LINE_W,
    height: LINE_H,
    marginLeft: -(LINE_W / 2),
    backgroundColor: 'currentColor',
    display: 'block',
    transformOrigin: 'center',
    willChange: 'transform, top, opacity',
    transitionProperty: 'transform, top, opacity',
    transitionDuration: '320ms',
    transitionTimingFunction: 'cubic-bezier(.22,1,.36,1)',
  };

  const topClosed1 = BTN / 2 - OFFSET;
  const topClosed2 = BTN / 2 + OFFSET;
  const topOpen = BTN / 2;

  const line1: React.CSSProperties = {
    ...baseLineStyle,
    top: open ? topOpen : topClosed1,
    transform: open
      ? 'translateZ(0) rotate(45deg)'
      : 'translateZ(0) rotate(0deg)',
  };

  const line2: React.CSSProperties = {
    ...baseLineStyle,
    top: open ? topOpen : topClosed2,
    transform: open
      ? 'translateZ(0) rotate(-45deg)'
      : 'translateZ(0) rotate(0deg)',
  };

  return (
    <button
      ref={ref}
      type="button"
      aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
      aria-expanded={open}
      onClick={onClick}
      className={cn(
        'relative h-10 w-10 shrink-0 touch-manipulation',
        'bg-transparent',
        'active:scale-[0.98] transition-transform',
        className
      )}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <span aria-hidden style={line1} />
      <span aria-hidden style={line2} />
    </button>
  );
});

export function UnifiedNavbar({
  leftNavbarItems,
  rightNavbarItems,
  logo,
  locale,
  enableFeatured,
}: Props & { enableFeatured?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const [open, setOpen] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);

  const openRef = useRef(open);
  useEffect(() => {
    openRef.current = open;
  }, [open]);

  const closingRef = useRef(false);

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const scrollRef = useRef(0);

  const [tone, setTone] = useState<'dark' | 'light'>('dark');
  const [scrolled, setScrolled] = useState(false);

  const [coverCache, setCoverCache] = useState<Record<string, string | null>>(
    {}
  );
  const [scrollLock, setScrollLock] = useState(false);

  const pendingNavRef = useRef<{ href: string; target?: string | null } | null>(
    null
  );

  // ✅ stabilize references (no "[] changes every render" warnings)
  const leftItems = useMemo(() => leftNavbarItems ?? [], [leftNavbarItems]);
  const rightItems = useMemo(() => rightNavbarItems ?? [], [rightNavbarItems]);

  const closeMenu = useCallback(() => {
    if (closingRef.current) return;
    if (!openRef.current) return;
    closingRef.current = true;
    setOpen(false);
    setOpenId(null);
  }, []);

  const queueNavigate = useCallback(
    (href: string, target?: string | null) => {
      pendingNavRef.current = { href, target };
      closeMenu();
    },
    [closeMenu]
  );

  const makeNavClick = useCallback(
    (href: string, target?: string | null) => {
      return (e?: React.MouseEvent<HTMLElement>) => {
        if (!shouldInterceptNav(e, target)) {
          closeMenu();
          return;
        }
        e?.preventDefault?.();
        queueNavigate(href, target);
      };
    },
    [closeMenu, queueNavigate]
  );

  const toggleMenu = useCallback(() => {
    setOpen((v) => {
      const next = !v;
      if (next) {
        closingRef.current = false;
        setScrollLock(true);
      } else {
        closingRef.current = true;
        setOpenId(null);
      }
      return next;
    });
  }, []);

  const EASE = [0.22, 1, 0.36, 1] as const;

  const scheduleToneUpdate = useCallback(() => {
    if (typeof window === 'undefined') return;

    if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;

      if (openRef.current) {
        setTone('dark');
        return;
      }

      const btn = btnRef.current;
      if (!btn) return;

      const r = btn.getBoundingClientRect();
      const x = r.left + r.width / 2;
      const y = r.top + r.height / 2;

      const inferred = inferToneFromPoint(x, y, btn);
      if (inferred) {
        setTone(inferred);
        return;
      }

      setTone(scrollRef.current > 120 ? 'light' : 'dark');
    });
  }, []);

  useMotionValueEvent(scrollY, 'change', (v) => {
    scrollRef.current = v;
    setScrolled(v > 14);
    scheduleToneUpdate();
  });

  useEffect(() => {
    scheduleToneUpdate();
  }, [scheduleToneUpdate, open]);

  useEffect(() => {
    if (openRef.current) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closeMenu]);

  useEffect(() => {
    if (!scrollLock) return;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    const prevPaddingRight = html.style.paddingRight;

    const sbw = window.innerWidth - html.clientWidth;
    html.style.overflow = 'hidden';
    if (sbw > 0) html.style.paddingRight = `${sbw}px`;

    return () => {
      html.style.overflow = prevOverflow;
      html.style.paddingRight = prevPaddingRight;
    };
  }, [scrollLock]);

  useEffect(() => {
    const onResize = () => scheduleToneUpdate();
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, [scheduleToneUpdate]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const toggleColorClass = useMemo(
    () => (tone === 'dark' ? 'text-white' : 'text-secondary'),
    [tone]
  );

  const companyText = useMemo(() => getCompanyText(logo), [logo]);
  const hasLogoImage = Boolean(logo?.image);

  const activeItem = useMemo(() => {
    if (!openId) return null;
    return leftItems.find((x) => x.id === openId) ?? null;
  }, [openId, leftItems]);

  const featuredPages = useMemo(() => {
    const pages = activeItem?.pages ?? [];
    return pages.slice(0, 3);
  }, [activeItem]);

  useEffect(() => {
    if (!open) return;
    if (!enableFeatured) return;
    if (!openId) return;
    if (!STRAPI_BASE) return;

    const pages = featuredPages ?? [];
    if (!pages.length) return;

    const missing = pages.filter((p) => {
      const local = coverUrlForPage(p);
      if (local) return false;
      if (Object.prototype.hasOwnProperty.call(coverCache, p.slug))
        return false;
      return true;
    });

    if (!missing.length) return;

    const ac = new AbortController();

    (async () => {
      try {
        const results = await Promise.all(
          missing.map(async (p) => {
            const url =
              `${STRAPI_BASE}/api/pages` +
              `?filters[slug][$eq]=${encodeURIComponent(p.slug)}` +
              `&locale=${encodeURIComponent(locale)}` +
              `&populate=deep,8`;

            const res = await fetch(url, {
              method: 'GET',
              headers: { Accept: 'application/json' },
              signal: ac.signal,
              cache: 'no-store',
            });

            if (!res.ok) return [p.slug, null] as const;

            const json = await res.json().catch(() => null);
            const data = (json as any)?.data;

            const rec = Array.isArray(data) ? data?.[0] : data;
            const attrs = rec?.attributes ?? rec ?? null;

            const dz =
              attrs?.dynamic_zone ??
              attrs?.dynamicZone ??
              attrs?.dynamicZones ??
              null;

            const pageLike: PageLike = {
              id: rec?.id ?? p.id ?? 0,
              slug: attrs?.slug ?? p.slug,
              dynamic_zone: Array.isArray(dz) ? dz : (p.dynamic_zone as any),
            };

            const cover =
              coverUrlFromObjects([
                findHeroLikeComponent(pageLike),
                ...((pageLike.dynamic_zone ?? []) as any[]),
                attrs,
                rec,
              ]) ?? null;

            return [p.slug, cover] as const;
          })
        );

        if (ac.signal.aborted) return;

        setCoverCache((prev) => {
          const next = { ...prev };
          for (const [slug, cover] of results) next[slug] = cover;
          return next;
        });
      } catch {
        // noop
      }
    })();

    return () => ac.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, openId, enableFeatured, locale, featuredPages]);

  const topItemTextClass = useMemo(
    () =>
      cn(
        'leading-[1.02]',
        enableFeatured ? 'text-4xl lg:text-5xl' : 'text-4xl'
      ),
    [enableFeatured]
  );

  return (
    <>
      <AnimatePresence
        initial={false}
        onExitComplete={() => {
          closingRef.current = false;
          setScrollLock(false);

          const pending = pendingNavRef.current;
          pendingNavRef.current = null;

          if (!pending) return;

          if (pending.target === '_blank') {
            window.open(pending.href, '_blank', 'noopener,noreferrer');
            return;
          }

          router.push(pending.href);
        }}
      >
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 16, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.99 }}
            transition={{ duration: 0.3, ease: EASE }}
            className={cn(
              'fixed inset-0 z-[60]',
              'overflow-y-scroll overscroll-contain',
              'bg-black/90 supports-[backdrop-filter]:bg-black/40',
              'backdrop-blur-2xl backdrop-saturate-150'
            )}
            style={{
              WebkitBackdropFilter: 'blur(28px) saturate(150%)',
              backdropFilter: 'blur(28px) saturate(150%)',
              willChange: 'opacity, transform',
            }}
          >
            <div className="min-h-screen">
              <Container>
                <div className="flex min-h-screen flex-col px-4 pb-10 lg:px-8">
                  <div className="flex w-full justify-end pt-6">
                    <LocaleSwitcher currentLocale={locale} />
                  </div>

                  <div className="h-28 lg:h-28" />

                  <div
                    className={cn(
                      'w-full',
                      enableFeatured && 'lg:grid lg:grid-cols-12 lg:gap-12'
                    )}
                  >
                    <div
                      className={cn(
                        'flex w-full flex-col items-start justify-start gap-6 md:gap-12',
                        enableFeatured && 'lg:col-span-7'
                      )}
                    >
                      {leftItems.map((item) => {
                        const pages = item.pages ?? [];
                        const hasPages = pages.length > 0;
                        const isOpen = openId === item.id;

                        const topHref = navHref(locale, item.URL);

                        if (!hasPages) {
                          return (
                            <div key={item.id} className="relative">
                              <Link
                                href={topHref}
                                target={item.target ?? undefined}
                                onClick={makeNavClick(topHref, item.target)}
                              >
                                <span
                                  className={cn(
                                    'block text-primary',
                                    topItemTextClass
                                  )}
                                >
                                  {item.text}
                                </span>
                              </Link>
                            </div>
                          );
                        }

                        return (
                          <div key={item.id} className="w-full">
                            <button
                              type="button"
                              className="flex items-center gap-3"
                              onClick={() => setOpenId(isOpen ? null : item.id)}
                              style={{ WebkitTapHighlightColor: 'transparent' }}
                            >
                              <span
                                className={cn(
                                  'block text-primary',
                                  topItemTextClass
                                )}
                              >
                                {item.text}
                              </span>

                              <motion.span
                                aria-hidden
                                initial={false}
                                animate={isOpen ? 'open' : 'closed'}
                                style={{
                                  display: 'inline-flex',
                                  width: 24,
                                  height: 24,
                                  flex: '0 0 24px',
                                }}
                                variants={{
                                  open: {
                                    rotate: 180,
                                    transition: {
                                      duration: 0.22,
                                      ease: EASE,
                                    },
                                  },
                                  closed: {
                                    rotate: 0,
                                    transition: {
                                      duration: 0.28,
                                      ease: EASE,
                                    },
                                  },
                                }}
                              >
                                <ChevronDown className="h-6 w-6 text-primary" />
                              </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  key="drop"
                                  initial={{
                                    opacity: 0,
                                    y: 6,
                                    maxHeight: 0,
                                    marginTop: 0,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    y: 0,
                                    maxHeight: 520,
                                    marginTop: 14,
                                  }}
                                  exit={{
                                    opacity: 0,
                                    y: 6,
                                    maxHeight: 0,
                                    marginTop: 0,
                                  }}
                                  transition={{ duration: 0.28, ease: EASE }}
                                  style={{
                                    overflow: 'hidden',
                                    willChange:
                                      'max-height, opacity, transform',
                                  }}
                                  className="ml-3"
                                >
                                  <div className="flex flex-col gap-3 border-l border-white/15 pl-4">
                                    <Link
                                      href={topHref}
                                      target={item.target ?? undefined}
                                      className="text-[18px] text-white/80"
                                      onClick={makeNavClick(
                                        topHref,
                                        item.target
                                      )}
                                    >
                                      Összes
                                    </Link>

                                    {pages.map((p) => {
                                      const hero = heroForPage(p);
                                      const href = pageHref(locale, p);

                                      return (
                                        <Link
                                          key={p.id}
                                          href={href}
                                          className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
                                          onClick={makeNavClick(href, null)}
                                        >
                                          <div className="text-sm text-white">
                                            {hero.heading}
                                          </div>
                                          {hero.sub && (
                                            <div className="mt-0.5 line-clamp-2 text-xs text-white/60">
                                              {hero.sub}
                                            </div>
                                          )}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>

                    {enableFeatured &&
                      openId &&
                      (activeItem?.pages?.length ?? 0) > 0 && (
                        <div className="hidden lg:col-span-5 lg:block">
                          <motion.div
                            key={activeItem?.id ?? 'featured'}
                            initial={{ opacity: 0, y: 10, scale: 0.99 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.99 }}
                            transition={{ duration: 0.22, ease: EASE }}
                            className={cn(
                              'sticky top-24',
                              'rounded-2xl bg-white/5 p-4',
                              'shadow-[0_18px_60px_rgba(0,0,0,0.35)]'
                            )}
                          >
                            <div className="mb-3 flex items-center justify-between">
                              <div className="text-xs uppercase tracking-wider text-white/60">
                                Kiemelt
                              </div>
                              <div className="text-xs text-white/45">
                                {activeItem?.text ?? ''}
                              </div>
                            </div>

                            <div className="space-y-3">
                              {featuredPages.map((p) => {
                                const hero = heroForPage(p);
                                const href = pageHref(locale, p);
                                const cover =
                                  coverUrlForPage(p) ??
                                  (Object.prototype.hasOwnProperty.call(
                                    coverCache,
                                    p.slug
                                  )
                                    ? coverCache[p.slug]
                                    : null);

                                return (
                                  <Link
                                    key={p.id}
                                    href={href}
                                    onClick={makeNavClick(href, null)}
                                    className={cn(
                                      'group block rounded-2xl p-3 transition',
                                      'bg-white/5 hover:bg-white/10'
                                    )}
                                  >
                                    <div className="relative overflow-hidden rounded-xl">
                                      {cover ? (
                                        <div
                                          className="h-28 w-full bg-cover bg-center"
                                          style={{
                                            backgroundImage: `url(${cover})`,
                                          }}
                                        />
                                      ) : (
                                        <div className="h-28 w-full bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                                      )}
                                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
                                    </div>

                                    <div className="mt-2">
                                      <div className="text-sm text-white">
                                        {hero.heading}
                                      </div>
                                      {hero.sub && (
                                        <div className="mt-0.5 line-clamp-2 text-xs text-white/60">
                                          {hero.sub}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        </div>
                      )}
                  </div>

                  <div className="mt-auto pb-2 pt-12">
                    <div className="flex w-full flex-row items-start gap-2.5">
                      {rightItems.map((item, i) => {
                        const booking = isBookingText(item.text);
                        const isPrimary = i === rightItems.length - 1;
                        const href = navHref(locale, item.URL);

                        return (
                          <Button
                            key={item.text}
                            variant={isPrimary ? 'primary' : 'simple'}
                            as={Link}
                            href={href}
                            target={item.target ?? undefined}
                            onClick={makeNavClick(href, item.target)}
                            className={cn(booking && 'group w-full py-5')}
                          >
                            {booking ? (
                              <span className="inline-flex items-center justify-center gap-2">
                                <CalendarIcon className="h-4 w-4" />
                                <span>{item.text}</span>
                                <span className="w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-5">
                                  →
                                </span>
                              </span>
                            ) : (
                              item.text
                            )}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={cn(
          'relative z-[70] w-full transition-colors duration-200',
          !open && scrolled
            ? cn(
                'bg-white/70 supports-[backdrop-filter]:bg-white/12',
                'supports-[backdrop-filter]:backdrop-blur-2xl supports-[backdrop-filter]:backdrop-saturate-150',
                'shadow-[0_10px_30px_rgba(0,0,0,0.10)]'
              )
            : 'bg-transparent shadow-none'
        )}
        onMouseMove={scheduleToneUpdate}
        onTouchStart={scheduleToneUpdate}
      >
        <Container>
          <div className="flex w-full items-center justify-between px-4 py-3 lg:px-8">
            <div className="flex items-center gap-2 shrink-0 [&_img]:h-8 [&_img]:w-auto [&_img]:object-contain [&_img]:block [&_img]:max-h-8 [&_svg]:h-8 [&_svg]:w-auto">
              {hasLogoImage ? (
                <Logo
                  locale={locale}
                  image={logo?.image}
                  company={logo?.company}
                />
              ) : companyText ? (
                <Link
                  href={navHref(locale, '/')}
                  className={cn(
                    'inline-flex items-center text-base font-thin ',
                    'md:leading-tight tracking-tight',
                    'font-medium',
                    toggleColorClass
                  )}
                >
                  {companyText}
                </Link>
              ) : (
                <Logo
                  locale={locale}
                  image={logo?.image}
                  company={logo?.company}
                />
              )}
            </div>

            <MenuToggle
              ref={btnRef}
              open={open}
              onClick={toggleMenu}
              className={toggleColorClass}
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export const MobileNavbar = (props: Props) => (
  <UnifiedNavbar {...props} enableFeatured={false} />
);
