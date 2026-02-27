import { type locales } from '@/i18n/config';
import type messages from '@/locales/en.json';
import { type NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof locales)[number];
    Messages: typeof messages;
  }
}

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
