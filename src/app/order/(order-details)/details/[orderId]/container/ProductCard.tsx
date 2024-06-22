'use client';

import ArrowIcon from '@/shared/container/Icon/ArrowIcon';
import type { IOrderProduct } from '@/shared/models/orderInterfaces';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import { Avatar } from 'antd';
import { useState } from 'react';

export default function ProductCard({ product }: { product: IOrderProduct }) {
  const [expanded, setExpanded] = useState(false);

  function handleOpen() {
    return setExpanded((prev) => !prev);
  }

  return (
    <div className="border p-3 rounded-lg flex flex-col gap-3">
      <div onClick={handleOpen} className="flex space-x-4 hover:cursor-pointer">
        <Avatar
          className="size-20 shrink-0"
          shape="square"
          src={product.productImage}
        />

        <div className="flex flex-col justify-between w-full">
          <h1 className="text-caption-2 sm:text-caption-1 line-clamp-2 font-medium">
            {product.productName}
          </h1>

          <div className="flex items-end justify-between">
            <div className="flex flex-col items-start gap-0">
              <span className="text-ny-primary-500 text-caption-1 font-medium">
                {formatToRupiah(product.productPrice)}
              </span>

              <span className="text-caption-2 line-clamp-1 text-ny-gray-400">
                {product.productQty} Pcs
              </span>
            </div>

            <div
              style={{ rotate: expanded ? '180deg' : '0deg' }}
              className="bg-ny-primary-100 rounded-full size-4 flex p-3 relative transition-all">
              <ArrowIcon className="shrink-0 scale-95 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-ny-primary-500" />
            </div>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="text-caption-1 block bg-ny-info-100 text-ny-info-500 border border-ny-info-500 rounded-lg p-4 text-justify">
          {product.productDescription}
        </div>
      )}
    </div>
  );
}
