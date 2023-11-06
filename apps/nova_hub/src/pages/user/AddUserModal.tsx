import { Modal, Form, Input, Radio } from '@space/space-components';
import { Dispatch, FC, SetStateAction } from 'react';
import { useRequest } from 'ahooks';
import { UserService } from '@/services/api/user';
import { message } from '@/utils/antdStore';

interface FormProps {
  username: string;
  nickname: string;
  password: string;
  confirmPassword: string;
  phone?: string;
  email?: string;
  gender: string;
  role: string;
  isBanned: boolean;
  avatar: string;
}
interface IProps {
  open: boolean;
  search: Function;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const AddUserModal: FC<IProps> = (props) => {
  const { open, setOpen, search } = props;
  const [form] = Form.useForm<FormProps>();
  const { runAsync: register, loading } = useRequest(UserService.register, { manual: true });
  const onFinish = async (values: FormProps) => {
    const res = await register(values);
    if (res.code === 200) {
      message.success('添加成功');
      await search();
      setOpen(false);
    }
  };
  return (
    <Modal
      title={'添加用户'}
      open={open}
      onCancel={() => setOpen(false)}
      okButtonProps={{ loading: loading }}
      onOk={() => {
        form.submit();
      }}
      afterClose={() => {
        form.resetFields();
      }}
    >
      <Form<FormProps>
        onFinish={onFinish}
        form={form}
        disabled={loading}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label={'用户名'}
          name={'username'}
          hasFeedback={true}
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
            {
              pattern: /^[a-zA-Z0-9_]+$/,
              message: '用户名只能包含字母、数字和下划线!',
            },
          ]}
        >
          <Input placeholder={'用户名'} allowClear={true} />
        </Form.Item>
        <Form.Item
          label={'密码'}
          name={'password'}
          hasFeedback={true}
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
            {
              pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
              message:
                '密码最少 8 个字符，至少 1 个大写英文字母、1 个小写英文字母、1 个数字和 1 个特殊字符!',
            },
          ]}
        >
          <Input.Password placeholder={'密码'} allowClear={true} />
        </Form.Item>
        <Form.Item
          label={'确认密码'}
          dependencies={['password']}
          hasFeedback={true}
          name={'confirmPassword'}
          rules={[
            {
              required: true,
              message: '请确认密码!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次密码不一致!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder={'确认密码'} allowClear={true} />
        </Form.Item>
        <Form.Item
          label={'昵称'}
          name={'nickname'}
          rules={[
            {
              pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
              message: '昵称只能包含,中文、字母、数字和下划线',
            },
          ]}
        >
          <Input placeholder={'昵称'} allowClear={true} />
        </Form.Item>
        <Form.Item
          label={'手机号'}
          name={'phone'}
          rules={[{ pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }]}
        >
          <Input placeholder={'手机号'} allowClear={true} />
        </Form.Item>
        <Form.Item
          label={'邮箱'}
          name={'email'}
          rules={[
            {
              pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
              message: '请输入正确的邮箱',
            },
          ]}
        >
          <Input placeholder={'邮箱'} allowClear={true} />
        </Form.Item>
        <Form.Item label={'性别'} name={'gender'}>
          <Radio.Group>
            <Radio value={'1'}>男</Radio>
            <Radio value={'0'}>女</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default AddUserModal;
