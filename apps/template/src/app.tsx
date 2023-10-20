import { FC } from 'react';
import withRouter from '@/routes/withRouter';
import { useLinkIcon } from '@space/react-hooks';
import LogoSvg from '@space/assets/logo.svg';
import { Outlet } from 'react-router-dom';
import withHistory from '@/routes/withHistory';

const App: FC = () => {
  console.log('[APP组件渲染]');
  useLinkIcon(LogoSvg);
  return <Outlet />;
};
export default withRouter(withHistory(App), 'browser');
