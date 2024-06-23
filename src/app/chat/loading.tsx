import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';
import { BottomNav } from '@/shared/container/Navigation/BottomNav';
import PageTitle from '@/shared/container/PageTitle/PageTitle';

export default function ChatsLoading() {
  return (
    <>
      <PageTitle withBackButton={false} title="Chats" />
      <SkeletonInput className="p-4" active block />
      <section className="p-4 flex flex-col gap-4">
        {Array(10)
          .fill(0)
          .map((chat, index) => (
            <SkeletonInput active block key={chat + index} />
          ))}
      </section>

      <BottomNav />
    </>
  );
}
