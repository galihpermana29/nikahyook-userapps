import { ITodoo } from '@/shared/models/todoInterfaces';

const HeaderTodo = ({ todo }: { todo: ITodoo[] }) => {
  return (
    <div className="h-4 grid grid-cols-3 gap-3 text-black">
      {todo.map((item, index) => (
        <div
          key={index}
          className="bg-white space-y-2 w-full py-2 px-3 rounded-lg shadow"
        >
          <h2 className="text-caption-1 font-medium line-clamp-1">
            {item.name}
          </h2>
          <p className="text-caption-2 text-ny-gray-400 line-clamp-1">
            {item.date} - {item.time}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeaderTodo;
