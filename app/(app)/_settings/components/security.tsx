'use client';
import Listy from '@/components/listy';
import { ChevronRight } from '@boxicons/react';
import { Button, Switch } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';
const SecurityPane: React.FC = () => {
  const t = useTranslations('app.settings.security');
  return (
    <>
      <Listy>
        <Listy.Item
          title={t('password')}
          action={
            <Button
              type="text"
              iconPlacement="end"
              icon={<ChevronRight size="xs" />}
              key="button"
            >
              {t('add')}
            </Button>
          }
        />
        <Listy.Item
          title={t('passkeys')}
          description={t('passkeysDesc')}
          action={
            <Button
              type="text"
              iconPlacement="end"
              icon={<ChevronRight size="xs" />}
              key="button"
            >
              {t('add')}
            </Button>
          }
        />
        <Listy.Item
          title={t('mfa')}
          description={t('mfaDesc')}
          action={<Switch key="switch" />}
        />
        <Listy.Item
          title={t('logoutAllDevices')}
          description={t('logoutAllDevicesDesc')}
          action={
            <Button color="danger" variant="outlined" key="button">
              {t('logout')}
            </Button>
          }
        />
      </Listy>
    </>
  );
};

export default SecurityPane;
