import { Rate } from 'antd';
import { StarIcon } from '../Icon/StarIcon';
import formatRating from '@/shared/usecase/formatRating';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import React from 'react';

type IDetailInfoSection = {
  price?: number;
  startFrom?: boolean;
  product_type?: string;
  title: string;
  sold?: number;
  rating?: number;
  totalReview?: number;
};

const DetailInfoSection = ({
  price,
  startFrom = false,
  product_type,
  title,
  sold,
  rating,
  totalReview,
}: IDetailInfoSection) => {
  return (
    <section className="space-y-[6px] px-4 py-3">
      {price && product_type && (
        <div className="flex items-center justify-between">
          <p className="text-body-2 text-ny-primary-500 font-medium">
            {`${startFrom ? 'Price From' : ''} ${formatToRupiah(price ?? 0)}`}
          </p>
          <p className="text-caption-1">{product_type}</p>
        </div>
      )}
      <h2 className="text-body-2 font-medium">{title}</h2>
      {rating !== undefined &&
        sold !== undefined &&
        totalReview !== undefined && (
          <div className="flex items-center justify-between">
            <p className="text-caption-2 text-ny-gray-400">Terjual {sold}</p>
            <div className="flex items-center gap-[2px]">
              <p className="text-caption-2 text-ny-gray-400">
                {formatRating(rating)} ({totalReview})
              </p>
              <div className="flex shrink-0 justify-center items-start">
                <Rate
                  disabled
                  allowHalf
                  value={rating}
                  character={<StarIcon className="size-[15px] -ml-2" />}
                  className="w-full -translate-y-[1px] ml-2"
                />
              </div>
            </div>
          </div>
        )}
    </section>
  );
};

export default DetailInfoSection;
