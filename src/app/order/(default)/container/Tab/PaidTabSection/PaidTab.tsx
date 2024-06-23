import { Alert } from 'antd';
import generateUUID from '@/shared/usecase/generateUUID';
import ItemCard from '../../ItemCard/ItemCard';
import useGetPaidItems from '../../../usecase/useGetPaidItems';

export default async function PaidTab() {
  const paidItems = await useGetPaidItems();

  return (
    <div className="flex flex-col w-full gap-4 justify-center">
      <Alert
        className="text-ny-info-500"
        message="Your payment is awaiting for approval"
        type="info"
        showIcon
      />

      {paidItems.map((paidItem, index) => (
        <ItemCard
          key={paidItem.vendorName + index + generateUUID()}
          item={paidItem}
        />
      ))}
    </div>
  );
}
