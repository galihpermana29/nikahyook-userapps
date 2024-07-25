'use client';

import { useGetNotificationsCount } from '@/shared/usecase/useGetNotificationsCount';
import useMounted from '@/shared/usecase/useMounted';
import { Badge } from 'antd';
import React from 'react';

export const NotificationBadge = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const mounted = useMounted();
  const notificationCount = useGetNotificationsCount();
  return <Badge count={mounted ? notificationCount : 0}>{children}</Badge>;
};
