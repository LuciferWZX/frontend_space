import request, { ResponseData } from '@/services/request';
import { User } from '@space/types';

export const UserService = {
  /**
   * @description 登录
   * @param data
   */
  async login(data: { username: string; password: string }): Promise<ResponseData<User>> {
    return request(`/user/login`, {
      data: data,
      method: 'POST',
    });
  },
  /**
   * @description 获取用户信息
   */
  async profile(): Promise<ResponseData<User>> {
    return request(`/user/profile`, {
      method: 'GET',
    });
  },
  /**
   * @description 获取用户列表
   * @param params
   */
  async getUsers(params?: {
    username?: string;
    gender?: string;
    nickname?: string;
    email?: string;
    phone?: string;
    isBanned?: boolean;
    role?: string;
    page?: number;
    pageSize?: number;
  }): Promise<ResponseData<{ data: User[]; total: number; totalPages: number }>> {
    console.log(111, params);
    if (getUsersController) {
      getUsersController.abort();
    }
    getUsersController = new AbortController();
    return request(`/user`, {
      signal: getUsersController.signal,
      method: 'GET',
      params: params,
    });
  },
};
let getUsersController: AbortController | null;
