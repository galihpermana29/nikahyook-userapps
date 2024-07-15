import EditIcon from '@/shared/container/Icon/EditIcon';
import type { TGuestGroup } from '@/shared/models/guestInterfaces';
import { DeleteGuestButton } from './DeleteGuestButton';
import { Button } from 'antd';
import type { MouseEventHandler } from 'react';

export const GuestCard = ({
  guest,
  onClick,
}: {
  guest: TGuestGroup;
  onClick: MouseEventHandler<HTMLElement>;
}) => {
  return (
    <div className="border px-3 py-2 rounded-lg flex items-center justify-between gap-4">
      <div className="flex flex-col gap-1 items-start">
        <p className="text-caption-1 font-medium">{guest.name}</p>
        <p className="text-caption-2 text-ny-gray-400">{guest.total} people</p>
      </div>

      <div className="flex items-center gap-3">
        <Button className="border-0 p-0" onClick={onClick}>
          <EditIcon className="text-ny-info-500 hover:cursor-pointer" />
        </Button>
        <DeleteGuestButton id={guest.id} name={guest.name} />
      </div>
    </div>
  );
};
