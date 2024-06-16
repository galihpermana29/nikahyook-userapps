'use server';

// put anything fetch request that related to our user service in here

import {
  IFetchGeneralResponse,
  IFetchGeneralSuccessResponse,
} from '@/shared/models/generalInterfaces';
import {
  IAllUserResponse,
  ILoginPayloadRoot,
  ILoginResponseRoot,
  type IUserDetailData,
} from '@/shared/models/userInterfaces';
import { errorHandling } from '@/shared/usecase/errorHandling';
import { cookies } from 'next/headers';
import { getServerSession } from '../usecase/getServerSession';
import type {
  ICreateProfilePayloadRoot,
  IRegisterPayloadRoot,
  IRegisterResponseRoot,
  ICreateProfileResponseRoot,
  ISessionData,
} from '../models/authInterfaces';

const baseURL = process.env.NEXT_PUBLIC_API as string;

export async function setSessions(sessionData: ISessionData) {
  cookies().set('session', JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  });

  cookies().set('client-session', JSON.stringify(sessionData), {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  });
}

export async function register(
  payload: IRegisterPayloadRoot
): Promise<IFetchGeneralResponse<IRegisterResponseRoot | string>> {
  const res = await fetch(baseURL + '/users', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = (await res.json()) as IRegisterResponseRoot;

  return { success: true, data: data.data };
}

export async function createProfile(
  payload: ICreateProfilePayloadRoot,
  id: string | null
): Promise<IFetchGeneralResponse<ICreateProfileResponseRoot | string>> {
  const sessionData = await getServerSession();

  const res = await fetch(baseURL + '/users/' + id, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  const oldUserDetail = sessionData.user_detail;

  const newUserDetail = {
    ...sessionData.user_detail.detail,
    json_text: payload.detail.json_text,
    location: payload.detail.location,
  } as IUserDetailData;

  const newSessionData = {
    ...sessionData,
    user_detail: {
      ...oldUserDetail,
      detail: newUserDetail,
    },
  } as ISessionData;

  await setSessions(newSessionData);

  return { success: true, data };
}

export async function login(
  payload: ILoginPayloadRoot
): Promise<IFetchGeneralResponse<ILoginResponseRoot | string>> {
  const loginRes = await fetch(baseURL + '/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!loginRes.ok) {
    return errorHandling(loginRes);
  }

  const loginData = await loginRes.json();

  const detailRes = await fetch(baseURL + '/users/' + loginData.data.user_id, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${loginData.data.token}`,
    },
  });

  if (!detailRes.ok) {
    return errorHandling(detailRes);
  }

  const userDetail = await detailRes.json();

  await setSessions({ ...loginData.data, user_detail: userDetail.data });

  return { success: true, data: loginData.data };
}

export async function getAllUsers(
  params?: Record<string, any>
): Promise<
  IFetchGeneralResponse<
    IFetchGeneralSuccessResponse<IAllUserResponse[]> | string
  >
> {
  const sessionData = await getServerSession();
  const res = await fetch(baseURL + '/users?' + new URLSearchParams(params), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function getUserDetail(
  id: string
): Promise<
  IFetchGeneralResponse<IFetchGeneralSuccessResponse<IAllUserResponse> | string>
> {
  const sessionData = await getServerSession();
  const res = await fetch(baseURL + '/users/' + id, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  if (data.data && data.data.detail) {
    data.data.detail.vendor_detail = data.data.detail.json_text
      ? JSON.parse(data.data.detail.json_text)
      : {};
  }

  return { success: true, data };
}
