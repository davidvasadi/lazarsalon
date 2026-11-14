import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { notFound, redirect } from 'next/navigation';
import React from 'react';

import ClientSlugHandler from '../../ClientSlugHandler';
import { BlogLayout } from '@/components/blog-layout';
import { features } from '@/features.config';
import { i18n } from '@/i18n.config';
import { fetchCollectionType } from '@/lib/strapi';
import type { Article } from '@/types/types';

export default async function SingleArticlePage(props: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  if (!features.blog) redirect(`/${i18n.defaultLocale}`); // section not live yet → homepage (features.config.ts)
  const params = await props.params;
  const [article] = await fetchCollectionType<any[]>('articles', {
    filters: {
      slug: {
        $eq: params.slug,
      },
    },
  });

  // Unknown article → real 404 (was a 200 "Blog not found" page = soft 404 for Google)
  if (!article) notFound();

  const localizedSlugs = article.localizations?.reduce(
    (acc: Record<string, string>, localization: any) => {
      acc[localization.locale] = localization.slug;
      return acc;
    },
    { [params.locale]: params.slug }
  );

  return (
    <BlogLayout article={article} locale={params.locale}>
      <ClientSlugHandler localizedSlugs={localizedSlugs} />
      <BlocksRenderer content={article.content} />
    </BlogLayout>
  );
}
