import { getTranslations } from 'next-intl/server';
import React from 'react';

const keys = ['users', 'countries', 'uptime', 'projects'] as const;

const Stats: React.FC = async () => {
  const t = await getTranslations('web.stats');

  return (
    <section className="bg-gray-50 dark:bg-white/[0.02] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          {t('title')}
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          {t('description')}
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {keys.map((key) => (
            <div key={key} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-primary-500 dark:text-primary-300 sm:text-5xl">
                {t(`items.${key}.value`)}
              </p>
              <p className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400">
                {t(`items.${key}.label`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
