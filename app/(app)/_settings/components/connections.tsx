'use client';
import Listy from '@/components/listy';
import GoogleDrive from '@/icons/google-drive';
import Notion from '@/icons/notion';
import Slack from '@/icons/slack';
import { Avatar, Button } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';
const ConnectionsPane: React.FC = () => {
  const t = useTranslations('app.settings.connections');
  return (
    <>
      <Listy>
        <Listy.Item
          avatar={
            <Avatar
              className="bg-(--ant-color-bg-elevated) border border-(--ant-color-border)"
              icon={<GoogleDrive />}
            />
          }
          title={t('googleDrive')}
          description={t('googleDriveDesc')}
          action={<Button key="button">{t('connect')}</Button>}
        />
        <Listy.Item
          avatar={
            <Avatar
              className="bg-(--ant-color-bg-elevated) border border-(--ant-color-border)"
              icon={<Notion />}
            />
          }
          title={t('notion')}
          description={t('notionDesc')}
          action={<Button key="button">{t('connect')}</Button>}
        />
        <Listy.Item
          avatar={
            <Avatar
              className="bg-(--ant-color-bg-elevated) border border-(--ant-color-border)"
              icon={<Slack />}
            />
          }
          title={t('slack')}
          description={t('slackDesc')}
          action={<Button key="button">{t('connect')}</Button>}
        />
      </Listy>
    </>
  );
};

export default ConnectionsPane;
