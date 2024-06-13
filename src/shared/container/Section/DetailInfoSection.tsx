import { ICoverageArea } from '@/shared/models/generalInterfaces';
import { LocationIcon } from '../Icon/LocationIcon';
import { Rate } from 'antd';
import { StarIcon } from '../Icon/StarIcon';
import formatRating from '@/shared/usecase/formatRating';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import React, { useMemo } from 'react';

type IDetailInfoSection = {
  price?: number;
  startFrom?: boolean;
  product_type?: string;
  title: string;
  sold?: number;
  rating?: number;
  totalReview?: number;
  coverage_area?: ICoverageArea[];
  location?: string;
};

const DetailInfoSection = ({
  price,
  startFrom = false,
  product_type,
  title,
  sold,
  rating,
  totalReview,
  coverage_area,
  location,
}: IDetailInfoSection) => {
  const formatCoverageArea = (areas?: ICoverageArea[]) => {
    if (!areas || areas.length === 0) return '';
    const cities = areas.map((area) => area.city.label).slice(0, 3);
    const remainingCitiesCount = areas.length - cities.length;
    return remainingCitiesCount > 0
      ? `${cities.join(', ')} ++ ${remainingCitiesCount} more`
      : cities.join(', ');
  };

  const formattedCoverageArea = useMemo(
    () => formatCoverageArea(coverage_area),
    [coverage_area]
  );

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
      {coverage_area && coverage_area.length > 0 && (
        <div className="flex items-center gap-1">
          <LocationIcon className="text-ny-primary-500 shrink-0" />
          <p className="text-caption-3 line-clamp-1 text-ny-gray-400">
            {formattedCoverageArea}
          </p>
        </div>
      )}
      {location && (
        <div className="flex items-center gap-1">
          <LocationIcon className="text-ny-primary-500 shrink-0" />
          <p className="text-caption-3 line-clamp-1 text-ny-gray-400">
            {location}
          </p>
        </div>
      )}
    </section>
  );
};

export default DetailInfoSection;
