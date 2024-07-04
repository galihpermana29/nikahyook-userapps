import { Alert } from 'antd';
import ItemCard from '../../ItemCard/ItemCard';
import { getOrders } from '@/shared/actions/orderService';
import OrderedTabEmpty from './OrderedTabEmpty';

export default async function OrderedTab() {
  const orderedItems = await getOrders('waiting for approval').catch(
    (error: Error) => {
      throw error;
    }
  );

  if (orderedItems.data.length === 0) return <OrderedTabEmpty />;

  return (
    <div className="flex flex-col w-full gap-4 justify-center">
      <Alert
        className="text-ny-info-500"
        message="Your order is awaiting for approval"
        type="info"
        showIcon
      />

      {orderedItems
        ? orderedItems.data.map((orderedItem) => (
            <ItemCard key={orderedItem.id} item={orderedItem} />
          ))
        : 'Empty'}
    </div>
  );
}
