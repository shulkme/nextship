import { Button } from 'antd';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const CTA: React.FC = async () => {
  const t = await getTranslations('web.cta');

  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-primary-50 dark:bg-primary-950/50 px-8 py-16 sm:px-16 sm:py-20 text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          {t('title')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          {t('description')}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button href="/signup" size="large" type="primary">
            {t('getStarted')}
          </Button>
          <Button href="/docs" size="large">
            {t('learnMore')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
