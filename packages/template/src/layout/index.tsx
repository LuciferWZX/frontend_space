import { FC } from 'react';
import styles from './index.module.less';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      this is layout
      <Outlet />
    </div>
  );
};
export default Layout;
