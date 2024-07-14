import generateUUID from '@/shared/usecase/generateUUID';

const DiscoverLoading = () => {
  return (
    <div className="flex p-5 flex-col gap-5 max-w-screen-md mx-auto">
      <div className="w-full h-[248px] bg-ny-gray-100 rounded-lg animate-pulse"></div>

      {[...Array(3)].map(() => (
        <div key={generateUUID()}>
          <div className="flex mb-5 justify-between items-center gap-5">
            <div className="w-44 h-7 rounded-md bg-ny-gray-100 animate-pulse"></div>
            <div className="w-20 h-7 rounded-lg bg-ny-gray-100 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[...Array(3)].map(() => (
              <div
                key={generateUUID()}
                className="bg-ny-gray-100 rounded-lg animate-pulse aspect-[4/5]"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscoverLoading;
