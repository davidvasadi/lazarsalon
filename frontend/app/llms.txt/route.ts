// llms.txt (llmstxt.org) — hogy az AI-keresők (ChatGPT, Perplexity, Claude, Google AI) gyorsan megértsék, mit kínál a
// LAZAR'S®, mennyiért és hol. Ugyanazokból az adatokból készül, mint a strukturált adat (lib/shared/structured-data.ts):
// a cégadatok a kódból, a szolgáltatások és az árak élőben a Strapiból (plans) — így mindig egyeznek az oldallal.
// (Eddig nem volt ilyen útvonal: a /llms.txt 500-as hibát adott.)
import { getGooglePlace } from '@/lib/shared/google-reviews';
import { fmtDuration, fmtPrice } from '@/lib/shared/plan-pages';
import { BUSINESS, getPlans } from '@/lib/shared/structured-data';

export const revalidate = 3600;

const SITE = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.WEBSITE_URL ||
  'https://lazarsalon.com'
).replace(/\/+$/, '');

const PAGES: [string, string, RegExp][] = [
  ['Női hajvágás', 'noi-hajvagas', /női hajvágás|női hajszárítás/i],
  ['Férfi hajvágás', 'ferfi-hajvagas', /férfi/i],
  ['Hajfestés (ammóniamentes)', 'hajfestes', /festés|szín|szőkítés/i],
  ['Balayage hajfestés', 'balayage', /balayage|melír/i],
  ['Göndör haj – Curly Hair & Styling', 'curly-hair-styling', /curly|styling/i],
  ['Hajápoló kezelések', 'hajapolo-kezelesek', /miracle|hajápoló/i],
  ['Műköröm és manikűr', 'mukorom-es-manikur', /géllak|manikűr|műköröm|kéz/i],
];

export async function GET() {
  const [plans, place] = await Promise.all([getPlans('hu'), getGooglePlace()]);
  const used = new Set<string>();
  const sections = PAGES.map(([title, slug, re]) => {
    const items = plans.filter((p) => !used.has(p.name) && re.test(p.name));
    items.forEach((p) => used.add(p.name));
    const lines = items.map(
      (p) =>
        `  - ${p.name.trim()}: ${fmtPrice(p.price)}${p.number ? ` (${fmtDuration(p.number)})` : ''}`
    );
    return `- [${title}](${SITE}/hu/${slug})${lines.length ? '\n' + lines.join('\n') : ''}`;
  }).join('\n');

  const content = `# ${BUSINESS.name}

> Fodrászat Budapest VI. kerületében, Terézvárosban: női és férfi hajvágás, balayage, ammóniamentes hajfestés, szőkítés, göndör haj (curly) vágás és styling, hajápoló kezelések és manikűr. ${BUSINESS.brands.join(' és ')} termékekkel, online időpontfoglalással.

## Elérhetőség

- Cím: ${BUSINESS.address.postalCode} Budapest, ${BUSINESS.address.streetAddress} (VI. kerület, Terézváros)
- Telefon: +36 20 348 8481
- Nyitvatartás: ${BUSINESS.hoursText}${place?.rating && place?.count ? `\n- Google-értékelés: ${String(place.rating).replace('.', ',')} / 5 (${place.count} vélemény)` : ''}
- [Online időpontfoglalás](${BUSINESS.bookingUrl})
- [Térkép (Google Maps)](${BUSINESS.mapUrl})
- [Kapcsolat](${SITE}/hu/kapcsolat)

## Szolgáltatások és árak

Az árak a hajhossztól és a hajmennyiségtől függően a megadott sávban mozognak; a pontos árat a konzultáción mondjuk meg.

${sections}
- [Összes szolgáltatás](${SITE}/hu/szolgaltatasok)

## Továbbiak

- [Csapat](${SITE}/hu/csapat)
- [Galéria](${SITE}/hu/galeria)
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
