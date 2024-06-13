'use client';

import { useCookies } from 'next-client-cookies';
import type { ISessionData } from '../models/authInterfaces';

export const getClientSession = () => {
  const cookies = useCookies();
  const sessionData: ISessionData = cookies.get('client-session')
    ? JSON.parse(cookies.get('client-session')!)
    : null;

  return sessionData;
};
