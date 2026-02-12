'use client';
import SettingsModal from '@/app/(app)/_settings';
import Sidebar from '@/app/(app)/components/sidebar';
import { Layout as AntdLayout } from 'antd';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <AntdLayout hasSider className="h-screen">
        <Sidebar />
        <AntdLayout.Content className="overflow-auto">
          {children}
        </AntdLayout.Content>
      </AntdLayout>
      <SettingsModal />
    </>
  );
}
