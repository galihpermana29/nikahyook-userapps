import StatisticsItem from './StatisticsItem';
import ColorfulBackgroundCard from '@/shared/container/ColorfulBackgroundCard/ColorfulBackgroundCard';
import { getUserStatistics } from '@/shared/actions/userService';

const statisticsName = [
  'reviews' as const,
  'inspirations' as const,
  'vendors' as const,
];

export default async function UserStatistics() {
  const statistics = await getUserStatistics();

  return (
    <ColorfulBackgroundCard className="flex items-center overflow-hidden gap-8 justify-center p-3 rounded-lg relative">
      <div className="flex items-center gap-8 z-[1]">
        {statisticsName.map((name) => (
          <StatisticsItem
            key={'statistic-' + name}
            statistic={{ name, value: statistics.data[name] }}
          />
        ))}
      </div>
    </ColorfulBackgroundCard>
  );
}
