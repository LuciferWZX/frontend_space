import { useEffect, useState } from 'react';
import UserUtil from '@/utils/UserUtil';
import { shallow, useUserStore } from '@space/stores';
type PermissionStatus = 'Pending' | 'Granted' | 'Denied';
const useAuth = (inWhiteList?: boolean) => {
  const { uid } = useUserStore((state) => ({ uid: state.user?.id }), shallow);
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>('Pending');
  useEffect(() => {
    if (!inWhiteList || uid) {
      initialize().then();
    } else {
      setPermissionStatus('Denied');
    }
  }, [uid]);
  const initialize = async () => {
    const user = await UserUtil.verifyToken();
    setTimeout(() => {
      useUserStore.setState({ user: undefined });
      if (user) {
        setPermissionStatus('Granted');
      } else {
        setPermissionStatus('Denied');
      }
    }, 5000);
  };
  return {
    status: permissionStatus,
  };
};
export default useAuth;
