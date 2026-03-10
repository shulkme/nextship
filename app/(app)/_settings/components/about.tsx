'use client';
import Listy from '@/components/listy';
import { Button } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';
const AboutPane: React.FC = () => {
  const t = useTranslations('app.settings.about');
  return (
    <>
      <Listy>
        <Listy.Item
          title={t('termsOfUse')}
          action={<Button key="button">{t('view')}</Button>}
        />
        <Listy.Item
          title={t('privacyPolicy')}
          action={<Button key="button">{t('view')}</Button>}
        />
      </Listy>
    </>
  );
};

export default AboutPane;
