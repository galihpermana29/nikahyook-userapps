import generateUUID from '@/shared/usecase/generateUUID';

function BudgetLoading() {
  return (
    <div className="flex p-5 flex-col gap-5">
      <div className="w-full h-[248px] bg-ny-gray-100 rounded-lg animate-pulse"></div>
      <div className="w-full h-32 bg-ny-gray-100 rounded-lg animate-pulse"></div>

      {[...Array(2)].map(() => (
        <div key={generateUUID()}>
          <div className="flex mb-5 justify-between items-center gap-5">
            <div className="w-44 h-7 rounded-md bg-ny-gray-100 animate-pulse"></div>
            <div className="w-20 h-7 rounded-lg bg-ny-gray-100 animate-pulse"></div>
          </div>
          <div className="bg-ny-gray-100 aspect-video rounded-lg animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}

export default BudgetLoading;
