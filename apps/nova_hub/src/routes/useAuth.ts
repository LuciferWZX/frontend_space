import { useEffect, useState } from 'react';
import UserUtil from '@/utils/UserUtil';
import { useUserStore } from '@space/stores';
import { User } from '@space/types';
import { message } from '@/utils/antdStore';
type PermissionStatus = 'Pending' | 'Granted' | 'Denied';
const useAuth = (inWhiteList?: boolean) => {
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>('Pending');
  useEffect(() => {
    if (!inWhiteList) {
      initialize().then();
    } else {
      setPermissionStatus('Denied');
    }
  }, []);
  const initialize = async () => {
    let user: User | null = null;
    try {
      user = await UserUtil.verifyToken();
    } catch (e) {
      console.error('查询用户信息出错:', e);
    }
    if (user) {
      setTimeout(() => {
        message
          .success({ icon: '🎉', content: `  ${user?.username}，欢迎回来~`, key: 'success' })
          .then();
      }, 400);
      useUserStore.setState({ user: user });
      setPermissionStatus('Granted');
    } else {
      setPermissionStatus('Denied');
    }
  };
  return {
    status: permissionStatus,
  };
};
export default useAuth;
