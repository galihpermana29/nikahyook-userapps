import { Button } from 'antd';
import ForgotPasswordForm from './container/Form/ForgotPasswordForm';
import ForgotPasswordFormContainer from './container/ForgotPasswordFormContainer';

export default function ForgotPasswordPage() {
  return (
    <ForgotPasswordFormContainer
      className="w-full flex flex-col gap-5"
      layout="vertical">
      <ForgotPasswordForm />

      <Button type="primary" htmlType="submit">
        Send Email
      </Button>
    </ForgotPasswordFormContainer>
  );
}
