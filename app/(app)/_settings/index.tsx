'use client';
import AboutPane from '@/app/(app)/_settings/components/about';
import BillingPane from '@/app/(app)/_settings/components/billing';
import ConnectionsPane from '@/app/(app)/_settings/components/connections';
import GeneralPane from '@/app/(app)/_settings/components/general';
import KeysPane from '@/app/(app)/_settings/components/keys';
import NotificationsPane from '@/app/(app)/_settings/components/notifications';
import PlansCreditsPane from '@/app/(app)/_settings/components/plans-credits';
import ProfilePane from '@/app/(app)/_settings/components/profile';
import SecurityPane from '@/app/(app)/_settings/components/security';
import UsagePane from '@/app/(app)/_settings/components/usage';
import {
  IconActivity,
  IconAdjustments,
  IconBell,
  IconCrown,
  IconFileText,
  IconKey,
  IconLink,
  IconShieldLock,
  IconUser,
  IconWallet,
} from '@tabler/icons-react';
import {
  ConfigProvider,
  type GetProp,
  Menu,
  type MenuProps,
  Modal,
  Tabs,
  type TabsProps,
} from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { omit, pick } from 'radash';
import React, { useEffect, useMemo, useState } from 'react';

type MenuItemType = GetProp<MenuProps, 'items'>[number];

type TabItemType = GetProp<TabsProps, 'items'>[number];

const SettingsModal: React.FC = () => {
  const t = useTranslations('app.settings');

  const panes: {
    key?: React.Key;
    label?: React.ReactNode;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    type?: 'divider' | 'group';
  }[] = useMemo(
    () => [
      {
        key: 'general',
        label: t('tabs.general'),
        icon: <IconAdjustments size={20} />,
        children: <GeneralPane />,
      },
      {
        key: 'profile',
        label: t('tabs.profile'),
        icon: <IconUser size={20} />,
        children: <ProfilePane />,
      },
      {
        key: 'plans-credits',
        label: t('tabs.plansCredits'),
        icon: <IconCrown size={20} />,
        children: <PlansCreditsPane />,
      },
      {
        key: 'billing',
        label: t('tabs.billing'),
        icon: <IconWallet size={20} />,
        children: <BillingPane />,
      },
      {
        key: 'usage',
        label: t('tabs.usage'),
        icon: <IconActivity size={20} />,
        children: <UsagePane />,
      },
      {
        key: 'keys',
        label: t('tabs.apiKeys'),
        icon: <IconKey size={20} />,
        children: <KeysPane />,
      },
      {
        key: 'connections',
        label: t('tabs.connections'),
        icon: <IconLink size={20} />,
        children: <ConnectionsPane />,
      },
      {
        key: 'notifications',
        label: t('tabs.notifications'),
        icon: <IconBell size={20} />,
        children: <NotificationsPane />,
      },
      {
        key: 'security',
        label: t('tabs.security'),
        icon: <IconShieldLock size={20} />,
        children: <SecurityPane />,
      },
      {
        key: 'about',
        label: t('tabs.about'),
        icon: <IconFileText size={20} />,
        children: <AboutPane />,
      },
    ],
    [t],
  );
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState('general');

  // Memoize menus and menuKeys to prevent unnecessary re-renders
  const menus = useMemo(
    () => panes.map((f) => omit(f, ['children'])) as MenuItemType[],
    [panes],
  );

  const menuKeys = useMemo(
    () => menus.map((f) => f?.key).filter((f) => f !== undefined),
    [menus],
  );

  const tabs = useMemo(
    () =>
      panes
        .filter((f) => !!f?.key && f?.type !== 'divider' && f?.type !== 'group')
        .map((f) => pick(f, ['key', 'label', 'children'])) as TabItemType[],
    [panes],
  );

  useEffect(() => {
    // Check if browser environment
    if (typeof window === 'undefined') return;

    // Check hash on mount and parse settings key
    const checkHash = () => {
      const hash = window.location.hash;

      // Check if hash starts with #settings/
      if (hash.startsWith('#settings/')) {
        const key = hash.replace('#settings/', '');
        // Validate if key exists in menus
        if (menuKeys.includes(key)) {
          setOpen(true);
          setSelectedKey(key);
        } else {
          // Default to general if invalid key
          setOpen(true);
          setSelectedKey('general');
        }
      } else {
        setOpen(false);
      }
    };

    // Initial check
    checkHash();

    // Listen to hash changes
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, [menuKeys]);

  const tabLabel = useMemo(() => {
    return tabs.find((f) => f.key === selectedKey)?.label;
  }, [selectedKey, tabs]);

  const handleClose = () => {
    // Remove hash from URL when closing (use native API for immediate effect)
    if (
      typeof window !== 'undefined' &&
      window.location.hash.startsWith('#settings')
    ) {
      // Use native history API for instant hash removal without triggering hashchange
      const search = searchParams.toString();
      const url = search ? `${pathname}?${search}` : pathname;
      window.history.replaceState({}, '', url);
    }
    // Set open to false after hash is cleared
    setOpen(false);
  };

  const handleMenuSelect = ({ selectedKeys }: { selectedKeys: string[] }) => {
    // Update hash when menu item is selected
    if (selectedKeys.length > 0 && typeof window !== 'undefined') {
      window.location.hash = `#settings/${selectedKeys[0]}`;
    }
  };

  return (
    <Modal
      style={{ top: 64 }}
      classNames={{
        container: 'p-0',
      }}
      width={1080}
      open={open}
      onCancel={handleClose}
      footer={false}
    >
      <div className="w-full h-[calc(100vh-128px)] overflow-hidden flex">
        <div className="flex-none flex flex-col overflow-hidden w-64 border-r border-(--ant-color-border-secondary)">
          <div className="flex items-center gap-3 flex-none p-6">
            <Image
              className="size-6"
              src="/images/logo.png"
              width={256}
              height={256}
              alt="logo"
            />
            <h2 className="font-medium text-base">{t('title')}</h2>
          </div>
          <div className="flex-auto px-4 overflow-auto">
            <ConfigProvider
              theme={{
                components: {
                  Menu: {
                    iconSize: 20,
                    collapsedIconSize: 20,
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
            <h3 className="font-medium text-base">{tabLabel}</h3>
            {/*<p className="text-neutral-500 mt-1">This is a description</p>*/}
          </div>
          <div className="flex-auto overflow-hidden">
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
