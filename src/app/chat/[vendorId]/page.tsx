import DetailTitle from '@/shared/container/DetailHeader/DetailTitle';
import React from 'react';
import DateDivider from '../container/DateDivider';
import useGetVendorData from './usecase/useGetVendorData';
import useGetBubbleChats from './usecase/useGetBubbleChats';
import groupChatMessagesByDate from './usecase/groupChatMessagesByDate';
import ChatBubble from './container/ChatBubble';
import SendMessageArea from './container/SendMessageArea';

export default async function VendorRoomChatPage({
  params,
}: {
  params: { vendorId: string };
}) {
  const vendorData = await useGetVendorData(params.vendorId);
  const chatsData = await useGetBubbleChats(params.vendorId);
  const chats = groupChatMessagesByDate(chatsData);

  return (
    <>
      <DetailTitle title={vendorData.vendorName} />

      <section className="flex flex-col gap-2 px-4 pb-4">
        {Object.keys(chats).map((date) => (
          <div className="flex flex-col gap-2" key={date}>
            <DateDivider date={date} />

            <div className="flex flex-col gap-5">
              {chats[date].map((chat) => (
                <ChatBubble key={chat.userId + chat.vendorId} chat={chat} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <SendMessageArea vendorId={vendorData.vendorId} />
    </>
  );
}
