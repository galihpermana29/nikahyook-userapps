import PageTitle from '@/shared/container/PageTitle/PageTitle';
import { Button } from 'antd';
import SkeletonInput from 'antd/es/skeleton/Input';

export default function ChatRoomLoading() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh">
      <PageTitle title="Loading..." />

      <section className="p-4 flex flex-col gap-4">
        {Array(10)
          .fill(0)
          .map((chat, index) => (
            <SkeletonInput active block key={chat + index} />
          ))}
      </section>

      <footer className="px-4 py-3 flex gap-2 items-center w-full border-t fixed bottom-0 max-w-screen-md">
        <SkeletonInput active block />
        <Button disabled type="primary" htmlType="submit">
          Send
        </Button>
      </footer>
    </div>
  );
}
