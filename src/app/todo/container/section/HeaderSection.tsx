import { ITodoo } from '@/shared/models/todoInterfaces';
import { Progress } from 'antd';
import { Suspense } from 'react';
import HeaderDefault from '@/shared/container/Header/HeaderDefault';
import HeaderTodo from '../Group/HeaderTodo';

interface IHeaderSection {
  todo: ITodoo[];
  progress: number;
  total_task: number;
  resolved_task: number;
}

const HeaderSection = ({
  todo,
  progress,
  total_task,
  resolved_task,
}: IHeaderSection) => {
  return (
    <section className="bg-gradient-to-r from-ny-primary-500 via-ny-primary-400 to-ny-primary-300 px-4 py-5 space-y-6">
      <Suspense
        fallback={
          <div className="w-full h-10 rounded-md animate-pulse bg-ny-gray-200"></div>
        }
      >
        <HeaderDefault />
      </Suspense>
      <div className="flex items-center gap-3 text-white">
        <div className="flex-1">
          <p className="text-caption-2 font-medium">Total Task</p>
          <p className="text-heading-6 font-semibold">
            {resolved_task}/{total_task}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-caption-2 font-medium">Next Due</p>
          <p className="text-heading-6 font-semibold">5 Mins</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-5 text-caption-1 font-medium text-white">
          <h2>Progress</h2>
          <p>{progress}%</p>
        </div>
        <Progress
          percent={progress}
          showInfo={false}
          strokeColor="#ffffff"
          trailColor="#FC9CA9"
        />
      </div>
      <HeaderTodo todo={todo} />
    </section>
  );
};

export default HeaderSection;
