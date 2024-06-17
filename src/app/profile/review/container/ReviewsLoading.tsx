import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';

export default function ReviewsLoading() {
  return [1, 2, 3, 4, 5].map((i) => (
    <SkeletonInput key={i + 'loading'} active block />
  ));
}
