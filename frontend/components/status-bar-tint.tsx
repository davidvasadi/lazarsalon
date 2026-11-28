'use client';

// iPhone (iOS 26 Safari) felső notch-sáv színe — EGYETLEN, ÁLLANDÓ réteg a layoutban (2026-11-28).
// A Safari a sávot a lap tetejét érintő fixed elem háttérszínével festi, de csak akkor „veszi észre”, ha az elem a lapon
// marad: korábban minden hero saját réteget hozott, és oldalváltáskor (régi réteg ki, új be) a sáv kifehéredett, csak
// frissítésre lett újra szürke. Ez a réteg a lapváltás-animáción KÍVÜL él, sosem cserélődik; a hero-k csak jelzik, hogy
// látszanak-e (setStatusBarVisible). Betöltéskor (JS előtt) CSS dönt: ha van hero az oldalon, látszik (globals.css).
import { useSyncExternalStore } from 'react';

export const STATUS_BAR_COLOR = '#23262a'; // = a hero tetejének színe (hero.tsx HERO_THEME)

let visible: boolean | null = null;
const subs = new Set<() => void>();

export function setStatusBarVisible(v: boolean) {
  if (visible === v) return;
  visible = v;
  subs.forEach((f) => f());
}

export function StatusBarTint() {
  const v = useSyncExternalStore(
    (cb) => {
      subs.add(cb);
      return () => {
        subs.delete(cb);
      };
    },
    () => visible,
    () => null
  );
  return (
    <div
      aria-hidden
      data-status-bar-tint
      // lg:!hidden: gépen SOHA (az inline display és a :has() szabály se kapcsolhassa be — 2026-11-28 csík a fejlécben)
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[max(8px,env(safe-area-inset-top))] lg:!hidden"
      style={{
        backgroundColor: STATUS_BAR_COLOR,
        display: v === null ? undefined : v ? 'block' : 'none',
      }}
    />
  );
}
