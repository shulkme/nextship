'use client';
import Listy from '@/components/listy';
import { Switch } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';
const NotificationsPane: React.FC = () => {
  const t = useTranslations('app.settings.notifications');
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'NextShip';
  return (
    <>
      <Listy>
        <Listy.Item
          title={t('responses')}
          description={t('responsesDesc', { appName })}
          action={<Switch key="switch" defaultChecked />}
        />
        <Listy.Item
          title={t('tasks')}
          description={t('tasksDesc')}
          action={<Switch key="switch" defaultChecked />}
        />
        <Listy.Item
          title={t('projects')}
          description={t('projectsDesc')}
          action={<Switch key="switch" defaultChecked />}
        />
        <Listy.Item
          title={t('recommendations')}
          description={t('recommendationsDesc', { appName })}
          action={<Switch key="switch" defaultChecked />}
        />
      </Listy>
    </>
  );
};

export default NotificationsPane;
