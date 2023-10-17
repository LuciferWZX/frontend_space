import { useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { useHistoryStore } from '@space/stores';
const useInitHistory = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    useHistoryStore.setState({ navigate: navigate });
  }, []);
};
export default useInitHistory;
