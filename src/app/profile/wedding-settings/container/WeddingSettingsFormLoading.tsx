import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';
import { Button } from 'antd';

export default function WeddingSettingsFormLoading() {
  return (
    <>
      <SkeletonInput active block />

      <SkeletonInput active block />

      <SkeletonInput active block />

      <SkeletonInput active block />

      <SkeletonInput active block />

      <SkeletonInput active block />

      <SkeletonInput active block />

      <div className="flex items-center pt-3 w-full gap-2 mt-auto">
        <Button
          href="/profile"
          disabled
          className="w-full text-ny-primary-500 bg-ny-primary-100">
          Cancel
        </Button>
        <Button disabled className="w-full" type="primary" htmlType="submit">
          Save
        </Button>
      </div>
    </>
  );
}
