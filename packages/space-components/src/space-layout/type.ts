import { CSSProperties, ReactNode } from 'react';

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
}
export interface ExpandLayoutProps extends BaseLayoutProps {
  siderProps?: {
    width?: number | string;
    collapsedWidth?: number | string;
  };
  expandable?: boolean;
  expand?: boolean;
  changeExpand?: (expand?: boolean) => void;
}
