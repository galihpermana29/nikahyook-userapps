import { StarIcon } from '@/shared/container/Icon/StarIcon';
import type { IReview } from '@/shared/models/generalInterfaces';
import { Button, Card, Rate } from 'antd';

export default function MyReviewCard({ review }: { review: IReview }) {
  return (
    <Card className="drop-shadow" title={review.name} bordered={false}>
      My Review:
      <div className="flex items-center gap-8">
        <Rate
          style={{ scale: 1.5 }}
          disabled
          allowHalf
          value={review.rating}
          character={<StarIcon className="-ml-2" />}
          className="flex items-center -translate-y-0 translate-x-2 ml-2"
        />

        <span className="text-caption-2 text-ny-gray-400">
          {review.rating.toPrecision(2)}
        </span>
      </div>
      <div className="block rounded-lg border-[1px] bg-ny-gray-100 mt-2 py-2 px-[10px] text-caption-2">
        {review.comment}
      </div>
      <div className="flex justify-end mt-2">
        <Button className="text-caption-2 text-ny-primary-400" type="link">
          See Review
        </Button>
      </div>
    </Card>
  );
}
