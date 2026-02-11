'use client';
import { Mode, useTheme } from '@/providers/theme';
import { cn } from '@/utils/classname';
import {
  RiArrowRightUpLine,
  RiComputerLine,
  RiDashboardLine,
  RiDraggable,
  RiFunctionLine,
  RiHome5Line,
  RiInputField,
  RiLayoutRowLine,
  RiListCheck3,
  RiLockPasswordLine,
  RiLoginBoxLine,
  RiLogoutBoxRLine,
  RiMoonLine,
  RiPlanetLine,
  RiQuestionLine,
  RiSettingsLine,
  RiShieldKeyholeLine,
  RiSideBarFill,
  RiStackedView,
  RiSunLine,
  RiTableView,
  RiTranslate2,
  RiTShirt2Line,
  RiUser3Line,
  RiVipCrown2Line,
} from '@remixicon/react';
import {
  Avatar,
  Button,
  ConfigProvider,
  Dropdown,
  GetProp,
  Layout,
  Menu,
  MenuProps,
} from 'antd';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';

type MenuItemType = GetProp<MenuProps, 'items'>[number];

const menus = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <RiHome5Line size={18} />,
  },
  {
    key: 'discover',
    label: 'Discover',
    icon: <RiPlanetLine size={18} />,
  },
  {
    key: 'forms',
    label: 'Forms',
    type: 'group',
    children: [
      {
        key: 'forms:single',
        label: 'Single',
        icon: <RiInputField size={18} />,
      },
      {
        key: 'forms:grouped',
        label: 'Grouped',
        icon: <RiStackedView size={18} />,
      },
    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    type: 'group',
    children: [
      {
        key: 'pages:sign-in',
        label: 'Sign in',
        icon: <RiLoginBoxLine size={18} />,
        extra: <RiArrowRightUpLine size={16} />,
      },
      {
        key: 'pages:sign-up',
        label: 'Sign up',
        icon: <RiLogoutBoxRLine size={18} />,
        extra: <RiArrowRightUpLine size={16} />,
      },
      {
        key: 'pages:reset-password',
        label: 'Reset password',
        icon: <RiLockPasswordLine size={18} />,
        extra: <RiArrowRightUpLine size={16} />,
      },
      {
        key: 'pages:mfa',
        label: 'MFA',
        icon: <RiShieldKeyholeLine size={18} />,
        extra: <RiArrowRightUpLine size={16} />,
      },
    ],
  },
  {
    key: 'layouts',
    label: 'Layouts',
    type: 'group',
    children: [
      {
        key: 'layouts:list',
        label: 'List',
        icon: <RiLayoutRowLine size={18} />,
      },
      {
        key: 'layouts:grid',
        label: 'Grid',
        icon: <RiFunctionLine size={18} />,
      },
      {
        key: 'layouts:masonry',
        label: 'Masonry',
        icon: <RiDashboardLine size={18} />,
      },
    ],
  },
  {
    key: 'tables',
    label: 'Tables',
    type: 'group',
    children: [
      {
        key: 'tables:overview',
        label: 'Overview',
        icon: <RiTableView size={18} />,
      },
      {
        key: 'tables:actions',
        label: 'Actions',
        icon: <RiListCheck3 size={18} />,
      },
      {
        key: 'tables:draggable',
        label: 'Draggable',
        icon: <RiDraggable size={18} />,
      },
    ],
  },
] as MenuItemType[];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { setMode } = useTheme();

  const renderMenus = useMemo(() => {
    // filter menu items, eq: promission control
    return menus;
  }, [menus]);

  const handleDropdownClick: MenuProps['onClick'] = ({ key, keyPath }) => {
    const type = keyPath[1] || key;
    switch (type) {
      case 'theme':
        setMode(key as Mode);
        break;
    }
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
              <Button
                type="text"
                icon={<RiSideBarFill size={18} />}
                onClick={() => setCollapsed(!collapsed)}
              />
            </div>
          </div>
          <div className="flex-auto px-3 overflow-auto">
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
                className="[&_.ant-menu-item-group-title]:pl-4 [&.ant-menu-inline-collapsed_.ant-menu-item-group-title]:hidden"
                inlineIndent={16}
                mode="inline"
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
                    label: 'Profile',
                  },
                  {
                    key: 'plans-credits',
                    icon: <RiVipCrown2Line size={18} />,
                    label: 'Plans & credits',
                  },
                  {
                    key: 'help-center',
                    icon: <RiQuestionLine size={18} />,
                    label: 'Help center',
                    extra: <RiArrowRightUpLine size={16} />,
                  },
                  {
                    type: 'divider',
                  },
                  {
                    key: 'settings',
                    icon: <RiSettingsLine size={18} />,
                    label: 'Settings',
                  },
                  {
                    key: 'languages',
                    icon: <RiTranslate2 size={18} />,
                    label: 'Languages',
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
                    label: 'Theme',
                    children: [
                      {
                        icon: <RiSunLine size={18} />,
                        key: 'light',
                        label: 'Light',
                      },
                      {
                        icon: <RiMoonLine size={18} />,
                        key: 'dark',
                        label: 'Dark',
                      },
                      {
                        icon: <RiComputerLine size={18} />,
                        key: 'system',
                        label: 'System',
                      },
                    ],
                  },
                  {
                    type: 'divider',
                  },
                  {
                    key: 'logout',
                    icon: <RiLogoutBoxRLine size={18} />,
                    label: 'Logout',
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
                      <div className="text-xs text-neutral-500">Free</div>
                    </div>
                    <div className="flex-none">
                      <Button
                        className="text-xs px-3"
                        size="small"
                        shape="round"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Upgrade
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
