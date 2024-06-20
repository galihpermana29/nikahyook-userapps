import formatToRupiah from '@/shared/usecase/formatToRupiah';
import useGetOrderDetail from '../usecase/useGetOrderDetail';

export default async function OrderPriceDetail({
  orderId,
}: {
  orderId: string;
}) {
  const order = await useGetOrderDetail(orderId);

  if (!order) return null;

  const totalPrice = order.products.reduce(
    (curr, val) => curr + val.productPrice,
    0
  );

  return (
    <div className="flex justify-between items-center sticky bottom-0 p-4 bg-ny-gray-50 w-full border-t max-w-screen-sm">
      <p className="text-body-2 font-medium">Total Price</p>
      <p className="text-body-1 font-medium text-ny-primary-500">
        {formatToRupiah(totalPrice)}
      </p>
    </div>
  );
}
