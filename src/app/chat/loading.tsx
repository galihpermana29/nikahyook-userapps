import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';
import { BottomNav } from '@/shared/container/Navigation/BottomNav';
import PageTitle from '@/shared/container/PageTitle/PageTitle';

export default function ChatsLoading() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen gap-y-2">
      <PageTitle withBackButton={false} title="Chats" />
      <div className="px-4 flex flex-col gap-3">
        <SkeletonInput active block />
        <section className="flex flex-col gap-2">
          {Array(10)
            .fill(0)
            .map((chat, index) => (
              <SkeletonInput active block key={chat + index} />
            ))}
        </section>
      </div>
      <BottomNav />
    </div>
  );
}
