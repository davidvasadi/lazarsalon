import { Hero } from '@/components/dynamic-zone/hero';
import { i18n } from '@/i18n.config';
import { fetchCollectionType } from '@/lib/strapi';

/**
 * The 404 page (shared by app/not-found.tsx and app/[locale]/not-found.tsx): the homepage hero — same component,
 * same background photo and info bar from Strapi — with a 404 heading and buttons back to the site.
 * If the homepage cannot be loaded, a plain dark fallback is shown.
 */
const HEADING = 'Ez az oldal nem található.';
const SUB =
  'Lehet, hogy elköltözött vagy megszűnt. A főoldalról mindent elérsz: szolgáltatások, árak és időpontfoglalás.';

export async function NotFoundContent() {
  const locale = i18n.defaultLocale;
  let hero: any = null;
  try {
    const [home] = await fetchCollectionType<any[]>('pages', {
      filters: { slug: { $eq: 'homepage' }, locale },
    });
    hero =
      home?.dynamic_zone?.find(
        (b: any) => b?.__component === 'dynamic-zone.hero'
      ) ?? null;
  } catch {
    hero = null;
  }

  // the homepage's first (booking) button stays, plus the way back
  const booking = hero?.CTAs?.[0];
  const CTAs = [
    ...(booking ? [{ ...booking, id: 1 }] : []),
    {
      id: 2,
      text: 'Vissza a főoldalra',
      // '' → the hero adds the locale itself (/hu); 'primary' = same look as the homepage's second button
      URL: '',
      variant: 'primary',
    },
  ];

  if (hero) {
    return (
      <Hero
        heading={HEADING}
        sub_heading={SUB}
        CTAs={CTAs}
        locale={locale}
        image={hero.image}
        duration={hero.duration}
      />
    );
  }

  return (
    <main className="flex min-h-[100svh] items-center bg-black px-4 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="text-4xl font-light leading-tight text-white md:text-6xl">
          {HEADING}
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-light text-white/70">{SUB}</p>
        <a
          href={`/${locale}`}
          className="mt-8 inline-flex rounded-lg border border-white/20 px-8 py-4 font-light text-white hover:bg-white/10"
        >
          Vissza a főoldalra
        </a>
      </div>
    </main>
  );
}
