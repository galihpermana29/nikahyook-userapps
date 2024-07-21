import { IAllTodoResponse, ITodo } from '@/shared/models/todoInterfaces';
import HeaderSection from './section/HeaderSection';
import TodoTabs from './tabs/TodoTabs';

const TodoContainer = async ({ data, unresolvedData }: { data: IAllTodoResponse, unresolvedData: ITodo[] }) => {
  return (
    <main>
      <HeaderSection
        todo={data.todos}
        unresolvedTodo={unresolvedData}
        progress={parseInt(data.progress, 10)}
        total_tasks={data.total_tasks}
      />
      <TodoTabs todo={data.todos} defaultTab="all" />
    </main>
  );
};

export default TodoContainer;
