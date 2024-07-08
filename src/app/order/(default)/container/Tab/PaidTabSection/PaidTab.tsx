import { Alert } from 'antd';
import ItemCard from '../../ItemCard/ItemCard';
import { getOrders } from '@/shared/actions/orderService';
import PaidTabEmpty from './PaidTabEmpty';

export default async function PaidTab() {
  const { data: paidOrders } = await getOrders('payment in review');

  if (paidOrders.length === 0) return <PaidTabEmpty />;

  return (
    <div className="flex flex-col w-full gap-4 justify-center">
      <Alert
        className="text-ny-info-500"
        message="Your payment is awaiting for approval"
        type="info"
        showIcon
      />

      {paidOrders.toReversed().map((order) => (
        <ItemCard key={order.id} item={order} />
      ))}
    </div>
  );
}
