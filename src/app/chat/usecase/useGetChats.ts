import { TListChats } from './../../../shared/models/chatInterfaces';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { getClientSession } from '@/shared/usecase/getClientSession';
import { db } from '../../../../firebase-config';

export default function useGetChats() {
  const userSession = getClientSession();
  const [listAllChat, setListAllChat] = useState<{
    original: TListChats[];
    render: TListChats[];
  }>({ original: [], render: [] });

  const searchChat = (keyword: string) => {
    const result = listAllChat.original.filter((dx) =>
      dx.userInfo.displayName.toLowerCase().includes(keyword.toLowerCase())
    );

    setListAllChat((dx) => ({ ...dx, render: result }));
  };

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, 'userChats', userSession.user_id),
        (doc) => {
          const allListChats = doc.data()
            ? (doc.data() as Record<string, TListChats>)[userSession.user_id]
            : null;

          const listAllChat = allListChats
            ? Object.entries(allListChats)
                .map((dx) => ({
                  ...dx[1],
                }))
                .sort((a: any, b: any) => b.date - a.date)
            : [];
          setListAllChat({
            original: listAllChat as unknown as TListChats[],
            render: listAllChat as unknown as TListChats[],
          });
        }
      );

      return () => {
        unsub();
      };
    };

    userSession && getChats();
  }, [userSession.user_id]);

  return { listAllChat, searchChat };
}
