'use client';
import {
  type NavMenuComponent,
  type NavMenuItemProps,
  type NavMenuProps,
} from '@/components/nav-menu/types';
import { cn } from '@/utils/classname';
import { Tooltip } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { createContext, useContext, useMemo } from 'react';

const NavMenuContext = createContext<{
  collapsed?: boolean;
  selectedKey?: React.Key;
} | null>(null);
const useNavMenu = () => {
  const context = useContext(NavMenuContext);
  if (!context) {
    throw new Error('useNavMenu must be used within a NavMenuProvider');
  }
  return context;
};

const NavMenuItem: React.FC<NavMenuItemProps> = ({
  alwaysTooltip,
  className,
  label,
  title,
  href,
  onClick,
  icon,
  _key,
  extra,
  fixedExtra,
}) => {
  const pathname = usePathname();
  const { collapsed, selectedKey } = useNavMenu();

  const isSelected = useMemo(() => {
    if (href) {
      return pathname.startsWith(href);
    }
    return Boolean(_key && selectedKey === _key);
  }, [_key, href, pathname, selectedKey]);

  const children = (
    <Tooltip
      title={collapsed || alwaysTooltip ? title || label : undefined}
      placement="right"
    >
      <div
        className={cn(
          'flex relative items-center h-9 rounded-sm px-2.25 cursor-pointer text-(--ant-color-text) hover:bg-neutral-200 active:bg-neutral-300',
          'dark:hover:bg-neutral-700 dark:active:bg-neutral-700',
          'group-data-[selected=true]/item:bg-neutral-200 dark:group-data-[selected=true]/item:bg-neutral-700',
          className,
        )}
      >
        <div className="flex-none">{icon}</div>
        {label && (
          <div className="flex-auto overflow-hidden group-data-[collapsed=true]:hidden ml-2.5">
            <div className="w-full line-clamp-1">{label}</div>
          </div>
        )}
        {extra && (
          <div
            className={cn(
              'text-xs gap-0.5 items-center text-(--ant-color-text-tertiary) hidden flex-none focus-within:flex group-hover/item:flex group-active/item:flex group-data-[collapsed=true]:hidden',
              fixedExtra && 'flex',
            )}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {extra}
          </div>
        )}
      </div>
    </Tooltip>
  );

  if (href) {
    return (
      <Link
        data-selected={isSelected}
        href={href}
        className="block overflow-hidden group/item"
      >
        {children}
      </Link>
    );
  }

  return (
    <div
      data-selected={isSelected}
      className="block overflow-hidden group/item"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const NavMenu: React.FC<NavMenuProps> = ({
  children,
  className,
  collapsed,
  items,
  onMenuClick,
  selectedKey,
  classNames,
  itemExtra,
  fixedExtra,
}) => {
  return (
    <NavMenuContext.Provider
      value={{
        collapsed,
        selectedKey,
      }}
    >
      <div className={cn('space-y-1', className, classNames?.root)}>
        {children ??
          items?.map(({ key, ...rest }, index) => (
            <NavMenuItem
              className={classNames?.item}
              key={key || index}
              _key={key}
              extra={
                typeof itemExtra === 'function'
                  ? itemExtra({ key, ...rest })
                  : itemExtra
              }
              fixedExtra={fixedExtra}
              {...rest}
              onClick={() =>
                onMenuClick?.({
                  key,
                  ...rest,
                })
              }
            />
          ))}
      </div>
    </NavMenuContext.Provider>
  );
};

const NavMenuWithItem = NavMenu as NavMenuComponent;

NavMenuWithItem.Item = NavMenuItem;

export default NavMenuWithItem;
