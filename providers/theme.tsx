'use client';
import { setTheme as setThemeCookie } from '@/app/actions/theme';
import { darkConfig, lightConfig } from '@/config/theme';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from 'next-themes';
import React, { useEffect } from 'react';

export type Mode = 'dark' | 'light' | 'system';

/**
 * Theme Provider Component
 * Uses next-themes for theme management with Ant Design integration
 */
export const ThemeProvider: React.FC<
  React.PropsWithChildren<{
    initMode?: string;
  }>
> = ({ children, initMode = 'system' }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={initMode}
      enableSystem={true}
      enableColorScheme={false}
      storageKey="theme"
      themes={['light', 'dark', 'system']}
    >
      <ThemeConfigProvider>{children}</ThemeConfigProvider>
    </NextThemesProvider>
  );
};

/**
 * Internal component to provide Ant Design theme based on current theme
 */
const ThemeConfigProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { theme, resolvedTheme } = useNextTheme();

  // Sync theme with server-side cookie
  useEffect(() => {
    if (theme) {
      setThemeCookie(theme).catch(console.error);
    }
  }, [theme]);

  // Use resolvedTheme to get the actual theme (resolves 'system' to 'light' or 'dark')
  const isDark = resolvedTheme === 'dark';

  return (
    <StyleProvider layer>
      <ConfigProvider
        theme={isDark ? darkConfig : lightConfig}
        button={{
          className: 'leading-none',
        }}
        dropdown={{
          className: '[&_.ant-dropdown-menu-submenu-title]:items-center', // FIXME: antd bug
        }}
        menu={{
          className:
            '[&.ant-menu-inline]:border-0 [&.ant-menu-vertical_.ant-menu-item]:flex [&.ant-menu-vertical_.ant-menu-item]:items-center',
        }}
        modal={{
          classNames: {
            header: 'mb-4',
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
};

/**
 * Custom hook to use theme
 * Provides mode, setMode, and toggleMode functions
 */
export const useTheme = () => {
  const { theme, setTheme, systemTheme, resolvedTheme } = useNextTheme();

  const mode = theme as Mode;

  const setMode = (newMode: Mode) => {
    setTheme(newMode);
  };

  const toggleMode = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else if (resolvedTheme === 'light') {
      setTheme('dark');
    } else {
      // If system theme, toggle to opposite of system
      setTheme(systemTheme === 'dark' ? 'light' : 'dark');
    }
  };

  return {
    mode,
    setMode,
    toggleMode,
    resolvedTheme,
    systemTheme,
  };
};
