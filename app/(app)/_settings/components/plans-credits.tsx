'use client';
import Plans from '@/app/_pricing/components/plans';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Card, Progress, Switch, Tag } from 'antd';
import { useTranslations } from 'next-intl';
import React, { useMemo, useState } from 'react';
const PlansCreditsPane: React.FC = () => {
  const t = useTranslations('app.settings.plansCredits');
  const [annual, setAnnual] = useState(true);
  const mode = useMemo(() => {
    return annual ? 'annual' : 'monthly';
  }, [annual]);
  return (
    <>
      <Card>
        <h3 className="font-medium text-base mb-2">{t('creditsRemaining')}</h3>
        <div>
          <Progress percent={50} />
        </div>
        <div className="flex justify-between items-center gap-2 text-neutral-500 mt-1">
          <span>{t('creditsResetOn', { date: 'Feb 20' })}</span>
          <span>{t('creditsUsage', { used: 100, total: 200 })}</span>
        </div>
      </Card>

      <div>
        <div className="flex items-center justify-between py-6">
          <h3 className="font-medium text-base">{t('plans')}</h3>
          <div>
            <a className="inline-flex items-center gap-1" href="#">
              <span>{t('manageBilling')}</span>
              <IconArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <Switch value={annual} onChange={setAnnual} />
          <span className="font-medium">{t('annual')}</span>
          <Tag color="green">{t('savePercent', { percent: '16.7' })}</Tag>
        </div>
        <Plans mode={mode} />
      </div>
    </>
  );
};

export default PlansCreditsPane;
