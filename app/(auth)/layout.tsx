'use client';
import { IconArrowLeft } from '@tabler/icons-react';
import { Layout as AntdLayout, Button } from 'antd';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <AntdLayout className="min-h-screen w-full flex flex-row p-6">
      <div className="flex-auto flex flex-col">
        <div className="flex-none">
          <Button href="/" type="text" icon={<IconArrowLeft size={18} />} />
        </div>
        <div className="flex-auto flex flex-col justify-center items-center">
          <div className="w-full max-w-sm">{children}</div>
        </div>
        <div className="flex-none text-center p-2 text-neutral-400 text-xs">
          <span>
            © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_COPYRIGHT}
          </span>
        </div>
      </div>
      <div className="w-full max-w-1/2 flex-auto hidden lg:block">
        <div className="w-full h-full bg-primary-500 rounded-4xl"></div>
      </div>
    </AntdLayout>
  );
}
