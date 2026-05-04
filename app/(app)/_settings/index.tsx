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
import NavMenu from '@/components/nav-menu';
import { type NavMenuProps } from '@/components/nav-menu/types';
import {
  CarKey,
  CheckShield,
  Cog,
  DiamondAlt,
  Notification,
  PlugConnect,
  Pulse,
  Scroll,
  UserCircle,
  WalletAlt,
} from '@boxicons/react';
import { type GetProp, Modal, Tabs, type TabsProps } from 'antd';
import { useTranslations } from 'next-intl';
import { usePathname, useSearchParams } from 'next/navigation';
import { omit, pick } from 'radash';
import React, { useEffect, useMemo, useRef, useState } from 'react';

type TabItemType = GetProp<TabsProps, 'items'>[number];

const SettingsModal: React.FC = () => {
  const t = useTranslations('app.settings');

  const panes: {
    key?: React.Key;
    label?: React.ReactNode;
    icon: React.ReactNode;
    children?: React.ReactNode;
  }[] = useMemo(
    () => [
      {
        key: 'general',
        label: t('tabs.general'),
        icon: <Cog size="xs" />,
        children: <GeneralPane />,
      },
      {
        key: 'profile',
        label: t('tabs.profile'),
        icon: <UserCircle size="xs" />,
        children: <ProfilePane />,
      },
      {
        key: 'plans-credits',
        label: t('tabs.plansCredits'),
        icon: <DiamondAlt size="xs" />,
        children: <PlansCreditsPane />,
      },
      {
        key: 'billing',
        label: t('tabs.billing'),
        icon: <WalletAlt size="xs" />,
        children: <BillingPane />,
      },
      {
        key: 'usage',
        label: t('tabs.usage'),
        icon: <Pulse size="xs" />,
        children: <UsagePane />,
      },
      {
        key: 'keys',
        label: t('tabs.apiKeys'),
        icon: <CarKey size="xs" />,
        children: <KeysPane />,
      },
      {
        key: 'connections',
        label: t('tabs.connections'),
        icon: <PlugConnect size="xs" />,
        children: <ConnectionsPane />,
      },
      {
        key: 'notifications',
        label: t('tabs.notifications'),
        icon: <Notification size="xs" />,
        children: <NotificationsPane />,
      },
      {
        key: 'security',
        label: t('tabs.security'),
        icon: <CheckShield size="xs" />,
        children: <SecurityPane />,
      },
      {
        key: 'about',
        label: t('tabs.about'),
        icon: <Scroll size="xs" />,
        children: <AboutPane />,
      },
    ],
    [t],
  );

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState('general');
  const wasSettingsHashRef = useRef(false);

  const menus = useMemo(() => panes.map((f) => omit(f, ['children'])), [panes]);

  const menuKeys = useMemo(
    () => menus.map((f) => f?.key).filter((f) => f !== undefined),
    [menus],
  );

  const tabs = useMemo(
    () =>
      panes.map((f) => pick(f, ['key', 'label', 'children'])) as TabItemType[],
    [panes],
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#settings/')) {
        wasSettingsHashRef.current = true;
        const key = hash.replace('#settings/', '');
        if (menuKeys.includes(key)) {
          setOpen(true);
          setSelectedKey(key);
        } else {
          setOpen(true);
          setSelectedKey('general');
        }
      } else {
        setOpen(false);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, [menuKeys]);

  const tabLabel = useMemo(() => {
    return tabs.find((f) => f.key === selectedKey)?.label;
  }, [selectedKey, tabs]);

  const handleClose = () => {
    if (
      typeof window !== 'undefined' &&
      window.location.hash.startsWith('#settings')
    ) {
      const search = searchParams.toString();
      const url = search ? `${pathname}?${search}` : pathname;
      window.history.replaceState({}, '', url);
    }
    wasSettingsHashRef.current = false;
    setOpen(false);
  };

  const handleMenuSelect: NavMenuProps['onMenuClick'] = ({ key }) => {
    if (key && typeof window !== 'undefined') {
      window.location.hash = `#settings/${key.toString()}`;
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
        <div className="flex-none flex flex-col overflow-hidden w-64 bg-sider rounded-l-lg">
          <div className="p-6">
            <h2 className="font-medium text-base">{t('title')}</h2>
          </div>
          <div className="flex-auto px-2 overflow-auto">
            <NavMenu
              classNames={{
                item: 'px-3.5',
              }}
              selectedKey={selectedKey}
              items={menus}
              onMenuClick={handleMenuSelect}
            />
          </div>
        </div>
        <div className="flex flex-col flex-auto overflow-hidden">
          <div className="flex-none px-8 py-6">
            <h3 className="font-medium text-base">{tabLabel}</h3>
          </div>
          <div className="flex-auto overflow-hidden">
            <Tabs
              renderTabBar={() => <></>}
              activeKey={selectedKey}
              items={tabs}
              classNames={{
                content: 'p-8 pt-0 h-full overflow-auto',
              }}
              className="h-full [&_.ant-tabs-content]:h-full"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
