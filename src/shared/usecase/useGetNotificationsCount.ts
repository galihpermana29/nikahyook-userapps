'use client';

import { useQuery } from 'react-query';
import { getNotifications } from '../actions/notificationService';

export const useGetNotificationsCount = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['use-get-notifications-count'],
    queryFn: () => getNotifications('unread'),
    refetchInterval: 1000 * 60 * 5, // 5 minutes,
  });

  if (!data || !data.data || isError || isLoading) return 0;
  return data.data.length;
};
