import { Button, Divider } from 'antd';
import GoogleIcon from '@/shared/container/Icon/GoogleIcon';
import Link from 'next/link';
import LoginForm from '../_container/Form/LoginForm';
import LoginFormContainer from '../_container/LoginFormContainer';

export default function LoginPage() {
  return (
    <section className="w-full">
      <LoginFormContainer
        className="flex flex-col gap-3 w-full"
        layout="vertical">
        <LoginForm />
      </LoginFormContainer>

      <Divider plain className="text-caption-2">
        Or continue with
      </Divider>

      <Button
        className="w-full flex items-center justify-center gap-2 bg-ny-primary-100 text-ny-primary-500"
        size="large"
        type="primary">
        <GoogleIcon /> Continue with Google
      </Button>

      <div className="text-caption-1 mt-5 text-center w-full">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-ny-primary-500">
          Sign up
        </Link>
      </div>
    </section>
  );
}
