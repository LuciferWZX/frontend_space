import { useRequest, useUpdateEffect } from 'ahooks';
import { UserService } from '@/services/api/user';
import { useUserStore } from '@space/stores';
import { useState } from 'react';

const useUserList = () => {
  const [tableParams, setTableParams] = useState<{
    username?: string;
    gender?: string;
    nickname?: string;
    email?: string;
    phone?: string;
    isBanned?: boolean;
    role?: string;
    page: number;
    pageSize: number;
    totalPages: number;
    total: number;
  }>({
    page: 1,
    pageSize: 20,
    totalPages: 0,
    total: 0,
  });
  const { page, pageSize, username, gender, nickname, email, phone, isBanned, role } = tableParams;
  const { runAsync, loading } = useRequest(UserService.getUsers, {
    manual: true,
  });
  useUpdateEffect(() => {
    search().then();
  }, [page, pageSize, username, gender, nickname, email, phone, isBanned, role]);
  const search = async () => {
    const { totalPages, total, ...searchProps } = tableParams;
    const res = await runAsync(searchProps);
    if (res.code === 200) {
      useUserStore.setState({ users: res.data.data });
      setTableParams((oldParams) => {
        return {
          ...oldParams,
          totalPages: res.data.totalPages,
          total: res.data.total,
        };
      });
    }
    return res;
  };
  return {
    search: search,
    loading,
    tableParams,
    setTableParams,
  };
};
export default useUserList;
