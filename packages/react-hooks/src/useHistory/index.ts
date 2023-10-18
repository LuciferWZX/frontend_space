import { useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { useHistoryStore } from '@space/stores';
const useHistory = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    useHistoryStore.setState({ navigate: navigate });
  }, []);
  return navigate;
};
export default useHistory;
