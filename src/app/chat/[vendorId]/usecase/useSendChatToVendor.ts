import {
  Timestamp,
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../../../../firebase-config';
import { v4 as uuidv4 } from 'uuid';
import { IAllUserResponse } from '@/shared/models/userInterfaces';
import { getClientSession } from '@/shared/usecase/getClientSession';
import { usePathname, useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { TQuotedCardProduct } from '../container/QuotedProductCard/QuotedCard';
import { useNotifyChat } from './useNotifyChat';

const useSendChatToVendor = (
  vendor: IAllUserResponse,
  quotedProduct: TQuotedCardProduct | null
) => {
  const user = getClientSession();
  const router = useRouter();
  const pathname = usePathname();
  const combinedId: string = user.user_id + '.' + vendor.id;
  const { mutate: notify } = useNotifyChat(vendor.id);

  const onSendChat = async (text: string) => {
    // check if this is new chat or not,
    const res = await getDoc(doc(db, 'chats', combinedId));

    //  if it's new chat
    if (!res.exists()) {
      // set everything for first time, "chats" is for all chat in room chat
      await setDoc(doc(db, 'chats', combinedId), {
        messages: arrayUnion({
          id: uuidv4(),
          text: text,
          senderId: user.user_id.toString(),
          date: Timestamp.now(),
          product: quotedProduct ? JSON.stringify(quotedProduct) : null,
          timeStamp: dayjs().toString(),
        }),
      });

      const currentUserExist = await getDoc(doc(db, 'userChats', user.user_id));
      const vendorExist = await getDoc(doc(db, 'userChats', vendor.id));

      if (!currentUserExist.exists()) {
        await setDoc(doc(db, 'userChats', user.user_id), {});
      }

      if (!vendorExist.exists()) {
        await setDoc(doc(db, 'userChats', vendor.id), {});
      }
    } else {
      // if this is not a new chat
      // update the chat with the new one
      await updateDoc(doc(db, 'chats', combinedId), {
        messages: arrayUnion({
          id: uuidv4(),
          text: text,
          senderId: user.user_id.toString(),
          date: Timestamp.now(),
          product: quotedProduct ? JSON.stringify(quotedProduct) : null,
          timeStamp: dayjs().toString(),
        }),
      });
    }

    // two function beside is for the list of all chat and the last message to display
    await updateDoc(doc(db, 'userChats', user.user_id), {
      [combinedId + '.userInfo']: {
        uid: vendor.id,
        displayName: vendor.name,
        displayPicture: vendor.profile_image_uri,
      },
      [combinedId + '.date']: serverTimestamp(),
      [combinedId + '.lastMessage']: {
        text: text,
        isRead: true,
      },
    });

    await updateDoc(doc(db, 'userChats', vendor.id), {
      [combinedId + '.userInfo']: {
        uid: user.user_id,
        displayName: user.user_detail.name,
        displayPicture: user.user_detail.profile_image_uri,
      },
      [combinedId + '.date']: serverTimestamp(),
      [combinedId + '.lastMessage']: {
        text: text,
        isRead: false,
      },
    });

    notify();
    if (quotedProduct) {
      clearQuoteProduct();
    }
  };

  const clearQuoteProduct = () => {
    router.push(pathname);
  };
  return { onSendChat, clearQuoteProduct };
};

export default useSendChatToVendor;
