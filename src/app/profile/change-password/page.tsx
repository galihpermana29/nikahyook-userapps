import ChangePasswordFormContainer from './container/ChangePasswordFormContainer';
import ChangePasswordForm from './container/Form/ChangePasswordForm';

export default function ChangePasswordPage() {
  return (
    <ChangePasswordFormContainer
      className="w-full flex flex-col gap-3"
      layout="vertical">
      <ChangePasswordForm />
    </ChangePasswordFormContainer>
  );
}
