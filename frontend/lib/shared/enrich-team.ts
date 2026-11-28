// A csapat-blokk (dynamic-zone.team-section) tagjai a page-lekérdezésben hiányosan jönnek (pl. a saját foglalás gomb
// nélkül) — ezért minden tagnál a tartalék telefonszámos „Időpontfoglalás” jelent meg (élesben is mind a 7). Itt a
// szerver (gyorsítótárazva) a teljes team-members adattal egészíti ki őket, így minden eszközön azonnal a helyes gomb
// látszik (Altegio / Instagram / telefon). 2026-11-28
import { fetchCollectionType } from '@/lib/strapi';

const pick = (a: any, b: any) => (a === undefined || a === null ? b : a);

export async function withFullTeam(page: any, locale: string) {
  const dz: any[] = page?.dynamic_zone ?? [];
  const hasTeam = dz.some(
    (c) =>
      c?.__component === 'dynamic-zone.team-section' &&
      (c?.team_members?.length ?? 0) > 0
  );
  if (!hasTeam) return page;

  let all: any[] = [];
  try {
    all = await fetchCollectionType<any[]>('team-members', {
      locale,
      populate: '*',
      sort: ['order:asc'],
      pagination: { pageSize: 100 },
    } as any);
  } catch {
    return page;
  }
  const byDoc = new Map((all ?? []).map((m) => [m?.documentId, m]));

  return {
    ...page,
    dynamic_zone: dz.map((c) => {
      if (c?.__component !== 'dynamic-zone.team-section') return c;
      return {
        ...c,
        team_members: (c.team_members ?? []).map((m: any) => {
          const full = byDoc.get(m?.documentId);
          if (!full) return m;
          const out: any = { ...full };
          for (const k of Object.keys(m ?? {})) out[k] = pick(m[k], full[k]);
          return out;
        }),
      };
    }),
  };
}
