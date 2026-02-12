'use client';
import {
  RiAppsLine,
  RiArrowRightUpLine,
  RiEqualizer2Line,
  RiNotification3Line,
  RiQuestionLine,
  RiShieldKeyholeLine,
  RiUserLine,
  RiVipCrown2Line,
  RiWalletLine,
} from '@remixicon/react';
import { ConfigProvider, Menu, Modal } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const menus = [
  {
    key: 'general',
    label: 'General',
    icon: <RiEqualizer2Line size={18} />,
  },
  {
    key: 'profile',
    label: 'Profile',
    icon: <RiUserLine size={18} />,
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
  {
    key: 'apps',
    label: 'Apps',
    icon: <RiAppsLine size={18} />,
  },
  {
    key: 'bill',
    label: 'Bill',
    icon: <RiWalletLine size={18} />,
  },
  {
    key: 'plans-credits',
    label: 'Plans & credits',
    icon: <RiVipCrown2Line size={18} />,
  },
  {
    key: 'help-center',
    label: 'Help center',
    icon: <RiQuestionLine size={18} />,
    extra: <RiArrowRightUpLine size={16} />,
  },
];

const SettingsModal: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const settings = searchParams.get('settings');
  const menuKeys = menus.map((f) => f.key);

  // Derive open state from URL params
  const open = Boolean(settings && menuKeys.includes(settings));

  // Derive selectedKeys from URL params
  const selectedKeys = settings && menuKeys.includes(settings)
    ? [settings]
    : [menus[0].key];

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
      width={1200}
      open={open}
      onCancel={handleClose}
      footer={false}
    >
      <div className="w-full h-[calc(100vh-256px)] overflow-hidden flex">
        <div className="flex-none flex flex-col overflow-hidden w-64 border-r border-(--ant-color-border-secondary)">
          <div className="flex-none p-6 pb-4">
            <span className="font-medium">Settings</span>
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
                selectedKeys={selectedKeys}
                onSelect={handleMenuSelect}
                mode="inline"
                inlineIndent={16}
                items={menus}
              />
            </ConfigProvider>
          </div>
        </div>
        <div className="flex-auto overflow-auto"></div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
