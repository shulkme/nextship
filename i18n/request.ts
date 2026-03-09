import { defaultLocale, locales } from '@/i18n/config';
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

const LOCALE_COOKIE_KEY =
  process.env.NEXT_PUBLIC_LOCALE_COOKIE_KEY || 'NEXT_LOCALE';

export default getRequestConfig(async () => {
  const cookie = await cookies();
  const requested = cookie.get(LOCALE_COOKIE_KEY)?.value;
  const locale = hasLocale(locales, requested) ? requested : defaultLocale;

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
