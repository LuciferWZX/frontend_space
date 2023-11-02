import request, { ResponseData } from '@/services/request';
import { User } from '@space/types';

export const UserService = {
  async login(data: { username: string; password: string }): Promise<ResponseData<User>> {
    return request(`/user/login`, {
      data: data,
      method: 'POST',
    });
  },
  async profile(): Promise<ResponseData<User>> {
    return request(`/user/profile`, {
      method: 'GET',
    });
  },
};
