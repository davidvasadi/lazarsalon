// Kapcsolódó szolgáltatások — minden szolgáltatásoldal alján 4 kártya a többi szolgáltatásról (2026-11-27).
// Belső linkek a Google-nek (szerveren renderelve, a HTML-ben benne vannak), és a vendégnek is továbbvezet.
// A kártya ugyanaz, mint a menüben: teli kép, alul átmenet, név + „…-tól” ár + nyíl.
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/container';
import { cardMinPrices, huf } from '@/lib/shared/plan-pages';
import type { Plan } from '@/lib/shared/structured-data';
import { SECTION_TITLE } from '@/lib/shared/typography';
import { fetchCollectionType } from '@/lib/strapi';

/** oldal → mely szolgáltatásokat ajánljuk mellé (a sorrend számít) */
const RELATED: Record<string, string[]> = {
  balayage: [
    'hajfestes',
    'hajapolo-kezelesek',
    'noi-hajvagas',
    'curly-hair-styling',
  ],
  hajfestes: [
    'balayage',
    'hajapolo-kezelesek',
    'noi-hajvagas',
    'curly-hair-styling',
  ],
  'noi-hajvagas': [
    'hajfestes',
    'balayage',
    'hajapolo-kezelesek',
    'curly-hair-styling',
  ],
  'curly-hair-styling': [
    'noi-hajvagas',
    'hajapolo-kezelesek',
    'hajfestes',
    'balayage',
  ],
  'hajapolo-kezelesek': [
    'noi-hajvagas',
    'hajfestes',
    'balayage',
    'curly-hair-styling',
  ],
  'ferfi-hajvagas': [
    'noi-hajvagas',
    'hajapolo-kezelesek',
    'curly-hair-styling',
    'mukorom-es-manikur',
  ],
  'mukorom-es-manikur': [
    'noi-hajvagas',
    'balayage',
    'hajapolo-kezelesek',
    'hajfestes',
  ],
};

export const hasRelatedServices = (slug: string) => slug in RELATED;

const API = (process.env.NEXT_PUBLIC_API_URL ?? '').replace(/\/$/, '');
const abs = (u?: string | null) =>
  !u
    ? null
    : /^https?:\/\//i.test(u)
      ? u
      : `${API}${u.startsWith('/') ? u : `/${u}`}`;

export async function RelatedServices({
  slug,
  locale,
  plans,
}: {
  slug: string;
  locale: string;
  plans: Plan[];
}) {
  const wanted = RELATED[slug];
  if (!wanted) return null;

  let pages: any[] = [];
  try {
    pages = await fetchCollectionType<any[]>('pages', {
      locale,
      filters: { slug: { $in: wanted } },
      fields: ['slug'],
      populate: {
        dynamic_zone: {
          on: { 'dynamic-zone.hero': { populate: ['cover', 'image'] } },
        },
      },
    } as any);
  } catch {
    return null;
  }

  const minPrice = cardMinPrices(plans);
  const items = wanted
    .map((s) => pages.find((p) => p?.slug === s))
    .filter(Boolean)
    .map((p) => {
      const hero = (p.dynamic_zone ?? []).find((c: any) =>
        String(c?.__component ?? '').includes('hero')
      );
      const name = String(hero?.heading ?? p.slug)
        .split(/\s+[–—-]\s+/)[0]
        .replace(/\s+Budapest(?:en)?\b/g, '');
      return {
        slug: p.slug as string,
        name,
        cover: abs(hero?.cover?.url ?? hero?.image?.url),
        price: minPrice[p.slug] ? `${huf(minPrice[p.slug])}-tól` : null,
      };
    });

  if (!items.length) return null;

  return (
    <section
      className="py-14 md:py-20"
      aria-labelledby="kapcsolodo-szolgaltatasok"
    >
      <Container>
        <h2
          id="kapcsolodo-szolgaltatasok"
          className={`${SECTION_TITLE} text-lightblack`}
        >
          Kapcsolódó szolgáltatások
        </h2>
        {/* telefonon: magas kártyák oldalra lapozva (a következő széle kilóg); gépen 4 oszlopos rács */}
        <div className="-mx-4 mt-8 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
          {items.map((it) => (
            <Link
              key={it.slug}
              href={`/${locale}/${it.slug}`}
              className="group relative block aspect-[3/4] w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl bg-lightblack/10 md:aspect-[4/5] md:w-full"
            >
              {it.cover ? (
                <Image
                  src={it.cover}
                  alt={it.name}
                  fill
                  sizes="(min-width: 768px) 25vw, 80vw"
                  className="object-cover object-[center_25%] transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : null}
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
              />
              <span className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2 md:inset-x-4 md:bottom-4">
                <span className="min-w-0">
                  <span className="block text-base font-light leading-tight text-white md:text-xl">
                    {it.name}
                  </span>
                  {it.price ? (
                    <span className="mt-1 block text-xs text-muted md:text-sm">
                      {it.price}
                    </span>
                  ) : null}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-lightblack md:h-9 md:w-9">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
