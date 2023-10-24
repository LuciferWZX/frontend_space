import { FC } from 'react';
import { history } from '@space/utils';

const NotFoundPage: FC = () => {
  return (
    <div>
      not found page
      <button
        onClick={() => {
          history.back();
        }}
      >
        返回
      </button>
      <button
        onClick={() => {
          history.go();
        }}
      >
        前进
      </button>
      <button
        onClick={() => {
          console.log(222);
          history.push('/');
        }}
      >
        去首页
      </button>
      <button
        onClick={() => {
          history.push('/access/login');
        }}
      >
        登录页
      </button>
    </div>
  );
};
export default NotFoundPage;
