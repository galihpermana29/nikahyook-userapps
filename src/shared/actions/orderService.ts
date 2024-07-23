'use server';

import { revalidateTag } from 'next/cache';
import type {
  IFetchGeneralResponse,
  IFetchGeneralSuccessResponse,
} from '../models/generalInterfaces';
import type {
  IOrder,
  IOrderPaymentPayload,
  TOrderStatus,
} from '../models/orderInterfaces';
import convertObjectToQueryParams from '../usecase/convertObjectToQueryParams';
import { errorHandling } from '../usecase/errorHandling';
import { getServerSession } from '../usecase/getServerSession';
import {
  createAdminNotification,
  createNotification,
} from './notificationService';

const endpoint = process.env.NEXT_PUBLIC_API;
if (!endpoint)
  throw new Error(
    'API endpoint undefined! Make sure to include it in .env file'
  );

export async function getOrders(
  status: TOrderStatus
): Promise<IFetchGeneralResponse<IOrder[]>> {
  const session = await getServerSession();
  const urlParams = convertObjectToQueryParams({
    user_id: session.user_id,
    status,
  });

  const response = await fetch(endpoint + '/orders?' + urlParams, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
    next: {
      tags: [`get-orders-${status}`],
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data = (await response.json()) as IFetchGeneralSuccessResponse<
    IOrder[]
  >;

  return { success: true, data: data.data };
}

export async function getOrderDetail(
  id: IOrder['id']
): Promise<IFetchGeneralResponse<IOrder>> {
  const session = await getServerSession();

  const response = await fetch(endpoint + '/orders/' + id, {
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data = (await response.json()) as IFetchGeneralSuccessResponse<IOrder>;

  return { success: true, data: data.data };
}

export async function updateOrderPayment(
  id: IOrder['id'],
  payload: IOrderPaymentPayload
): Promise<IFetchGeneralResponse<string>> {
  const session = await getServerSession();

  const response = await fetch(endpoint + '/orders/' + id, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  revalidateTag(`get-orders-${payload.status}`);

  const data = (await response.json()) as IFetchGeneralSuccessResponse<string>;

  return { success: true, data: data.data };
}

export async function notifyUpdatePayment(id: IOrder['id']) {
  const session = await getServerSession();
  const { data: order } = await getOrderDetail(id);

  await Promise.all([
    await createNotification({
      title: 'Payment received!',
      description: `${session.user_detail.name} has made a payment!`,
      user_id: order.order_details[0].vendor_id,
      status: 'unread',
    }),

    await createAdminNotification({
      title: 'A payment has been made!',
      description: `${session.user_detail.name} has made a payment!`,
      status: 'unread',
    }),
  ]);

  return;
}
