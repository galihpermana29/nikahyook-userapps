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
} from '@/shared/models/userInterfaces';
import { errorHandling } from '@/shared/usecase/errorHandling';
import { cookies } from 'next/headers';
import { getServerSession } from '../usecase/getServerSession';
import type {
  ICreateProfilePayloadRoot,
  IRegisterPayloadRoot,
  IRegisterResponseRoot,
  ICreateProfileResponseRoot,
} from '../models/authInterfaces';

const baseURL = process.env.NEXT_PUBLIC_API as string;

export async function setSessions(sessionData: ILoginResponseRoot) {
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

  return { success: true, data };
}

export async function login(
  payload: ILoginPayloadRoot
): Promise<IFetchGeneralResponse<ILoginResponseRoot | string>> {
  const res = await fetch(baseURL + '/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();
  setSessions(data.data);

  return { success: true, data };
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
