import { FC } from 'react';
import styles from './index.module.less';
import { useRequest } from 'ahooks';
import { UserService } from '@/services/api/user';
import { Button, Form, Input, Typography } from '@space/space-components';
import { message } from '@space/utils';
const { Text } = Typography;
interface FormProps {
  username: string;
  password: string;
}
const Login: FC = () => {
  const [form] = Form.useForm<FormProps>();
  const { runAsync: login, loading } = useRequest(UserService.login, { manual: true });
  const onFinish = async (values: FormProps) => {
    console.log(values);
    const res = await login(values);
    if (res.code === 200) {
      message()!.success('登录成功');
    }
  };
  return (
    <div className={styles.loginBox}>
      <div>
        <Text className={styles.bigTitle}>嗨 ，你好</Text>
      </div>
      <div>
        <Text className={styles.secondTitle} type={'secondary'}>
          欢迎回来
        </Text>
      </div>
      <div className={styles.loginForm}>
        <Form<FormProps> disabled={loading} onFinish={onFinish} form={form} size={'large'}>
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input autoComplete={'username'} placeholder="用户名" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password autoComplete="current-password" placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button loading={loading} block type={'primary'} htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
