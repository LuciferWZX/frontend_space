import store from 'storejs';
const UserUtil = {
  verifyToken: async () => {
    const token: string | undefined = store.get(__TOKEN__);
    if (token) {
      console.log('校验token');
      return true;
    }
    console.log('无token');
    return false;
  },
};
export default UserUtil;
