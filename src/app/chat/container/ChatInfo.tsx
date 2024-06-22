import type { IChatOverview } from '@/shared/models/chatInterfaces';
import { Avatar } from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';

export default function ChatInfo({ chat }: { chat: IChatOverview }) {
  return (
    <Link
      href={`/chat/${chat.vendorId}`}
      className="flex gap-3 items-center w-full hover:cursor-pointer ">
      <Avatar
        shape="circle"
        src={chat.vendorProfileImage}
        className="size-[50px] shrink-0"
      />
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between">
          <span className="text-caption-1 font-medium">{chat.vendorName}</span>
          <span className="font-semibold text-[10px]">
            {dayjs(chat.latestMessage.sentAt).format('HH.mm')}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span
            className={`text-caption-2 line-clamp-1 ${
              chat.isRead ? 'text-ny-gray-400' : ''
            }`}>
            {chat.latestMessage.message}
          </span>

          {!chat.isRead && (
            <div className="rounded-full size-3 shrink-0 bg-ny-primary-500" />
          )}
        </div>
      </div>
    </Link>
  );
}
