'use client';
import Header from '@/app/(web)/components/header';
import { Layout as AntdLayout } from 'antd';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <AntdLayout className="min-h-screen overflow-auto">
      <AntdLayout.Header>
        <Header />
      </AntdLayout.Header>
      <AntdLayout.Content>{children}</AntdLayout.Content>
    </AntdLayout>
  );
}
