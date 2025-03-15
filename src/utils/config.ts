import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

export const Config = {
  name: 'Aqua Rigging',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
  strapiUrl: process.env.STRAPI_API_URL ?? 'https://api.aquarigging.com',
  description: 'Wholesale rigging hardware supplier for 20+ years. High-quality shackles, turnbuckles, and lifting gear.',
  baseUrl: 'https://www.aquarigging.com',
};
