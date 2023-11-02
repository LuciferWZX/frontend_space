import { CSSProperties, ReactNode } from 'react';
import { AvatarProps, DropDownProps, MenuProps } from 'antd';
import * as React from 'react';

export interface BaseProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface BaseLayoutProps extends BaseProps {
  header?: ReactNode;
  footer?: ReactNode;
  sider?: ReactNode;
  headerClass?: string;
  headerStyle?: CSSProperties;
  contentClass?: string;
  contentStyle?: CSSProperties;
  siderClass?: string;
  siderStyle?: CSSProperties;
  footerClass?: string;
  footerStyle?: CSSProperties;
  avatarProps?: AvatarProps;
  avatarDropdownProps?: DropDownProps;
}
export interface MenuInfo {
  key: string;
  keyPath: string[];
  /** @deprecated This will not support in future. You should avoid to use this */
  item: React.ReactInstance;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}
export interface SelectInfo extends MenuInfo {
  selectedKeys: string[];
}
export type MenuPropsItems = MenuProps['items'];
export interface SiderMenuProps {
  menuProps?: {
    items?: MenuPropsItems;
    mode?: 'inline' | 'vertical';
    style?: CSSProperties;
    disabled?: boolean;
    defaultSelectedKeys?: string[];
    openKeys?: string[];
    selectedKeys?: string[];
    overflowedIndicator?: ReactNode;
    onSelect?: (info: SelectInfo) => void;
  };
}

export interface ExpandLayoutProps extends BaseLayoutProps, SiderMenuProps {
  siderProps?: {
    width?: number | string;
    collapsedWidth?: number | string;
  };
  expandable?: boolean;
  expand?: boolean;
  changeExpand?: (expand?: boolean) => void;
}
