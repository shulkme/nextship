import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import React from 'react';

const appName = process.env.NEXT_PUBLIC_APP_NAME || 'NextShip';

const Footer: React.FC = async () => {
  const t = await getTranslations('web.footer');

  const columns = [
    {
      title: t('product.title'),
      links: [
        { label: t('product.features'), href: '/features' },
        { label: t('product.pricing'), href: '/pricing' },
        { label: t('product.docs'), href: '/docs' },
        { label: t('product.changelog'), href: '/changelog' },
      ],
    },
    {
      title: t('company.title'),
      links: [
        { label: t('company.about'), href: '/about' },
        { label: t('company.blog'), href: '/blog' },
        { label: t('company.careers'), href: '/careers' },
        { label: t('company.contact'), href: '/contact' },
      ],
    },
    {
      title: t('legal.title'),
      links: [
        { label: t('legal.privacy'), href: '/privacy' },
        { label: t('legal.terms'), href: '/terms' },
        { label: t('legal.cookies'), href: '/cookies' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-white/[0.02] px-6 py-16 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <Image
                className="size-8"
                src="/images/logo.png"
                width={256}
                height={256}
                alt="logo"
              />
            </a>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {t('description')}
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('copyright', {
              year: new Date().getFullYear().toString(),
              appName,
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
