import { Button } from 'antd';
import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';

export default function ForgotPasswordLoading() {
  return (
    <div className="w-full flex flex-col gap-5">
      <SkeletonInput block active />

      <Button disabled>Send Email</Button>
    </div>
  );
}
