import useGetInspirationCount from '../usecase/useGetInspirationCount';
import StatisticsItem from './StatisticsItem';
import useGetReviewCount from '../usecase/useGetReviewCount';
import useGetVendorCount from '../usecase/useGetVendorCount';
import ColorfulBackgroundCard from '@/shared/container/ColorfulBackgroundCard/ColorfulBackgroundCard';

const statistics = [
  { name: 'Reviews', fetchFn: useGetReviewCount },
  { name: 'Inspiration', fetchFn: useGetInspirationCount },
  { name: 'Inspiration', fetchFn: useGetVendorCount },
];

export default async function UserStatistics() {
  return (
    <ColorfulBackgroundCard className="flex items-center overflow-hidden gap-8 justify-center p-3 rounded-lg relative">
      <div className="flex items-center gap-8 z-[1]">
        {statistics.map((statistic) => (
          <StatisticsItem key={'statistic-' + statistic.name} {...statistic} />
        ))}
      </div>
    </ColorfulBackgroundCard>
  );
}
