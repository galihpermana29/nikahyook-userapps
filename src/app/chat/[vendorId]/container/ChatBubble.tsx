import type { IChatBubble } from '@/shared/models/chatInterfaces';
import dayjs from 'dayjs';

export default function ChatBubble({ chat }: { chat: IChatBubble }) {
  return (
    <div
      className={`flex items-end max-w-64 p-3 gap-[10px] ${
        chat.sentBy === 'user'
          ? 'ml-auto bg-ny-primary-100 rounded-lg'
          : 'mr-auto bg-ny-gray-100 rounded-lg'
      }`}>
      <span className="text-caption-2">{chat.message}</span>
      <span className="text-caption-2 text-ny-gray-400">
        {dayjs(chat.sentAt).format('HH.mm')}
      </span>
    </div>
  );
}
