import { Progress } from 'antd';
import { Suspense } from 'react';
import HeaderDefault from '@/shared/container/Header/HeaderDefault';
import HeaderTodo from '../Group/HeaderTodo';

const HeaderSection = () => {
  return (
    <section className="bg-gradient-to-r from-ny-primary-500 via-ny-primary-400 to-ny-primary-300 px-4 py-5 space-y-6 md:rounded-lg">
      <Suspense
        fallback={
          <div className="w-full h-10 rounded-md animate-pulse bg-ny-gray-200"></div>
        }>
        <HeaderDefault />
      </Suspense>
      <div className="flex items-center gap-3 text-white">
        <div className="flex-1">
          <p className="text-caption-2 font-medium">Total Task</p>
          <p className="text-heading-6 font-semibold">10/20</p>
        </div>
        <div className="flex-1">
          <p className="text-caption-2 font-medium">Next Due</p>
          <p className="text-heading-6 font-semibold">5 Mins</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-5 text-caption-1 font-medium text-white">
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
      <HeaderTodo />
    </section>
  );
};

export default HeaderSection;
