import { cookies } from 'next/headers';
import { ILoginResponseRoot } from '../models/userInterfaces';

export const getServerSession = async () => {
  const sessions = cookies().get('session')?.value;
  const sessionData: ILoginResponseRoot = sessions
    ? JSON.parse(sessions)
    : null;

  return sessionData;
};
