'use client';

import { notifyUpdatePayment } from '@/shared/actions/orderService';
import type { IOrder } from '@/shared/models/orderInterfaces';
import { useMutation } from 'react-query';

export const useNotifyPayment = (orderId: IOrder['id']) => {
  return useMutation({
    mutationKey: ['notify-payment', { orderId }],
    mutationFn: () => notifyUpdatePayment(orderId),
  });
};
