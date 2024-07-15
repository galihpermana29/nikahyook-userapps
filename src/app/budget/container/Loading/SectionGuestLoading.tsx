import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const SectionGuestLoading = () => {
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
          <Link href={'/budget/guest'}>
            <Button type="text" className="text-ny-primary-500 font-medium">
              Edit
            </Button>
          </Link>
        </div>
        <div className="h-7 w-full rounded-md animate-pulse bg-ny-primary-200" />
      </div>
    </section>
  );
};
