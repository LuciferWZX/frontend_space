import store from 'storejs';
import { UserService } from '@/services/api/user';
const UserUtil = {
  verifyToken: async () => {
    const token: string | undefined = store.get(__TOKEN__);
    if (token) {
      const res = await UserService.profile();
      if (res.code === 200) {
        return res.data;
      }
    }
    return null;
  },
};
export default UserUtil;
