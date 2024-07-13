import { IAllTodoResponse } from '@/shared/models/todoInterfaces';
import HeaderSection from './section/HeaderSection';
import TodoTabs from './tabs/TodoTabs';

const TodoContainer = async ({ data }: { data: IAllTodoResponse }) => {
  const resolvedTasks = data.todos.filter(
    (todo) => todo.status === 'resolved'
  ).length;

  return (
    <main>
      <HeaderSection
        todo={data.todos.slice(0, 3)}
        progress={parseInt(data.progress, 10)}
        total_task={data.total_tasks}
        resolved_task={resolvedTasks}
      />
      <TodoTabs todo={data.todos} defaultTab="all" />
    </main>
  );
};

export default TodoContainer;
