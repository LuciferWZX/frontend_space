import { FC } from 'react';
import { history } from '@space/utils';
const HomePage: FC = () => {
  const go404 = () => {
    history.push('/awd');
  };
  return (
    <div>
      this is home page
      <button onClick={go404}>go 404</button>
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
export default HomePage;
