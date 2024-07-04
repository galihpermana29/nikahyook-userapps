import { Alert } from 'antd';
import ItemCard from '../../ItemCard/ItemCard';
import { getOrders } from '@/shared/actions/orderService';
import OrderedTabEmpty from './OrderedTabEmpty';

export default async function OrderedTab() {
  const orders = await getOrders('waiting for approval').catch(
    (error: Error) => {
      throw error;
    }
  );

  if (orders.data.length === 0 || !orders) return <OrderedTabEmpty />;

  return (
    <div className="flex flex-col w-full gap-4 justify-center">
      <Alert
        className="text-ny-info-500"
        message="Your order is awaiting for approval"
        type="info"
        showIcon
      />

      {orders.data.map((order) => (
        <ItemCard key={order.id} item={order} />
      ))}
    </div>
  );
}
