import { IReview } from '@/shared/models/generalInterfaces';
import React from 'react';
import ReviewCard from '../Card/ReviewCard';
import { Rate } from 'antd';
import { StarIcon } from '../Icon/StarIcon';

type IReviewSection = {
  avgRating: number;
  totalReviews: number;
  reviews: IReview[];
};

const ReviewSection = ({
  avgRating,
  totalReviews,
  reviews,
}: IReviewSection) => {
  return (
    <section className="p-4">
      <h2 className="text-caption-1 font-medium">Review</h2>
      <div className="flex items-center gap-1 mb-3">
        <div className="flex shrink-0 justify-center items-start">
          <Rate
            disabled
            allowHalf
            value={avgRating}
            character={<StarIcon className="-ml-2" />}
            className="w-full -translate-y-1 translate-x-1 ml-1"
          />
        </div>
        <p className="text-caption-2 text-ny-gray-200">
          {avgRating} ({totalReviews} Reviews)
        </p>
      </div>
      <div className="space-y-3">
        {reviews.map((item) => (
          <ReviewCard {...item} />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
