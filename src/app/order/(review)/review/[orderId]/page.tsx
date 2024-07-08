import { getOrderDetail } from '@/shared/actions/orderService';
import AddReviewContainer from './container/AddReviewContainer';
import { ReviewCard } from './container/ReviewCard';

export default async function ReviewPage({
  params,
}: Readonly<{
  params: { orderId: string };
}>) {
  const { data: order } = await getOrderDetail(parseInt(params.orderId));

  return (
    <div className="space-y-3 w-full overflow-hidden">
      {order.order_details.map((product) => (
        <ReviewCard key={product.product_id} product={product}>
          <div className="flex flex-col justify-between w-full overflow-hidden">
            <AddReviewContainer productId={product.product_id} />
          </div>
        </ReviewCard>
      ))}
    </div>
  );
}
