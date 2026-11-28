// mobile-navbar.tsx
'use client';

import {
  AnimatePresence,
  m as motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import {
  ArrowUpRight,
  CalendarIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { LocaleSwitcher } from '../locale-switcher';
import { useNavReveal } from './nav-reveal';
import { Container } from '@/components/container';
import { Button } from '@/components/elements/button';
import { Logo } from '@/components/logo';
import { STATUS_BAR_COLOR } from '@/components/status-bar-tint';
import { huf, pageOfPlan, parsePrice } from '@/lib/shared/plan-pages';
import { cn } from '@/lib/utils';
import { navigateWithTransition } from '@/lib/view-transition-nav';

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

// mobile-navbar.tsx

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

const navHref = (locale: string, url: string) => {
  if (!url) return `/${locale}`;

  // külső link (pl alteg booking)
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  if (url === '/') return `/${locale}`;

  return `/${locale}${url.startsWith('/') ? url : `/${url}`}`;
};
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

/** mobil almenü lapozója (a davelopment booking NavMegaMenu mintája): egy egész kártya + a következő széle, húzásra a
 *  helyére pattan, a kártyák kitöltik a rendelkezésre álló magasságot; alatta pöttyök és a gombok */
function ServiceCarousel({
  items,
  foot,
}: {
  items: React.ReactNode[];
  foot: React.ReactNode;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [idx, setIdx] = useState(0);
  const onScroll = () => {
    const el = ref.current;
    const first = el?.children[0] as HTMLElement | undefined;
    if (!el || !first) return;
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
    setIdx(
      atEnd
        ? items.length - 1
        : Math.round(el.scrollLeft / (first.offsetWidth + 10))
    ); // 10 = gap-2.5
  };
  return (
    <>
      <ul
        ref={ref}
        onScroll={onScroll}
        className="flex min-h-0 flex-1 snap-x snap-mandatory scroll-px-5 gap-2.5 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 34,
              delay: 0.1 + Math.min(i, 2) * 0.05,
            }}
            className="flex w-[82%] shrink-0 snap-start"
          >
            {it}
          </motion.li>
        ))}
      </ul>
      <div aria-hidden className="flex shrink-0 justify-center gap-1.5 pt-4">
        {items.map((_, i) => (
          <span
            key={i}
            className={cn(
              'h-1.5 rounded-full transition-all duration-200',
              i === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/25'
            )}
          />
        ))}
      </div>
      <div className="shrink-0 px-5 pt-4">{foot}</div>
    </>
  );
}

function heroForPage(p: PageLike) {
  const hero = findHeroLikeComponent(p) as {
    heading?: string | null;
    sub_heading?: string | null;
    [k: string]: any;
  } | null;

  return {
    // a menüben a hero címe, de a helyszín („Budapesten”) nélkül — az csak a Google-nek kell az oldalon
    heading: (hero?.heading ?? p.slug).replace(/\s+Budapest(?:en)?\b/g, ''),
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
  // a szerver által előre beletett, kisebb (Strapi medium/small) borító — lib/shared/nav-covers.ts
  const pre = (p as any)?.navCover;
  if (typeof pre === 'string' && pre) return pre;
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
  /** nyitva (X) rövidebb vonalak — az 50 px-es keresztben túl nagy volt (Dave, 2026-11-28) */
  const LINE_W_OPEN = 28;
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
    transitionProperty: 'transform, top, opacity, width, margin-left',
    transitionDuration: '320ms',
    transitionTimingFunction: 'cubic-bezier(.22,1,.36,1)',
  };

  const topClosed1 = BTN / 2 - OFFSET;
  const topClosed2 = BTN / 2 + OFFSET;
  const topOpen = BTN / 2;

  const openSize: React.CSSProperties = open
    ? { width: LINE_W_OPEN, marginLeft: -(LINE_W_OPEN / 2) }
    : {};

  const line1: React.CSSProperties = {
    ...baseLineStyle,
    ...openSize,
    top: open ? topOpen : topClosed1,
    transform: open
      ? 'translateZ(0) rotate(45deg)'
      : 'translateZ(0) rotate(0deg)',
  };

  const line2: React.CSSProperties = {
    ...baseLineStyle,
    ...openSize,
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
  // a görgetéses megjelenés (index.tsx): üveges háttér csak lecsúszott állapotban; nyitva a menü nem tűnhet el
  const navReveal = useNavReveal();
  useEffect(() => {
    navReveal.setMenuOpen(open);
  }, [open, navReveal]);
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
      // oldalon belüli cél: View Transitionnel navigál (lib/view-transition-nav.ts)
      if (
        target !== '_blank' &&
        href.startsWith('/') &&
        !href.startsWith('//')
      ) {
        // a The Place Studio mintájára: a nyitott menü a régi oldallal együtt tolódik ki (a bezárás az új képbe kerül)
        navigateWithTransition(router, href, closeMenu);
        return;
      }
      pendingNavRef.current = { href, target };
      closeMenu();
    },
    [closeMenu, router]
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

  const SALON_PHONE = '+36 20 348 8481';
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

      // a sáv SAJÁT (üveges) hátterét ne vegye figyelembe, csak ami alatta van — különben a hero tetejére visszagörgetve
      // a lecsúszott sáv üvegét „világos háttérnek” látja, és sötét marad a szöveg
      const inferred = inferToneFromPoint(
        x,
        y,
        (btn.closest('nav') as HTMLElement | null) ?? btn
      );
      if (inferred) {
        setTone(inferred);
        return;
      }

      setTone(scrollRef.current > 120 ? 'light' : 'dark');
    });
  }, []);

  // a menü színe (mi van a gomb alatt) — görgetés közben legfeljebb 150 ms-onként, a lap tetején azonnal (telefonon a
  // képkockánkénti elementsFromPoint + getComputedStyle szaggatást okozott)
  const toneAt = useRef(0);
  useMotionValueEvent(scrollY, 'change', (v) => {
    scrollRef.current = v;
    setScrolled(v > 14);
    const now = performance.now();
    if (v <= 2 || now - toneAt.current > 150) {
      toneAt.current = now;
      scheduleToneUpdate();
    }
  });

  useEffect(() => {
    scheduleToneUpdate();
  }, [scheduleToneUpdate, open, navReveal.revealed]);

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

    const prevBg = html.style.backgroundColor;

    const sbw = window.innerWidth - html.clientWidth;
    html.style.overflow = 'hidden';
    if (sbw > 0) html.style.paddingRight = `${sbw}px`;
    // telefonon a képernyő legalját (a Safari alsó sávja alatti csíkot) a lap háttérszíne festi → nyitott menünél a menü
    // aljának sötétje, különben világosabb csík látszik alul (2026-11-28)
    html.style.backgroundColor = '#08090a';

    return () => {
      html.style.overflow = prevOverflow;
      html.style.paddingRight = prevPaddingRight;
      html.style.backgroundColor = prevBg;
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

  // gépen a „Kiemelt” kártyák akkor is látszanak, ha a Szolgáltatások nincs lenyitva (az első aloldalas menüpontból)
  const featuredItem = useMemo(
    () =>
      activeItem ?? leftItems.find((x) => (x.pages?.length ?? 0) > 0) ?? null,
    [activeItem, leftItems]
  );

  // gépen: ha a Szolgáltatások le van nyitva, a Kiemelt eltűnik, a kártyák vízszintesen a teljes szélességet kapják
  const servicesOpen = leftItems.some(
    (x) => x.id === openId && (x.pages?.length ?? 0) > 0
  );

  const featuredPages = useMemo(() => {
    const pages = featuredItem?.pages ?? [];
    return pages.slice(0, 4); // gépen 2×2 rács
  }, [featuredItem]);

  useEffect(() => {
    if (!open) return;
    if (!STRAPI_BASE) return;

    // telefonon a lenyíló listában minden szolgáltatásnak kell kép (gépen a kiemelt 3 kártya is ebből él)
    const pages = featuredItem?.pages ?? [];
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
  }, [open, locale, featuredItem]);

  // kezdő ár szolgáltatásoldalanként (élőben a Strapi árlistájából) — a mobil lenyíló képes listájához
  const [fromPrice, setFromPrice] = useState<Record<string, string>>({});
  useEffect(() => {
    if (!open || !STRAPI_BASE || Object.keys(fromPrice).length) return;
    const ac = new AbortController();
    const q = new URLSearchParams({
      locale,
      'fields[0]': 'name',
      'fields[1]': 'price',
      'pagination[pageSize]': '100',
    });
    fetch(`${STRAPI_BASE}/api/plans?${q}`, { signal: ac.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        const min: Record<string, number> = {};
        for (const pl of j?.data ?? []) {
          if (!pl?.name) continue;
          const slug = pageOfPlan(pl.name);
          const v = parsePrice(pl.price).min;
          if (v && (!min[slug] || v < min[slug])) min[slug] = v;
        }
        setFromPrice(
          Object.fromEntries(
            Object.entries(min).map(([k, v]) => [k, `${huf(v)}-tól`])
          )
        );
      })
      .catch(() => {});
    return () => ac.abort();
  }, [open, locale, fromPrice]);

  const topItemTextClass = useMemo(
    () =>
      cn(
        'leading-[1.02]',
        enableFeatured ? 'text-4xl lg:text-5xl' : 'text-4xl'
      ),
    [enableFeatured]
  );

  // hívás + foglalás: mindig egymás alatt, egyforma szélesen, felül a (fehér) foglalás, alatta a (sötét) hívás (Dave, 2026-11-27)
  const menuButtons = (
    <div className="flex w-full flex-col gap-2.5">
      <Button
        variant="primary"
        as="a"
        href={`tel:${SALON_PHONE.replace(/\s/g, '')}`}
        className="group order-2 w-full py-5"
      >
        <span className="inline-flex items-center justify-center gap-2">
          <Phone className="h-4 w-4" />
          <span>Hívás</span>
        </span>
      </Button>
      {rightItems.map((item) => {
        const booking = isBookingText(item.text);
        const href = navHref(locale, item.URL);

        return (
          <Button
            key={item.text}
            variant="outline"
            as={Link}
            href={href}
            target={item.target ?? undefined}
            onClick={makeNavClick(href, item.target)}
            className={cn(
              'border-white bg-white text-lightblack hover:bg-white/90 hover:text-lightblack',
              booking && 'group order-1 w-full py-5'
            )}
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
            data-no-page-leave
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
            {/* telefonon a menü teteje a notch-sáv színéből (STATUS_BAR_COLOR) indul és lágyan a menü sötétjébe vált — így
                a notch és a nyitott menü között nincs látható határ (2026-11-28) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[260px] lg:hidden"
              style={{
                background: `linear-gradient(to bottom, ${STATUS_BAR_COLOR} 0px, ${STATUS_BAR_COLOR} 40px, ${STATUS_BAR_COLOR}99 120px, transparent 260px)`,
              }}
            />
            <div className="relative min-h-screen">
              <Container>
                <div className="flex min-h-screen flex-col px-4 pb-10 lg:px-8">
                  <div className="flex w-full justify-end pt-6">
                    <LocaleSwitcher currentLocale={locale} />
                  </div>

                  <div className="h-28 lg:h-28" />

                  <div
                    className={cn(
                      'w-full',
                      enableFeatured &&
                        'lg:grid lg:grid-cols-12 lg:items-center lg:gap-12'
                    )}
                  >
                    <div
                      className={cn(
                        'flex w-full flex-col items-start justify-start gap-6 md:gap-12',
                        enableFeatured &&
                          (servicesOpen ? 'lg:col-span-12' : 'lg:col-span-7')
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

                              <ChevronRight
                                aria-hidden
                                className="h-6 w-6 text-primary lg:hidden"
                              />
                              <motion.span
                                aria-hidden
                                initial={false}
                                animate={isOpen ? 'open' : 'closed'}
                                className="hidden lg:inline-flex"
                                style={{
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

                            {/* gépen lenyíló lista; telefonon helyette oldalra csúszó, képes almenü (lent) */}
                            <div className="hidden lg:block">
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
                                      maxHeight: 900,
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
                                    className="pb-1"
                                  >
                                    <div className="grid auto-cols-fr grid-flow-col gap-3">
                                      {pages.map((p) => {
                                        const hero = heroForPage(p);
                                        const href = pageHref(locale, p);
                                        const cover =
                                          coverUrlForPage(p) ??
                                          coverCache[p.slug] ??
                                          null;
                                        const price = fromPrice[p.slug];

                                        return (
                                          <Link
                                            key={p.id}
                                            href={href}
                                            onClick={makeNavClick(href, null)}
                                            className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white/10"
                                          >
                                            {cover ? (
                                              <div
                                                className="absolute inset-0 bg-cover"
                                                style={{
                                                  backgroundImage: `url(${cover})`,
                                                  backgroundPosition:
                                                    'center 25%',
                                                }}
                                              />
                                            ) : null}
                                            <span
                                              aria-hidden
                                              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                                            />
                                            <span className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
                                              <span className="min-w-0">
                                                <span className="block text-[15px] font-light leading-tight text-white">
                                                  {
                                                    hero.heading.split(
                                                      /\s+[–—-]\s+/
                                                    )[0]
                                                  }
                                                </span>
                                                {price ? (
                                                  <span className="mt-1 block text-xs text-muted">
                                                    {price}
                                                  </span>
                                                ) : null}
                                              </span>
                                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-lightblack transition-transform duration-200 group-hover:scale-105">
                                                <ArrowUpRight
                                                  className="h-3.5 w-3.5"
                                                  strokeWidth={2}
                                                />
                                              </span>
                                            </span>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                    <Link
                                      href={topHref}
                                      target={item.target ?? undefined}
                                      onClick={makeNavClick(
                                        topHref,
                                        item.target
                                      )}
                                      className="mt-4 inline-block text-[15px] text-white/75 hover:text-white"
                                    >
                                      Összes szolgáltatás és ár →
                                    </Link>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        );
                      })}

                      {/* gépen a gombok a bal oszlopban */}
                      <div className="hidden w-full max-w-md lg:block">
                        {menuButtons}
                      </div>
                    </div>

                    {enableFeatured &&
                      !servicesOpen &&
                      (featuredItem?.pages?.length ?? 0) > 0 && (
                        <div className="hidden lg:col-span-5 lg:block">
                          <motion.div
                            key={featuredItem?.id ?? 'featured'}
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
                                {featuredItem?.text ?? ''}
                              </div>
                            </div>

                            {/* gépen ugyanaz a kártya, mint a mobil almenüben (teli kép, alul átmenet, név + ár + nyíl), 2×2-ben, álló arányban */}
                            <div className="grid grid-cols-2 gap-3">
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
                                const price = fromPrice[p.slug];

                                return (
                                  <Link
                                    key={p.id}
                                    href={href}
                                    onClick={makeNavClick(href, null)}
                                    className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white/10"
                                  >
                                    {cover ? (
                                      <div
                                        className="absolute inset-0 bg-cover"
                                        style={{
                                          backgroundImage: `url(${cover})`,
                                          backgroundPosition: 'center 25%',
                                        }}
                                      />
                                    ) : null}
                                    <span
                                      aria-hidden
                                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                                    />
                                    <span className="absolute inset-x-3.5 bottom-3.5 flex items-end justify-between gap-2">
                                      <span className="min-w-0">
                                        <span className="block text-base font-light leading-tight text-white">
                                          {hero.heading.split(/\s+[–—-]\s+/)[0]}
                                        </span>
                                        {price ? (
                                          <span className="mt-1 block text-xs text-muted">
                                            {price}
                                          </span>
                                        ) : null}
                                      </span>
                                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-lightblack transition-transform duration-200 group-hover:scale-105">
                                        <ArrowUpRight
                                          className="h-3.5 w-3.5"
                                          strokeWidth={2}
                                        />
                                      </span>
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        </div>
                      )}
                  </div>

                  {/* telefonon a menü alján */}
                  <div className="mt-auto pb-2 pt-12 lg:hidden">
                    {menuButtons}
                  </div>
                </div>
              </Container>
            </div>

            {/* TELEFON: a Szolgáltatások almenüje — oldalra csúszik be; a davelopment booking „Kinek” almenüjének mintája:
                lapozható, a képernyőt kitöltő képes kártyák (cím + kezdő ár a képen), pöttyök, alul a gombok */}
            <AnimatePresence>
              {activeItem && (activeItem.pages?.length ?? 0) > 0 && (
                <motion.div
                  key="sub"
                  data-no-page-leave
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.32, ease: EASE }}
                  className="fixed inset-0 z-50 flex h-[100svh] flex-col bg-[#141414] pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:hidden"
                >
                  <div className="shrink-0 px-5 pt-[calc(env(safe-area-inset-top)+4.5rem)]">
                    <button
                      type="button"
                      onClick={() => setOpenId(null)}
                      className="-ml-1 inline-flex items-center gap-1 py-2 text-[15px] text-white/70"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <ChevronLeft className="h-5 w-5" />
                      Vissza
                    </button>
                    <span
                      className={cn(
                        'mt-1 block pb-5 text-primary',
                        topItemTextClass
                      )}
                    >
                      {activeItem.text}
                    </span>
                  </div>

                  <ServiceCarousel
                    items={(activeItem.pages ?? []).map((p) => {
                      const hero = heroForPage(p);
                      const href = pageHref(locale, p);
                      const cover =
                        coverUrlForPage(p) ?? coverCache[p.slug] ?? null;
                      const price = fromPrice[p.slug];
                      return (
                        <Link
                          key={p.id}
                          href={href}
                          onClick={makeNavClick(href, null)}
                          className="relative block min-h-[200px] w-full flex-1 overflow-hidden rounded-3xl bg-white/10 active:opacity-90"
                        >
                          {cover ? (
                            <div
                              className="absolute inset-0 bg-cover"
                              style={{
                                backgroundImage: `url(${cover})`,
                                backgroundPosition: 'center 25%',
                              }}
                            />
                          ) : null}
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                          />
                          <span className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                            <span className="min-w-0">
                              <span className="block text-[22px] font-light leading-tight text-white">
                                {hero.heading.split(/\s+[–—-]\s+/)[0]}
                              </span>
                              {price ? (
                                <span className="mt-1 block text-sm text-muted">
                                  {price}
                                </span>
                              ) : null}
                            </span>
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lightblack">
                              <ArrowUpRight
                                className="h-4 w-4"
                                strokeWidth={2}
                              />
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                    foot={(() => {
                      const allHref = navHref(locale, activeItem.URL);
                      const b = rightItems.find((x) => isBookingText(x.text));
                      const bHref = b ? navHref(locale, b.URL) : null;
                      return (
                        <div className="flex flex-col gap-2.5">
                          {b && bHref ? (
                            <Button
                              variant="primary"
                              as={Link}
                              href={bHref}
                              target={b.target ?? undefined}
                              onClick={makeNavClick(bHref, b.target)}
                              className="w-full py-4"
                            >
                              <span className="inline-flex items-center justify-center gap-2">
                                <CalendarIcon className="h-4 w-4" />
                                <span>{b.text}</span>
                              </span>
                            </Button>
                          ) : null}
                          <Link
                            href={allHref}
                            onClick={makeNavClick(allHref, activeItem.target)}
                            className="py-2 text-center text-[15px] text-white/75"
                          >
                            Összes szolgáltatás és ár →
                          </Link>
                        </div>
                      );
                    })()}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={cn(
          'relative z-[70] w-full transition-colors duration-200',
          !open && (navReveal.revealed ?? scrolled)
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
