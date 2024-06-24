'use client';

import groupChatMessagesByDate from '../usecase/groupChatMessagesByDate';
import DateDivider from '../../container/DateDivider';
import useGetBubbleChats from '../usecase/useGetBubbleChats';
import { IAllUserResponse } from '@/shared/models/userInterfaces';
import ChatBubble from './ChatBubble';

interface IRoomChatContainer {
  vendor: IAllUserResponse;
}

const RoomChatContainer = ({ vendor }: IRoomChatContainer) => {
  const { allChat } = useGetBubbleChats(vendor.id);
  const chats = groupChatMessagesByDate(allChat);

  return (
    <section
      className="flex flex-col gap-2 px-4 pb-4 overflow-y-auto"
      style={{ height: 'calc(100vh - 55px)' }}>
      {Object.keys(chats).map((date) => (
        <div className="flex flex-col gap-2" key={date}>
          <DateDivider date={date} />

          <div className="flex flex-col gap-5">
            {chats[date].map((chat) => (
              <ChatBubble key={chat.id} chat={chat} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default RoomChatContainer;
