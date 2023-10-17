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
    </div>
  );
};
export default NotFoundPage;
