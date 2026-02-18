'use client';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Container } from '@/components/container';
import { Heading } from '@/components/elements/heading';
import { Subheading } from '@/components/elements/subheading';
import { cn } from '@/lib/utils';

type Props = {
  heading?: string | null;
  sub_heading?: string | null;

  effective_form?: string | null;
  last_updated?: string | null;

  body?: string | null;

  email?: string | null;
  phone?: string | null;
  address?: string | null;

  company_name?: string | null;
  company_id?: string | null;

  hosting_provider?: string | null;
  booking_provider?: string | null;
  analytics_tools?: string | null;
  third_parties?: string | null;

  download_url?: string | null;
};

type TocItem = { id: string; text: string; level: 2 | 3 };

function formatDateHU(iso?: string | null) {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return new Intl.DateTimeFormat('hu-HU', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(d);
  } catch {
    return iso ?? '';
  }
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöôő]/g, 'o')
    .replace(/[úùüûű]/g, 'u')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function applyTemplate(body: string, p: Props) {
  const map: Record<string, string> = {
    '[effective_form]': p.effective_form ?? '',
    '[last_updated]': p.last_updated ?? '',
    '[email]': p.email ?? '',
    '[phone]': p.phone ?? '',
    '[address]': p.address ?? '',
    '[company_name]': p.company_name ?? '',
    '[company_id]': p.company_id ?? '',
    '[hosting_provider]': p.hosting_provider ?? '',
    '[booking_provider]': p.booking_provider ?? '',
    '[analytics_tools]': p.analytics_tools ?? '',
    '[third_parties]': p.third_parties ?? '',
  };

  let out = body;
  for (const [k, v] of Object.entries(map)) out = out.split(k).join(v || '');
  return out;
}

function parseBody(body: string): { toc: TocItem[]; nodes: React.ReactNode[] } {
  const lines = body.replace(/\r\n/g, '\n').split('\n');

  const toc: TocItem[] = [];
  const nodes: React.ReactNode[] = [];

  let listBuffer: string[] = [];
  const flushList = (key: string) => {
    if (!listBuffer.length) return;
    nodes.push(
      <ul key={key} className="mt-3 space-y-2 pl-5 text-secondary/80">
        {listBuffer.map((t, i) => (
          <li key={`${key}-li-${i}`} className="list-disc">
            {t}
          </li>
        ))}
      </ul>
    );
    listBuffer = [];
  };

  const pushParagraph = (text: string, key: string) => {
    nodes.push(
      <p key={key} className="mt-3 text-[15px] leading-7 text-secondary/80">
        {text}
      </p>
    );
  };

  for (let i = 0; i < lines.length; i++) {
    const line = (lines[i] ?? '').trim();

    if (!line) {
      flushList(`list-${i}`);
      continue;
    }

    if (line.startsWith('- ')) {
      listBuffer.push(line.slice(2).trim());
      continue;
    }

    const h3 = line.startsWith('### ') ? line.slice(4).trim() : null;
    const h2 = !h3 && line.startsWith('## ') ? line.slice(3).trim() : null;
    const h1 =
      !h2 && !h3 && line.startsWith('# ') ? line.slice(2).trim() : null;

    if (h1 || h2 || h3) {
      flushList(`list-before-h-${i}`);

      const text = (h3 ?? h2 ?? h1 ?? '').trim();
      const id = slugify(text);

      if (h3) toc.push({ id, text, level: 3 });
      else toc.push({ id, text, level: 2 });

      if (h3) {
        nodes.push(
          <h3
            key={`h3-${i}`}
            id={id}
            className="mt-7 scroll-mt-[var(--legal-scroll-mt)] text-base font-semibold tracking-tight text-secondary"
          >
            {text}
          </h3>
        );
      } else {
        nodes.push(
          <h2
            key={`h2-${i}`}
            id={id}
            className="mt-10 scroll-mt-[var(--legal-scroll-mt)] text-lg font-semibold tracking-tight text-secondary"
          >
            {text}
          </h2>
        );
      }
      continue;
    }

    flushList(`list-before-p-${i}`);
    pushParagraph(line, `p-${i}`);
  }

  flushList(`list-end`);
  return { toc, nodes };
}

function MetaPill({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-charcoal px-3 py-1 text-xs text-secondary/80">
      <span className="text-secondary/60">{label}</span>
      <span className="font-medium text-secondary">{value}</span>
    </div>
  );
}

export function Privacy(props: Props) {
  const safeRawBody = (props.body ?? '').trim();

  const finalBody = useMemo(() => {
    if (!safeRawBody) return '';
    return applyTemplate(safeRawBody, props).trim();
  }, [safeRawBody, props]);

  const parsed = useMemo(() => {
    if (!finalBody)
      return { toc: [] as TocItem[], nodes: [] as React.ReactNode[] };
    return parseBody(finalBody);
  }, [finalBody]);

  const [activeId, setActiveId] = useState<string>('');

  // ✅ anchor offset (header)
  useEffect(() => {
    document.documentElement.style.setProperty('--legal-scroll-mt', '120px');
    return () => {
      document.documentElement.style.removeProperty('--legal-scroll-mt');
    };
  }, []);

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    try {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    } catch {
      location.hash = `#${id}`;
    }
  }, []);

  // ✅ Scrollspy
  useEffect(() => {
    if (!parsed.toc.length) return;

    const els = parsed.toc
      .map((t) => document.getElementById(t.id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0)
          );
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { root: null, rootMargin: '-15% 0px -75% 0px', threshold: [0, 1] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [parsed.toc]);

  const effectiveHU = formatDateHU(props.effective_form);
  const updatedHU = formatDateHU(props.last_updated);

  const hasMeta =
    !!props.email ||
    !!props.phone ||
    !!props.address ||
    !!props.company_name ||
    !!props.company_id ||
    !!props.hosting_provider ||
    !!props.booking_provider ||
    !!props.analytics_tools ||
    !!props.third_parties;

  // ✅ FIXED->ABSOLUTE pinning
  const contentWrapRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const [sidebarMode, setSidebarMode] = useState<'fixed' | 'absolute'>('fixed');
  const [sidebarTopPx, setSidebarTopPx] = useState<number>(96); // dynamic (header alatt)
  const [sidebarLeftPx, setSidebarLeftPx] = useState<number>(24);
  const [absoluteTopPx, setAbsoluteTopPx] = useState<number>(0);

  useEffect(() => {
    const el = contentWrapRef.current;
    if (!el || !parsed.toc.length) return;

    const recompute = () => {
      const header = headerRef.current;
      const headerRect = header?.getBoundingClientRect();

      // sidebar top: header alja + kis spacing (viewporthoz)
      const top = Math.max(80, Math.round((headerRect?.bottom ?? 0) + 16));
      setSidebarTopPx(top);

      // left: containerhez igazítjuk (ne a viewport bal szélére)
      const wrapRect = el.getBoundingClientRect();
      // 280px sidebar + 40px gap = 320px "reserved"
      const left = Math.round(wrapRect.left);
      setSidebarLeftPx(left);

      // mikor érünk a content aljához? akkor ABSOLUTE mód
      // el offsetTop-ot nem szeretjük layout shift miatt -> rect + scrollY
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const elTopY = wrapRect.top + scrollY;
      const elBottomY = wrapRect.bottom + scrollY;

      // sidebar height kb: viewport - top - margin
      const sidebarH = Math.max(320, window.innerHeight - top - 24);

      // ha a viewport alja túlmegy a content alján, pin-eljük
      const viewportBottomY = scrollY + top + sidebarH;
      const shouldPin = viewportBottomY > elBottomY;

      if (shouldPin) {
        setSidebarMode('absolute');
        // absolute top: content bottom - sidebar height (a contentWrapRef-hez képest)
        const absTop = Math.max(0, Math.round(elBottomY - sidebarH - elTopY));
        setAbsoluteTopPx(absTop);
      } else {
        setSidebarMode('fixed');
        setAbsoluteTopPx(0);
      }
    };

    recompute();
    window.addEventListener('scroll', recompute, { passive: true });
    window.addEventListener('resize', recompute);

    return () => {
      window.removeEventListener('scroll', recompute);
      window.removeEventListener('resize', recompute);
    };
  }, [parsed.toc.length]);

  return (
    <section className="py-10 sm:py-14">
      <Container>
        {/* Header (ehhez igazítjuk a sidebar top-ot) */}
        <div ref={headerRef} className="max-w-3xl">
          <Subheading className="text-secondary/70">Jogi</Subheading>
          <Heading className="mt-2">
            {props.heading ?? 'Jogi dokumentum'}
          </Heading>

          {props.sub_heading ? (
            <p className="mt-3 text-[15px] leading-7 text-secondary/70">
              {props.sub_heading}
            </p>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            <MetaPill label="Hatályos" value={effectiveHU} />
            <MetaPill label="Frissítve" value={updatedHU} />
          </div>
        </div>

        {/* Content wrapper: ehhez pin-eljük az ABSOLUTE sidebar-t */}
        <div ref={contentWrapRef} className="mt-10 lg:relative">
          {/* Desktop sidebar */}
          {parsed.toc.length ? (
            <div className="hidden lg:block">
              <div
                className={cn(
                  'w-[280px]',
                  sidebarMode === 'fixed' ? 'fixed' : 'absolute'
                )}
                style={
                  sidebarMode === 'fixed'
                    ? { top: sidebarTopPx, left: sidebarLeftPx }
                    : { top: absoluteTopPx, left: 0 }
                }
              >
                <div className="rounded-2xl border border-charcoal bg-white p-4 shadow-sm">
                  <div className="text-xs font-semibold tracking-wide text-secondary/70">
                    Tartalom
                  </div>

                  <nav
                    className="mt-3 flex flex-col gap-1.5 overflow-auto pr-1"
                    style={{
                      maxHeight: `calc(100vh - ${sidebarTopPx}px - 24px)`,
                    }}
                  >
                    {parsed.toc.map((t) => {
                      const isActive = activeId === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => scrollToId(t.id)}
                          className={cn(
                            'text-left rounded-md px-2 py-1.5 text-sm transition',
                            t.level === 3
                              ? 'ml-3 text-secondary/70'
                              : 'text-secondary/80',
                            isActive
                              ? 'bg-muted/20 text-secondary'
                              : 'hover:bg-muted/10 hover:text-secondary'
                          )}
                        >
                          {t.text}
                        </button>
                      );
                    })}
                  </nav>

                  {props.download_url ? (
                    <div className="mt-4">
                      <a
                        href={props.download_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-full items-center justify-center rounded-md border border-charcoal bg-white px-4 text-sm font-semibold text-secondary transition hover:bg-muted/10"
                      >
                        PDF letöltése
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}

          {/* Main content column (reserve space for sidebar only on desktop) */}
          <div
            className={cn('min-w-0', parsed.toc.length ? 'lg:pl-[320px]' : '')}
          >
            {/* Mobile TOC */}
            {parsed.toc.length ? (
              <div className="lg:hidden rounded-2xl border border-charcoal bg-white p-4 shadow-sm">
                <div className="text-xs font-semibold tracking-wide text-secondary/70">
                  Tartalom
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {parsed.toc.map((t) => (
                    <button
                      key={`m-${t.id}`}
                      type="button"
                      onClick={() => scrollToId(t.id)}
                      className={cn(
                        'rounded-full border border-charcoal px-3 py-1 text-xs transition',
                        activeId === t.id
                          ? 'bg-muted/20 text-secondary'
                          : 'text-secondary/80 hover:bg-muted/10 hover:text-secondary'
                      )}
                    >
                      {t.text}
                    </button>
                  ))}
                </div>

                {props.download_url ? (
                  <div className="mt-4">
                    <a
                      href={props.download_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-full items-center justify-center rounded-md border border-charcoal bg-white px-4 text-sm font-semibold text-secondary transition hover:bg-muted/10"
                    >
                      PDF letöltése
                    </a>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* Reading panel */}
            <article className="mt-6 rounded-2xl border border-charcoal bg-white p-5 shadow-sm sm:p-7">
              {finalBody ? (
                <div className="text-secondary">{parsed.nodes}</div>
              ) : (
                <p className="text-sm text-secondary/70">Nincs tartalom.</p>
              )}
            </article>

            {/* Meta / Contact card */}
            {hasMeta ? (
              <div className="mt-6 rounded-2xl border border-charcoal bg-white p-5 shadow-sm sm:p-6">
                <div className="text-sm font-semibold text-secondary">
                  Kapcsolat és szolgáltatók
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {props.company_name ? (
                    <div className="rounded-xl border border-charcoal p-4">
                      <div className="text-xs text-secondary/60">
                        Adatkezelő
                      </div>
                      <div className="mt-1 text-sm font-semibold text-secondary">
                        {props.company_name}
                      </div>
                      {props.company_id ? (
                        <div className="mt-1 text-xs text-secondary/70">
                          {props.company_id}
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  {props.email || props.phone || props.address ? (
                    <div className="rounded-xl border border-charcoal p-4">
                      <div className="text-xs text-secondary/60">
                        Elérhetőség
                      </div>
                      {props.email ? (
                        <div className="mt-1 text-sm text-secondary">
                          <a
                            className="underline underline-offset-4"
                            href={`mailto:${props.email}`}
                          >
                            {props.email}
                          </a>
                        </div>
                      ) : null}
                      {props.phone ? (
                        <div className="mt-1 text-sm text-secondary">
                          <a
                            className="underline underline-offset-4"
                            href={`tel:${props.phone}`}
                          >
                            {props.phone}
                          </a>
                        </div>
                      ) : null}
                      {props.address ? (
                        <div className="mt-1 text-xs text-secondary/70">
                          {props.address}
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  {props.hosting_provider ? (
                    <div className="rounded-xl border border-charcoal p-4">
                      <div className="text-xs text-secondary/60">Hosting</div>
                      <div className="mt-1 text-sm text-secondary">
                        {props.hosting_provider}
                      </div>
                      <div className="mt-1 text-xs text-secondary/70">
                        Frontend: Vercel • VPS: RackForest • Email: cPanel
                      </div>
                    </div>
                  ) : null}

                  {props.booking_provider ? (
                    <div className="rounded-xl border border-charcoal p-4">
                      <div className="text-xs text-secondary/60">
                        Foglalórendszer
                      </div>
                      <div className="mt-1 text-sm text-secondary">
                        {props.booking_provider}
                      </div>
                    </div>
                  ) : null}

                  {props.analytics_tools ? (
                    <div className="rounded-xl border border-charcoal p-4">
                      <div className="text-xs text-secondary/60">Analitika</div>
                      <div className="mt-1 text-sm text-secondary">
                        {props.analytics_tools}
                      </div>
                    </div>
                  ) : null}

                  {props.third_parties ? (
                    <div className="rounded-xl border border-charcoal p-4 sm:col-span-2">
                      <div className="text-xs text-secondary/60">
                        Harmadik felek
                      </div>
                      <div className="mt-1 text-sm text-secondary/80 whitespace-pre-line">
                        {props.third_parties}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
