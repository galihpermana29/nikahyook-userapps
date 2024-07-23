'use server';

import type {
  IFetchGeneralResponse,
  IPostGeneralSuccessResponse,
} from '../models/generalInterfaces';
import type {
  TNotification,
  TNotificationPayload,
  TNotificationStatus,
  TUpdateNotificationPayload,
} from '../models/notificationInterfaces';
import { errorHandling } from '../usecase/errorHandling';
import { getServerSession } from '../usecase/getServerSession';
import convertObjectToQueryParams from '../usecase/convertObjectToQueryParams';

const endpoint = process.env.NEXT_PUBLIC_API as string;

export const getNotifications = async ({
  status = 'unread',
}: {
  status?: TNotificationStatus;
}) => {
  const { user_id, token } = await getServerSession();
  const queries = convertObjectToQueryParams({
    user_id,
    status,
  });

  const response = await fetch(endpoint + `/notifications?${queries}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const { data } = (await response.json()) as IFetchGeneralResponse<
    TNotification[]
  >;

  return { success: true, data };
};

export const getNotificationById = async ({
  id,
}: {
  id: TNotification['id'];
}) => {
  const { token } = await getServerSession();

  const response = await fetch(endpoint + `/notifications/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const { data } =
    (await response.json()) as IFetchGeneralResponse<TNotification>;

  return { success: true, data };
};

export const createNotification = async (payload: TNotificationPayload) => {
  const { token } = await getServerSession();
  const response = await fetch(endpoint + '/notifications', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const { data } = (await response.json()) as IPostGeneralSuccessResponse<
    TNotification['id']
  >;

  return { success: true, data };
};

export const updateNotification = async (
  payload: TUpdateNotificationPayload
) => {
  const { token } = await getServerSession();
  const response = await fetch(endpoint + '/notifications', {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const { data } = (await response.json()) as IPostGeneralSuccessResponse<
    TNotification['id']
  >;

  return { success: true, data };
};

export const readAllNotifications = async () => {
  const { token } = await getServerSession();
  const response = await fetch(endpoint + '/notifications', {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const { data } =
    (await response.json()) as IPostGeneralSuccessResponse<'success'>;

  return { success: true, data };
};
