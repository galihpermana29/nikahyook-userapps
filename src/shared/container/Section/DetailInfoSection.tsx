import { Rate } from 'antd';
import React from 'react';
import { StarIcon } from '../Icon/StarIcon';

type IDetailInfoSection = {
  price?: number;
  product_type?: string;
  title: string;
  sold?: number;
  rating: number;
  totalReview?: number;
};

const DetailInfoSection = ({
  price,
  product_type,
  title,
  sold,
  rating,
  totalReview,
}: IDetailInfoSection) => {
  return (
    <section className="space-y-[6px] px-4 py-3">
      <div className="flex items-center justify-between">
        <p className="text-body-2 text-ny-primary-500 font-semibold">
          Rp {price}
        </p>
        <p className="text-caption-1">{product_type}</p>
      </div>
      <h2 className="text-body-2 font-medium">{title} </h2>
      <div className="flex items-center justify-between">
        <p className="text-caption-2 text-ny-gray-400">Terjual {sold}</p>
        <div className="flex items-center gap-1">
          <p className="text-caption-2 text-ny-gray-400">
            {rating} ({totalReview})
          </p>
          <div className="flex shrink-0 justify-center items-start">
            <Rate
              disabled
              allowHalf
              value={4}
              character={<StarIcon className="size-[15px] -ml-2" />}
              className="w-full -translate-y-[1px] ml-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailInfoSection;
