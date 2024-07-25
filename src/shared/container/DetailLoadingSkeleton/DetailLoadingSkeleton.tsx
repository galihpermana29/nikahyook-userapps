const DetailLoadingSkeleton = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 p-4">
        <div className="w-10 h-10 rounded-md bg-ny-gray-100 animate-pulse"></div>
        <div className="w-52 h-4 rounded bg-ny-gray-100 animate-pulse"></div>
      </div>

      <div className="w-full h-[270px] bg-ny-gray-100 animate-pulse"></div>

      <div className="p-5 space-y-5">
        <div className="w-52 h-4 rounded bg-ny-gray-100 animate-pulse mb-10"></div>

        <div className="grid grid-cols-3 gap-3">
          <div className="w-full rounded-lg aspect-[6/5] bg-ny-gray-100 animate-pulse"></div>
          <div className="w-full rounded-lg aspect-[6/5] bg-ny-gray-100 animate-pulse"></div>
          <div className="w-full rounded-lg aspect-[6/5] bg-ny-gray-100 animate-pulse"></div>
        </div>

        <div className="flex gap-3">
          <div className="rounded-full w-10 h-10 bg-ny-gray-100 animate-pulse"></div>
          <div className="space-y-2">
            <div className="w-32 h-4 rounded bg-ny-gray-100 animate-pulse"></div>
            <div className="w-52 h-4 rounded bg-ny-gray-100 animate-pulse"></div>
          </div>
        </div>

        <div className="w-32 h-4 rounded bg-ny-gray-100 animate-pulse"></div>

        <div className="space-y-2">
          <div className="w-full h-4 rounded bg-ny-gray-100 animate-pulse"></div>
          <div className="w-[90%] h-4 rounded bg-ny-gray-100 animate-pulse"></div>
          <div className="w-[75%] h-4 rounded bg-ny-gray-100 animate-pulse"></div>
        </div>

        <div className="space-y-2 pt-5">
          <div className="w-52 h-4 rounded bg-ny-gray-100 animate-pulse"></div>

          <div className="space-y-4">
            <div className="w-full aspect-[16/5] rounded-lg bg-ny-gray-100 animate-pulse"></div>
            <div className="w-full aspect-[16/5] rounded-lg bg-ny-gray-100 animate-pulse"></div>
            <div className="w-full aspect-[16/5] rounded-lg bg-ny-gray-100 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLoadingSkeleton;
