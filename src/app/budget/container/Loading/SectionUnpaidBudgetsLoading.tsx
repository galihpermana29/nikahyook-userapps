import React from 'react';

export const SectionUnpaidBudgetsLoading = () => {
  return (
    <div className="h-full pb-4 grid grid-flow-col overflow-x-auto no-scrollbar w-full gap-3 text-black">
      {Array.from(Array(10).keys()).map((key) => (
        <div
          key={key}
          className="w-44 h-16 bg-white animate-pulse rounded-lg shadow"
        />
      ))}
    </div>
  );
};
