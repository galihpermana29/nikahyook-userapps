import { IReviewData } from '@/shared/models/generalInterfaces';
import { Rate } from 'antd';
import { StarIcon } from '../Icon/StarIcon';
import EmptySection from './EmptySection';
import formatRating from '@/shared/usecase/formatRating';
import React from 'react';
import ReviewCard from '../Card/ReviewCard';

type IReviewSection = {
  avgRating: number;
  totalReviews: number;
  reviews: IReviewData[];
};

const ReviewSection = ({
  avgRating,
  totalReviews,
  reviews,
}: IReviewSection) => {
  return (
    <section className="p-4">
      <h2 className="text-body-2 font-medium mb-[6px]">Review</h2>
      {reviews.length > 0 ? (
        <>
          <div className="flex items-center gap-1 mb-3">
            <div className="flex shrink-0 justify-center items-center">
              <Rate
                disabled
                allowHalf
                value={avgRating}
                character={<StarIcon className="size-[15px] -ml-2" />}
                className="w-full -translate-y-[2px] translate-x-1 ml-1"
              />
            </div>
            <p className="text-caption-2 text-ny-gray-200">
              {formatRating(avgRating)} ({totalReviews} Reviews)
            </p>
          </div>
          <div className="space-y-3">
            {reviews.map((item) => (
              <ReviewCard key={item.name} {...item} />
            ))}
          </div>
        </>
      ) : (
        <EmptySection message="No reviews available" />
      )}
    </section>
  );
};

export default ReviewSection;
