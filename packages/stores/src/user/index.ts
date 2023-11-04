import { User } from '@space/types';
import { devtools } from 'zustand/middleware';
import type {} from '@redux-devtools/extension';
import { createWithEqualityFn } from 'zustand/traditional';
interface UserState {
  user: User | undefined;
  users: User[];
}
const useUserStore = createWithEqualityFn<UserState>()(
  devtools((_, __, ___) => ({
    user: undefined,
    users: [],
  })),
  Object.is
);
export default useUserStore;
