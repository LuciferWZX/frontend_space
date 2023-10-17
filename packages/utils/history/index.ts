import { useHistoryStore } from '@space/stores';
import { NavigateOptions } from '@space/types';
const history = {
  push(url: string, options?: NavigateOptions) {
    const { navigate } = useHistoryStore.getState();
    if (navigate) {
      navigate(url, options);
    }
  },
  back(delta?: number) {
    const { navigate } = useHistoryStore.getState();
    if (navigate) {
      navigate(delta ?? -1);
    }
  },
  go(delta?: number) {
    const { navigate } = useHistoryStore.getState();
    if (navigate) {
      navigate(delta ?? 1);
    }
  },
};
export default history;
