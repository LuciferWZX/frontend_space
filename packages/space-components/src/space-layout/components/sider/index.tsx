import { CSSProperties, FC } from 'react';
import { BaseProps, SiderMenuProps } from '../../type.ts';
import { Layout, Menu, theme } from 'antd';
import styles from '../index.module.less';
import ClassName from 'classnames';
interface IProps extends BaseProps, SiderMenuProps {
  width?: number | string;
  collapsedWidth?: number | string;
  collapsed?: boolean;
}
const Sider: FC<IProps> = (props) => {
  const { token } = theme.useToken();
  const { children, menuProps, collapsed, collapsedWidth, className, style, width } = props;

  const siderStyle: CSSProperties = {
    backgroundColor: token.colorBgContainer,
    color: token.colorTextBase,
    borderRightColor: token.colorSplit,
    ...style,
  };
  const classes = ClassName(
    {
      [styles['layout-sider']]: true,
    },
    className
  );
  return (
    <Layout.Sider
      collapsedWidth={collapsedWidth}
      trigger={null}
      collapsed={collapsed}
      width={width}
      style={siderStyle}
      className={classes}
    >
      {children ?? <Menu mode="inline" style={{ borderInlineEnd: 0 }} {...menuProps} />}
    </Layout.Sider>
  );
};
export default Sider;
