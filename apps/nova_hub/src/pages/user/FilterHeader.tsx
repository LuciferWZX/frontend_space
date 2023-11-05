import { Button, Flex, Input } from '@space/space-components';
import { FC, useState } from 'react';
import AddUserModal from '@/pages/user/AddUserModal';

const FilterHeader: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Flex justify={'space-between'} className={'my-4'}>
      <Input allowClear={true} className={'w-60'} placeholder="请输入用户名/邮箱/手机号/昵称" />
      <Button type="primary" onClick={() => setOpen(true)}>
        添加
      </Button>
      <AddUserModal open={open} setOpen={setOpen} />
    </Flex>
  );
};
export default FilterHeader;
