// A menü kártyáinak borítóképei SZERVEROLDALON (2026-11-27): korábban menünyitáskor a böngésző oldalanként külön lekérte a
// Strapiból (7 kérés), és az eredeti, ~300 KB-os képeket töltötte be. Most a layout (gyorsítótárazva) előre beleteszi a
// navbar adataiba a Strapi által feltöltéskor elkészített kisebb változat címét (medium ~750 px / small ~500 px) —
// képenként ~30–90 KB, a Vercel képoptimalizálási keretét sem érinti.
import { fetchCollectionType } from '@/lib/strapi';

const API = (process.env.NEXT_PUBLIC_API_URL ?? '').replace(/\/$/, '');
const abs = (u?: string | null) =>
  !u
    ? null
    : /^https?:\/\//i.test(u)
      ? u
      : `${API}${u.startsWith('/') ? u : `/${u}`}`;

const pick = (m: any) =>
  abs(m?.formats?.medium?.url ?? m?.formats?.small?.url ?? m?.url ?? null);

export async function withNavCovers(navbar: any, locale: string) {
  try {
    const items: any[] = navbar?.left_navbar_items ?? [];
    const slugs = [
      ...new Set(
        items
          .flatMap((it) => (it?.pages ?? []).map((p: any) => p?.slug))
          .filter(Boolean)
      ),
    ];
    if (!slugs.length) return navbar;
    const pages = await fetchCollectionType<any[]>('pages', {
      locale,
      filters: { slug: { $in: slugs } },
      fields: ['slug'],
      populate: {
        dynamic_zone: {
          on: { 'dynamic-zone.hero': { populate: ['cover', 'image'] } },
        },
      },
    } as any);
    const cover: Record<string, string | null> = {};
    for (const p of pages ?? []) {
      const hero = (p?.dynamic_zone ?? []).find((c: any) =>
        String(c?.__component ?? '').includes('hero')
      );
      cover[p.slug] = pick(hero?.cover) ?? pick(hero?.image);
    }
    return {
      ...navbar,
      left_navbar_items: items.map((it) => ({
        ...it,
        pages: (it?.pages ?? []).map((p: any) => ({
          ...p,
          navCover: cover[p?.slug] ?? null,
        })),
      })),
    };
  } catch {
    return navbar;
  }
}
