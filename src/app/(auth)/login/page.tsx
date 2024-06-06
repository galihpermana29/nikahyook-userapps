import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import Input from '@/shared/container/ClientAntd/Input/Input';
import LoginFormContainer from '../_container/LoginFormContainer/LoginFormContainer';
import { Button, Divider } from 'antd';
import GoogleIcon from '@/shared/container/Icon/GoogleIcon';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex flex-col gap-5 justify-center min-h-screen w-full max-w-sm items-center mx-auto">
      <h1 className="font-semibold text-xl text-left w-full">
        Login to your account
      </h1>

      <section className="w-full">
        <LoginFormContainer
          className="flex flex-col gap-3 w-full"
          layout="vertical">
          <FormItem
            rules={[{ required: true, message: 'Please input your email!' }]}
            className="my-0"
            required
            name="email"
            label="Email">
            <Input placeholder="Enter your email here!" />
          </FormItem>

          <FormItem
            rules={[{ required: true, message: 'Please input your password!' }]}
            className="my-0"
            required
            name="password"
            label="Password">
            <Input type="password" placeholder="Enter your password here!" />
          </FormItem>

          <Link
            href="/forgot-password"
            className="text-right text-ny-primary-500 -mt-1 text-caption-1">
            Forgot Password?
          </Link>

          <Button
            size="large"
            className="mt-2"
            type="primary"
            htmlType="submit">
            Login
          </Button>
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
    </main>
  );
}
