import { CSSProperties, FC, useState } from 'react';
import { Layout, theme } from 'antd';

import { ExpandLayoutProps } from '../type.ts';
import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';
import Sider from '../components/sider';
import { LayoutContext } from '../layout-context.ts';
type IProps = ExpandLayoutProps;
const ModernLayout: FC<IProps> = (props) => {
  const { token } = theme.useToken();
  const [expand, setExpand] = useState<boolean>(true);

  const {
    children,
    style,
    header,
    footer,
    sider,
    className,
    headerClass,
    footerClass,
    contentClass,
    headerStyle,
    contentStyle,
    footerStyle,
    siderClass,
    siderStyle,
    siderProps,
    expandable,
    expand: o_expand,
    menuProps,
  } = props;
  const layoutStyle: CSSProperties = {
    backgroundColor: token.colorBgContainer,
    ...style,
  };

  return (
    <LayoutContext.Provider value={{ expand, setExpand: (_expand) => setExpand(!!_expand) }}>
      <Layout className={className} style={layoutStyle}>
        <Sider
          collapsed={!(o_expand ?? expand)}
          width={siderProps?.width}
          collapsedWidth={siderProps?.collapsedWidth}
          className={siderClass}
          style={siderStyle}
          menuProps={menuProps}
        >
          {sider}
        </Sider>

        <Layout>
          {header && (
            <Header expandable={expandable ?? true} className={headerClass} style={headerStyle}>
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
      </Layout>
    </LayoutContext.Provider>
  );
};
export default ModernLayout;
