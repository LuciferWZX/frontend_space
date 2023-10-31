import request, { ResponseData } from '@/services/request';
import { User } from '@space/types';
import { Utils } from '@space/utils';

export const UserService = {
  async login(data: { username: string; password: string }): Promise<ResponseData<User>> {
    await Utils.sleep(5000);
    return request(`/user/login`, {
      data: data,
      method: 'POST',
    });
  },
};
