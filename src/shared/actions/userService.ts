'use server';

// put anything fetch request that related to our user service in here

import { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import {
  ILoginPayloadRoot,
  ILoginResponseRoot,
} from '@/shared/models/userInterfaces';
import { errorHandling } from '@/shared/usecase/errorHandling';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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
