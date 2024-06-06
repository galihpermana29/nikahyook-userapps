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
import { redirect } from 'next/navigation';
import { getServerSession } from '../usecase/getServerSession';

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

export async function login(
  payload: ILoginPayloadRoot
): Promise<IFetchGeneralResponse<ILoginResponseRoot | string>> {
  console.log(payload);
  const res = await fetch(baseURL + '/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();
  setSessions(data.data);

  redirect('/discover');
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
