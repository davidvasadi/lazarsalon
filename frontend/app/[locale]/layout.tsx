import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { draftMode } from 'next/headers';
import React from 'react';

import { DraftModeBanner } from '@/components/draft-mode-banner';
import { Footer } from '@/components/footer';
import { MotionProvider } from '@/components/motion-provider';
import { Navbar } from '@/components/navbar';
import { StatusBarTint } from '@/components/status-bar-tint';
import { AIToast } from '@/components/toast';
import { ViewTransitionLinks } from '@/components/view-transition-links';
import { CartProvider } from '@/context/cart-context';
import { i18n } from '@/i18n.config';
import { generateMetadataObject } from '@/lib/shared/metadata';
import { withNavCovers } from '@/lib/shared/nav-covers';
import { fetchSingleType } from '@/lib/strapi';
import { cn } from '@/lib/utils';

// Gyorsítótár (ISR): az oldalak nem minden látogatásnál készülnek el újra a Strapiból (élesben 1–2,7 s TTFB volt),
// hanem tárolt változatból jönnek, és legfeljebb óránként frissülnek (a Vercel ingyenes ISR-kerete miatt nem sűrűbben:
// ~15 oldal × 24 × 30 ≈ 11 ezer újragenerálás/hó). A draft/előnézet mód ezt megkerüli.
export const revalidate = 3600;

// Csak a valódi nyelvek (i18n.locales) érvényesek; minden más első útvonal-szakasz 404 (korábban pl. a /llm.txt
// elírás „nyelvkódnak” számított, a Strapi-lekérés elszállt → 500-as hiba).
export const dynamicParams = false;

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

// const geist = GeistSans({
//   subsets: ['geist'],
//   display: 'swap',
//   weight: ['400', '500', '600', '700', '800', '900'],
// });

// Default Global SEO for pages without them
export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const pageData = await fetchSingleType('global', { locale: params.locale });

  const seo = pageData.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  const { isEnabled: isDraftMode } = await draftMode();

  const pageData = await fetchSingleType('global', { locale: params.locale });

  return (
    <CartProvider>
      <MotionProvider>
        <div
          className={cn(
            GeistSans.className,
            'bg-charcoal antialiased h-full w-full'
          )}
        >
          <StatusBarTint />
          <ViewTransitionLinks />
          <Navbar
            data={await withNavCovers(pageData.navbar, locale)}
            locale={locale}
          />
          {children}
          <Footer data={pageData.footer} locale={locale} />
          <AIToast />
          {isDraftMode && <DraftModeBanner />}
        </div>
      </MotionProvider>
    </CartProvider>
  );
}
