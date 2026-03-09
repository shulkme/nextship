'use client';
import { languages, type Locale } from '@/i18n/config';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
// import zhTW from 'antd/locale/zh_TW';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';
// import 'dayjs/locale/zh-tw';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useMemo } from 'react';

dayjs.extend(localizedFormat);

const setDayjsLocale = (locale: string) => {
  switch (locale) {
    case 'en':
      dayjs.locale('en');
      break;
    case 'zh':
      dayjs.locale('zh-cn');
      break;
    // case 'tw':
    //   dayjs.locale('zh-tw');
    //   break;
  }
};

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  language?: string;
} | null>(null);

const LanguageProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const locale = useLocale();
  const router = useRouter();

  const setLocale = async (newLocale: string) => {
    setDayjsLocale(newLocale);

    // Set cookie via API route
    await fetch('/api/locale', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale: newLocale }),
    });

    // Full page reload to apply new locale for both client and server components
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };
  const _locale = useMemo(() => {
    switch (locale) {
      case 'zh':
        return zhCN;
      // case 'tw':
      //   return zhTW;
      default:
        return enUS;
    }
  }, [locale]);

  const language = useMemo(() => {
    return languages.find((f) => f.value === locale)?.label;
  }, [locale]);

  useEffect(() => {
    setDayjsLocale(locale);
  }, [locale]);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        language,
      }}
    >
      <ConfigProvider locale={_locale}>{children}</ConfigProvider>
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage };
