import EditIcon from '@/shared/container/Icon/EditIcon';
import type { TGuestGroup } from '@/shared/models/guestInterfaces';
import Link from 'next/link';
import { DeleteGuestButton } from './DeleteGuestButton';

export const GuestCard = ({ guest }: { guest: TGuestGroup }) => {
  return (
    <div className="border px-3 py-2 rounded-lg flex items-center justify-between gap-4">
      <div className="flex flex-col gap-1 items-start">
        <p className="text-caption-1 font-medium">{guest.name}</p>
        <p className="text-caption-2 text-ny-gray-400">{guest.total} people</p>
      </div>

      <div className="flex items-center gap-3">
        <Link href={`/budget/guest/list/edit/${guest.id}`}>
          <EditIcon className="text-ny-info-500 hover:cursor-pointer" />
        </Link>
        <DeleteGuestButton id={guest.id} />
      </div>
    </div>
  );
};
