import { Avatar, ColumnsType, Space, Table } from '@space/space-components';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './index.module.less';
import { shallow, useUserStore } from '@space/stores';
import { User } from '@space/types';
import dayjs from 'dayjs';
import { ResponseData } from '@/services/request';

interface IProps {
  loading: boolean;
  page: number;
  pageSize: number;
  total: number;
  search: () => Promise<ResponseData<{ data: User[]; total: number; totalPages: number }>>;
  setTableParams: Dispatch<
    SetStateAction<{ page: number; pageSize: number; totalPages: number; total: number }>
  >;
}
const UserTable: FC<IProps> = (props) => {
  const { loading, page, pageSize, setTableParams, total } = props;
  const users = useUserStore((state) => state.users, shallow);
  const columns: ColumnsType<User> = [
    {
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 50,
      fixed: 'left',
      render: (avatar: string | null) => {
        return <Avatar shape={'square'} src={avatar} />;
      },
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
      width: 180,
      fixed: 'left',
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
      key: 'nickname',
      width: 180,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      width: 200,
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
      width: 120,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      width: 80,
      render: (gender: '0' | '1' | '2' | null) => {
        return gender === '1' ? '男' : gender === '0' ? '女' : '未知';
      },
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      width: 80,
    },
    {
      title: '创建时间',
      dataIndex: 'createdDate',
      key: 'createdDate',
      width: 170,
      render: (createdDate: string) => {
        return dayjs(createdDate).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: '更新时间',
      dataIndex: 'updatedDate',
      key: 'updatedDate',
      width: 170,
      render: (updateDate: string) => {
        return dayjs(updateDate).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: '状态',
      key: 'isBanned',
      width: 100,
      render: (isBanned: boolean) => (isBanned ? '禁用' : '正常'),
    },
    {
      title: '操作',
      key: 'action',
      width: 100,
      fixed: 'right',
      render: (record) => (
        <Space>
          <a>编辑</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];
  return (
    <div className={styles.userTable}>
      <Table<User>
        size={'small'}
        loading={loading}
        pagination={{
          pageSize,
          total,
          showTotal: (_total) => `共 ${_total} 条`,
          current: page,
          pageSizeOptions: [10, 20, 40, 80],
          showSizeChanger: true,
          onChange: (page, pageSize) => {
            setTableParams((oldParams) => ({ ...oldParams, page, pageSize }));
          },
        }}
        style={{ height: '100%' }}
        rowKey={(record) => record.id}
        scroll={{ x: 1200, y: '100%' }}
        dataSource={users}
        columns={columns}
        bordered={true}
      />
    </div>
  );
};
export default UserTable;
