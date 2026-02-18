// components/ui/section-id.ts
'use client';

let _inited = false;

function ensureInit() {
  if (_inited) return;
  _inited = true;

  if (typeof window === 'undefined') return;

  const smoothTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const stripHashKeepPath = () => {
    const url = window.location.pathname + window.location.search;
    window.history.replaceState(null, '', url);
  };

  const run = (rawHash: string) => {
    const id = rawHash.startsWith('#') ? rawHash.slice(1) : rawHash;
    if (!id) return;

    // csak akkor, ha tényleg létezik a célpont
    if (!document.getElementById(id)) return;

    // ✅ hash eltüntetése → nincs instant jump / újra-jump
    stripHashKeepPath();

    // ✅ smooth scroll (dupla RAF, hogy tuti meglegyen a layout)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => smoothTo(id));
    });
  };

  // ✅ 1) Betöltéskor: ha valaki URL-lel jön (#id), smooth legyen
  // (a böngésző addigra lehet már ugrott, de ezzel “szépítjük” és kivesszük a hash-t)
  queueMicrotask(() => run(window.location.hash || ''));

  // ✅ 2) Hashchange: ha valami mégis hash-t állít, smooth + hash törlés
  const onHashChange = () => run(window.location.hash || '');
  window.addEventListener('hashchange', onHashChange);

  // ✅ 3) CLICK CAPTURE: EZ A LÉNYEG — itt fogjuk meg az instant jump-ot
  const onClickCapture = (e: MouseEvent) => {
    // csak bal klikk, módosító gombok nélkül
    if (e.defaultPrevented) return;
    if (e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const target = e.target as HTMLElement | null;
    if (!target) return;

    const a = target.closest('a') as HTMLAnchorElement | null;
    if (!a) return;

    // ha new tab / download / target=_blank → nem nyúlunk
    if (a.target && a.target !== '_self') return;
    if (a.hasAttribute('download')) return;

    const hrefAttr = a.getAttribute('href') || '';
    if (!hrefAttr) return;

    // 3.a) tiszta hash: "#pricing"
    if (hrefAttr.startsWith('#')) {
      const id = hrefAttr.slice(1);
      if (!id) return;
      if (!document.getElementById(id)) return;

      e.preventDefault();
      run('#' + id);
      return;
    }

    // 3.b) teljes/széthúzott url hash-sel: "/hu#pricing" vagy "https://site/hu#pricing"
    // Csak akkor nyúlunk, ha ugyanazon az oldalon marad (path+query azonos)
    let url: URL | null = null;
    try {
      url = new URL(hrefAttr, window.location.href);
    } catch {
      return;
    }

    if (!url.hash) return;
    if (url.origin !== window.location.origin) return;

    const samePath =
      url.pathname === window.location.pathname &&
      url.search === window.location.search;

    if (!samePath) return; // ez már route váltás lenne → nem fogjuk meg

    const id = url.hash.slice(1);
    if (!id) return;
    if (!document.getElementById(id)) return;

    e.preventDefault();
    run('#' + id);
  };

  document.addEventListener('click', onClickCapture, true);

  // cleanup nincs, mert singleton és layout életű (pont ez a cél)
}

export function normalizeSectionId(input?: string | null) {
  ensureInit();

  const s = (input ?? '').trim();
  if (!s) return undefined;

  const clean = s
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/\-+/g, '-')
    .replace(/^\-|\-$/g, '');

  return clean || undefined;
}

/**
 * ✅ manuális scroll (ha valahol programból kell)
 */
export function scrollToSectionId(input?: string | null) {
  ensureInit();

  if (typeof window === 'undefined') return;
  const id = normalizeSectionId(input);
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  // hash ne legyen az URL-ben (különben később megint “ugrálhat”)
  const url = window.location.pathname + window.location.search;
  window.history.replaceState(null, '', url);

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
