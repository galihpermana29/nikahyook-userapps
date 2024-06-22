import OrderDetailHeader from './container/OrderDetailHeader';
import useGetOrderDetail from './usecase/useGetOrderDetail';
import ProductCard from './container/ProductCard';
import generateUUID from '@/shared/usecase/generateUUID';
import { notFound } from 'next/navigation';

export default async function OrderDetailsPage({
  params,
}: Readonly<{
  params: { orderId: string };
}>) {
  const order = await useGetOrderDetail(params.orderId);

  if (!order) return notFound();

  return (
    <div className="flex flex-col gap-5 w-full">
      <OrderDetailHeader order={order} />
      <div className="space-y-2">
        <h1 className="text-body-2">Products</h1>
        {order.products.map((product) => (
          <ProductCard
            key={product.productName + generateUUID()}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
