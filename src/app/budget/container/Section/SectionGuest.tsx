import { getAttendingGuests } from '@/shared/actions/guestService';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const SectionGuest = async () => {
  const { data } = await getAttendingGuests();

  return (
    <section className="px-4 pt-10">
      <div className="rounded-lg p-3 bg-ny-primary-100 relative z-0 overflow-hidden">
        <Image
          src={'/assets/bg-budget-guest.png'}
          alt="Gradient Background"
          fill
          className="-z-10 object-cover"
        />
        <div className="flex items-center justify-between mb-2 gap-3 text-caption-1 font-medium">
          <h2>Guest Attending</h2>
          <div className="flex items-center gap-0">
            <Link href={'/budget/guest'}>
              <Button type="text" className="text-ny-primary-500 font-medium">
                Set attending
              </Button>
            </Link>
            <Link href={'/budget/guest/list'}>
              <Button type="text" className="text-ny-primary-500 font-medium">
                See guests
              </Button>
            </Link>
          </div>
        </div>
        <p className="text-heading-5 text-ny-primary-500 font-semibold">
          {data.total_guest} / {data.target_guest}
        </p>
      </div>
    </section>
  );
};

export default SectionGuest;
