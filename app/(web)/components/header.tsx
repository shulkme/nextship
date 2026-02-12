import { cn } from '@/utils/classname';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavItem: React.FC<{
  href: string;
  title: string;
  active?: boolean;
}> = ({ href, active, title }) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          'block text-base text-neutral-800 hover:text-primary-500',
          active && 'text-primary-500',
        )}
      >
        {title}
      </Link>
    </li>
  );
};

const Header: React.FC = () => {
  return (
    <header className="p-4">
      <div className="border flex items-center justify-between border-slate-200 bg-white/90 max-w-7xl mx-auto p-2 pl-4 rounded-full">
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
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
