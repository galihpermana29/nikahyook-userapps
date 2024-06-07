import { Button } from 'antd';
import ResetPasswordFormContainer from './_container/ResetPasswordFormContainer';
import ForgotPasswordForm from './_container/Form/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <ResetPasswordFormContainer
      className="w-full flex flex-col gap-5"
      layout="vertical">
      <ForgotPasswordForm />

      <Button type="primary" htmlType="submit">
        Send Email
      </Button>
    </ResetPasswordFormContainer>
  );
}
