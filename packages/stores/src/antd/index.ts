import { devtools } from 'zustand/middleware';
import type {} from '@redux-devtools/extension';
import { createWithEqualityFn } from 'zustand/traditional';
import { HookAPI, MessageInstance } from '@space/space-components';
interface AntdState {
  message?: MessageInstance;
  modal?: HookAPI;
}
const useAntdStore = createWithEqualityFn<AntdState>()(
  devtools((_, __, ___) => ({
    message: undefined,
    modal: undefined,
  })),
  Object.is
);
export default useAntdStore;
