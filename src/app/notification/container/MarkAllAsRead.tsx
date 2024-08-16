'use client';

import React from 'react';
import { useReadAllNotifications } from '../usecase/useReadAllNotifications';
import { useGetNotificationsCount } from '@/shared/usecase/useGetNotificationsCount';

export const MarkAllAsRead = () => {
  const { mutate: readAll } = useReadAllNotifications();
  const count = useGetNotificationsCount();
  if (count === 0) return;
  return (
    <button
      onClick={() => readAll()}
      className="text-caption-2 px-4 w-full max-w-max text-right font-semibold size-full bg-white rounded-none text-ny-primary-500 hover:text-ny-primary-300 transition-all">
      MARK ALL AS READ
    </button>
  );
};
