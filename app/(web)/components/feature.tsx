import {
  Code,
  GlobeAlt,
  Laptop,
  Lock,
  Moon,
  PlugConnect,
} from '@boxicons/react';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const icons = [Lock, GlobeAlt, Moon, Laptop, Code, PlugConnect];

const keys = [
  'auth',
  'i18n',
  'theme',
  'responsive',
  'typescript',
  'api',
] as const;

const Feature: React.FC = async () => {
  const t = await getTranslations('web.feature');

  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold text-primary-500 dark:text-primary-300">
          {t('tagline')}
        </p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          {t('title')}
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          {t('description')}
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {keys.map((key, index) => {
            const Icon = icons[index];
            return (
              <div
                key={key}
                className="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary-500">
                  <Icon className="text-white" size="sm" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-400">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
