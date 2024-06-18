import type { ReactNode } from 'react';

type StatisticsItemProps<T extends ReactNode> = {
  fetchFn: () => Promise<T>;
  name: string;
};

export default async function StatisticsItem<T extends ReactNode>({
  fetchFn,
  name,
}: StatisticsItemProps<T>) {
  const statisticsCount = await fetchFn();

  return (
    <div className="flex flex-col gap-1 items-center text-ny-primary-500">
      <p className="text-3xl font-semibold">{statisticsCount}</p>
      <p className="text-caption-1">{name}</p>
    </div>
  );
}
