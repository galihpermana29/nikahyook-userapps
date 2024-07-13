import { Button } from 'antd';
import { ITodoo } from '@/shared/models/todoInterfaces';
import { PlusIcon } from '@/shared/container/Icon/PlusIcon';
import generateUUID from '@/shared/usecase/generateUUID';
import NoResult from '@/shared/container/NoResult/NoResult';
import TodoCard from '../card/TodoCard';

const TodoListSection = ({ todo }: { todo: ITodoo[] }) => {
  return (
    <section>
      <Button
        href="/todo/add"
        icon={<PlusIcon />}
        className="flex items-center justify-center rounded-[8px] h-[40px] bg-ny-primary-500 text-white text-body-2 w-full mb-3"
      >
        Add New To Do
      </Button>
      <div className="max-h-[40vh] overflow-auto space-y-3">
        {todo.length > 0 ? (
          todo.map((data) => <TodoCard key={generateUUID()} data={data} />)
        ) : (
          <NoResult text="No Todos found" />
        )}
      </div>
    </section>
  );
};

export default TodoListSection;
