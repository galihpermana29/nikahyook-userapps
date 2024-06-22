import { Alert } from 'antd';
import generateUUID from '@/shared/usecase/generateUUID';
import ItemCard from '../../ItemCard/ItemCard';
import useGetOrderedItems from '../../../usecase/useGetOrderedItems';

export default async function OrderedTab() {
  const orderedItems = await useGetOrderedItems();

  return (
    <div className="flex flex-col w-full gap-4 justify-center">
      <Alert
        className="text-ny-info-500"
        message="Your order is awaiting for approval"
        type="info"
        showIcon
      />

      {orderedItems.map((orderedItem, index) => (
        <ItemCard
          key={orderedItem.vendorName + index + generateUUID()}
          item={orderedItem}
        />
      ))}
    </div>
  );
}
