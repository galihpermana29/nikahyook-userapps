import type { TListChats } from '@/shared/models/chatInterfaces';
import { Avatar } from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';

export default function ChatInfo({ chat }: { chat: TListChats }) {
  return (
    <Link
      href={`/chat/${chat.userInfo.uid}`}
      className="flex gap-3 items-center w-full hover:cursor-pointer hover:bg-slate-100 p-[8px] hover:rounded-[5px]">
      <Avatar
        shape="circle"
        src={chat.userInfo.displayPicture}
        className="size-[50px] shrink-0"
      />
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between">
          <span className="text-caption-1 font-medium">
            {chat.userInfo.displayName}
          </span>
          <span className="font-semibold text-[10px]">
            {dayjs(chat.date.toDate()).format('HH.mm')}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span
            className={`text-caption-2 line-clamp-1 ${
              chat.lastMessage.isRead ? 'text-ny-gray-400' : ''
            }`}>
            {chat.lastMessage.text}
          </span>

          {!chat.lastMessage.isRead && (
            <div className="rounded-full size-3 shrink-0 bg-ny-primary-500" />
          )}
        </div>
      </div>
    </Link>
  );
}
