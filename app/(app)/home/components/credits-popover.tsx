import {
  Calendar,
  ChevronRight,
  HelpCircle,
  SparkleCircle,
} from '@boxicons/react';
import { Button, Popover } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const CreditsPopover: React.FC = () => {
  const t = useTranslations('app.credits');
  return (
    <Popover
      classNames={{
        container: 'p-4',
      }}
      placement="bottomRight"
      arrow={false}
      content={
        <div className="min-w-60">
          <div className="flex items-center pb-4 border-b border-dashed border-(--ant-color-border-secondary)">
            <div className="flex-auto">
              <h3 className="text-lg font-medium font-serif">{t('free')}</h3>
            </div>
            <div className="flex-none">
              <Button
                variant="solid"
                color="default"
                size="small"
                shape="round"
              >
                {t('upgrade')}
              </Button>
            </div>
          </div>
          <div className="pt-4 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="flex items-center gap-1">
                  <SparkleCircle pack="filled" size="xs" />
                  <span className="font-medium text-sm">{t('credits')}</span>
                  <span className="text-neutral-400">
                    <HelpCircle size="xs" />
                  </span>
                </h3>
                <span>1,234</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400 text-xs">
                <span>{t('freeCredits')}</span>
                <span>1,234</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="flex items-center gap-2">
                  <Calendar size="xs" />
                  <span className="font-medium text-sm">
                    {t('dailyRefresh')}
                  </span>
                  <span className="text-neutral-400">
                    <HelpCircle size="xs" />
                  </span>
                </h3>
                <span>1,234</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400 text-xs">
                <span>{t('refreshAt', { amount: '1,234' })}</span>
              </div>
            </div>
            <div>
              <a
                className="inline-flex items-center gap-1"
                href="#settings/usage"
              >
                <span>{t('viewUsage')}</span>
                <span>
                  <ChevronRight size="xs" />
                </span>
              </a>
            </div>
          </div>
        </div>
      }
    >
      <Button shape="round" icon={<SparkleCircle pack="filled" size="xs" />}>
        1,234
      </Button>
    </Popover>
  );
};

export default CreditsPopover;
