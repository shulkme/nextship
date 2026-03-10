'use client';
import { languages } from '@/i18n/config';
import { useLanguage } from '@/providers/language';
import { cn } from '@/utils/classname';
import { RiTranslate2 } from '@remixicon/react';
import { Button, Dropdown, type MenuProps } from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const NavItem: React.FC<{
  href: string;
  title: string;
}> = ({ href, title }) => {
  return (
    <li>
      <a
        href={href}
        className={cn('text-sm/6 font-semibold text-gray-900 dark:text-white hover:opacity-80')}
      >
        {title}
      </a>
    </li>
  );
};

const Header: React.FC = () => {
  const t = useTranslations('web.header');
  const { setLocale } = useLanguage();
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    setLocale(key as string);
  };

  return (
    <header className="z-10 relative">
      <div className="h-16 flex items-center justify-between px-8">
        <a
          href="/"
          className="flex items-center gap-2 text-(--ant-color-text-base)"
        >
          <Image
            className="size-8"
            src="/images/logo.png"
            width={256}
            height={256}
            alt="logo"
          />
        </a>
        <nav>
          <ul className="flex items-center gap-12">
            <NavItem title={t('nav.products')} href={'/products'} />
            <NavItem title={t('nav.pricing')} href={'/pricing'} />
            <NavItem title={t('nav.blog')} href={'/blog'} />
            <NavItem title={t('nav.api')} href={'/api'} />
            <NavItem title={t('nav.docs')} href={'/docs'} />
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Dropdown
            menu={{
              items: languages.map((lang) => ({
                key: lang.value,
                label: lang.label,
              })),
              onClick: handleMenuClick,
            }}
          >
            <Button type="text" icon={<RiTranslate2 size={18} />} />
          </Dropdown>
          <Button href="/login" type="primary">
            {t('login')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
