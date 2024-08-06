import { BottomNav } from '@/shared/container/Navigation/BottomNav';
import { getAllTodos } from '@/shared/actions/todoService';
import { getServerSession } from '@/shared/usecase/getServerSession';
import TodoContainer from './container/TodoContainer';

export const dynamic = 'force-dynamic';

const Todo = async () => {
  const sessionData = await getServerSession();

  const { data } = await getAllTodos({
    user_id: sessionData.user_id,
  });

  if (typeof data === 'string') throw Error(data);

  const { data: unresolvedData } = await getAllTodos({
    status: 'unresolved',
    user_id: sessionData.user_id,
  });

  if (typeof unresolvedData === 'string') throw Error(unresolvedData);

  return (
    <main className='flex flex-col justify-between min-h-screen'>
      <TodoContainer
        data={data.data}
        unresolvedData={unresolvedData.data.todos}
      />
      <BottomNav />
    </main>
  );
};

export default Todo;
