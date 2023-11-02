import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import withTheme from '@/withTheme';

const Layout: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Layout;
