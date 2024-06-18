'use client';

import { CartIcon } from '@/shared/container/Icon/CartIcon';
import { ClockIcon } from '@/shared/container/Icon/ClockIcon';
import { NotificationIcon } from '@/shared/container/Icon/NotificationIcon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type IHeaderSection = {
  profile_image_url: string;
  children: React.ReactNode;
};

const HeaderSection = ({ profile_image_url, children }: IHeaderSection) => {
  return (
    <section className="w-full py-5 px-4 z-0 h-[248px] relative rounded-b-2xl overflow-hidden flex flex-col gap-8">
      <Image
        src={'/assets/dashboard-banner.png'}
        alt="Banner Image"
        fill
        className="-z-20 object-cover"
      />
      <div className="absolute top-0 right-0 w-full h-full bg-ny-gray-900 opacity-[60%] -z-10" />
      <header
        className='w-full max-w-screen-sm z-30 flex justify-between gap-5 transition-colors duration-150'
      >
        <Link href={'/'}>
          <div className="relative w-[118px] h-6">
            <Image src={'/assets/logo-white.png'} alt="Logo" fill />
          </div>
        </Link>

        <div className="flex items-center gap-3 text-white">
          <Link href={'/cart'}>
            <CartIcon />
          </Link>
          <Link href={'/notification'}>
            <NotificationIcon />
          </Link>
          <Link href={'/profile'}>
            <div className="w-6 h-6 bg-ny-gray-100 rounded-lg border border-white relative overflow-hidden">
              <Image src={profile_image_url} alt="Profile Picture" fill />
            </div>
          </Link>
        </div>
      </header>

      <div className="text-white space-y-2">
        <div>
          <h1 className="text-heading-6 font-semibold">Dimas & Dita</h1>
          <h2 className="text-caption-2 font-medium">Modern Wedding Outdoor</h2>
        </div>
        <div className="flex items-center text-caption-2 gap-2">
          <ClockIcon />
          <p>35 Weeks</p>
          <p>5 Days</p>
          <p>5 Hours</p>
        </div>
      </div>

      {children}
    </section>
  );
};

export default HeaderSection;
