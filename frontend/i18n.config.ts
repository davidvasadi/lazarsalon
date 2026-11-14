export const i18n = {
  defaultLocale: 'hu',
  // Active languages: only these get pages and sitemap entries.
  locales: ['hu'],
} as const;

/**
 * Languages prepared for later but not live yet (no content in Strapi). Their URLs (e.g. /en, /en/arak) permanently
 * redirect to the default language, so Google never sees an empty / erroring page. To launch English: add the `en`
 * locale + content in Strapi, then move 'en' from here into `locales` above.
 */
export const plannedLocales = ['en'] as const;

export type Locale = (typeof i18n)['locales'][number];
