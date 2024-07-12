import React from 'react';

export const SectionHeroLoading = () => {
  return (
    <section className="text-white relative h-full -mb-[4.25rem] bg-gradient-to-r from-ny-primary-500 via-ny-primary-400 to-ny-primary-300 py-5 px-4 flex flex-col gap-6">
      <div className="w-full h-10 rounded-md animate-pulse bg-ny-primary-200" />

      <div className="grid grid-cols-2 gap-2 text-caption-2">
        <div>
          <h2>Total Budget</h2>
          <div className="h-7 w-full rounded-md animate-pulse bg-ny-primary-200" />
        </div>
        <div>
          <h2>Total Spend</h2>
          <div className="h-7 w-full rounded-md animate-pulse bg-ny-primary-200" />
        </div>
      </div>

      <div>
        <div className="flex justify-between gap-5 text-caption-1 font-medium">
          <h2>Progress</h2>
          <p>0%</p>
        </div>
        <div className="h-7 w-full rounded-md animate-pulse bg-ny-primary-200" />
      </div>

      <div className="h-full pb-4 grid grid-flow-col overflow-x-auto no-scrollbar w-full gap-3 text-black">
        {Array.from(Array(10).keys()).map((key) => (
          <div
            key={key}
            className="w-44 h-16 bg-white animate-pulse rounded-lg shadow"
          />
        ))}
      </div>
      <div className="bg-white h-[21%] z-0 left-0 absolute bottom-0 w-full" />
    </section>
  );
};
