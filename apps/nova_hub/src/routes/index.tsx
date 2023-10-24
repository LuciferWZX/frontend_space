import { FC, ReactNode, useEffect, useState } from 'react';
import Layout from '@/layout';
import AccessLayout from '@/layout/access';
import { Navigate, RouteObject, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import Login from '@/pages/access/login';
import NotFoundPage from '@/pages/404';
import MainLayout from '@/layout/main';
import Home from '@/pages/home';
import useAuth from '@/routes/useAuth';
import { shallow, useUserStore } from '@space/stores';
import { history } from '@space/utils';
// const Layout = lazy(() => import('@/layout'));
// const MainLayout = lazy(() => import('@/layout/main'));
// const AccessLayout = lazy(() => import('@/layout/access'));
// const Home = lazy(() => import('@/pages/home'));
// const Login = lazy(() => import('@/pages/access/login'));
// const NotFoundPage = lazy(() => import('@/pages/404'));

interface IProps {
  children?: ReactNode;
}
const RoutesElement: FC<IProps> = (props) => {
  const user = useUserStore((state) => state.user, shallow);
  const navigate = useNavigate();
  const location = useLocation();
  //白名单
  const whiteList = ['/access'];
  //是否在白名单内
  const inWhiteList = !!whiteList.find(
    (item) => location.pathname.startsWith(item) && location.pathname !== '/'
  );
  const [authRoutes, setAuthRoutes] = useState<RouteObject[]>([]);
  //基本路由
  const baseRoutes: RouteObject[] = [
    {
      path: '/access',
      element: <AccessLayout />,
      children: [
        { path: '/access', element: <Navigate to="/access/login" replace /> },
        { path: '/access/login', element: <Login /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ];
  //基本权限路由
  const baseAuthRoutes: RouteObject[] = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Navigate to="home" replace /> },
        { path: 'home', element: <Home /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ];
  //全部的路由
  const routes: RouteObject[] = [
    {
      path: '/',
      element: props.children,
      children: [
        {
          path: '/',
          element: <Layout />,
          children: [...authRoutes, ...baseRoutes, { path: '*', element: <NotFoundPage /> }],
        },
      ],
    },
    { path: '*', element: <NotFoundPage /> },
  ];

  const elements = useRoutes(routes);
  const { status } = useAuth(inWhiteList);
  useEffect(() => {
    //说明在白名单内
    if (inWhiteList) {
      return;
    }
    if (status !== 'Pending') {
      if (user?.id) {
        setAuthRoutes(baseAuthRoutes);
        return;
      } else {
        setAuthRoutes([]);
        navigate('/access/login');
      }
    }
  }, [user, status]);
  if (status === 'Pending') {
    return <div>校验中。。。</div>;
  }
  return elements;
};
export default RoutesElement;
