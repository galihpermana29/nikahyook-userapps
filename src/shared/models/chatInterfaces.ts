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
