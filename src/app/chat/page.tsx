'use client';

import PageTitle from '@/shared/container/PageTitle/PageTitle';
import useGetChats from './usecase/useGetChats';
import ChatInfo from './container/ChatInfo';
import SearchBar from './container/SearchBar';
import { BottomNav } from '@/shared/container/Navigation/BottomNav';
import EmptySection from '@/shared/container/Section/EmptySection';

export default function ChatsPage() {
  const { listAllChat } = useGetChats();
  return (
    <>
      <PageTitle withBackButton={false} title="Chats" />

      <div className="p-4">
        <SearchBar />
      </div>

      <section className="p-4 flex flex-col">
        {listAllChat.render.length > 0 ? (
          listAllChat.render.map((chat) => (
            <ChatInfo chat={chat} key={chat.userInfo.uid} />
          ))
        ) : (
          <EmptySection message="There are no messages" />
        )}
      </section>

      <BottomNav />
    </>
  );
}
