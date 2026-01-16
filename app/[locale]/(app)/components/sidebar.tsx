'use client';
import { useTheme } from '@/providers/theme';
import { RiMoonFill, RiSunFill } from '@remixicon/react';
import { Button, Layout } from 'antd';
import React from 'react';
const Sidebar: React.FC = () => {
  const { mode, toggleMode } = useTheme();

  return (
    <Layout.Sider
      breakpoint="lg"
      collapsible
      collapsedWidth={80}
      width={240}
      trigger={null}
    >
      <Button
        type="primary"
        icon={
          mode === 'dark' ? <RiSunFill size={18} /> : <RiMoonFill size={18} />
        }
        onClick={toggleMode}
      />
    </Layout.Sider>
  );
};

export default Sidebar;
