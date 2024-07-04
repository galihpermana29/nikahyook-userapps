import SkeletonInput from 'antd/es/skeleton/Input';

export default function AddReviewFormLoading() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <SkeletonInput active block />
      <SkeletonInput active block />
    </div>
  );
}
