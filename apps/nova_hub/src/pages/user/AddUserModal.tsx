import { Modal, Form, Input } from '@space/space-components';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
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
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const AddUserModal: FC<IProps> = (props) => {
  const { open, setOpen } = props;
  const [form] = Form.useForm<FormProps>();
  return (
    <Modal
      title={'添加用户'}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      afterClose={() => {
        form.resetFields();
      }}
    >
      <Form<FormProps> form={form} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
        <Form.Item
          label={'用户名'}
          name={'username'}
          hasFeedback={true}
          rules={[
            {
              required: true,
              message: '请输入用户名!',
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
      </Form>
    </Modal>
  );
};
export default AddUserModal;
