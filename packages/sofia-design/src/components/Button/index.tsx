import { FC, useContext } from 'react';
import { ButtonProps } from './interface';
import { ConfigContext } from '../ConfigProvider';
import useMergeProps from '../_util/hooks/useMergeProps';
import cs from '../_util/classNames';
import './style';
// const regexTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
// function processChildren(children?: ReactNode) {
//   const childrenList: ReactNode[] = [];
//   let isPrevChildPure = false;
//   Children.forEach(children, (child) => {
//     const isCurrentChildPure = typeof child === 'string' || typeof child === 'number';
//     if (isCurrentChildPure && isPrevChildPure) {
//       const lastIndex = childrenList.length - 1;
//       const lastChild = childrenList[lastIndex];
//       childrenList[lastIndex] = `${lastChild}${child}`;
//     } else {
//       childrenList.push(child);
//     }
//     isPrevChildPure = isCurrentChildPure;
//   });
//   return Children.map(childrenList, (child) => {
//     return typeof child === 'string' ? <span>{child}</span> : child;
//   });
// }
const defaultProps: ButtonProps = {
  htmlType: 'button',
  type: 'default',
};
const Button: FC<ButtonProps> = (baseProps) => {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<ButtonProps>(baseProps, defaultProps, componentConfig?.Button || {});
  const { className, type } = props;
  // const [isTwoCNChar, setIsTwoCNChar] = useState<boolean>(false);
  const prefixCls = getPrefixCls?.('btn');

  const _type = type === 'default' ? 'secondary' : type;
  const classNames = cs(prefixCls, `${prefixCls}-${_type}`, className);
  return <button className={classNames}>这是按钮222</button>;
};
export default Button;
