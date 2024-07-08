import formatToRupiah from '@/shared/usecase/formatToRupiah';
import { Avatar, Card } from 'antd';
import React from 'react';
import type { IOrderDetail } from '@/shared/models/orderInterfaces';

export const ReviewCard = ({
  product,
  children,
}: {
  product: IOrderDetail;
  children: React.ReactNode;
}) => {
  return (
    <Card
      classNames={{
        body: 'flex flex-col',
        title: 'py-4 w-full overflow-hidden',
        header: 'w-full overflow-hidden',
      }}
      title={
        <div className="flex items-center gap-4 w-full overflow-hidden">
          <Avatar
            className="size-12 shrink-0"
            shape="square"
            src={product.image}
          />
          <div className="flex flex-col items-start gap-0 w-full overflow-hidden relative">
            <p className="text-caption-1 text-ellipsis line-clamp-1 overflow-hidden whitespace-nowrap min-w-0 w-full block">
              {product.product_title}
            </p>

            <div className="flex items-center justify-between w-full">
              <span className="text-caption-1 font-medium text-ny-primary-500">
                {formatToRupiah(product.price)}
              </span>
              <span className="text-caption-2 font-normal text-ny-gray-400">
                {product.quantity} {product.quantity_label}
              </span>
            </div>
          </div>
        </div>
      }>
      {children}
    </Card>
  );
};
