'use client';

import Chatbox from '@/app/(app)/home/components/chatbox';
import CreditsPopover from '@/app/(app)/home/components/credits-popover';
import SlideBanner from '@/app/(app)/home/components/slide-banner';
import {
  Bell,
  BrushSparkles,
  Mobile,
  Slideshow,
  Window,
} from '@boxicons/react';
import { Alert, Button, Tooltip } from 'antd';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('app.home');
  return (
    <div className="w-full flex-auto h-screen px-4 flex flex-col overflow-hidden">
      <div className="flex-none sticky top-0 flex items-center justify-between py-4">
        <div></div>
        <div className="flex items-center gap-3">
          <Tooltip title={t('notifications')}>
            <Button shape="circle" icon={<Bell pack="filled" size="xs" />} />
          </Tooltip>
          <CreditsPopover />
        </div>
      </div>
      <div className="mt-[20vh] max-w-full sm:max-w-3xl w-full mx-auto">
        <div className="flex relative flex-col items-center gap-10 mb-10">
          <div className="absolute -top-10 left-1/2 -translate-y-full -translate-x-1/2">
            <Alert
              classNames={{
                root: 'border-none',
                title: 'whitespace-nowrap',
              }}
              type="info"
              showIcon
              icon={
                <span className="inline-block text-xs rounded-full px-2 py-1 bg-primary-500 text-white font-medium">
                  {t('newBadge')}
                </span>
              }
              title={t('newVersionTitle')}
              action={
                <a className="font-medium whitespace-nowrap">
                  {t('startFreeTrial')}
                </a>
              }
            />
          </div>
          <h1 className="font-serif text-4xl">{t('pageTitle')}</h1>
        </div>
        <Chatbox />
        <div className="flex flex-col items-center mt-6">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <Button shape="round" icon={<Slideshow size="xs" />}>
              {t('quickActions.createSlides')}
            </Button>
            <Button shape="round" icon={<Window size="xs" />}>
              {t('quickActions.buildWebsite')}
            </Button>
            <Button shape="round" icon={<Mobile size="xs" />}>
              {t('quickActions.developApps')}
            </Button>
            <Button shape="round" icon={<BrushSparkles size="xs" />}>
              {t('quickActions.design')}
            </Button>
            <Button shape="round">{t('quickActions.more')}</Button>
          </div>
        </div>
      </div>
      <div className="pt-6 mt-auto mb-12 flex justify-center">
        <SlideBanner />
      </div>
    </div>
  );
}
