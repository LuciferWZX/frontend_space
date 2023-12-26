import { ReactNode } from 'react';
import { ButtonProps } from '../Button/interface';
export type ComponentConfig = {
  Button?: ButtonProps;
};
export interface ConfigProviderProps {
  /**
   * @zh 全局组件类名前缀
   * @en Global ClassName prefix
   * @defaultValue sofia
   * @version 0.0.1
   */
  prefixCls?: string;
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
  /**
   * @zh 用于全局配置所有组件的默认参数
   * @en Default parameters for global configuration of all components
   * @version 0.0.1
   */
  componentConfig?: ComponentConfig;
  /**
   * @zh 全局弹出框挂载的父级节点。
   * @en The parent node of the global popup.
   * @defaultValue () => document.body
   * @version 0.0.1
   */
  getPopupContainer?: (node: HTMLElement) => Element;

  children?: ReactNode;
}
