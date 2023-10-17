import { FC } from 'react';
import useInitHistory from '@/routes/useInitHistory';

const withHistory = (WrapComponent: FC) => {
  return () => {
    useInitHistory();
    return <WrapComponent />;
  };
};
export default withHistory;
