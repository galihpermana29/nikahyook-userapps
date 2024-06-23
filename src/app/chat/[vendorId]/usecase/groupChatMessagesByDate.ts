import type { IChatBubble } from '@/shared/models/chatInterfaces';
import dayjs from 'dayjs';

export default function groupChatMessagesByDate(messages: IChatBubble[]): {
  [date: string]: IChatBubble[];
} {
  const groupedMessages: { [date: string]: IChatBubble[] } = {};

  messages.forEach((message) => {
    const date = dayjs(message.sentAt).format('YYYY-MM-DD');

    if (!groupedMessages[date]) {
      groupedMessages[date] = [];
    }

    groupedMessages[date].push(message);
  });

  return groupedMessages;
}
