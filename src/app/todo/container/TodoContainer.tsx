import { ITodo } from '@/shared/models/todoInterfaces';
import HeaderSection from './section/HeaderSection';
import TodoTabs from './tabs/TodoTabs';

const TodoContainer = ({ todo }: { todo: ITodo[] }) => {
  return (
    <main>
      <HeaderSection />
      <TodoTabs todo={todo} defaultTab="all" />
    </main>
  );
};

export default TodoContainer;
