import Link from 'next/link';
import LoginFormContainer from './container/LoginFormContainer';
import LoginForm from './container/Form/LoginForm';
import OAuthLoginButtons from '../container/OAuthLoginButtons';

export default function LoginPage() {
  return (
    <section className="w-full">
      <LoginFormContainer
        className="flex flex-col gap-3 w-full"
        layout="vertical">
        <LoginForm />
      </LoginFormContainer>

      <OAuthLoginButtons withDivider dividerText="Or continue with" />

      <div className="text-caption-1 mt-5 text-center w-full">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-ny-primary-500">
          Sign up
        </Link>
      </div>
    </section>
  );
}
