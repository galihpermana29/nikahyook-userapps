import circleBottomRight from '@/../public/assets/statistics-ellipse-bottom-right.png';
import circleTopLeft from '@/../public/assets/statistics-ellipse-top-left.png';
import Image from 'next/image';
import useGetInspirationCount from '../usecase/useGetInspirationCount';
import StatisticsItem from './StatisticsItem';
import useGetReviewCount from '../usecase/useGetReviewCount';
import useGetVendorCount from '../usecase/useGetVendorCount';

const statistics = [
  { name: 'Reviews', fetchFn: useGetReviewCount },
  { name: 'Inspiration', fetchFn: useGetInspirationCount },
  { name: 'Inspiration', fetchFn: useGetVendorCount },
];

export default async function UserStatistics() {
  return (
    <div className="flex items-center overflow-hidden gap-8 justify-center p-3 rounded-lg relative [background:linear-gradient(90deg,_#ffc8ca,_#feebec)] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.05)_inset]">
      <div className="flex items-center gap-8 z-[1]">
        {statistics.map((statistic) => (
          <StatisticsItem key={'statistic-' + statistic.name} {...statistic} />
        ))}
      </div>

      {/* Background shapes */}
      <Image
        src={circleBottomRight}
        className="absolute right-0 bottom-0 z-0"
        alt="circle"
      />
      <Image
        src={circleTopLeft}
        className="absolute left-0 top-0 z-0"
        alt="circle"
      />
    </div>
  );
}
