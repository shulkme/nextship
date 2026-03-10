'use client';
import Plans from '@/app/_pricing/components/plans';
import { Segmented } from 'antd';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const DISCOUNT = 0.167;

const PricingContent: React.FC = () => {
  const [mode, setMode] = useState<'monthly' | 'annual'>('annual');
  const t = useTranslations('pricing');

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4 text-center">{t('title')}</h2>
      <p className="text-base text-neutral-500 mb-6 text-center">
        {t('subtitle')}
      </p>
      <div className="mb-8 text-center">
        <Segmented
          size="large"
          value={mode}
          options={[
            {
              label: t('billingCycle.monthly'),
              value: 'monthly',
            },
            {
              label: (
                <>
                  <span>{t('billingCycle.annual')}</span>
                  <span> • </span>
                  <span className="text-primary-500 font-medium">
                    {t('billingCycle.savePercent', {
                      percent: (DISCOUNT * 100).toFixed(1),
                    })}
                  </span>
                </>
              ),
              value: 'annual',
            },
          ]}
          onChange={setMode}
        />
      </div>
      <Plans mode={mode} />
    </div>
  );
};

export default PricingContent;
