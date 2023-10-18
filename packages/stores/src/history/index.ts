import { create } from 'zustand';
import { NavigateFunction } from '@space/types';
import { devtools } from 'zustand/middleware';
import type {} from '@redux-devtools/extension';
interface HistoryState {
  navigate: NavigateFunction | undefined;
}
const useHistoryStore = create<HistoryState>()(
  devtools((setState, getState, store) => ({
    navigate: undefined,
  }))
);
export default useHistoryStore;
