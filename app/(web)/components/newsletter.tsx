import { Button, Input } from 'antd';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const Newsletter: React.FC = async () => {
  const t = await getTranslations('web.newsletter');

  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary-200 to-primary-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          {t('title')}
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          {t('description')}
        </p>
        <div className="mt-8 flex gap-3 sm:justify-center">
          <Input
            className="max-w-xs"
            size="large"
            placeholder={t('placeholder')}
          />
          <Button size="large" type="primary">
            {t('subscribe')}
          </Button>
        </div>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {t.rich('privacy', {
            link: (chunks) => (
              <a
                href="/privacy"
                className="font-semibold text-primary-500 dark:text-primary-300 hover:underline"
              >
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
