import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { history } from '@/utils';
import { Action } from 'history';

const useHistoryPath = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let unListen = history.listen(({ location, action }) => {
      console.log({ location, action });
      if (action !== Action.Pop) {
        navigate(location.pathname, { state: location.state, replace: action === Action.Replace });
      }
    });
    return () => {
      unListen();
    };
  }, []);
};
export default useHistoryPath;
