'use client';
import Kbd from '@/components/kbd';
import { type Locale } from '@/i18n/config';
import { useLanguage } from '@/providers/language';
import { type Mode, useTheme } from '@/providers/theme';
import { cn } from '@/utils/classname';
import {
  RiArrowRightUpLine,
  RiComputerLine,
  RiDashboardLine,
  RiFunctionLine,
  RiGlobalLine,
  RiHome5Line,
  RiLayoutRowLine,
  RiLockPasswordLine,
  RiLoginBoxLine,
  RiLogoutBoxRLine,
  RiMailCheckLine,
  RiMoonLine,
  RiPlanetLine,
  RiQuestionLine,
  RiResetRightLine,
  RiSearchLine,
  RiSettingsLine,
  RiSideBarFill,
  RiSideBarLine,
  RiSunLine,
  RiTableView,
  RiTranslate2,
  RiTShirt2Line,
  RiUser3Line,
  RiVipCrown2Line,
  RiVipDiamondLine,
} from '@remixicon/react';
import {
  Avatar,
  Button,
  ConfigProvider,
  Dropdown,
  type GetProp,
  Layout,
  Menu,
  type MenuProps,
  Tooltip,
} from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';

type MenuItemType = GetProp<MenuProps, 'items'>[number] & {
  href?: string;
};

// Menu factory function moved inside component to access translations

const nativePush = (hash: string) => {
  if (typeof window !== 'undefined') {
    window.location.hash = hash;
  }
};

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { setMode } = useTheme();
  const { setLocale } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('app.sidebar');

  // Generate menus with translations
  const menus = useMemo(
    () =>
      [
        {
          key: 'home',
          label: t('menu.home'),
          icon: <RiHome5Line size={18} />,
          href: '/home',
        },
        {
          key: 'discover',
          label: t('menu.discover'),
          icon: <RiPlanetLine size={18} />,
          href: '/discover',
        },
        {
          key: 'search',
          label: t('menu.search'),
          icon: <RiSearchLine size={18} />,
          href: '#search',
          extra: <Kbd shortcut="cmd+k" />,
        },
        {
          key: 'layouts',
          label: t('menu.layouts'),
          type: 'group',
          children: [
            {
              key: 'layouts:table',
              label: t('menu.table'),
              icon: <RiTableView size={18} />,
              href: '/layouts/table',
            },
            {
              key: 'layouts:list',
              label: t('menu.list'),
              icon: <RiLayoutRowLine size={18} />,
              href: '/layouts/list',
            },
            {
              key: 'layouts:grid',
              label: t('menu.grid'),
              icon: <RiFunctionLine size={18} />,
              href: '/layouts/grid',
            },
            {
              key: 'layouts:masonry',
              label: t('menu.masonry'),
              icon: <RiDashboardLine size={18} />,
              href: '/layouts/masonry',
            },
          ],
        },
        {
          key: 'pages',
          label: t('menu.pages'),
          type: 'group',
          children: [
            {
              key: 'pages:pricing',
              label: t('menu.pricing'),
              icon: <RiVipDiamondLine size={18} />,
              href: '/pricing',
            },
            {
              key: 'pages:sign-in',
              label: t('menu.signIn'),
              icon: <RiLoginBoxLine size={18} />,
              extra: <RiArrowRightUpLine size={16} />,
              href: '/login',
            },
            {
              key: 'pages:sign-up',
              label: t('menu.signUp'),
              icon: <RiLogoutBoxRLine size={18} />,
              extra: <RiArrowRightUpLine size={16} />,
              href: '/signup',
            },
            {
              key: 'pages:forgot-password',
              label: t('menu.forgotPassword'),
              icon: <RiLockPasswordLine size={18} />,
              extra: <RiArrowRightUpLine size={16} />,
              href: '/password/forgot',
            },
            {
              key: 'pages:reset-password',
              label: t('menu.resetPassword'),
              icon: <RiResetRightLine size={18} />,
              extra: <RiArrowRightUpLine size={16} />,
              href: '/password/reset',
            },
            {
              key: 'pages:email-check',
              label: t('menu.emailCheck'),
              icon: <RiMailCheckLine size={18} />,
              extra: <RiArrowRightUpLine size={16} />,
              href: '/email/check',
            },
          ],
        },
      ] as MenuItemType[],
    [t],
  );

  // Cache flattened menu items (only calculate once)
  const flattenMenus = useMemo(() => {
    const result: MenuItemType[] = [];
    menus.forEach((menu) => {
      if (menu.type === 'group' && 'children' in menu && menu.children) {
        result.push(...(menu.children as MenuItemType[]));
      } else {
        result.push(menu);
      }
    });
    return result;
  }, []);

  const selectedKeys = useMemo(() => {
    // Find exact match first
    const exactMatch = flattenMenus.find((item) => item.href === pathname);
    if (exactMatch) {
      return [exactMatch.key as string];
    }

    // Find best prefix match (longest match wins)
    const prefixMatches = flattenMenus.filter(
      (item) => item.href && pathname.startsWith(item.href),
    );
    if (prefixMatches.length > 0) {
      // Sort by href length (longest first)
      const bestMatch = prefixMatches.sort(
        (a, b) => (b.href?.length || 0) - (a.href?.length || 0),
      )[0];
      return [bestMatch.key as string];
    }

    // Default to first menu item
    return [menus[0]?.key as string];
  }, [pathname, flattenMenus]);

  const renderMenus = useMemo(() => {
    // filter menu items, eq: promission control
    return menus;
  }, []);

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    const menuItem = flattenMenus.find((item) => item.key === key);
    if (menuItem?.href) {
      // Handle hash links (e.g., #search) with native navigation
      if (menuItem.href.startsWith('#')) {
        nativePush(menuItem.href);
      } else {
        // Use Next.js router for regular paths
        router.push(menuItem.href);
      }
    }
  };

  const handleDropdownClick: MenuProps['onClick'] = ({ key, keyPath }) => {
    const type = keyPath[1] || key;
    switch (type) {
      case 'theme':
        setMode(key as Mode);
        break;
      case 'languages':
        // Map menu keys to locale values
        const localeMap: Record<string, Locale> = {
          english: 'en',
          chinese: 'zh',
        };
        const newLocale = localeMap[key];
        if (newLocale) {
          setLocale(newLocale);
        }
        break;
      case 'general':
      case 'plans-credits':
      case 'profile':
        nativePush(`#settings/${key}`);
        break;
      case 'official-website':
        window.open('/');
    }
  };

  const handleUpgrade = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push('/pricing');
  };

  return (
    <>
      <Layout.Sider
        collapsed={collapsed}
        breakpoint="lg"
        collapsible
        collapsedWidth={64}
        width={272}
        trigger={null}
        onCollapse={setCollapsed}
      >
        <div className="h-full flex flex-col overflow-hidden group">
          <div className="flex-none flex items-center justify-between">
            <div className="flex-none p-3">
              <div className="size-10 flex items-center justify-center">
                <Image
                  className="size-7"
                  src="/images/logo.png"
                  width={256}
                  height={256}
                  alt="logo"
                />
              </div>
            </div>
            <div
              className={cn(
                'flex-none p-3',
                collapsed &&
                  'bg-(--ant-layout-sider-bg) absolute top-0 left-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity',
              )}
            >
              <Tooltip
                placement="right"
                title={collapsed ? t('openSidebar') : t('closeSidebar')}
              >
                <Button
                  className="size-10 text-neutral-400 hover:text-neutral-800"
                  type="text"
                  icon={
                    collapsed ? (
                      <RiSideBarFill size={18} />
                    ) : (
                      <RiSideBarLine size={18} />
                    )
                  }
                  onClick={() => setCollapsed(!collapsed)}
                />
              </Tooltip>
            </div>
          </div>
          <div className="flex-auto px-3 overflow-auto scrollbar-hidden">
            <ConfigProvider
              theme={{
                components: {
                  Menu: {
                    iconSize: 18,
                    collapsedIconSize: 18,
                    itemHeight: 40,
                    itemMarginBlock: 4,
                    itemMarginInline: 0,
                    groupTitleFontSize: 12,
                    iconMarginInlineEnd: 12,
                    itemPaddingInline: 8,
                  },
                },
              }}
            >
              <Menu
                className="custom-menu-sidebar"
                inlineIndent={16}
                mode="inline"
                selectedKeys={selectedKeys}
                onClick={handleMenuClick}
                items={renderMenus}
              />
            </ConfigProvider>
          </div>
          <div className="flex-none p-3">
            <Dropdown
              trigger={['click']}
              menu={{
                _internalDisableMenuItemTitleTooltip: true, // FIXME: antd bug
                onClick: handleDropdownClick,
                items: [
                  {
                    key: 'profile',
                    icon: <RiUser3Line size={18} />,
                    label: t('userMenu.profile'),
                  },
                  {
                    key: 'plans-credits',
                    icon: <RiVipCrown2Line size={18} />,
                    label: t('userMenu.plansCredits'),
                  },
                  {
                    key: 'official-website',
                    icon: <RiGlobalLine size={18} />,
                    label: t('userMenu.officialWebsite'),
                    extra: <RiArrowRightUpLine size={16} />,
                  },
                  {
                    key: 'help-center',
                    icon: <RiQuestionLine size={18} />,
                    label: t('userMenu.helpCenter'),
                    extra: <RiArrowRightUpLine size={16} />,
                  },
                  {
                    type: 'divider',
                  },
                  {
                    key: 'general', // menu key mapping
                    icon: <RiSettingsLine size={18} />,
                    label: t('userMenu.settings'),
                  },
                  {
                    key: 'languages',
                    icon: <RiTranslate2 size={18} />,
                    label: t('userMenu.languages'),
                    children: [
                      {
                        icon: <span>🇺🇸</span>,
                        key: 'english',
                        label: 'English',
                      },
                      {
                        icon: <span>🇨🇳</span>,
                        key: 'chinese',
                        label: '简体中文',
                      },
                    ],
                  },
                  {
                    key: 'theme',
                    icon: <RiTShirt2Line size={18} />,
                    label: t('userMenu.theme'),
                    children: [
                      {
                        icon: <RiSunLine size={18} />,
                        key: 'light',
                        label: t('userMenu.light'),
                      },
                      {
                        icon: <RiMoonLine size={18} />,
                        key: 'dark',
                        label: t('userMenu.dark'),
                      },
                      {
                        icon: <RiComputerLine size={18} />,
                        key: 'system',
                        label: t('userMenu.system'),
                      },
                    ],
                  },
                  {
                    type: 'divider',
                  },
                  {
                    key: 'logout',
                    icon: <RiLogoutBoxRLine size={18} />,
                    label: t('userMenu.logout'),
                    danger: true,
                  },
                ],
              }}
            >
              <div
                className={cn(
                  'flex items-center gap-3 leading-none hover:bg-gray-200 dark:hover:bg-(--ant-layout-body-bg) p-2 rounded-md cursor-pointer',
                  collapsed && 'p-1 bg-transparent',
                  '[&.ant-dropdown-open]:bg-gray-200 dark:[&.ant-dropdown-open]:bg-(--ant-layout-body-bg)',
                )}
              >
                <div className="flex-none">
                  <Avatar size={32} className="bg-primary-500">
                    User
                  </Avatar>
                </div>
                {!collapsed && (
                  <>
                    <div className="flex-auto leading-none">
                      <div className="font-medium text-xs line-clamp-1">
                        UserName
                      </div>
                      <div className="text-xs text-neutral-500">
                        {t('userMenu.free')}
                      </div>
                    </div>
                    <div className="flex-none">
                      <Button
                        className="text-xs"
                        size="small"
                        shape="round"
                        onClick={handleUpgrade}
                      >
                        {t('userMenu.upgrade')}
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </Dropdown>
          </div>
        </div>
      </Layout.Sider>
    </>
  );
};

export default Sidebar;
