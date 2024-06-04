'use client';

import { Skeleton } from 'antd';
import React from 'react';

const ProductDetailLoading = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex items-center gap-3 p-4">
        <Skeleton.Avatar />
        <Skeleton.Input />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <Skeleton.Input size="large" />
        <Skeleton.Input size="large" />
        <Skeleton.Input size="large" />
        <Skeleton.Input size="large" />
      </div>
      <Skeleton paragraph className="mt-5" />
      <div className="flex items-center gap-2 mt-5">
        <Skeleton.Node />
        <Skeleton.Node />
        <Skeleton.Node />
        <Skeleton.Node />
      </div>
      <Skeleton paragraph={{ rows: 6 }} className="mt-5" />
    </div>
  );
};

export default ProductDetailLoading;
