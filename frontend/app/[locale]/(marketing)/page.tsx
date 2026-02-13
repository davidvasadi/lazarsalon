import { Metadata } from 'next';

import ClientSlugHandler from './ClientSlugHandler';
import PageContent from '@/lib/shared/PageContent';
import { generateMetadataObject } from '@/lib/shared/metadata';
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
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const [pageData] = await fetchCollectionType('pages', {
    filters: { slug: { $eq: 'homepage' }, locale: params.locale },
  });

  const seo = pageData?.seo;

  // hreflang map (home-nál slug üres)
  const localizedSlugs: Record<string, string> =
    pageData?.localizations?.reduce(
      (acc: Record<string, string>, l: any) => {
        acc[l.locale] = '';
        return acc;
      },
      { [params.locale]: '' }
    ) ?? { [params.locale]: '' };

  const localizedPathnames = Object.fromEntries(
    Object.entries(localizedSlugs).map(([lng, slug]) => [
      lng,
      slug ? `/${lng}/${slug}` : `/${lng}`,
    ])
  );

  return generateMetadataObject(seo, {
    locale: params.locale,
    pathname: `/${params.locale}`,
    localizedPathnames,
    xDefaultLocale: 'hu',
  });
}

export default async function HomePage(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const [pageData] = await fetchCollectionType('pages', {
    filters: { slug: { $eq: 'homepage' }, locale: params.locale },
  });

  const localizedSlugs = pageData.localizations?.reduce(
    (acc: Record<string, string>, localization: any) => {
      acc[localization.locale] = '';
      return acc;
    },
    { [params.locale]: '' }
  );

  return (
    <>
      {jsonLdScript(pageData?.seo?.structuredData)}
      <ClientSlugHandler localizedSlugs={localizedSlugs} />
      <PageContent pageData={pageData} />
    </>
  );
}
