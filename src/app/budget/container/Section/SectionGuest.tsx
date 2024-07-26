import { getAttendingGuests } from '@/shared/actions/guestService';
import Image from 'next/image';
import { DropdownContainer } from '../DropdownContainer';

const SectionGuest = async () => {
  const { data } = await getAttendingGuests();

  return (
    <section className="px-4 pt-10">
      <div className="rounded-lg p-3 bg-ny-primary-100 relative z-0 overflow-hidden">
        <Image
          src={'/assets/bg-budget-guest.png'}
          alt="Gradient Background"
          fill
          className="-z-10 object-cover pointer-events-none"
        />
        <div className="flex items-center justify-between mb-2 gap-3 text-caption-1 font-medium">
          <h2>Guest Attending</h2>
          <DropdownContainer currentTargetGuestAttending={data.target_guest} />
        </div>
        <p className="text-heading-5 text-ny-primary-500 font-semibold">
          {data.total_guest} / {data.target_guest}
        </p>
      </div>
    </section>
  );
};

export default SectionGuest;
