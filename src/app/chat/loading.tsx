import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';
import DetailTitle from '@/shared/container/DetailHeader/DetailTitle';
import { BottomNav } from '@/shared/container/Navigation/BottomNav';

export default function ChatsLoading() {
  return (
    <>
      <DetailTitle withBackButton={false} title="Chats" />
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
