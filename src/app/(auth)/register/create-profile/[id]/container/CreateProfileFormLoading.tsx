import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';
import { Button } from 'antd';

export default function CreateProfileFormLoading() {
  return (
    <>
      <SkeletonInput active block />

      <SkeletonInput active block />

      <SkeletonInput active block />

      <SkeletonInput active block />

      <SkeletonInput active block />

      <SkeletonInput active block />

      <SkeletonInput active block />

      <Button disabled className="mt-2 w-full" type="primary">
        Next
      </Button>
    </>
  );
}
