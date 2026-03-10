import { Collapse } from 'antd';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const appName = process.env.NEXT_PUBLIC_APP_NAME || 'NextShip';

const FAQ: React.FC = async () => {
  const t = await getTranslations('web.faq');

  const items = [
    { q: t('items.q1', { appName }), a: t('items.a1', { appName }) },
    { q: t('items.q2'), a: t('items.a2') },
    { q: t('items.q3'), a: t('items.a3') },
    { q: t('items.q4'), a: t('items.a4') },
    { q: t('items.q5'), a: t('items.a5') },
    { q: t('items.q6'), a: t('items.a6') },
  ];

  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          {t('title')}
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          {t('description')}
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-3xl">
        <Collapse
          bordered={false}
          expandIconPlacement="end"
          className="bg-transparent!"
          items={items.map((item, index) => ({
            key: index,
            label: (
              <span className="text-base leading-7 font-medium text-gray-900 dark:text-white">
                {item.q}
              </span>
            ),
            children: (
              <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                {item.a}
              </p>
            ),
          }))}
        />
      </div>
    </section>
  );
};

export default FAQ;
