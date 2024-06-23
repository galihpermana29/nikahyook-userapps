import type {
  IChatBubble,
  TFirebaseChats,
  TMessages,
} from '@/shared/models/chatInterfaces';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../../../firebase-config';
import { getClientSession } from '@/shared/usecase/getClientSession';

// InVilla
const bubbleChatsInVilla = [
  {
    vendorId: '30e7b88d-666b-4251-aeaa-358acf0a80a6',
    userId: 'ecd18c17-882a-4b2b-9ca6-3746a0ff29c0',
    sentBy: 'user' as const,
    sentAt: new Date(2024, 5, 22, 9, 31, 16).toISOString(),
    message:
      "Hi, I'm looking to book a wedding venue for next summer. Is the Rosewood Hall available?",
  },
  {
    vendorId: '30e7b88d-666b-4251-aeaa-358acf0a80a6',
    userId: 'ecd18c17-882a-4b2b-9ca6-3746a0ff29c0',
    sentBy: 'vendor' as const,
    sentAt: new Date(2024, 5, 22, 11, 29, 16).toISOString(),
    message:
      'Hello! Thank you for reaching out. Let me check the availability for Rosewood Hall next summer. Do you have a specific date in mind?',
  },
  {
    vendorId: '30e7b88d-666b-4251-aeaa-358acf0a80a6',
    userId: 'ecd18c17-882a-4b2b-9ca6-3746a0ff29c0',
    sentBy: 'user' as const,
    sentAt: new Date(2024, 5, 23, 7, 2, 12).toISOString(),
    message: "We're thinking about June 15th. Is that date open?",
  },
] as IChatBubble[];

// Gacoan
const bubbleChatsGacoan = [
  {
    vendorId: '43dc4511-9d28-4867-9f87-b9090ca1b4a5',
    userId: 'ecd18c17-882a-4b2b-9ca6-3746a0ff29c0',
    sentBy: 'user' as const,
    sentAt: new Date(2024, 9, 11, 2, 31, 16).toISOString(),
    message:
      "Hi, I'm looking to book a wedding venue for next summer. Is the Rosewood Hall available?",
  },
] as IChatBubble[];

// The Flower Boutique
const bubbleChatsFlowerBoutique = [
  {
    vendorId: '89f7a123-456c-789b-0def-123456789abc',
    userId: 'ecd18c17-882a-4b2b-9ca6-3746a0ff29c0', // Assuming the same user
    sentBy: 'user' as const,
    sentAt: new Date(2024, 5, 20, 10, 15, 0).toISOString(), // Earlier message
    message:
      "Hi, I'm looking for flowers for a rustic-themed wedding. Do you have any suggestions?",
  },
  {
    vendorId: '89f7a123-456c-789b-0def-123456789abc',
    userId: 'ecd18c17-882a-4b2b-9ca6-3746a0ff29c0',
    sentBy: 'vendor' as const,
    sentAt: new Date(2024, 5, 21, 15, 38, 5).toISOString(),
    message:
      'Absolutely! We have several floral arrangements that would be perfect for a rustic theme.',
  },
] as IChatBubble[];

// DJ Soundwave
const bubbleChatsDJSoundwave = [
  {
    vendorId: '9876fedc-ba98-7654-3210-0fedcba98765',
    userId: 'ecd18c17-882a-4b2b-9ca6-3746a0ff29c0',
    sentBy: 'user' as const,
    sentAt: new Date(2024, 5, 19, 9, 45, 22).toISOString(),
    message:
      'Could you send me a list of your top 10 most requested wedding songs?',
  },
] as IChatBubble[];

// Sweet Treats Bakery
const bubbleChatsSweetTreatsBakery = [
  {
    vendorId: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    userId: 'ecd18c17-882a-4b2b-9ca6-3746a0ff29c0',
    sentBy: 'user' as const,
    sentAt: new Date(2024, 5, 17, 14, 30, 12).toISOString(), // Earlier message
    message:
      "Hi, we're interested in a custom wedding cake. Can you do a cake topper with our initials?",
  },
  {
    vendorId: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    userId: 'ecd18c17-882a-4b2b-9ca6-3746a0ff29c0',
    sentBy: 'vendor' as const,
    sentAt: new Date(2024, 5, 18, 17, 2, 58).toISOString(),
    message:
      'We can definitely create a custom cake topper with your initials and wedding date.',
  },
] as IChatBubble[];

const allBubbleChats = [
  ...bubbleChatsInVilla,
  ...bubbleChatsGacoan,
  ...bubbleChatsFlowerBoutique,
  ...bubbleChatsDJSoundwave,
  ...bubbleChatsSweetTreatsBakery,
];

export default function useGetBubbleChats(vendorId: string) {
  const userSession = getClientSession();
  const combinedId = userSession.user_id + '.' + vendorId;

  const [allChat, setAllChat] = useState<TMessages[]>([]);
  const vendorChats = allBubbleChats.filter(
    (chat) => chat.vendorId === vendorId
  );

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

  return { vendorChats, allChat };
}
