'use client';

import { Button } from 'antd';
import React from 'react';
import { useReadAllNotifications } from '../usecase/useReadAllNotifications';
import { useGetNotificationsCount } from '@/shared/usecase/useGetNotificationsCount';

export const MarkAllAsRead = () => {
  const { mutate: readAll } = useReadAllNotifications();
  const count = useGetNotificationsCount();
  if (count === 0) return;
  return (
    <Button
      onClick={() => readAll()}
      type="link"
      className="text-caption-2 w-full max-w-max text-right font-semibold text-ny-primary-500">
      MARK ALL AS READ
    </Button>
  );
};
