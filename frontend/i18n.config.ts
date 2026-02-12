export const i18n = {
  defaultLocale: 'hu',
  locales: ['en', 'hu'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
