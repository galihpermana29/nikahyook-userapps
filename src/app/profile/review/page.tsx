import type { IReviewData } from '@/shared/models/generalInterfaces';
import MyReviewCard from './container/MyReviewCard';

const reviews: IReviewData[] = [
  {
    user_id: '123',
    profile_image_uri:
      'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1717122421/nikahyook/gxsgo2wdyhnykrgfoxg6.png',
    name: 'White Kebaya Shimmer Shimmer Splendid',
    rating: 4,
    description:
      'Wah kebaya ini sangat cantik sehingga semua tamu yang hadir terpukau. Bahannya mulus semulus kulit bayi, seputih bihun, dan sekeren mudryk ❤️',
  },
  {
    user_id: '123',
    profile_image_uri:
      'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1717122421/nikahyook/gxsgo2wdyhnykrgfoxg6.png',
    name: 'White Kebaya Shimmer Shimmer Splendid',
    rating: 4,
    description:
      'Wah kebaya ini sangat cantik sehingga semua tamu yang hadir terpukau. Bahannya mulus semulus kulit bayi, seputih bihun, dan sekeren mudryk ❤️ ',
  },
];

export default function ReviewPage() {
  return (
    <div className="flex flex-col gap-3 w-full justify-start">
      {reviews.map((review, index) => (
        <MyReviewCard key={'review' + review.name + index} review={review} />
      ))}
    </div>
  );
}
