'use client';
import GeneralPane from '@/app/(app)/_settings/components/general';
import ProfilePane from '@/app/(app)/_settings/components/profile';
import {
  RiAppsLine,
  RiEqualizer2Line,
  RiNotification3Line,
  RiShieldKeyholeLine,
  RiUserLine,
  RiVipCrown2Line,
  RiWalletLine,
} from '@remixicon/react';
import {
  ConfigProvider,
  type GetProp,
  Menu,
  type MenuProps,
  Modal,
  Tabs,
  type TabsProps,
} from 'antd';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { omit, pick } from 'radash';
import React, { useMemo } from 'react';

type MenuItemType = GetProp<MenuProps, 'items'>[number];

type TabItemType = GetProp<TabsProps, 'items'>[number];

const panes: {
  key: React.Key;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  type?: 'divider' | 'group';
}[] = [
  {
    key: 'general',
    label: 'General',
    icon: <RiEqualizer2Line size={18} />,
    children: <GeneralPane />,
  },
  {
    key: 'profile',
    label: 'Profile',
    icon: <RiUserLine size={18} />,
    children: <ProfilePane />,
  },
  {
    key: 'plans-credits',
    label: 'Plans & credits',
    icon: <RiVipCrown2Line size={18} />,
  },
  {
    key: 'bill',
    label: 'Bill',
    icon: <RiWalletLine size={18} />,
  },
  {
    key: 'apps',
    label: 'Apps',
    icon: <RiAppsLine size={18} />,
  },
  {
    key: 'notifications',
    label: 'Notifications',
    icon: <RiNotification3Line size={18} />,
  },
  {
    key: 'security',
    label: 'Security',
    icon: <RiShieldKeyholeLine size={18} />,
  },
  // {
  //   type: 'divider',
  // },
  // {
  //   key: 'help-center',
  //   label: 'Help center',
  //   icon: <RiQuestionLine size={18} />,
  //   extra: <RiArrowRightUpLine size={16} />,
  // },
];

const SettingsModal: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const settings = searchParams.get('settings');
  const menus = panes.map((f) => omit(f, ['children'])) as MenuItemType[];
  const menuKeys = menus.map((f) => f?.key).filter((f) => f !== undefined);

  const tabs = panes
    .filter((f) => !!f?.key && f?.type !== 'divider' && f?.type !== 'group')
    .map((f) => pick(f, ['key', 'label', 'children'])) as TabItemType[];

  // Derive open state from URL params
  const open = Boolean(settings && menuKeys.includes(settings));

  // Derive selectedKeys from URL params
  const selectedKey =
    settings && menuKeys.includes(settings) ? settings : 'general';

  const tabLabel = useMemo(() => {
    return tabs.find((f) => f.key === selectedKey)?.label;
  }, [selectedKey, tabs]);

  const handleClose = () => {
    // Remove settings param from URL when closing
    const params = new URLSearchParams(searchParams.toString());
    params.delete('settings');
    const newUrl = params.toString()
      ? `?${params.toString()}`
      : window.location.pathname;
    router.push(newUrl);
  };

  const handleMenuSelect = ({ selectedKeys }: { selectedKeys: string[] }) => {
    // Update URL when menu item is selected
    if (selectedKeys.length > 0) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('settings', selectedKeys[0]);
      router.push(`?${params.toString()}`);
    }
  };

  return (
    <Modal
      classNames={{
        container: 'p-0',
      }}
      width={1080}
      open={open}
      onCancel={handleClose}
      footer={false}
    >
      <div className="w-full h-[calc(100vh-256px)] overflow-hidden flex">
        <div className="flex-none flex flex-col overflow-hidden w-64 border-r border-(--ant-color-border-secondary)">
          <div className="flex-none p-6">
            <Image
              className="size-8"
              src="/images/logo.png"
              width={256}
              height={256}
              alt="logo"
            />
          </div>
          <div className="flex-auto px-4 overflow-auto">
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
                selectedKeys={[selectedKey]}
                onSelect={handleMenuSelect}
                mode="inline"
                inlineIndent={16}
                items={menus}
              />
            </ConfigProvider>
          </div>
        </div>
        <div className="flex flex-col flex-auto overflow-hidden">
          <div className="flex-none px-6 py-4 border-b border-(--ant-color-border-secondary)">
            <h3 className="font-bold text-base">{tabLabel}</h3>
            {/*<p className="text-neutral-500 mt-1">This is a description</p>*/}
          </div>
          <div className="flex-auto">
            <Tabs
              renderTabBar={() => <></>}
              activeKey={selectedKey}
              items={tabs}
              className="h-full [&_.ant-tabs-content]:h-full [&_.ant-tabs-tabpane]:h-full [&_.ant-tabs-tabpane]:overflow-auto [&_.ant-tabs-tabpane]:p-6"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
