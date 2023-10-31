import { devtools } from 'zustand/middleware';
import type {} from '@redux-devtools/extension';
import { createWithEqualityFn } from 'zustand/traditional';
import { MessageInstance } from '@space/space-components';
interface AntdState {
  message?: MessageInstance;
}
const useAntdStore = createWithEqualityFn<AntdState>()(
  devtools((_, __, ___) => ({
    message: undefined,
  })),
  Object.is
);
export default useAntdStore;
