import React from 'react';

export const MyDashboardLoadingSection = () => {
  return (
    <section className="grid grid-cols-2 gap-3 pt-3">
      <div className="col-span-2 flex w-full h-[116px] animate-pulse bg-ny-gray-300 rounded-lg" />
      <div className="flex w-full h-[116px] animate-pulse bg-ny-gray-300 rounded-lg" />
      <div className="flex w-full h-[116px] animate-pulse bg-ny-gray-300 rounded-lg" />
      <div className="row-span-2 flex w-full h-[244px] animate-pulse bg-ny-gray-300 rounded-lg" />
      <div className="flex w-full h-[116px] animate-pulse bg-ny-gray-300 rounded-lg" />
      <div className="flex w-full h-[116px] animate-pulse bg-ny-gray-300 rounded-lg" />
    </section>
  );
};
