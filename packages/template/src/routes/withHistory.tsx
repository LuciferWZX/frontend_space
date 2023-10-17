import { FC } from 'react';
import useHistoryPath from '@/routes/useHistoryPath';

const withHistory = (WrapComponent: FC) => {
  return () => {
    useHistoryPath();
    return <WrapComponent />;
  };
};
export default withHistory;
