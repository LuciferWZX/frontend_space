import { useAntdStore } from '@space/stores';

export const message = () => {
  return useAntdStore.getState().message;
};
export const modal = () => {
  return useAntdStore.getState().modal;
};
