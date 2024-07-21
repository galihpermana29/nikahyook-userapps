const TodoLoading = () => {
  return (
    <section className="space-y-5">
      <div className="w-10 h-8 rounded-full bg-ny-gray-100 animate-pulse p-4" />
      <div className="flex items-center gap-2">
        <div className="w-10 h-8 rounded-full bg-ny-gray-100 animate-pulse" />
        <div className="w-10 h-8 rounded-full bg-ny-gray-100 animate-pulse" />
        <div className="w-10 h-8 rounded-full bg-ny-gray-100 animate-pulse" />
        <div className="w-10 h-8 rounded-full bg-ny-gray-100 animate-pulse" />
      </div>
      <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse mx-auto" />
      <div className="space-y-4">
        <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse" />
        <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse" />
        <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse" />
        <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse" />
      </div>
    </section>
  );
};

export default TodoLoading;
