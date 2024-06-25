import type { TFirebaseChats, TMessages } from '@/shared/models/chatInterfaces';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../../../firebase-config';
import { getClientSession } from '@/shared/usecase/getClientSession';

export default function useGetBubbleChats(vendorId: string) {
  const userSession = getClientSession();
  const combinedId = userSession.user_id + '.' + vendorId;

  const [allChat, setAllChat] = useState<TMessages[]>([]);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'chats', combinedId), (doc) => {
        const result = doc.data() as TFirebaseChats;
        doc.exists() && setAllChat(result?.messages);
      });

      return () => {
        unsub();
      };
    };

    vendorId && getChats();
  }, [vendorId]);

  return { allChat };
}
