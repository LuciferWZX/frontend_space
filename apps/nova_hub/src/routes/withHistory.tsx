import { useHistory } from '@space/react-hooks';
import { FC } from 'react';

const withHistory = (WrapComponent: FC) => {
  return () => {
    useHistory();
    return <WrapComponent />;
  };
};
export default withHistory;
