'use server';

import { cookies } from 'next/headers';

export const removeOAuthCookies = async () => {
  cookies().delete('oAuthStatus');
};

export const getOAuthCookies = async () => {
  const oAuthData = cookies().get('oAuthStatus')?.value
    ? JSON.parse(cookies().get('oAuthStatus')?.value as string)
    : null;

  return oAuthData;
};
