'use client';

import ItemCard from '../../ItemCard/ItemCard';
import { Button } from 'antd';
import TabLoading from '../TabLoading/TabLoading';
import useGetOrders from '../../../usecase/useGetOrders';
import FinishedTabEmpty from './FinishedTabEmpty';

export default function FinishedTab() {
  const {
    data: finishedOrders,
    isLoading,
    isError,
    error,
  } = useGetOrders('payment done');

  if (isError) throw error;
  if (isLoading) return <TabLoading />;
  if (!finishedOrders || finishedOrders.data.length === 0)
    return <FinishedTabEmpty />;

  return (
    <div className="flex flex-col w-full gap-4 justify-center">
      {finishedOrders.data.map((order) => {
        return (
          <ItemCard
            key={order.id}
            item={order}
            secondaryButton={
              <Button
                href={`/order/review/${order.id}`}
                type="primary"
                className="bg-ny-primary-100 text-ny-primary-500 block w-full">
                Add Review
              </Button>
            }
            primaryButton={
              <div className="flex items-center gap-2">
                {order.invoice_file_uri ? (
                  <Button
                    target="_blank"
                    href={order.invoice_file_uri}
                    type="primary"
                    className="block w-full">
                    See Receipt
                  </Button>
                ) : null}
                <Button
                  href={`/order/details/${order.id}`}
                  type="primary"
                  className="block w-full">
                  See Detail
                </Button>
              </div>
            }
          />
        );
      })}
    </div>
  );
}
