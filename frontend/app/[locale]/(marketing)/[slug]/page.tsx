import { Metadata } from 'next';

import ClientSlugHandler from '../ClientSlugHandler';
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

export default async function Page(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const params = await props.params;

  const [pageData] = await fetchCollectionType('pages', {
    filters: { slug: { $eq: params.slug }, locale: params.locale },
  });

  const localizedSlugs = pageData.localizations?.reduce(
    (acc: Record<string, string>, localization: any) => {
      acc[localization.locale] = localization.slug;
      return acc;
    },
    { [params.locale]: params.slug }
  );

  return (
    <>
      {jsonLdScript(pageData?.seo?.structuredData)}
      <ClientSlugHandler localizedSlugs={localizedSlugs} />
      <PageContent pageData={pageData} />
    </>
  );
}
