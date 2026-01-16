import { defaultLocale, locales } from '@/i18n/config';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales,
  // Used when no locale matches
  defaultLocale,
  // 按需解析
  localePrefix: 'as-needed',

  localeCookie: {
    name: 'NEXT_LOCALE',
  },
});
