import { ErrorBoundary } from '@/components';
import NProgressBar from '@/components/nprogress-bar';
import { routing } from '@/i18n/routing';
import { env } from '@/lib/env';
import { initErrorTracking } from '@/lib/logger';
import { LanguageProvider } from '@/providers/language';
import { ThemeProvider } from '@/providers/theme';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { App } from 'antd';
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import React from 'react';
import '../globals.css';

// Initialize error tracking
if (env.isProduction) {
  initErrorTracking();
}

export const metadata: Metadata = {
  title: env.app.name,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>) {
  const cookie = await cookies();
  const theme = cookie.get('theme')?.value || 'auto';

  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Enable static rendering
  // setRequestLocale(locale);

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
            <NextIntlClientProvider>
              <LanguageProvider>
                <ErrorBoundary>
                  <App>{children}</App>
                </ErrorBoundary>
              </LanguageProvider>
            </NextIntlClientProvider>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
