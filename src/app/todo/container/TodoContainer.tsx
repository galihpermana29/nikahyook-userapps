import { IAllTodoResponse } from '@/shared/models/todoInterfaces';
import HeaderSection from './section/HeaderSection';
import TodoTabs from './tabs/TodoTabs';

const TodoContainer = async ({ data }: { data: IAllTodoResponse }) => {
  return (
    <main>
      <HeaderSection
        todo={data.todos}
        progress={parseInt(data.progress, 10)}
        total_tasks={data.total_tasks}
      />
      <TodoTabs todo={data.todos} defaultTab="all" />
    </main>
  );
};

export default TodoContainer;
