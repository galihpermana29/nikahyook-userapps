import OrderDetailHeader from './container/OrderDetailHeader';
import ProductCard from './container/ProductCard';
import { notFound } from 'next/navigation';
import { getOrderDetail } from '@/shared/actions/orderService';

export default async function OrderDetailsPage({
  params,
}: Readonly<{
  params: { orderId: string };
}>) {
  const order = await getOrderDetail(parseInt(params.orderId)).catch(
    (error: Error) => {
      throw error;
    }
  );

  if (!order.data) return notFound();

  return (
    <div className="flex flex-col gap-5 w-full">
      <OrderDetailHeader order={order.data} />
      <div className="space-y-2">
        <h1 className="text-body-2">Products</h1>
        {order.data.order_details.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
