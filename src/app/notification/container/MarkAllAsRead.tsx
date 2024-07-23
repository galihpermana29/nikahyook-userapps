'use client';

import { Button } from 'antd';
import React from 'react';
import { useReadAllNotifications } from '../usecase/useReadAllNotifications';

export const MarkAllAsRead = () => {
  const { mutate: readAll } = useReadAllNotifications();
  return (
    <Button
      onClick={() => readAll()}
      type="link"
      className="text-caption-2 w-full max-w-max text-right font-semibold text-ny-primary-500">
      MARK ALL AS READ
    </Button>
  );
};
