import dayjs from 'dayjs';
import { ITodo } from '@/shared/models/todoInterfaces';
import { Progress } from 'antd';
import { Suspense } from 'react';
import { useGenerateNextDue } from '../../usecase/useGenerateNextDue';
import HeaderDefault from '@/shared/container/Header/HeaderDefault';
import HeaderTodo from '../Group/HeaderTodo';

interface IHeaderSection {
  todo: ITodo[];
  unresolvedTodo: ITodo[];
  progress: number;
  total_tasks: number;
}

const HeaderSection = ({
  todo,
  unresolvedTodo,
  progress,
  total_tasks,
}: IHeaderSection) => {
  const nextDue = useGenerateNextDue(todo);

  const resolvedTasks = todo.filter(
    (todo) => todo.status === 'resolved'
  ).length;

  const nextDueTodo = unresolvedTodo
    .filter((item) => {
      const itemDateTime = dayjs(`${item.date} ${item.time}`);
      return itemDateTime.isAfter(dayjs());
    })
    .sort((a, b) => {
      const dateTimeA = dayjs(`${a.date} ${a.time}`);
      const dateTimeB = dayjs(`${b.date} ${b.time}`);
      return dateTimeA.diff(dateTimeB);
    });

  return (
    <section className="bg-gradient-to-r from-ny-primary-500 via-ny-primary-400 to-ny-primary-300 px-4 pt-5 pb-12 space-y-4 md:rounded-lg relative">
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
      <div className="absolute -bottom-8 left-4 right-4">
        <HeaderTodo todos={nextDueTodo} />
      </div>
    </section>
  );
};

export default HeaderSection;
