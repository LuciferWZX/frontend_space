import { FC } from 'react';
import ClassName from 'classnames';
import { Button as AntdButton } from 'antd';
interface ButtonProps {
  className?: string;
}
const Button: FC<ButtonProps> = (props) => {
  const { className } = props;
  const buttonClasses = ClassName({}, className);
  return <AntdButton className={buttonClasses}>this is button</AntdButton>;
};
export default Button;
