import { locales } from '@/i18n/config';
import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

const LOCALE_COOKIE_KEY =
  process.env.NEXT_PUBLIC_LOCALE_COOKIE_KEY || 'NEXT_LOCALE';

export async function POST(request: NextRequest) {
  try {
    const { locale } = await request.json();

    // Validate locale
    if (!locales.includes(locale)) {
      return NextResponse.json({ error: 'Invalid locale' }, { status: 400 });
    }

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set(LOCALE_COOKIE_KEY, locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
      sameSite: 'lax',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to set locale' },
      { status: 500 },
    );
  }
}
