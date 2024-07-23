import type { TNotification } from '@/shared/models/notificationInterfaces';
import dayjs from 'dayjs';
import React from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

export const NotificationCard = ({
  notification,
}: {
  notification: TNotification;
}) => {
  return (
    <div className="grid grid-rows-[auto_1fr] gap-y-3 p-4 rounded-lg border">
      <div className="flex items-center justify-between flex-wrap-reverse gap-y-1">
        <span
          className={`text-body-2 font-semibold ${
            notification.status === 'unread' && 'text-ny-primary-500'
          }`}>
          {notification.title}
        </span>
        <span className="text-caption-2 text-ny-gray-500">
          {dayjs(notification.notification_time, 'DD-MM-YYYY HH:mm:ss')
            .tz('Asia/Jakarta')
            .local()
            .fromNow()}
        </span>
      </div>
      <p className="text-caption-1">{notification.description}</p>
    </div>
  );
};
