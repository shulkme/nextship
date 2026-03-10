import { RiGithubFill } from '@remixicon/react';
import { Button } from 'antd';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const Hero: React.FC = async () => {
  const t = await getTranslations('web.hero');
  return (
    <section className="relative isolate px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary-200 to-primary-500 opacity-25 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-3xl py-24 sm:py-32 lg:py-48">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-white/10 hover:ring-gray-900/20 dark:hover:ring-white/20">
            {t('announcement')}{' '}
            <a href="#" className="font-semibold text-primary-500 dark:text-primary-300">
              <span aria-hidden="true" className="absolute inset-0" />
              {t('readMore')} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl leading-tight font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-7xl sm:leading-tight">
            {t.rich('title', {
              highlight: (chunks) => (
                <span className="relative inline-block">
                  <span className="bg-linear-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    {chunks}
                  </span>
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-linear-to-r from-primary-400 to-primary-600 sm:-bottom-2 sm:h-1.5" />
                </span>
              ),
            })}
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-400 sm:text-xl/8">
            {t('description')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/home" size="large" type="primary">
              {t('getStarted')}
            </Button>
            <Button
              size="large"
              icon={<RiGithubFill size={18} />}
              href={process.env.NEXT_PUBLIC_GITHUB_URL}
            >
              {t('github')}
            </Button>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-primary-200 to-primary-500 opacity-25 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </section>
  );
};

export default Hero;
