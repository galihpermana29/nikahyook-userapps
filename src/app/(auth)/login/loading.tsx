import { Button } from 'antd';
import Link from 'next/link';
import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';
import OAuthLoginButtons from '../_container/OAuthLoginButtons';

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

      <OAuthLoginButtons loading withDivider dividerText="Or continue with" />

      <div className="text-caption-1 mt-5 text-center w-full">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-ny-primary-500">
          Sign up
        </Link>
      </div>
    </section>
  );
}
