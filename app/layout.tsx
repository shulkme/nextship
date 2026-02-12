import { AntdRegistry } from '@ant-design/nextjs-registry';
import { App } from 'antd';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { cookies } from 'next/headers';
import React from 'react';

import NProgressBar from '@/components/nprogress-bar';
import { initErrorTracking } from '@/lib/logger';
import { LanguageProvider } from '@/providers/language';
import { ThemeProvider } from '@/providers/theme';

import { defaultLocale, locales, type Locale } from '@/i18n/config';
import './globals.css';

// Initialize error tracking
if (process.env.NODE_ENV === 'production') {
  initErrorTracking();
}

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
};

const LOCALE_COOKIE_KEY =
  process.env.NEXT_PUBLIC_LOCALE_COOKIE_KEY || 'NEXT_LOCALE';

export default async function LocaleLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'auto';
  const cookieLocale = cookieStore.get(LOCALE_COOKIE_KEY)?.value;
  const locale: Locale =
    cookieLocale && locales.includes(cookieLocale as Locale)
      ? (cookieLocale as Locale)
      : defaultLocale;

  return (
    <html lang={locale} className={theme} suppressHydrationWarning>
      <body>
        <NProgressBar
          options={{
            showSpinner: false,
          }}
        />
        <AntdRegistry>
          <ThemeProvider initMode={theme}>
            <NextIntlClientProvider locale={locale}>
              <LanguageProvider>
                <App>{children}</App>
                {modal}
              </LanguageProvider>
            </NextIntlClientProvider>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
