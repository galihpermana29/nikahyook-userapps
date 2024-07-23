'use client';

import { readAllNotifications } from '@/shared/actions/notificationService';
import { useMutation, useQueryClient } from 'react-query';

export const useReadAllNotifications = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['read-all-notifications'],
    mutationFn: () => readAllNotifications(),
    onSuccess: () => {
      queryClient.refetchQueries(['use-get-notifications-count']);
    },
  });
};
