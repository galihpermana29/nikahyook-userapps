import HeaderDefault from '@/shared/container/Header/HeaderDefault';
import { Progress } from 'antd';
import { Suspense } from 'react';

function SectionHero() {
  return (
    <section className="text-white bg-gradient-to-r md:rounded-lg from-ny-primary-500 via-ny-primary-400 to-ny-primary-300 py-5 px-4 flex flex-col gap-6">
      <Suspense
        fallback={
          <div className="w-full h-10 rounded-md animate-pulse bg-ny-gray-200"></div>
        }>
        <HeaderDefault />
      </Suspense>

      <div className="grid grid-cols-2 gap-2 text-caption-2">
        <div>
          <h2>Total Budget</h2>
          <p className="text-heading-6 font-bold line-clamp-1">
            Rp 300.000.000
          </p>
        </div>
        <div>
          <h2>Total Spend</h2>
          <p className="text-heading-6 font-bold line-clamp-1">
            Rp 150.000.000
          </p>
        </div>
      </div>

      <div>
        <div className="flex justify-between gap-5 text-caption-1 font-medium">
          <h2>Progress</h2>
          <p>10%</p>
        </div>
        <Progress
          percent={10}
          showInfo={false}
          strokeColor="#ffffff"
          trailColor="#FC9CA9"
        />
      </div>

      <div className="h-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 text-black">
        <div className="bg-white space-y-2 w-full py-2 px-3 rounded-lg shadow">
          <h2 className="text-caption-1 font-medium line-clamp-1">
            Photographer
          </h2>
          <p className="text-caption-2 text-ny-gray-400 line-clamp-1">
            Rp2.200.000
          </p>
        </div>
        <div className="bg-white space-y-2 w-full py-2 px-3 rounded-lg shadow">
          <h2 className="text-caption-1 font-medium line-clamp-1">Souvenir</h2>
          <p className="text-caption-2 text-ny-gray-400 line-clamp-1">
            Rp1.300.000
          </p>
        </div>
        <div className="bg-white space-y-2 w-full py-2 px-3 rounded-lg shadow">
          <h2 className="text-caption-1 font-medium line-clamp-1">Venue</h2>
          <p className="text-caption-2 text-ny-gray-400 line-clamp-1">
            Rp56.000.000
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
