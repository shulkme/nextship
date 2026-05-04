'use client';
import Listy from '@/components/listy';
import { languages, type Locale } from '@/i18n/config';
import { useLanguage } from '@/providers/language';
import { type Mode, useTheme } from '@/providers/theme';
import { Monitor, Moon, Sun } from '@boxicons/react';
import { Button, Segmented, Select, Switch } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';
const GeneralPane: React.FC = () => {
  const t = useTranslations('app.settings.general');
  const { locale, setLocale } = useLanguage();
  const { mode, setMode } = useTheme();

  const handleLanguageChange = (value: Locale) => {
    setLocale(value);
  };

  const handleThemeChange = (value: string) => {
    setMode(value as Mode);
  };

  return (
    <>
      <Listy>
        <Listy.Item
          title={t('language')}
          description={t('languageDesc')}
          action={
            <Select
              variant="filled"
              value={locale}
              className="w-30.5"
              key="select"
              options={languages}
              onChange={handleLanguageChange}
            />
          }
        />
        <Listy.Item
          title={t('theme')}
          description={t('themeDesc')}
          action={
            <Segmented
              value={mode}
              classNames={{
                label: 'flex items-center',
              }}
              key="segmented"
              onChange={handleThemeChange}
              options={[
                {
                  value: 'light',
                  icon: <Sun size="xs" />,
                },
                {
                  value: 'dark',
                  icon: <Moon size="xs" />,
                },
                {
                  value: 'system',
                  icon: <Monitor size="xs" />,
                },
              ]}
            />
          }
        />
        <Listy.Item
          title={t('suggestions')}
          description={t('suggestionsDesc')}
          action={<Switch key="switch" defaultChecked />}
        />
        <Listy.Item
          title={t('manageCookies')}
          action={<Button key="button">{t('manage')}</Button>}
        />
      </Listy>
    </>
  );
};

export default GeneralPane;
