import {defineRouting} from 'next-intl/routing';
import { Config } from '@/utils/config';

export const routing = defineRouting({
  locales: Config.locales,
  localePrefix: Config.localePrefix,
  defaultLocale: Config.defaultLocale,
});
