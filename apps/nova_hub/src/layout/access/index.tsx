import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.less';
import { theme } from '@space/space-components';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/lotties/login-lottie.json';
const AccessLayout: FC = () => {
  const {
    token: { colorBgContainer, colorBgLayout, boxShadow },
  } = theme.useToken();

  return (
    <div className={styles.layout} style={{ backgroundColor: colorBgLayout }}>
      <div className={styles.innerLayout}>
        <div className={styles.leftContent}>
          <Lottie animationData={loginAnimation} />
        </div>
        <div
          className={styles.rightContent}
          style={{ backgroundColor: colorBgContainer, boxShadow: boxShadow }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default AccessLayout;
