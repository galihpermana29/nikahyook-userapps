import { BottomNav } from '@/shared/container/Navigation/BottomNav';
import TodoContainer from './container/TodoContainer';
import useGetTodo from './usecase/useGetTodo';

const Todo = async () => {
  const { data } = await useGetTodo();

  return (
    <main>
      <TodoContainer todo={data} />
      <BottomNav />
    </main>
  );
};

export default Todo;
