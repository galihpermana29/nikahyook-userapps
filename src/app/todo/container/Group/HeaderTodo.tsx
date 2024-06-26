import { TODO_MOCKDATA } from '../../models/TodoMockData';

const HeaderTodo = () => {
  return (
    <div className="h-4 grid grid-cols-3 gap-3 text-black">
      {TODO_MOCKDATA.slice(0, 3).map((data, index) => (
        <div
          key={index}
          className='bg-white space-y-2 w-full py-2 px-3 rounded-lg shadow'
        >
          <h2 className="text-caption-1 font-medium line-clamp-1">
            {data.name}
          </h2>
          <p className="text-caption-2 text-ny-gray-400 line-clamp-1">
            {data.date} - {data.time}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeaderTodo;
