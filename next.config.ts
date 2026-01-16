import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import { routing } from '@/i18n/routing';
import messages from '@/locales/en.json';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
