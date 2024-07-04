'use client';

import groupChatMessagesByDate from '../usecase/groupChatMessagesByDate';
import DateDivider from '../../container/DateDivider';
import useGetBubbleChats from '../usecase/useGetBubbleChats';
import { IAllUserResponse } from '@/shared/models/userInterfaces';
import ChatBubble from './ChatBubble';
import { useEffect, useRef } from 'react';

interface IRoomChatContainer {
  vendor: IAllUserResponse;
}

const RoomChatContainer = ({ vendor }: IRoomChatContainer) => {
  const ref: any = useRef();

  const { allChat } = useGetBubbleChats(vendor.id);
  const chats = groupChatMessagesByDate(allChat);

  useEffect(() => {
    if (ref?.current) {
      ref.current!.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [chats]);

  return (
    <section
      className="flex flex-col gap-2 px-4 pb-4 overflow-y-auto"
      style={{ height: 'calc(100vh - 55px)' }}>
      {Object.keys(chats).map((date) => (
        <div className="flex flex-col gap-2" key={date}>
          <DateDivider date={date} />

          <div className="flex flex-col gap-5">
            {chats[date].map((chat) => (
              <div key={chat.id} ref={ref}>
                <ChatBubble chat={chat} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default RoomChatContainer;
