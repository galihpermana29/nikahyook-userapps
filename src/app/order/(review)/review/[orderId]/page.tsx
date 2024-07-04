import { getOrderDetail } from '@/shared/actions/orderService';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import { Avatar, Card } from 'antd';
import AddReviewContainer from './container/AddReviewContainer';

export default async function ReviewPage({
  params,
}: Readonly<{
  params: { orderId: string };
}>) {
  const { data: order } = await getOrderDetail(parseInt(params.orderId)).catch(
    (error: Error) => {
      throw error;
    }
  );

  return (
    <div className="space-y-3 w-full overflow-hidden">
      {order.order_details.map((product) => (
        <Card
          key={product.product_id}
          classNames={{
            body: 'flex flex-col',
            title: 'py-4 w-full overflow-hidden',
            header: 'w-full overflow-hidden',
          }}
          title={
            <div className="flex items-center gap-4 w-full overflow-hidden">
              <Avatar
                className="size-12 shrink-0"
                shape="square"
                src={product.image}
              />
              <div className="flex flex-col items-start gap-0 w-full overflow-hidden relative">
                <p className="text-caption-1 text-ellipsis line-clamp-1 overflow-hidden whitespace-nowrap min-w-0 w-full block">
                  {product.product_title}
                </p>

                <div className="flex items-center justify-between w-full">
                  <span className="text-caption-1 font-medium text-ny-primary-500">
                    {formatToRupiah(product.price)}
                  </span>
                  <span className="text-caption-2 font-normal text-ny-gray-400">
                    {product.quantity} {product.quantity_label}
                  </span>
                </div>
              </div>
            </div>
          }>
          <div className="flex flex-col justify-between w-full overflow-hidden">
            <AddReviewContainer productId={product.product_id} />
          </div>
        </Card>
      ))}
    </div>
  );
}
