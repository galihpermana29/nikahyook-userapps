'use client';

import { Skeleton } from 'antd';
import React from 'react';

const ProductDetailLoading = () => {
  return (
    <div>
      <div className="flex gap-[12px]">
        <Skeleton.Node active />
        <Skeleton.Node active />
        <Skeleton.Node active />
        <Skeleton.Node active />
      </div>
    </div>
  );
};

export default ProductDetailLoading;
