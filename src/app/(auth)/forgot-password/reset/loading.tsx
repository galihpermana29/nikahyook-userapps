import { Button } from 'antd';
import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';

export default function ResetPasswordLoading() {
  return (
    <div className="w-full flex flex-col gap-5">
      <SkeletonInput block active />
      <SkeletonInput block active />

      <Button disabled>Save</Button>
    </div>
  );
}
