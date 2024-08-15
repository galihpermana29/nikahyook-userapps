import { getAllTodos, getTodoById } from '@/shared/actions/todoService';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import EditTodoContainer from './container/EditTodoContainer';

const TodoEdit = async ({ params }: { params: { todoId: string } }) => {
  const { data: detailTodoData } = await getTodoById(Number(params.todoId));
  const { data } = await getAllTodos();

  if (typeof data === 'string') throw Error(data);
  if (typeof detailTodoData === 'string') throw Error(detailTodoData);

  const categoriesSet = new Set(
    data.data.todos.map((todo) => todo.category_name).filter(Boolean)
  );
  const categories = Array.from(categoriesSet);

  return (
    <>
      <PageTitle title="Edit To Do" />
      <EditTodoContainer categories={categories} data={detailTodoData.data} />
    </>
  );
};

export default TodoEdit;
