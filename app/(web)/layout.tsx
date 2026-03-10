import Header from '@/app/(web)/components/header';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-screen overflow-auto">
      <Header />
      <main>{children}</main>
    </div>
  );
}
