import { Avatar } from 'antd';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const keys = ['t1', 't2', 't3'] as const;

const Testimonials: React.FC = async () => {
  const t = await getTranslations('web.testimonials');

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
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {keys.map((key) => (
            <div
              key={key}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 p-8"
            >
              <p className="text-sm/6 text-gray-600 dark:text-gray-300">
                &ldquo;{t(`items.${key}.content`)}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="bg-primary-500" size={40}>
                  {t(`items.${key}.author`).charAt(0)}
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {t(`items.${key}.author`)}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {t(`items.${key}.role`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
