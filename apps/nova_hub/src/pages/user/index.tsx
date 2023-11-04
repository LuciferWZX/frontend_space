import { FC, useEffect } from 'react';
import styles from './index.module.less';
import FilterHeader from '@/pages/user/FilterHeader';
import UserTable from '@/pages/user/UserTable';
import useUserList from '@/pages/user/hooks/useUserList';
const UserPage: FC = () => {
  const { loading, search, setTableParams, tableParams } = useUserList();
  useEffect(() => {
    search().then();
  }, []);
  return (
    <div className={styles.userPageBox}>
      <FilterHeader />
      <UserTable
        page={tableParams.page}
        total={tableParams.total}
        search={search}
        pageSize={tableParams.pageSize}
        setTableParams={setTableParams}
        loading={loading}
      />
    </div>
  );
};
export default UserPage;
