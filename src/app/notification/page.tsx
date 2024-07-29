import { getNotifications } from '@/shared/actions/notificationService';
import React, { Suspense } from 'react';
import { NotificationCard } from './container/NotificationCard';
import { ReadNotifications } from './container/ReadNotifications';

const NotificationPage = async () => {
  const notifications = await getNotifications('unread');
  const hasNewNotifications = notifications.data.length > 0;

  return (
    <div className="p-4 flex flex-col gap-3">
      {hasNewNotifications ? (
        <div className="flex items-center gap-8 mb-3">
          <hr className="h-2 w-full" />
          <p className="w-max text-caption-1 font-semibold whitespace-nowrap text-center">
            New notifications
          </p>
          <hr className="h-2 w-full" />
        </div>
      ) : null}

      {notifications.data.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}

      {/* Getting read notifications is expected to take longer than getting the unread ones, components is separated to reduce loading time */}
      <Suspense
        fallback={
          <div className="flex flex-col gap-3">
            <div className="bg-ny-gray-100 rounded-lg h-24 animate-pulse" />
            <div className="bg-ny-gray-100 rounded-lg h-24 animate-pulse" />
            <div className="bg-ny-gray-100 rounded-lg h-24 animate-pulse" />
            <div className="bg-ny-gray-100 rounded-lg h-24 animate-pulse" />
          </div>
        }>
        <ReadNotifications showDivider={hasNewNotifications} />
      </Suspense>
    </div>
  );
};

export default NotificationPage;
