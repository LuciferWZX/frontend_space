import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  HTMLProps,
  ReactNode,
} from 'react';

export interface BaseButtonProps {
  styles?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  /**
   * @zh
   * 按钮主要分为六种按钮类型：主要按钮、次级按钮、虚框按钮、文字按钮、线性按钮，`default` 为次级按钮。
   * @en
   * A variety of button types are available: `primary`, `secondary`, `dashed`,
   * `text`, `linear` and `default` which is the secondary.
   * @defaultValue default
   */
  type?: 'default' | 'primary' | 'secondary' | 'dashed' | 'text' | 'outline';
  /**
   * @zh a 链接的原生属性，href 存在时生效
   * @en The native attribute of the link, which takes effect when href exists
   */
  anchorProps?: HTMLProps<HTMLAnchorElement>;
  /**
   * @zh 是否禁用
   * @en Whether to disable the button
   */
  disabled?: boolean;
  /**
   * @zh 按钮是否加载状态
   * @en Whether the button is in loading state
   */
  loading?: boolean;
  /**
   * @zh 点击按钮的回调
   * @en Callback fired when the button is clicked
   */
  onClick?: (e: Event) => void;
}
export type AnchorButtonProps = {
  href: string;
  target?: string;
  anchorProps?: HTMLProps<HTMLAnchorElement>;
} & BaseButtonProps &
  Omit<AnchorHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;
export type FinalButtonProps = {
  /**
   * @zh 按钮原生的 html type 类型
   * @en html button type
   * @defaultValue button
   */
  htmlType?: 'button' | 'submit' | 'reset';
} & BaseButtonProps &
  Omit<ButtonHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;

export type ButtonProps = Partial<FinalButtonProps & AnchorButtonProps>;
export interface ButtonGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
}
