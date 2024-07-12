'use server';

import { revalidateTag } from 'next/cache';
import type {
  IFetchGeneralResponse,
  IFetchGeneralSuccessResponse,
} from '../models/generalInterfaces';
import type {
  TCreateGuestGroupsPayload,
  TGuestAttending,
  TGuestGroup,
  TUpdateGuestAttendingPayload,
  TUpdateGuestGroup,
} from '../models/guestInterfaces';
import { errorHandling } from '../usecase/errorHandling';
import { getServerSession } from '../usecase/getServerSession';

const endpoint = process.env.NEXT_PUBLIC_API as string;

export const getAttendingGuests = async (): Promise<
  IFetchGeneralResponse<TGuestAttending>
> => {
  const session = await getServerSession();
  const response = await fetch(endpoint + '/guests/target-attending', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
    next: {
      tags: ['get-attending-guests'],
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data =
    (await response.json()) as IFetchGeneralSuccessResponse<TGuestAttending>;

  return { success: true, data: data.data };
};

export const updateAttendingGuests = async (
  payload: TUpdateGuestAttendingPayload
): Promise<IFetchGeneralResponse<number>> => {
  const session = await getServerSession();
  const response = await fetch(endpoint + '/guests/target-attending', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data = (await response.json()) as IFetchGeneralSuccessResponse<number>;
  revalidateTag('get-attending-guests');

  return { success: true, data: data.data };
};

export const getListsOfGuests = async (): Promise<
  IFetchGeneralResponse<TGuestGroup[]>
> => {
  const session = await getServerSession();
  const response = await fetch(endpoint + '/guests', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
    next: {
      tags: ['get-lists-of-guests'],
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data = (await response.json()) as IFetchGeneralSuccessResponse<
    TGuestGroup[]
  >;

  return { success: true, data: data.data };
};

export const getGuestGroup = async (
  id: TGuestGroup['id']
): Promise<IFetchGeneralResponse<TGuestGroup>> => {
  const session = await getServerSession();

  const response = await fetch(endpoint + `/guests/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
    next: {
      tags: ['get-guest-group'],
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data =
    (await response.json()) as IFetchGeneralSuccessResponse<TGuestGroup>;

  return { success: true, data: data.data };
};

export const createGuestGroup = async (
  payload: TCreateGuestGroupsPayload
): Promise<IFetchGeneralResponse<string>> => {
  const session = await getServerSession();
  const response = await fetch(endpoint + '/guests', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data = (await response.json()) as IFetchGeneralSuccessResponse<string>;

  return { success: true, data: data.data };
};

export const deleteGuestGroup = async (
  id: TGuestGroup['id']
): Promise<IFetchGeneralResponse<TGuestGroup['id']>> => {
  const session = await getServerSession();
  const response = await fetch(endpoint + `/guests/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data = (await response.json()) as IFetchGeneralSuccessResponse<
    TGuestGroup['id']
  >;

  return { success: true, data: data.data };
};

export const updateGuestGroup = async (
  payload: TUpdateGuestGroup,
  id: TGuestGroup['id']
): Promise<IFetchGeneralResponse<TGuestGroup['id']>> => {
  const session = await getServerSession();
  const response = await fetch(endpoint + `/guests/${id}`, {
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

  const data = (await response.json()) as IFetchGeneralSuccessResponse<
    TGuestGroup['id']
  >;

  return { success: true, data: data.data };
};
