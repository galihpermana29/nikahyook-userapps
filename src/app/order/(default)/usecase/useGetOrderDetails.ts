'use client';

import { IFetchGeneralResponse } from './../../../../shared/models/generalInterfaces';
import { getOrderDetail } from '@/shared/actions/orderService';
import type { IOrder } from '@/shared/models/orderInterfaces';
import { message } from 'antd';
import { useQuery } from 'react-query';

export default function useGetOrderDetails(orderId: string) {
  return useQuery<IFetchGeneralResponse<IOrder>, Error>({
    queryKey: ['order', { orderId }],
    queryFn: () => getOrderDetail(parseInt(orderId)),
    onError: (error) => message.error(error.message),
  });
}
