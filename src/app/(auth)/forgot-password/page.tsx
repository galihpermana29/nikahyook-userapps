import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import ResetPasswordFormContainer from '../_container/ResetPasswordFormContainer';
import Input from '@/shared/container/ClientAntd/Input/Input';
import { Button } from 'antd';

export default function ForgotPasswordPage() {
  return (
    <ResetPasswordFormContainer
      className="w-full flex flex-col gap-5"
      layout="vertical">
      <FormItem
        required
        className="my-0 py-0"
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          {
            type: 'email',
            message: 'Please enter a valid email!',
          },
        ]}>
        <Input placeholder="Enter your email here!" />
      </FormItem>

      <Button type="primary" htmlType="submit">
        Send Email
      </Button>
    </ResetPasswordFormContainer>
  );
}
