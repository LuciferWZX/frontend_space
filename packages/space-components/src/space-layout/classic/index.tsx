import { CSSProperties, FC } from 'react';
import { Layout } from 'antd';
import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';
import { BaseLayoutProps } from '../type.ts';
interface IProps extends BaseLayoutProps {}
const ClassicLayout: FC<IProps> = (props) => {
  const {
    children,
    style,
    header,
    footer,
    className,
    headerClass,
    footerClass,
    contentClass,
    headerStyle,
    contentStyle,
    footerStyle,
  } = props;
  const layoutStyle: CSSProperties = {
    ...style,
  };
  return (
    <Layout className={className} style={layoutStyle}>
      {header && (
        <Header className={headerClass} style={headerStyle}>
          {header}
        </Header>
      )}
      <Content className={contentClass} style={contentStyle}>
        {children}
      </Content>
      {footer && (
        <Footer className={footerClass} style={footerStyle}>
          {footer}
        </Footer>
      )}
    </Layout>
  );
};
export default ClassicLayout;
