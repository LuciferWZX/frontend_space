import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
interface IProps {
  children?: ReactNode;
  container?: Element | DocumentFragment;
}
const Portal: FC<IProps> = (props) => {
  return typeof document === 'object'
    ? createPortal(props.children, props.container ?? document.body)
    : null;
};
export default Portal;
