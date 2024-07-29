import { TListChats } from '@/shared/models/chatInterfaces';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase-config';
import { getClientSession } from '@/shared/usecase/getClientSession';

const useMarkAsRead = (chat: TListChats) => {
  const user = getClientSession();

  const markAsRead = async () => {
    const combinedId: string = user.user_id + '.' + chat.userInfo.uid;

    await updateDoc(doc(db, 'userChats', user.user_id), {
      [combinedId + '.userInfo']: {
        uid: chat.userInfo.uid,
        displayName: chat.userInfo.displayName,
        displayPicture: chat.userInfo.displayPicture,
      },
      [combinedId + '.lastMessage']: {
        text: chat.lastMessage.text,
        isRead: true,
      },
    });
  };

  return { markAsRead };
};

export default useMarkAsRead;
