import { Alert } from 'antd';
import ItemCard from '../../ItemCard/ItemCard';
import { getOrders } from '@/shared/actions/orderService';
import OrderedTabEmpty from './OrderedTabEmpty';

export default async function OrderedTab() {
  const { data: orders } = await getOrders('waiting for approval');

  if (orders.length === 0) return <OrderedTabEmpty />;

  return (
    <div className="flex flex-col w-full gap-4">
      <Alert
        className="text-ny-info-500"
        message="Your order is awaiting for approval"
        type="info"
        showIcon
      />

      {orders.map((order) => (
        <ItemCard key={order.id} item={order} />
      ))}
    </div>
  );
}
