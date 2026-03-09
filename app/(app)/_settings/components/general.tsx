'use client';
import Listy from '@/components/listy';
import { defaultLocale, languages } from '@/i18n/config';
import { RiComputerLine, RiMoonLine, RiSunLine } from '@remixicon/react';
import { Button, Segmented, Select, Switch } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';
const GeneralPane: React.FC = () => {
  const t = useTranslations('app.settings.general');
  return (
    <>
      <Listy>
        <Listy.Item
          title={t('language')}
          description={t('languageDesc')}
          action={
            <Select
              defaultValue={defaultLocale}
              className="w-32"
              key="select"
              options={languages}
            />
          }
        />
        <Listy.Item
          title={t('theme')}
          description={t('themeDesc')}
          action={
            <Segmented
              classNames={{
                label: 'flex items-center',
              }}
              key="segmented"
              options={[
                {
                  value: 'light',
                  icon: <RiSunLine size={16} />,
                },
                {
                  value: 'dark',
                  icon: <RiMoonLine size={16} />,
                },
                {
                  value: 'system',
                  icon: <RiComputerLine size={16} />,
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
