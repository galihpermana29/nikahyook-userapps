import EmptySection from '@/shared/container/Section/EmptySection';
import MyReviewCard from './container/MyReviewCard';
import { getReview } from '@/shared/actions/productService';

export default async function ReviewPage() {
  const reviews = await getReview();

  if (!reviews.data)
    return (
      <EmptySection
        title="No reviews yet"
        message="You've never done a review. Please place an order on the product of your choice and do a review!"
      />
    );

  return (
    <div className="flex flex-col gap-3 w-full justify-start">
      {reviews.data.map((review) => (
        <MyReviewCard
          key={review.user_id + review.product_id}
          review={review}
        />
      ))}
    </div>
  );
}
