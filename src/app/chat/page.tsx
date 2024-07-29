'use client';

import PageTitle from '@/shared/container/PageTitle/PageTitle';
import useGetChats from './usecase/useGetChats';
import ChatInfo from './container/ChatInfo';
import SearchBar from './container/SearchBar';
import { BottomNav } from '@/shared/container/Navigation/BottomNav';
import EmptySection from '@/shared/container/Section/EmptySection';

export default function ChatsPage() {
  const { listAllChat, searchChat } = useGetChats();
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh gap-y-2">
      <PageTitle withBackButton={false} title="Chats" />
      <div className="px-4 flex flex-col gap-3 size-full">
        <SearchBar search={searchChat} />
        <section className="flex flex-col gap-2">
          {listAllChat.render.length > 0 ? (
            listAllChat.render.map((chat) => (
              <ChatInfo chat={chat} key={chat.userInfo.uid} />
            ))
          ) : (
            <EmptySection message="There are no messages" />
          )}
        </section>
      </div>
      <BottomNav />
    </div>
  );
}
