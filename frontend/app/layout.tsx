import type { Viewport } from 'next';

import { Locale, i18n } from '@/i18n.config';

import './globals.css';

import { SlugProvider } from './context/SlugContext';
import { Preview } from '@/components/preview';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#292624' },
    { media: '(prefers-color-scheme: dark)', color: '#292624' },
    // #292624 variable
  ],
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Preview />
        <SlugProvider>{children}</SlugProvider>
      </body>
    </html>
  );
}
