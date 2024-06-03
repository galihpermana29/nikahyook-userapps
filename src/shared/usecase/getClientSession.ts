'use client';

import { useCookies } from 'next-client-cookies';
import { ILoginResponseRoot } from '../models/userInterfaces';

export const getClientSession = () => {
  const cookies = useCookies();
  const sessionData: ILoginResponseRoot = cookies.get('client-session')
    ? JSON.parse(cookies.get('client-session')!)
    : null;

  return sessionData;
};
