import { ITodoo } from '@/shared/models/todoInterfaces';
import { Progress } from 'antd';
import { Suspense } from 'react';
import { useGenerateNextDue } from '../../usecase/useGenerateNextDue';
import HeaderDefault from '@/shared/container/Header/HeaderDefault';
import HeaderTodo from '../Group/HeaderTodo';

interface IHeaderSection {
  todo: ITodoo[];
  progress: number;
  total_tasks: number;
}

const HeaderSection = ({ todo, progress, total_tasks }: IHeaderSection) => {
  const nextDue = useGenerateNextDue(todo);

  const resolvedTasks = todo.filter(
    (todo) => todo.status === 'resolved'
  ).length;

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
          <p className="text-heading-6 font-semibold">
            {resolvedTasks}/{total_tasks}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-caption-2 font-medium">Next Due</p>
          <p className="text-heading-6 font-semibold">{nextDue}</p>
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
      <HeaderTodo todo={todo.slice(0, 3)} />
    </section>
  );
};

export default HeaderSection;
