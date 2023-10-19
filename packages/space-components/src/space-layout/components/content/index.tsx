import { CSSProperties, FC } from 'react';
import { Layout, theme } from 'antd';
import ClassName from 'classnames';
import { BaseProps } from '../../type.ts';
interface IProps extends BaseProps {}
const Content: FC<IProps> = (props) => {
  const { token } = theme.useToken();
  const { children, className, style } = props;
  const contentStyle: CSSProperties = {
    backgroundColor: 'transparent',
    color: token.colorTextBase,
    ...style,
  };
  const classes = ClassName({}, className);
  return (
    <Layout.Content className={classes} style={contentStyle}>
      {children}
    </Layout.Content>
  );
};
export default Content;
