import { IReview } from '@/shared/models/generalInterfaces';
import { Rate } from 'antd';
import Image from 'next/image';
import React from 'react';
import { StarIcon } from '../Icon/StarIcon';

const ReviewCard = ({ profile_image_url, name, rating, comment }: IReview) => {
  return (
    <div className="space-y-2 p-3 border border-gray-300 rounded-lg">
      <div className="flex items-start gap-2">
        <div
          style={{ position: 'relative', width: `${40}px`, height: `${40}px` }}
        >
          <Image
            src={profile_image_url}
            alt={`${name} Profile picture`}
            fill
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <div className="flex shrink-0 justify-center items-start">
            <Rate
              disabled
              allowHalf
              value={rating}
              character={<StarIcon className="-ml-2" />}
              className="w-full -translate-y-1 translate-x-1 ml-1"
            />
          </div>
        </div>
      </div>
      <p className="text-caption-1 text-ny-gray-400">{comment}</p>
    </div>
  );
};

export default ReviewCard;
