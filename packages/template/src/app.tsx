import { FC, useEffect } from 'react';
import withRouter from '@/routes/withRouter';
import { useLinkIcon } from '@space/react-hooks';
import LogoSvg from '@space/assets/logo.svg';
import { Outlet } from 'react-router-dom';
import withHistory from '@/routes/withHistory';
const App: FC = () => {
  useLinkIcon(LogoSvg);
  useEffect(() => {
    console.log('app');
  }, []);
  return (
    <div>
      this is app
      <Outlet />
    </div>
  );
};
export default withRouter(withHistory(App));
