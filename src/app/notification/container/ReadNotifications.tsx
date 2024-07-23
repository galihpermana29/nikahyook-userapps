import { getNotifications } from '@/shared/actions/notificationService';
import React from 'react';
import { NotificationCard } from './NotificationCard';
import { Divider } from 'antd';

export const ReadNotifications = async ({
  showDivider,
}: {
  showDivider: boolean;
}) => {
  const notifications = await getNotifications('read');
  return (
    <>
      {showDivider && notifications.data.length > 0 && <Divider />}
      {notifications.data.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </>
  );
};
