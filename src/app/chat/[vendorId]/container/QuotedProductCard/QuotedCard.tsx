import formatToRupiah from '@/shared/usecase/formatToRupiah';
import { Avatar } from 'antd';
import closeIcon from '../../../../../../public/assets/close.svg';
import Image from 'next/image';

export type TQuotedCardProduct = {
  productImage: string;
  productName: string;
  productPrice: number;
  productQuantityLabel: string;
};

export default function QuotedCard({
  product,
}: {
  product: TQuotedCardProduct;
}) {
  return (
    <div className="py-[12px] px-[8px] flex box-border h-[100px] shadow-sm gap-[12px]">
      <Avatar
        className="size-20 shrink-0"
        shape="square"
        src={product.productImage}
      />

      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between items-start">
          <h1 className="text-caption-2 sm:text-caption-1 line-clamp-2 font-medium">
            {product.productName}
          </h1>
          <Image src={closeIcon} alt="close" className="cursor-pointer" />
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="text-ny-primary-500 text-caption-1 font-medium">
            {formatToRupiah(product.productPrice)}
            <span className="text-caption-2">
              {'/'}
              {product.productQuantityLabel}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
