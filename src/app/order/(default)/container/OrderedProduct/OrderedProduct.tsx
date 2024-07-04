import type { IOrderDetail } from '@/shared/models/orderInterfaces';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import { Avatar } from 'antd';

export default function OrderedProduct({ product }: { product: IOrderDetail }) {
  return (
    <div className="space-x-4 flex">
      <Avatar className="size-20 shrink-0" shape="square" src={product.image} />

      <div className="flex flex-col justify-between w-full">
        <h1 className="text-caption-2 sm:text-caption-1 line-clamp-2 font-medium">
          {product.product_title}
        </h1>

        <div className="flex items-center justify-between gap-2">
          <span className="text-ny-primary-500 text-caption-1 font-medium">
            {formatToRupiah(product.price)}
          </span>

          <span className="text-caption-2 line-clamp-1 text-ny-gray-400">
            {product.quantity} {product.quantity_label}
          </span>
        </div>
      </div>
    </div>
  );
}
