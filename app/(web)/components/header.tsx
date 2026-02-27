'use client';
import { cn } from '@/utils/classname';
import { Button } from 'antd';
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
        className={cn('block text-sm text-neutral-800 hover:text-primary-500')}
      >
        {title}
      </a>
    </li>
  );
};

const Header: React.FC = () => {
  return (
    <header>
      <div className="h-16 flex items-center justify-between bg-white/90 px-8">
        <a href="/" className="flex items-center gap-2 text-neutral-800">
          <Image
            className="size-8"
            src="/images/logo.png"
            width={256}
            height={256}
            alt="logo"
          />
          <span className="font-bold text-lg">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </span>
        </a>
        <nav>
          <ul className="flex items-center gap-12">
            <NavItem title={'Products'} href={'/products'} />
            <NavItem title={'Pricing'} href={'/pricing'} />
            <NavItem title={'Blog'} href={'/blog'} />
            <NavItem title={'API'} href={'/api'} />
            <NavItem title={'Docs'} href={'/docs'} />
          </ul>
        </nav>
        <div>
          <Button href="/signup" shape="round" type="primary">
            Try {process.env.NEXT_PUBLIC_APP_NAME}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
