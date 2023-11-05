import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { MenuPropsItems, SpaceLayout, SelectInfo, MenuProps } from '@space/space-components';
import ClassNames from 'classnames';
import styles from './index.module.less';
import withTheme from '@/withTheme';
import {
  MingcuteLayoutTopLine,
  TablerLayout,
  RiLayout5Line,
  MingcuteLayout11Line,
  UilSignOutAlt,
  CarbonGuiManagement,
  MaterialSymbolsGroupsRounded,
} from '@space/react-icons';
import { shallow, useUserStore } from '@space/stores';
import { history } from '@space/utils';
import store from 'storejs';
import { modal } from '@/utils/antdStore';

const MainLayout: FC = () => {
  const user = useUserStore((state) => state.user, shallow);
  const items: MenuPropsItems = [
    {
      key: 'layout',
      label: '布局',
      icon: <TablerLayout />,
      children: [
        { label: '经典布局', key: 'classic', icon: <MingcuteLayoutTopLine /> },
        { label: '现代布局', key: 'modern', icon: <MingcuteLayout11Line /> },
        { label: '优雅布局', key: 'elegant', icon: <RiLayout5Line /> },
      ],
    },
    { type: 'divider' },
    {
      key: 'tool',
      label: '工具',
    },
    {
      key: 'manage',
      label: '管理',
      icon: <CarbonGuiManagement />,
      children: [{ label: '用户', key: '/user', icon: <MaterialSymbolsGroupsRounded /> }],
    },
  ];
  const avatarItems: MenuProps['items'] = [
    {
      key: 'logout',
      icon: <UilSignOutAlt />,
      danger: true,
      label: '退出登录',
      onClick: () => {
        modal.confirm({
          title: '退出登录',
          content: '确定退出登录吗?',
          okType: 'text',
          cancelButtonProps: {
            type: 'primary',
          },
          onOk: () => {
            useUserStore.setState({ user: undefined });
            store.remove(__TOKEN__);
            history.push('/access/login', { replace: true });
          },
        });
      },
    },
  ];
  const onSelect = (info: SelectInfo) => {
    const { key } = info;
    history.push(key);
  };
  return (
    <SpaceLayout.ElegantLayout
      className={ClassNames({ [styles['main-layout']]: true })}
      menuProps={{ items: items, onSelect: onSelect }}
      header={' '}
      avatarProps={{
        size: 40,
        src: user?.avatar,
        children: user?.nickname?.[0],
        className: styles.avatar,
      }}
      avatarDropdownProps={{
        menu: {
          items: avatarItems,
        },
      }}
    >
      <Outlet />
    </SpaceLayout.ElegantLayout>
  );
};
export default withTheme(MainLayout);
