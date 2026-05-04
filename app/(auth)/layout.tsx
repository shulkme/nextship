'use client';
import { languages } from '@/i18n/config';
import { useLanguage } from '@/providers/language';
import { GlobeAlt } from '@boxicons/react';
import { Layout as AntdLayout, Button, Dropdown, type MenuProps } from 'antd';
import Image from 'next/image';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { setLocale, language } = useLanguage();
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    setLocale(key as string);
  };
  return (
    <AntdLayout className="min-h-screen">
      <AntdLayout.Header className="p-8 flex items-center justify-between">
        <div className="flex-none">
          <Image
            className="size-7"
            src="/images/logo.png"
            width={256}
            height={256}
            alt="logo"
          />
        </div>

        <div className="flex-none">
          <Dropdown
            menu={{
              items: languages.map((lang) => ({
                key: lang.value,
                label: lang.label,
              })),
              onClick: handleMenuClick,
            }}
          >
            <Button type="text" icon={<GlobeAlt size="xs" />}>
              {language}
            </Button>
          </Dropdown>
        </div>
      </AntdLayout.Header>
      <AntdLayout.Content className="p-8 flex flex-col justify-center items-center">
        <div className="w-full max-w-sm">{children}</div>
      </AntdLayout.Content>
      <AntdLayout.Footer className="px-8 py-4">
        <div className="text-xs text-(--ant-color-text-description) text-center">
          © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_COPYRIGHT}
        </div>
      </AntdLayout.Footer>
    </AntdLayout>
  );
}
