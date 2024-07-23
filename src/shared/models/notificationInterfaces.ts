export type TNotification = {
  id: number;
  title: string;
  description: string;
  user_id: string;
  notification_time: string;
  status: TNotificationStatus;
};

export type TNotificationStatus = 'read' | 'unread';
export type TNotificationPayload = Omit<
  TNotification,
  'id' | 'notification_time'
>;
export type TAdminNotificationPayload = Omit<TNotificationPayload, 'user_id'>;
export type TUpdateNotificationPayload = Partial<TNotificationPayload>;
