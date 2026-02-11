import { type routing } from '@/i18n/routing';
import type messages from '@/locales/en.json';
import { type NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
