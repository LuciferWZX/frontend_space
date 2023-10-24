export interface User {
  email: null | string;
  username: string;
  phone: null | string;
  gender: null | '0' | '1' | '2';
  nickname: null | string;
  avatar: null | string;
  id: string;
  isDeleted: boolean;
  isBanned: boolean;
  role: 'user' | 'admin' | 'vip';
  createdDate: string;
  updatedDate: string;
  token: string;
}
