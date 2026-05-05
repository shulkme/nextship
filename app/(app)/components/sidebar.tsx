'use client';
import Kbd from '@/components/kbd';
import NavMenu from '@/components/nav-menu';
import { languages, type Locale } from '@/i18n/config';
import { useLanguage } from '@/providers/language';
import { useTheme } from '@/providers/theme';
import { cn } from '@/utils/classname';
import {
  ArrowOutRightSquareHalf,
  ArrowUpRightStroke,
  Check,
  Cog,
  Dashboard,
  DiamondAlt,
  DockLeft,
  GlobeAlt,
  Grid,
  HomeAlt,
  HomeAlt2,
  Lock,
  MessageCheck,
  MessageCircleQuestionMark,
  Mobile,
  Monitor,
  Moon,
  Planet,
  RefreshCw,
  Rows3,
  SearchBig,
  SparkleCircle,
  Sun,
  Table,
  User,
  UserCheck,
  UserCircle,
  UserPlus,
} from '@boxicons/react';
import { Avatar, Button, Divider, Dropdown, Layout, Tooltip } from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

const nativePush = (hash: string) => {
  if (typeof window !== 'undefined') {
    window.location.hash = hash;
  }
};

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { toggleMode, mode } = useTheme();
  const { setLocale, locale, language } = useLanguage();
  const t = useTranslations('app.sidebar');

  return (
    <>
      <Layout.Sider
        collapsed={collapsed}
        breakpoint="xl"
        collapsible
        collapsedWidth={52}
        width={272}
        trigger={null}
        onCollapse={setCollapsed}
      >
        <div className="h-full flex flex-col overflow-hidden group">
          <div className="flex-none px-2 py-3 relative">
            <div className="flex items-center gap-1">
              <div className="flex-none size-(--ant-control-height) flex items-center justify-center">
                <Image
                  className="size-6 block"
                  src="/images/logo.png"
                  width={256}
                  height={256}
                  alt="logo"
                />
              </div>
              {!collapsed && (
                <div className="text-base font-medium font-serif leading-none">
                  {process.env.NEXT_PUBLIC_APP_NAME}
                </div>
              )}
            </div>
            <div
              className={cn(
                'absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-(--ant-layout-sider-bg)',
                collapsed && 'hidden group-hover:block',
              )}
            >
              <Tooltip
                placement="right"
                title={collapsed ? t('openSidebar') : t('closeSidebar')}
              >
                <Button
                  type="text"
                  icon={
                    <DockLeft size="xs" pack={collapsed ? 'filled' : 'basic'} />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                />
              </Tooltip>
            </div>
          </div>
          <div className="flex-auto px-2 py-2 overflow-auto scrollbar-hidden">
            <NavMenu collapsed={collapsed}>
              <NavMenu.Item
                icon={<HomeAlt2 size="xs" />}
                label={t('menu.home')}
                href="/home"
                className="px-2.5"
              />
              <NavMenu.Item
                icon={<Planet size="xs" />}
                label={t('menu.discover')}
                href="/discover"
                className="px-2.5"
              />
              <NavMenu.Item
                icon={<SearchBig size="xs" />}
                label={t('menu.search')}
                onClick={() => nativePush('#search')}
                extra={<Kbd shortcut="ctrl+K" />}
                className="px-2.5"
              />
              {!collapsed && (
                <div className="text-xs text-(--ant-color-text-description) py-1 px-2 mt-2">
                  <span>{t('menu.layouts')}</span>
                </div>
              )}
              <NavMenu.Item
                icon={<Table size="xs" />}
                label={t('menu.table')}
                href="/layouts/table"
                className="px-2.5"
              />
              <NavMenu.Item
                icon={<Rows3 size="xs" />}
                label={t('menu.list')}
                href="/layouts/list"
                className="px-2.5"
              />
              <NavMenu.Item
                icon={<Grid size="xs" />}
                label={t('menu.grid')}
                href="/layouts/grid"
                className="px-2.5"
              />
              <NavMenu.Item
                icon={<Dashboard size="xs" />}
                label={t('menu.masonry')}
                href="/layouts/masonry"
                className="px-2.5"
              />
              {!collapsed && (
                <div className="text-xs text-(--ant-color-text-description) py-1 px-2 mt-2">
                  <span>{t('menu.pages')}</span>
                </div>
              )}
              <NavMenu.Item
                icon={<DiamondAlt size="xs" />}
                label={t('menu.pricing')}
                href="/pricing"
                className="px-2.5"
              />
              <NavMenu.Item
                icon={<UserCheck size="xs" />}
                label={t('menu.signIn')}
                href="/login"
                extra={<ArrowUpRightStroke size="xs" />}
                className="px-2.5"
              />
              <NavMenu.Item
                icon={<UserPlus size="xs" />}
                label={t('menu.signUp')}
                href="/signup"
                extra={<ArrowUpRightStroke size="xs" />}
                className="px-2.5"
              />
              <NavMenu.Item
                icon={<Lock size="xs" />}
                label={t('menu.forgotPassword')}
                href="/password/forgot"
                extra={<ArrowUpRightStroke size="xs" />}
                className="px-2.5"
              />
              <NavMenu.Item
                icon={<RefreshCw size="xs" />}
                label={t('menu.resetPassword')}
                href="/password/reset"
                extra={<ArrowUpRightStroke size="xs" />}
                className="px-2.5"
              />
              <NavMenu.Item
                icon={<MessageCheck size="xs" />}
                label={t('menu.emailCheck')}
                href="/email/check"
                extra={<ArrowUpRightStroke size="xs" />}
                className="px-2.5"
              />
            </NavMenu>
          </div>
          <div className="flex-none px-2 py-2">
            <div className="flex items-center gap-0.5">
              <div className="flex-auto">
                <Dropdown
                  trigger={['click']}
                  menu={{
                    tooltip: false,
                    items: [
                      {
                        type: 'divider',
                      },
                      {
                        key: 'profile',
                        icon: <UserCircle size="xs" />,
                        label: t('userMenu.profile'),
                        onClick: () => nativePush('#settings/profile'),
                      },
                      {
                        key: 'general',
                        icon: <Cog size="xs" />,
                        label: t('userMenu.settings'),
                        onClick: () => nativePush('#settings/general'),
                      },
                      {
                        key: 'language',
                        label: language,
                        icon: <GlobeAlt size="xs" />,
                        children: languages.map((lang) => ({
                          key: lang.value,
                          label: lang.label,
                          icon:
                            locale === lang.value ? <Check size="xs" /> : null,
                          onClick: () => setLocale(lang.value as Locale),
                        })),
                      },
                      {
                        type: 'divider',
                      },
                      {
                        key: 'official-website',
                        icon: <HomeAlt size="xs" />,
                        label: t('userMenu.officialWebsite'),
                        extra: <ArrowUpRightStroke size="xs" />,
                        onClick: () => window.open('/', '_blank'),
                      },
                      {
                        key: 'help-center',
                        icon: <MessageCircleQuestionMark size="xs" />,
                        label: t('userMenu.helpCenter'),
                        extra: <ArrowUpRightStroke size="xs" />,
                        onClick: () => window.open('/help', '_blank'),
                      },
                      {
                        key: 'logout',
                        icon: <ArrowOutRightSquareHalf size="xs" />,
                        label: t('userMenu.logout'),
                      },
                    ],
                  }}
                  popupRender={(menu) => (
                    <div className="w-64 bg-(--ant-color-bg-elevated) rounded-lg shadow-lg">
                      <div className="flex items-center gap-2 p-4">
                        <div className="flex-none">
                          <Avatar size={32} icon={<User size="sm" />} />
                        </div>
                        <div className="flex-auto leading-none min-w-0">
                          <h3 className="font-medium truncate">Nickname</h3>
                          <p className="text-xs text-(--ant-color-text-tertiary) truncate">
                            username@acme.com
                          </p>
                        </div>
                      </div>
                      <Divider orientation="horizontal" className="m-0" />
                      <div className="px-4 py-2">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-medium">Free</h3>
                          <div className="flex items-center gap-1 text-xs text-(--ant-color-text-tertiary)">
                            <span>
                              <SparkleCircle size="xs" pack="filled" />
                            </span>
                            <span>1,234</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <Button size="small" type="primary" block>
                            {t('userMenu.upgrade')}
                          </Button>
                        </div>
                      </div>
                      <div>
                        {React.cloneElement(
                          menu as React.ReactElement<{
                            className: string;
                          }>,
                          {
                            className: 'shadow-none bg-transparent',
                          },
                        )}
                      </div>
                    </div>
                  )}
                >
                  <Button type="text" icon={<Avatar size="small">U</Avatar>} />
                </Dropdown>
              </div>
              {!collapsed && (
                <>
                  <div className="flex-none">
                    <Tooltip title={t('userMenu.downloadApp')}>
                      <Button type="text" icon={<Mobile size="xs" />} />
                    </Tooltip>
                  </div>
                  <div className="flex-none">
                    <Tooltip
                      title={
                        mode === 'dark'
                          ? t('userMenu.dark')
                          : mode === 'light'
                            ? t('userMenu.light')
                            : t('userMenu.system')
                      }
                    >
                      <Button
                        type="text"
                        icon={
                          mode === 'dark' ? (
                            <Moon size="xs" />
                          ) : mode === 'light' ? (
                            <Sun size="xs" />
                          ) : (
                            <Monitor size="xs" />
                          )
                        }
                        onClick={toggleMode}
                      />
                    </Tooltip>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Layout.Sider>
    </>
  );
};

export default Sidebar;
