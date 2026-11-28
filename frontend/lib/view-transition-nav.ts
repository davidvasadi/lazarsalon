// Lapváltás a The Place Studio mintájára (2026-11-28): a böngésző View Transitions funkciója lefotózza a régi és az új
// oldalt — a régi felfelé kicsúszik, az új alulról feltolódik (app/globals.css → ::view-transition-*). Logós függöny nincs.
// Csak KATTINTÁSRA indul (components/view-transition-links.tsx + a menü). A vissza/előre gombnál szándékosan NEM:
// a next-view-transitions csomag a popstate-et is elkapta, és ez okozta a „lap aljára ugrik” hibát.
// Ahol a böngésző nem tudja (pl. régebbi Firefox), sima lapváltás. Csökkentett mozgásnál nincs animáció.
type Router = { push: (href: string) => void };

let finish: (() => void) | null = null;

/** az új oldal megjelent (útvonal-váltás után) → a böngésző lefotózhatja és indulhat az animáció */
export function finishViewTransition() {
  finish?.();
  finish = null;
}

export function navigateWithTransition(
  router: Router,
  href: string,
  beforeUpdate?: () => void
) {
  const doc = document as Document & {
    startViewTransition?: (cb: () => Promise<void>) => unknown;
  };
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!doc.startViewTransition || reduce) {
    beforeUpdate?.();
    router.push(href);
    return;
  }
  doc.startViewTransition(
    () =>
      new Promise<void>((resolve) => {
        finish = resolve;
        beforeUpdate?.();
        router.push(href);
        // biztonsági háló: ha az új oldal késik, ne álljon meg a kép
        setTimeout(() => {
          if (finish === resolve) finishViewTransition();
        }, 2500);
      })
  );
}
