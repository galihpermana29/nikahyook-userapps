import type { IUserStatistics } from '@/shared/models/userInterfaces';
import formatToCapitalWord from '@/shared/usecase/formatToCapitalWord';

export default function StatisticsItem({
  statistic,
}: {
  statistic: {
    name: keyof IUserStatistics;
    value: number;
  };
}) {
  return (
    <div className="flex flex-col gap-1 items-center text-ny-primary-500">
      <p className="text-3xl font-semibold">{statistic.value}</p>
      <p className="text-caption-1">{formatToCapitalWord(statistic.name)}</p>
    </div>
  );
}
