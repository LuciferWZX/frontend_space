import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.less';
import { theme } from '@space/space-components';
const AccessLayout: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className={styles.layout}>
      <div className={styles.leftContent} />
      <div className={styles.rightContent} style={{ backgroundColor: colorBgContainer }}>
        <Outlet />
      </div>
    </div>
  );
};
export default AccessLayout;
