import { FC } from 'react';
import withRouter from '@/routes/withRouter';
import { useLinkIcon } from '@space/react-hooks';
import LogoSvg from '@space/assets/logo.svg';
import { Outlet } from 'react-router-dom';
import withHistory from '@/routes/withHistory';
import withTheme from '@/withTheme';
import AntdStore from '@/utils/antdStore';

const App: FC = () => {
  useLinkIcon(LogoSvg);
  return (
    <>
      <AntdStore />
      <Outlet />
    </>
  );
};
export default withTheme(withRouter(withHistory(App), 'browser'));
