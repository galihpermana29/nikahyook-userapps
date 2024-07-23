'use client';

import { createNotification } from '@/shared/actions/notificationService';
import type { IVendor } from '@/shared/models/productInterfaces';
import { getClientSession } from '@/shared/usecase/getClientSession';
import { useMutation } from 'react-query';

export const useNotifyChat = (vendorId: IVendor['id']) => {
  const session = getClientSession();
  return useMutation({
    mutationKey: ['notify-chat', { vendorId }],
    mutationFn: () =>
      createNotification({
        title: 'New message arrived!',
        description: `${session.user_detail.name} sent you a message!`,
        user_id: vendorId,
        status: 'unread',
      }),
  });
};
