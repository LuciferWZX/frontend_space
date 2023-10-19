import { CSSProperties, FC } from 'react';
import { Layout, theme } from 'antd';
import { BaseProps } from '../../type.ts';
interface IProps extends BaseProps {}
const Footer: FC<IProps> = (props) => {
  const { token } = theme.useToken();
  const { children, className, style } = props;
  const footStyle: CSSProperties = {
    backgroundColor: token.colorBgContainer,
    ...style,
  };
  return (
    <Layout.Footer className={className} style={footStyle}>
      {children}
    </Layout.Footer>
  );
};
export default Footer;
