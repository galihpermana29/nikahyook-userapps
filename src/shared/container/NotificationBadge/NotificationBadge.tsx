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
  if (!mounted) return <Badge count={0}>{children}</Badge>;

  return <Badge count={notificationCount}>{children}</Badge>;
};
