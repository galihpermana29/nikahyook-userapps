import formatToRupiah from '@/shared/usecase/formatToRupiah';
import React from 'react';

export const BudgetGroup = ({
  name,
  nominal,
}: {
  name: string;
  nominal: number;
}) => {
  return (
    <div className="bg-white space-y-2 min-w-40 w-full py-2 px-3 rounded-lg shadow z-[1]">
      <h2 className="text-caption-1 font-medium line-clamp-1">{name}</h2>
      <p className="text-caption-2 text-ny-gray-400 line-clamp-1">
        {formatToRupiah(nominal)}
      </p>
    </div>
  );
};
