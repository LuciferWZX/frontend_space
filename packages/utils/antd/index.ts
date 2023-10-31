import { useAntdStore } from '@space/stores';

export const message = () => {
  return useAntdStore.getState().message;
};
