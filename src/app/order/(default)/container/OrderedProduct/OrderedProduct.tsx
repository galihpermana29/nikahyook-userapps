import type { IOrderProduct } from '@/shared/models/orderInterfaces';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import { Avatar } from 'antd';

export default function OrderedProduct({
  product,
}: {
  product: IOrderProduct;
}) {
  return (
    <div className="space-x-4 flex">
      <Avatar
        className="size-20 shrink-0"
        shape="square"
        src={product.productImage}
      />

      <div className="flex flex-col justify-between w-full">
        <h1 className="text-caption-2 sm:text-caption-1 line-clamp-2 font-medium">
          {product.productName}
        </h1>

        <div className="flex items-center justify-between gap-2">
          <span className="text-ny-primary-500 text-caption-1 font-medium">
            {formatToRupiah(product.productPrice)}
          </span>

          <span className="text-caption-2 line-clamp-1 text-ny-gray-400">
            {product.productQty} Pcs
          </span>
        </div>
      </div>
    </div>
  );
}
