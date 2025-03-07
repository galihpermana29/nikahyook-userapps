import ItemCard from '../../ItemCard/ItemCard';
import { getOrders } from '@/shared/actions/orderService';
import FailedTabEmpty from './FailedTabEmpty';

export default async function FailedTab() {
  const failedOrders = await getOrders('order failed');
  if (failedOrders.data.length === 0) return <FailedTabEmpty />;

  return (
    <div className="flex flex-col w-full gap-4 justify-center">
      {failedOrders.data.map((failedOrder) => (
        <ItemCard key={failedOrder.id} item={failedOrder} />
      ))}
    </div>
  );
}
