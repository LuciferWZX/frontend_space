import { FC } from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import RoutesElement from '@/routes/index';
import useHistoryPath from '@/routes/useHistoryPath';

const withRouter = (WrapComponent: FC, type?: 'hash' | 'browser') => {
  const routes = [
    {
      path: '*',
      element: (
        <RoutesElement>
          <WrapComponent />
        </RoutesElement>
      ),
    },
  ];
  const createRouter = (routerType?: 'hash' | 'browser') => {
    if (routerType === 'browser') {
      return createBrowserRouter(routes);
    }
    return createHashRouter(routes);
  };
  const router = createRouter(type);
  return () => {
    return <RouterProvider router={router} />;
  };
};
export default withRouter;
