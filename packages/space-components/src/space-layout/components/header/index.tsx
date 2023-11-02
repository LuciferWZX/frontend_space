import { CSSProperties, FC, useContext } from 'react';
import {
  Avatar,
  AvatarProps,
  Button,
  Col,
  Layout,
  Row,
  Space,
  theme,
  Dropdown,
  DropDownProps,
} from 'antd';
import styles from '../index.module.less';
import ClassName from 'classnames';
import { BaseProps } from '../../type.ts';
import { UimLeftIndentAlt, UimRightIndentAlt } from '@space/react-icons/src';
import { LayoutContext } from '../../layout-context.ts';

interface IProps extends BaseProps {
  expandable?: boolean;
  avatarProps?: AvatarProps;
  avatarDropdownProps?: DropDownProps;
}
const Header: FC<IProps> = (props) => {
  const { token } = theme.useToken();
  const context = useContext(LayoutContext);
  const { className, children, style, expandable, avatarProps, avatarDropdownProps } = props;
  const handleExpand = () => {
    context.setExpand?.(!context.expand);
  };
  const headerStyle: CSSProperties = {
    backgroundColor: token.colorBgContainer,
    borderBottomColor: token.colorSplit,
    ...style,
  };
  const classes = ClassName(
    {
      [styles['layout-header']]: true,
    },
    className
  );

  return (
    <Layout.Header className={classes} style={headerStyle}>
      <Row>
        <Col span={24} className={styles['right-col']}>
          <Space>
            {expandable && (
              <Button
                onClick={handleExpand}
                type={'text'}
                icon={!context.expand ? <UimRightIndentAlt /> : <UimLeftIndentAlt />}
              />
            )}
            {children}
          </Space>
          {avatarDropdownProps && avatarProps ? (
            <Dropdown {...avatarDropdownProps}>
              <Avatar {...avatarProps} />
            </Dropdown>
          ) : avatarProps ? (
            <Avatar {...avatarProps} />
          ) : null}
        </Col>
      </Row>
    </Layout.Header>
  );
};
export default Header;
