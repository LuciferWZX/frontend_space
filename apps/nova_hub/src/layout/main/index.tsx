import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { MenuPropsItems, SpaceLayout, SelectInfo } from '@space/space-components';
import withTheme from '@/layout/withTheme';
import {
  MingcuteLayoutTopLine,
  TablerLayout,
  RiLayout5Line,
  MingcuteLayout11Line,
} from '@space/react-icons';

const MainLayout: FC = () => {
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
  ];
  const onSelect = (info: SelectInfo) => {
    console.log(info);
  };
  return (
    <SpaceLayout.ElegantLayout
      menuProps={{ items: items, onSelect: onSelect }}
      header={'this is header'}
      avatarProps={{
        size: 40,
        src: 'https://t10.baidu.com/it/app=106&f=JPEG&fm=30&fmt=auto&u=1079872785%2C217544614?w=312&h=208&s=329D7D841E624C94450E38690300F01A',
      }}
    >
      <Outlet />
    </SpaceLayout.ElegantLayout>
  );
};
export default withTheme(MainLayout);
