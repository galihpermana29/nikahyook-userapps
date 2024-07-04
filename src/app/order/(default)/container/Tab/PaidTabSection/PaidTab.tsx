import { Alert } from 'antd';
import ItemCard from '../../ItemCard/ItemCard';
import { getOrders } from '@/shared/actions/orderService';
import PaidTabEmpty from './PaidTabEmpty';

export default async function PaidTab() {
  const { data: paidItems } = await getOrders('payment in review').catch(
    (error: Error) => {
      throw error;
    }
  );

  if (paidItems.length === 0) return <PaidTabEmpty />;

  return (
    <div className="flex flex-col w-full gap-4 justify-center">
      <Alert
        className="text-ny-info-500"
        message="Your payment is awaiting for approval"
        type="info"
        showIcon
      />

      {paidItems.map((paidItem) => (
        <ItemCard key={paidItem.id} item={paidItem} />
      ))}
    </div>
  );
}
