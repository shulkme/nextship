import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './i18n/config';

const LOCALE_COOKIE_KEY =
  process.env.NEXT_PUBLIC_LOCALE_COOKIE_KEY || 'NEXT_LOCALE';

export default function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const localeCookie = request.cookies.get(LOCALE_COOKIE_KEY)?.value;

  // If no cookie exists, detect locale from Accept-Language header
  if (!localeCookie) {
    const acceptLanguage = request.headers.get('accept-language');
    let detectedLocale = defaultLocale;

    if (acceptLanguage) {
      const languages = acceptLanguage
        .split(',')
        .map((lang) => lang.split(';')[0].trim().toLowerCase());

      // Find first matching locale
      for (const lang of languages) {
        const matched = locales.find((locale) =>
          lang.startsWith(locale.toLowerCase()),
        );
        if (matched) {
          detectedLocale = matched;
          break;
        }
      }
    }

    // Set the detected locale cookie
    response.cookies.set(LOCALE_COOKIE_KEY, detectedLocale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
      sameSite: 'lax',
    });

    return response;
  }

  // Validate existing cookie value
  if (!locales.includes(localeCookie as any)) {
    response.cookies.set(LOCALE_COOKIE_KEY, defaultLocale, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};
