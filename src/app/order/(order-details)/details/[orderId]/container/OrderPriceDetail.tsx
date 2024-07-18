import formatToRupiah from '@/shared/usecase/formatToRupiah';
import { getOrderDetail } from '@/shared/actions/orderService';

export default async function OrderPriceDetail({
  orderId,
}: {
  orderId: string;
}) {
  const order = await getOrderDetail(parseInt(orderId));

  if (!order.data) return null;

  const totalPrice = order.data.order_details.reduce(
    (curr, val) => curr + val.price,
    0
  );

  return (
    <div className="flex justify-between items-center sticky bottom-0 p-4 bg-ny-gray-50 w-full border-t">
      <p className="text-body-2 font-medium">Total Price</p>
      <p className="text-body-1 font-medium text-ny-primary-500">
        {formatToRupiah(totalPrice)}
      </p>
    </div>
  );
}
