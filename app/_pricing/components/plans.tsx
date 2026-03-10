'use client';
import { RiCheckLine } from '@remixicon/react';
import { Button, Card, Tag } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const DISCOUNT = 0.167;

const discountedPrice = (price: number, mode: 'monthly' | 'annual') => {
  if (mode === 'monthly') return price;
  return (price * (1 - DISCOUNT)).toLocaleString('en-US', {
    maximumFractionDigits: 1,
  });
};

const Plans: React.FC<{
  mode: 'monthly' | 'annual';
}> = ({ mode = 'annual' }) => {
  const t = useTranslations('pricing');
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold">{t('plans.free.name')}</h3>
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <strong className="text-3xl">$0</strong>
            <span className="text-neutral-400">{t('perMonth')}</span>
          </div>
          <div className="mb-6">
            <p className="text-neutral-400">{t('plans.free.description')}</p>
          </div>
          <div className="mb-4">
            <Button size="large" color="default" variant="filled" block>
              {t('plans.free.button')}
            </Button>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>
                  {t.rich('plans.free.features.credits', {
                    count: (chunks) => <strong>{chunks}</strong>,
                  })}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>
                  {t.rich('plans.free.features.storage', {
                    size: (chunks) => <strong>{chunks}</strong>,
                  })}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>
                  {t.rich('plans.free.features.projects', {
                    count: (chunks) => <strong>{chunks}</strong>,
                  })}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>{t('plans.free.features.sharing')}</span>
              </li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold">{t('plans.pro.name')}</h3>
            {mode === 'annual' && <Tag color="blue">{DISCOUNT * 100} %</Tag>}
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <strong className="text-3xl">${discountedPrice(20, mode)}</strong>
            <span className="text-neutral-400">{t('perMonth')}</span>
            {mode === 'annual' && (
              <span className="line-through text-neutral-400 font-medium">
                $20
              </span>
            )}
          </div>
          <div className="mb-6">
            <p className="text-neutral-400">{t('plans.pro.description')}</p>
          </div>
          <div className="mb-4">
            <Button size="large" color="primary" variant="filled" block>
              {t('plans.pro.button')}
            </Button>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>
                  {t.rich('plans.pro.features.credits', {
                    count: (chunks) => <strong>{chunks}</strong>,
                  })}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>
                  {t.rich('plans.pro.features.storage', {
                    size: (chunks) => <strong>{chunks}</strong>,
                  })}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>{t('plans.pro.features.unlimitedProjects')}</span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>{t('plans.pro.features.sharing')}</span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>{t('plans.pro.features.rollovers')}</span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>{t('plans.pro.features.customDomain')}</span>
              </li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold">{t('plans.max.name')}</h3>
            {mode === 'annual' && <Tag color="blue">{DISCOUNT * 100} %</Tag>}
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <strong className="text-3xl">${discountedPrice(100, mode)}</strong>
            <span className="text-neutral-400">{t('perMonth')}</span>
            {mode === 'annual' && (
              <span className="line-through text-neutral-400 font-medium">
                $100
              </span>
            )}
          </div>
          <div className="mb-6">
            <p className="text-neutral-400">{t('plans.max.description')}</p>
          </div>
          <div className="mb-4">
            <Button size="large" color="primary" variant="solid" block>
              {t('plans.max.button')}
            </Button>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>
                  {t.rich('plans.max.features.credits', {
                    count: (chunks) => <strong>{chunks}</strong>,
                  })}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>
                  {t.rich('plans.max.features.storage', {
                    size: (chunks) => <strong>{chunks}</strong>,
                  })}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>{t('plans.max.features.unlimitedProjects')}</span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>{t('plans.max.features.sharing')}</span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>{t('plans.max.features.rollovers')}</span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>{t('plans.max.features.customDomain')}</span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckLine size={16} />
                <span>
                  {t.rich('plans.max.features.compute', {
                    multiplier: (chunks) => <strong>{chunks}</strong>,
                  })}
                </span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Plans;
