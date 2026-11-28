import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ClientSlugHandler from '../ClientSlugHandler';
import {
  RelatedServices,
  hasRelatedServices,
} from '@/components/related-services';
import { i18n } from '@/i18n.config';
import PageContent from '@/lib/shared/PageContent';
import { withFullTeam } from '@/lib/shared/enrich-team';
import { generateMetadataObject } from '@/lib/shared/metadata';
import {
  cleanStructuredData,
  getPlans,
  getTeam,
  pageJsonLd,
} from '@/lib/shared/structured-data';
import { fetchCollectionType } from '@/lib/strapi';

function jsonLdScript(data: any) {
  if (!data) return null;
  const payload = typeof data === 'string' ? data : JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: payload }}
    />
  );
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const [pageData] = await fetchCollectionType('pages', {
    filters: { slug: { $eq: params.slug }, locale: params.locale },
  });

  const seo = pageData?.seo;

  const localizedSlugs: Record<string, string> =
    pageData?.localizations?.reduce(
      (acc: Record<string, string>, l: any) => {
        acc[l.locale] = l.slug;
        return acc;
      },
      { [params.locale]: params.slug }
    ) ?? { [params.locale]: params.slug };

  const localizedPathnames = Object.fromEntries(
    Object.entries(localizedSlugs).map(([lng, slug]) => [
      lng,
      slug ? `/${lng}/${slug}` : `/${lng}`,
    ])
  );

  return generateMetadataObject(seo, {
    locale: params.locale,
    pathname: `/${params.locale}/${params.slug}`,
    localizedPathnames,
    xDefaultLocale: 'hu',
  });
}

/** A szolgáltatás- és egyéb oldalak build-kor előre elkészülnek (gyors, gyorsítótárból jönnek), az új oldalak első
 *  látogatáskor; frissítés a layout `revalidate` értéke szerint. Hiba esetén üres lista → minden oldal igény szerint. */
export async function generateStaticParams() {
  const base = (process.env.NEXT_PUBLIC_API_URL ?? '').replace(/\/$/, '');
  if (!base) return [];
  try {
    const out: { locale: string; slug: string }[] = [];
    for (const locale of i18n.locales) {
      const res = await fetch(
        `${base}/api/pages?locale=${locale}&fields[0]=slug&pagination[pageSize]=200`
      );
      if (!res.ok) continue;
      const json = await res.json();
      for (const p of json?.data ?? []) {
        if (p?.slug && p.slug !== 'homepage')
          out.push({ locale, slug: p.slug });
      }
    }
    return out;
  } catch {
    return [];
  }
}

export default async function Page(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const params = await props.params;

  const [pageData] = await fetchCollectionType('pages', {
    filters: { slug: { $eq: params.slug }, locale: params.locale },
  });

  // Unknown slug → real 404 (previously crashed → 500, so Google kept retrying old URLs)
  if (!pageData) notFound();
  const [plans, team] = await Promise.all([
    getPlans(params.locale),
    getTeam(params.locale),
  ]);

  const localizedSlugs = pageData.localizations?.reduce(
    (acc: Record<string, string>, localization: any) => {
      acc[localization.locale] = localization.slug;
      return acc;
    },
    { [params.locale]: params.slug }
  );

  return (
    <>
      {/* a cégadatok, szolgáltatások, GYIK és morzsamenü a kódból (lib/shared/structured-data.ts); a Strapi kézi
          blokkjából csak az marad, amit a kód nem generál */}
      {jsonLdScript(pageJsonLd(pageData, plans, params.locale, team))}
      {jsonLdScript(cleanStructuredData(pageData?.seo?.structuredData))}
      <ClientSlugHandler localizedSlugs={localizedSlugs} />
      <PageContent pageData={await withFullTeam(pageData, params.locale)} />
      {hasRelatedServices(params.slug) && (
        <RelatedServices
          slug={params.slug}
          locale={params.locale}
          plans={plans}
        />
      )}
    </>
  );
}
