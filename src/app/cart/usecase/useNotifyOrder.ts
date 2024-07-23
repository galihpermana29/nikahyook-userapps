'use client';

import { notifyNewOrder } from '@/shared/actions/productService';
import type { IOrder } from '@/shared/models/orderInterfaces';
import { useMutation } from 'react-query';

export const useNotifyOrder = () => {
  return useMutation({
    mutationKey: ['notify-order'],
    mutationFn: (orderId: IOrder['id'][]) => notifyNewOrder(orderId),
  });
};
