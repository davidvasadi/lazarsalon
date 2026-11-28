// Strukturált adatok (JSON-LD) központi helye — a The Place Studio mintájára (2026-11-23).
// - A cégadatok EGY helyen vannak (BUSINESS); ebből készül a részletes HairSalon/BeautySalon blokk minden oldalra,
//   ugyanazzal az @id-val.
// - A szolgáltatások és az árak ÉLŐBEN a Strapiból jönnek (plans), így mindig egyeznek az oldallal és az Altegióval.
// - A GYIK (FAQPage) és a morzsamenü (BreadcrumbList) az oldal valódi tartalmából készül.
// - A Strapi SEO structuredData-ban kézzel írt, ezekkel ütköző blokkokat kiszűrjük (elavult GYIK, hibás cégadatok).
import { pageOfPlan, parsePrice } from '@/lib/shared/plan-pages';
import { fetchCollectionType } from '@/lib/strapi';

export { parsePrice };

const SITE = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.WEBSITE_URL ||
  'https://lazarsalon.com'
).replace(/\/+$/, '');

export const BUSINESS_ID = `${SITE}/#business`;

export const BUSINESS = {
  name: "LAZAR'S® Szépségszalon",
  telephone: '+36203488481',
  bookingUrl: 'https://n474969.alteg.io',
  mapUrl: 'https://maps.app.goo.gl/GHvE6f8A3ycVty6D8',
  address: {
    streetAddress: 'Paulay Ede utca 8.',
    addressLocality: 'Budapest',
    addressRegion: 'Budapest',
    postalCode: '1061',
    addressCountry: 'HU',
  },
  // OpenStreetMap: Paulay Ede utca 8., 1061 Budapest
  geo: { latitude: 47.4998983, longitude: 19.0563297 },
  // H–P 10–20, Szo 10–16 (ugyanez az oldalak alján és a hero-ban)
  hours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '20:00',
    },
    { days: ['Saturday'], opens: '10:00', closes: '16:00' },
  ],
  hoursText: 'hétfőtől péntekig 10:00–20:00, szombaton 10:00–16:00',
  brands: ['Kevin Murphy', 'Authentic Beauty Concept'],
  // hivatalos profilok (ugyanazok, mint az oldal láblécében) — az AI-keresők ebből kötik össze a céget a profiljaival
  // (Facebook-oldaluk nincs — Dave, 2026-11-28)
  social: ['https://www.instagram.com/lazarssalon/'],
};

const DESCRIPTION =
  'Fodrászat Budapest VI. kerületében, Terézvárosban (Paulay Ede utca 8.): női és férfi hajvágás, balayage, ammóniamentes hajfestés, szőkítés, göndör haj (curly) vágás és styling, hajápoló kezelések, manikűr. Online időpontfoglalással.';

export type Plan = {
  name: string;
  price?: string | null;
  number?: string | null;
};

export async function getPlans(locale = 'hu'): Promise<Plan[]> {
  try {
    const plans = await fetchCollectionType<Plan[]>('plans', {
      locale,
      fields: ['name', 'price', 'number'],
      pagination: { pageSize: 100 },
    } as any);
    return (plans ?? []).filter((p) => p?.name);
  } catch {
    return [];
  }
}

export type TeamMember = { name: string; role?: string | null };

/** a csapat (Strapi team-members) — a strukturált adatban munkatársként (employee) jelenik meg */
export async function getTeam(locale = 'hu'): Promise<TeamMember[]> {
  try {
    const team = await fetchCollectionType<TeamMember[]>('team-members', {
      locale,
      fields: ['name', 'role'],
      sort: ['order:asc'],
      pagination: { pageSize: 50 },
    } as any);
    return (team ?? []).filter((m) => m?.name);
  } catch {
    return [];
  }
}

function offerOf(p: Plan, locale: string) {
  const { min, max } = parsePrice(p.price);
  const url = `${SITE}/${locale}/${pageOfPlan(p.name)}`;
  return {
    '@type': 'Offer',
    url,
    priceCurrency: 'HUF',
    ...(min
      ? max
        ? {
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: min,
              maxPrice: max,
              priceCurrency: 'HUF',
            },
          }
        : { price: min }
      : {}),
    itemOffered: {
      '@type': 'Service',
      name: p.name.trim(),
      url,
      provider: { '@id': BUSINESS_ID },
    },
  };
}

export function businessJsonLd(
  plans: Plan[],
  locale = 'hu',
  team: TeamMember[] = []
) {
  const prices = plans
    .flatMap((p) => Object.values(parsePrice(p.price)))
    .filter((n): n is number => !!n);
  return {
    '@type': ['HairSalon', 'BeautySalon'],
    '@id': BUSINESS_ID,
    name: BUSINESS.name,
    description: DESCRIPTION,
    url: `${SITE}/${locale}`,
    image: `${SITE}/apple-touch-icon.png`,
    telephone: BUSINESS.telephone,
    address: { '@type': 'PostalAddress', ...BUSINESS.address },
    geo: { '@type': 'GeoCoordinates', ...BUSINESS.geo },
    hasMap: BUSINESS.mapUrl,
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    ...(prices.length
      ? { priceRange: `${Math.min(...prices)}–${Math.max(...prices)} HUF` }
      : {}),
    currenciesAccepted: 'HUF',
    // aggregateRating SZÁNDÉKOSAN nincs (2026-11-27): a Google irányelvei szerint a saját cégre vonatkozó, más oldalról
    // (a Google-ből) átvett értékelés nem jelölhető meg strukturált adatban. Az oldalon látható értékelés maradhat.
    areaServed: [
      { '@type': 'City', name: 'Budapest' },
      { '@type': 'AdministrativeArea', name: 'Budapest VI. kerület' },
      { '@type': 'Place', name: 'Terézváros' },
    ],
    knowsAbout: [
      'női hajvágás',
      'férfi hajvágás',
      'balayage',
      'ammóniamentes hajfestés',
      'szőkítés',
      'göndör haj (curly) vágás és styling',
      'hajápolás',
      'melírtechnikák',
      'műköröm',
      'manikűr',
      'géllakk',
      ...BUSINESS.brands,
    ],
    sameAs: [BUSINESS.mapUrl, ...BUSINESS.social],
    ...(team.length
      ? {
          employee: team.map((m) => ({
            '@type': 'Person',
            name: m.name.trim(),
            ...(m.role ? { jobTitle: m.role.trim() } : {}),
            worksFor: { '@id': BUSINESS_ID },
          })),
        }
      : {}),
    potentialAction: {
      '@type': 'ReserveAction',
      target: { '@type': 'EntryPoint', urlTemplate: BUSINESS.bookingUrl },
    },
    ...(plans.length
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Fodrász szolgáltatások és árak',
            itemListElement: plans.map((p) => offerOf(p, locale)),
          },
        }
      : {}),
  };
}

const plain = (s?: string | null) =>
  String(s ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[*_#>`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

/** egy oldal teljes JSON-LD-je: cég + weboldal + morzsamenü + (ha van) GYIK és a rajta lévő szolgáltatások */
export function pageJsonLd(
  page: any,
  plans: Plan[],
  locale = 'hu',
  team: TeamMember[] = []
) {
  const slug: string = page?.slug ?? 'homepage';
  const isHome = slug === 'homepage';
  const url = isHome ? `${SITE}/${locale}` : `${SITE}/${locale}/${slug}`;
  const dz: any[] = page?.dynamic_zone ?? [];
  const hero = dz.find((c) => c?.__component === 'dynamic-zone.hero');
  const title =
    plain(page?.seo?.metaTitle) || plain(hero?.heading) || BUSINESS.name;
  const faqs = dz
    .filter((c) => c?.__component === 'dynamic-zone.faq')
    .flatMap((c) => c?.faqs ?? [])
    .filter((f: any) => f?.question && f?.answer);
  const pagePlans: Plan[] = dz
    .filter((c) => c?.__component === 'dynamic-zone.pricing')
    .flatMap((c) => c?.plans ?? [])
    .filter((p: any) => p?.name);

  const graph: any[] = [
    businessJsonLd(plans, locale, team),
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      ...(page?.seo?.metaDescription
        ? { description: plain(page.seo.metaDescription) }
        : {}),
      inLanguage: locale,
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: SITE,
        name: BUSINESS.name,
      },
      about: { '@id': BUSINESS_ID },
    },
  ];
  if (!isHome) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Kezdőoldal',
          item: `${SITE}/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: plain(page?.label) || plain(hero?.heading) || slug,
          item: url,
        },
      ],
    });
  }
  if (pagePlans.length) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: plain(hero?.heading) || title,
      url,
      provider: { '@id': BUSINESS_ID },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Budapest VI. kerület',
      },
      offers: pagePlans.map((p) => offerOf(p, locale)),
    });
  }
  if (faqs.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map((f: any) => ({
        '@type': 'Question',
        name: plain(f.question),
        acceptedAnswer: { '@type': 'Answer', text: plain(f.answer) },
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

// A kód által generált típusok: ezeket a Strapi kézi blokkjaiból kiszűrjük (elavult GYIK-szöveg, hibás cégadat)
const GENERATED_TYPES = new Set([
  'Organization',
  'LocalBusiness',
  'BeautySalon',
  'HairSalon',
  'HealthAndBeautyBusiness',
  'WebPage',
  'WebSite',
  'BreadcrumbList',
  'FAQPage',
  'Service',
]);
const typesOf = (x: any): string[] =>
  Array.isArray(x?.['@type']) ? x['@type'] : x?.['@type'] ? [x['@type']] : [];

/** a Strapi kézi structuredData-jából csak az marad, amit a kód nem generál (ha marad valami) */
export function cleanStructuredData(raw: any) {
  if (!raw) return null;
  let sd = raw;
  if (typeof sd === 'string') {
    try {
      sd = JSON.parse(sd);
    } catch {
      return null;
    }
  }
  const keep = (x: any) => !typesOf(x).some((t) => GENERATED_TYPES.has(t));
  if (Array.isArray(sd)) {
    const out = sd.filter(keep);
    return out.length ? out : null;
  }
  if (Array.isArray(sd?.['@graph'])) {
    const g = sd['@graph'].filter(keep);
    return g.length ? { ...sd, '@graph': g } : null;
  }
  return keep(sd) ? sd : null;
}
