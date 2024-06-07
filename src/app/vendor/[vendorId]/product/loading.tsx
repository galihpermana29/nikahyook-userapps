'use client';

import { Skeleton } from 'antd';
import React from 'react';

const VendorProductLoading = () => {
  return (
    <div>
      <div className="flex items-center gap-3 p-4">
        <Skeleton.Avatar />
        <Skeleton.Input />
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 py-3">
        {Array.from({ length: 12 }).map((_, index) => (
          <Skeleton.Image
            key={index}
            style={{ width: '160px', height: '270px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default VendorProductLoading;
