import { FC } from 'react';
import { history } from '@/utils';

const HomePage: FC = () => {
  const go404 = () => {
    history.push('/404');
  };
  return (
    <div>
      this is home page
      <button onClick={go404}>go 404</button>
    </div>
  );
};
export default HomePage;
