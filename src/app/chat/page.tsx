import DetailTitle from '@/shared/container/DetailHeader/DetailTitle';
import useGetChats from './usecase/useGetChats';
import ChatInfo from './container/ChatInfo';
import SearchBar from './container/SearchBar';
import { BottomNav } from '@/shared/container/Navigation/BottomNav';

export default async function ChatsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = (searchParams['search'] ?? '') as string;
  const chats = await useGetChats({ vendorName: search });

  return (
    <>
      <DetailTitle withBackButton={false} title="Chats" />

      <div className="p-4">
        <SearchBar />
      </div>

      <section className="p-4 flex flex-col gap-4">
        {chats.map((chat) => (
          <ChatInfo chat={chat} key={chat.vendorId} />
        ))}
      </section>

      <BottomNav />
    </>
  );
}
