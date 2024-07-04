'use client';

import { IFetchGeneralResponse } from './../../../../shared/models/generalInterfaces';
import { getOrders } from '@/shared/actions/orderService';
import type { IOrder, TOrderStatus } from '@/shared/models/orderInterfaces';
import { message } from 'antd';
import { useQuery } from 'react-query';

export default function useGetOrders(orderStatus: TOrderStatus) {
  return useQuery<IFetchGeneralResponse<IOrder[]>, Error>({
    queryKey: [orderStatus],
    queryFn: () => getOrders(orderStatus),
    onError: (error) => message.error(error.message),
  });
}
