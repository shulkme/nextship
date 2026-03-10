'use client';
import Listy from '@/components/listy';
import { Button, Typography } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const ProfilePane: React.FC = () => {
  const t = useTranslations('app.settings.profile');
  return (
    <>
      <Listy>
        <Listy.Item
          title={t('name')}
          description={'Shulk Steve'}
          action={<Button key="edit">{t('edit')}</Button>}
        />
        <Listy.Item
          title={t('uuid')}
          description={
            <Typography.Text copyable type="secondary">
              xxxx-xxxx-xxxx-xxxx
            </Typography.Text>
          }
        />
        <Listy.Item
          title={t('email')}
          description={
            <Typography.Text copyable type="secondary">
              xxx@example.com
            </Typography.Text>
          }
        />
        <Listy.Item
          title={t('deleteAccount')}
          description={
            <Typography.Text type="secondary">
              {t('deleteAccountDesc')}
            </Typography.Text>
          }
          action={
            <Button danger key="edit">
              {t('delete')}
            </Button>
          }
        />
      </Listy>
    </>
  );
};

export default ProfilePane;
