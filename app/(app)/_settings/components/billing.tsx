'use client';
import { RiBankCardLine } from '@remixicon/react';
import { Avatar, Button, Card } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';
const BillingPane: React.FC = () => {
  const t = useTranslations('app.settings.billing');
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-medium text-base mb-2">{t('currentPlan')}</h3>
        <Card>
          <div className="flex items-center">
            <div className="flex-auto">
              <h3 className="font-bold text-base">{t('freePlan')}</h3>
              <p className="text-neutral-400">
                {t('nextResetTime', { date: '2026-01-01' })}
              </p>
            </div>
            <div className="flex-none">
              <Button type="primary">{t('upgrade')}</Button>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <h3 className="font-medium text-base mb-2">{t('paymentMethod')}</h3>
        <Card>
          <div className="flex items-center gap-4">
            <div className="flex-none">
              <Avatar
                className="bg-transparent text-neutral-400 border border-(--ant-color-border)"
                icon={<RiBankCardLine size={24} />}
                shape="square"
                size={48}
              />
            </div>
            <div className="flex-auto">
              <h3 className="font-medium">{t('noPaymentMethod')}</h3>
              <p className="text-neutral-400">{t('noPaymentMethodDesc')}</p>
            </div>
            <div className="flex-none">
              <Button>{t('addCard')}</Button>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <h3 className="font-medium text-base mb-2">{t('invoices')}</h3>
        <Card>
          <div className="flex items-center gap-4">
            <div className="flex-auto">
              <h3 className="font-medium">{t('invoices')}</h3>
              <p className="text-neutral-400">{t('invoicesDesc')}</p>
            </div>
            <div className="flex-none">
              <Button>{t('getInvoices')}</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BillingPane;
