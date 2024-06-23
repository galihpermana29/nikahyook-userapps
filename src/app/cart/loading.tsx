import generateUUID from '@/shared/usecase/generateUUID';

const CartLoading = () => {
  return (
    <div className="flex p-5 flex-col gap-5">
      <div className="flex items-center justify-between mb-8">
        <div className="h-6 w-[120px] bg-ny-gray-100 rounded-lg animate-pulse" />
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-full bg-ny-gray-100 animate-pulse" />
          <div className="size-6 rounded-full bg-ny-gray-100 animate-pulse" />
        </div>
      </div>

      {[...Array(3)].map(() => (
        <div key={generateUUID()} className="space-y-5">
          <div className="h-6 w-[120px] bg-ny-gray-100 rounded-lg animate-pulse" />
          <div className="flex items-start gap-2">
            <div className="size-[160px] bg-ny-gray-100 rounded-lg animate-pulse" />
            <div className="space-y-3">
              <div className="h-6 w-[120px] bg-ny-gray-100 rounded-lg animate-pulse" />
              <div className="h-6 w-[120px] bg-ny-gray-100 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartLoading;
