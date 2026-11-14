import { IconClipboardText } from '@tabler/icons-react';
import { type Metadata } from 'next';
import { redirect } from 'next/navigation';

import ClientSlugHandler from '../ClientSlugHandler';
import { BlogCard } from '@/components/blog-card';
import { BlogPostRows } from '@/components/blog-post-rows';
import { Container } from '@/components/container';
import { AmbientColor } from '@/components/decorations/ambient-color';
import { FeatureIconContainer } from '@/components/dynamic-zone/features/feature-icon-container';
import { Heading } from '@/components/elements/heading';
import { Subheading } from '@/components/elements/subheading';
import { features } from '@/features.config';
import { i18n } from '@/i18n.config';
import { generateMetadataObject } from '@/lib/shared/metadata';
import { fetchCollectionType, fetchSingleType } from '@/lib/strapi';
import type { Article } from '@/types/types';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  if (!features.blog) redirect(`/${i18n.defaultLocale}`); // section not live yet → homepage (features.config.ts)
  const params = await props.params;
  const pageData = await fetchSingleType('blog-page', {
    locale: params.locale,
  });

  const seo = pageData.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function Blog(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  if (!features.blog) redirect(`/${i18n.defaultLocale}`); // section not live yet → homepage (features.config.ts)
  const params = await props.params;
  const pageData = await fetchSingleType('blog-page', {
    locale: params.locale,
  });
  const [firstArticle, ...articles] = await fetchCollectionType<Article[]>(
    'articles',
    {
      filters: { locale: { $eq: params.locale } },
    }
  );

  const localizedSlugs = pageData.localizations?.reduce(
    (acc: Record<string, string>, localization: any) => {
      acc[localization.locale] = 'blog';
      return acc;
    },
    { [params.locale]: 'blog' }
  );

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <ClientSlugHandler localizedSlugs={localizedSlugs} />
      <AmbientColor />
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
            <IconClipboardText className="h-6 w-6 text-white" />
          </FeatureIconContainer>
          <Heading as="h1" className="mt-4">
            {pageData.heading}
          </Heading>
          <Subheading className="max-w-3xl mx-auto">
            {pageData.sub_heading}
          </Subheading>
        </div>

        <BlogCard
          article={firstArticle}
          locale={params.locale}
          key={firstArticle.title}
        />

        <BlogPostRows articles={articles} />
      </Container>
    </div>
  );
}
