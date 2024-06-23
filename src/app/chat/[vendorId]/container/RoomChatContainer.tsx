'use client';

// import DateDivider from '../../container/DateDivider';
import useGetBubbleChats from '../usecase/useGetBubbleChats';
// import groupChatMessagesByDate from '../usecase/groupChatMessagesByDate';
import { IAllUserResponse } from '@/shared/models/userInterfaces';

interface IRoomChatContainer {
  vendor: IAllUserResponse;
}

const RoomChatContainer = ({ vendor }: IRoomChatContainer) => {
  const chatsData = useGetBubbleChats(vendor.id);
  // const chats = groupChatMessagesByDate(chatsData);

  return (
    <section className="flex flex-col gap-2 px-4 pb-4">
      {/* {Object.keys(chats).map((date) => (
        <div className="flex flex-col gap-2" key={date}>
          <DateDivider date={date} />

          <div className="flex flex-col gap-5">
            {chats[date].map((chat) => (
              <ChatBubble key={chat.userId + chat.vendorId} chat={chat} />
            ))}
          </div>
        </div>
      ))} */}
    </section>
  );
};

export default RoomChatContainer;
