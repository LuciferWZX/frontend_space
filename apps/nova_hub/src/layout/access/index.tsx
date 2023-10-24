import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AccessLayout: FC = () => {
  return (
    <div>
      AccessLayout
      <Outlet />
    </div>
  );
};
export default AccessLayout;
