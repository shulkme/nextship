import type React from 'react';
import type { FC } from 'react';

export interface NavMenuProps {
  selectedKey?: React.Key;
  children?: React.ReactNode;
  className?: string;
  collapsed?: boolean;
  items?: NavMenuItemProps[];
  onMenuClick?: (item: NavMenuItemProps) => void;
  classNames?: {
    root?: string;
    item?: string;
  };
  itemExtra?: React.ReactNode | ((item: NavMenuItemProps) => React.ReactNode);
  fixedExtra?: boolean;
}

export interface NavMenuItemProps {
  key?: React.Key;
  _key?: React.Key;
  icon: React.ReactNode;
  label?: React.ReactNode;
  extra?: React.ReactNode;
  href?: string;
  className?: string;
  title?: string;
  onClick?: () => void;
  alwaysTooltip?: boolean;
  fixedExtra?: boolean;
}

export interface NavMenuComponent extends FC<NavMenuProps> {
  Item: FC<NavMenuItemProps>;
}
