import generateUUID from '@/shared/usecase/generateUUID';
import SkeletonInput from 'antd/es/skeleton/Input';
import React from 'react';

export default function OrderDetailsLoading() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <SkeletonInput active block />
      <div className="space-y-2">
        <h1 className="text-body-2">Products</h1>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <SkeletonInput
              key={'loading' + index + generateUUID()}
              className="h-24"
              active
              block
            />
          ))}
      </div>
    </div>
  );
}
