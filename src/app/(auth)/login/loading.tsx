import { Button, Divider } from 'antd';
import GoogleIcon from '@/shared/container/Icon/GoogleIcon';
import Link from 'next/link';
import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';

export default function LoginLoading() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-3 w-full">
        <SkeletonInput active block className="my-0" />

        <SkeletonInput active block className="my-0" />

        <Link
          href="/forgot-password"
          className="text-right text-ny-primary-500 -mt-1 text-caption-1">
          Forgot Password?
        </Link>

        <Button
          disabled
          size="large"
          className="mt-2"
          type="primary"
          htmlType="submit">
          Login
        </Button>
      </div>

      <Divider plain className="text-caption-2">
        Or continue with
      </Divider>

      <Button
        disabled
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
