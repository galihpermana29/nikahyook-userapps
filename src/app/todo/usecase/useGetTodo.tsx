import { ITodo } from '@/shared/models/todoInterfaces';
import { TODO_MOCKDATA } from '../models/TodoMockData';

export default async function useGetTodo() {
  const res = await new Promise<ITodo[]>((resolve) => {
    setTimeout(() => resolve(TODO_MOCKDATA), 2000);
  });

  return { data: res };
}
