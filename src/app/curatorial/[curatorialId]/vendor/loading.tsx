'use client';

import { Skeleton } from 'antd';
import React from 'react';

const CuratorialVendorLoading = () => {
  return (
    <div>
      <div className="flex items-center gap-3 p-4">
        <Skeleton.Avatar />
        <Skeleton.Input />
      </div>
      <div className="space-y-3 px-4 py-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="space-y-3 px-3 py-2 shadow rounded-lg">
            <Skeleton.Image style={{ width: '40px', height: '40px' }} />
            <Skeleton paragraph={{ rows: 1 }} />
            <div className="flex items-center gap-2">
              <Skeleton.Image style={{ width: '62px', height: '62px' }} />
              <Skeleton.Image style={{ width: '62px', height: '62px' }} />
              <Skeleton.Image style={{ width: '62px', height: '62px' }} />
              <Skeleton.Image style={{ width: '62px', height: '62px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuratorialVendorLoading;
