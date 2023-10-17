import { create } from 'zustand';
import { NavigateFunction } from '@space/types';
interface HistoryState {
  navigate: NavigateFunction | undefined;
}
const useHistoryStore = create<HistoryState>((set, get, store) => ({
  navigate: undefined,
}));
export default useHistoryStore;
