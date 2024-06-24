import { Timestamp } from 'firebase/firestore';

export interface IChatOverview {
  vendorId: string;
  vendorName: string;
  vendorProfileImage: string;
  isRead: boolean;
  latestMessage: TChatBubbleContent;
}

export interface IChatBubble {
  vendorId: string;
  userId: string;
  sentBy: 'user' | 'vendor';
  sentAt: string;
  message: string;
}

export type TChatBubbleContent = Omit<IChatBubble, 'vendorId' | 'userId'>;

export interface ISendMessagePayload {
  vendorId: string;
  sentAt: string;
  message: string;
}

export type TMessages = {
  date: unknown;
  id: string;
  product: string;
  senderId: string;
  text: string;
  timeStamp: string;
};

export type TListChats = {
  date: Timestamp;
  lastMessage: { text: string; isRead: boolean };
  userInfo: {
    displayName: string;
    displayPicture: string;
    uid: string;
  };
};

export type TFirebaseChats = {
  messages: TMessages[];
};
