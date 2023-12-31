import { FC, ReactNode } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import Layout from '@/layout';
import Home from '@/pages/home';
import NotFoundPage from '@/pages/404';
import LayoutExhibition from '@/pages/layout_exhibition';
import Tool from '@/pages/tool';
import ChatPage from '@/pages/chat';

interface IProps {
  children?: ReactNode;
}
const RoutesElement: FC<IProps> = (props) => {
  return useRoutes([
    { path: '/', element: <Navigate to="/chat" replace /> },
    {
      path: '/',
      element: props.children,
      children: [
        {
          path: '/',
          element: <Layout />,
          children: [
            { path: '/exhibition', element: <LayoutExhibition /> },
            { path: '/chat', element: <ChatPage /> },
            { path: '/home', element: <Home /> },
            { path: '/tool', element: <Tool /> },
            { path: '*', element: <NotFoundPage /> },
          ],
        },
      ],
    },
    { path: '*', element: <NotFoundPage /> },
  ]);
};
export default RoutesElement;
