import { ConfigProviderProps } from './interface';
import { createContext } from 'react';
const DEFAULT_PREFIX = 'sofia';
export const DefaultConfigProviderProps: ConfigProviderProps = {
  prefixCls: DEFAULT_PREFIX,
  getPopupContainer: () => document.body,
};
export const ConfigContext = createContext<ConfigProviderProps>({
  getPrefixCls: (componentName: string, customPrefix?: string) =>
    `${customPrefix || DEFAULT_PREFIX}-${componentName}`,
  ...DefaultConfigProviderProps,
});
