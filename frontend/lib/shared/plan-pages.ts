// Közös (szerver + kliens): melyik árlista-tétel (Strapi „plans”) melyik szolgáltatásoldalhoz tartozik, és az ár
// értelmezése. A strukturált adat, az llms.txt és a Szolgáltatások-kártyák is ebből dolgoznak, hogy mindig egyezzenek.

export const PLAN_PAGE: [RegExp, string][] = [
  [/balayage|melír/i, 'balayage'],
  [/női hajvágás|női hajszárítás/i, 'noi-hajvagas'],
  [/férfi/i, 'ferfi-hajvagas'],
  [/curly|styling/i, 'curly-hair-styling'],
  [/festés|szín|szőkítés|tőszőkítés/i, 'hajfestes'],
  [/miracle|hajápoló/i, 'hajapolo-kezelesek'],
  [/géllak|manikűr|műköröm|kéz/i, 'mukorom-es-manikur'],
];

export const pageOfPlan = (name: string) =>
  PLAN_PAGE.find(([re]) => re.test(name))?.[1] ?? 'szolgaltatasok';

/** „15000 – 20000 Ft” / „25000 Ft-tól” / „16000 Ft / óra” → { min, max } */
export function parsePrice(raw?: string | null): {
  min: number | null;
  max: number | null;
} {
  const nums =
    String(raw ?? '')
      .replace(/(\d)[\s.](?=\d{3}\b)/g, '$1')
      .match(/\d{3,}/g)
      ?.map(Number) ?? [];
  if (!nums.length) return { min: null, max: null };
  return {
    min: Math.min(...nums),
    max: nums.length > 1 ? Math.max(...nums) : null,
  };
}

/** A kártyák „-tól” árába csak az oldal fő szolgáltatása számít (pl. a Női hajvágás kártyán ne a hajszárítás ára). */
export const CARD_PRICE_ONLY: Record<string, RegExp> = {
  'noi-hajvagas': /női hajvágás/i,
};

/** árlista-tételek → oldalanként a legalacsonyabb „-tól” ár (Szolgáltatások-kártyák, Kapcsolódó szolgáltatások) */
export function cardMinPrices(
  plans: { name?: string | null; price?: string | null }[]
): Record<string, number> {
  const out: Record<string, number> = {};
  for (const p of plans ?? []) {
    const v = parsePrice(p?.price).min;
    if (!p?.name || !v) continue;
    const slug = pageOfPlan(p.name);
    if (CARD_PRICE_ONLY[slug] && !CARD_PRICE_ONLY[slug].test(p.name)) continue;
    out[slug] = Math.min(out[slug] ?? Infinity, v);
  }
  return out;
}

/** 15000 → „15 000 Ft” */
export const huf = (n: number) =>
  `${String(Math.round(n)).replace(/\B(?=(\d{3})+$)/g, '\u00a0')} Ft`;

/** „40000 – 50 000 Ft” → „40 000–50 000 Ft”; „25000 Ft-tól ” → „25 000 Ft-tól” (csak megjelenítés, az adat marad) */
export function fmtPrice(raw?: string | null) {
  return String(raw ?? '')
    .replace(/(\d)\s(?=\d{3}\b)/g, '$1')
    .replace(/\d{4,}/g, (n) => n.replace(/\B(?=(\d{3})+$)/g, ' '))
    .replace(/(\d)(?:\s*Ft)?\s*[–-]\s*(?=\d)/g, '$1–')
    .replace(/\s+/g, ' ')
    .trim();
}

const hours = (min: number) =>
  String(Math.round((min / 60) * 2) / 2).replace('.', ',');

/** „min. 150 perc” → „min. 2,5 óra”; „120-150 perc” → „2–2,5 óra”; „4-5 óra” → „4–5 óra”; „30 perc” marad */
export function fmtDuration(raw?: string | null) {
  const s = String(raw ?? '').trim();
  if (!s) return '';
  const m = s.match(/^(min\.\s*)?(\d+)(?:\s*[–-]\s*(\d+))?\s*perc$/i);
  if (m) {
    const [, pre = '', a, b] = m;
    const max = Number(b ?? a);
    if (max < 60) return `${pre}${a}${b ? `–${b}` : ''} perc`;
    if (Number(a) < 60) return `${pre}${a} perc – ${hours(max)} óra`;
    return `${pre}${hours(Number(a))}${b ? `–${hours(max)}` : ''} óra`;
  }
  return s.replace(/\s*[–-]\s*/g, '–');
}
