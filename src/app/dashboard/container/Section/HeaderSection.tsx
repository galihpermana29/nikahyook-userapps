import HeaderDefault from '@/shared/container/Header/HeaderDefault';
import { ClockIcon } from '@/shared/container/Icon/ClockIcon';
import Image from 'next/image';
import React, { Suspense } from 'react';

type IHeaderSection = {
  children: React.ReactNode;
};

const HeaderSection = ({ children }: IHeaderSection) => {
  return (
    <section className="w-full py-5 px-4 z-0 h-[248px] relative rounded-b-2xl overflow-hidden flex flex-col gap-8">
      <Image
        src={'/assets/dashboard-banner.png'}
        alt="Banner Image"
        fill
        className="-z-20 object-cover"
      />
      <div className="absolute top-0 right-0 w-full h-full bg-ny-gray-900 opacity-[60%] -z-10" />
      <Suspense
        fallback={
          <div className="w-full h-10 rounded-md animate-pulse bg-ny-gray-200"></div>
        }
      >
        <HeaderDefault />
      </Suspense>

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
