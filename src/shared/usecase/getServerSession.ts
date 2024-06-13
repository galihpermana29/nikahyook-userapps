import { cookies } from 'next/headers';
import type { ISessionData } from '../models/authInterfaces';

export const getServerSession = async () => {
  const sessions = cookies().get('session')?.value;
  const sessionData: ISessionData = sessions ? JSON.parse(sessions) : null;

  return sessionData;
};
