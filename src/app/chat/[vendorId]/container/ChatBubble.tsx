import type { TMessages } from '@/shared/models/chatInterfaces';
import { getClientSession } from '@/shared/usecase/getClientSession';
import dayjs from 'dayjs';
import QuotedCard from './QuotedProductCard/QuotedCard';

export default function ChatBubble({ chat }: { chat: TMessages }) {
  const clientSession = getClientSession();
  return (
    <div className={`flex flex-col ${chat.product ? 'gap-[10px]' : null}`}>
      <div>
        {chat.product && (
          <QuotedCard
            product={JSON.parse(chat.product)}
            closeComponent={null}
          />
        )}
      </div>
      <div
        className={`flex items-end max-w-64 p-3 gap-[10px] ${
          chat.senderId === clientSession.user_id
            ? 'ml-auto bg-ny-primary-100 rounded-lg'
            : 'mr-auto bg-ny-gray-100 rounded-lg'
        }`}>
        <span className="text-caption-2">{chat.text}</span>
        <span className="text-caption-2 text-ny-gray-400">
          {dayjs(chat.timeStamp).format('HH.mm')}
        </span>
      </div>
    </div>
  );
}
