import HeaderDefault from '@/shared/container/Header/HeaderDefault';
import { SearchIcon } from '@/shared/container/Icon/SearchIcon';
import { Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export const HeroSection = () => {
  return (
    <section className="w-full bg-ny-primary-500 py-5 px-4 z-0 h-[248px] relative rounded-b-2xl md:rounded-t-2xl overflow-hidden flex flex-col justify-between md:justify-end">
      <Image
        src={'/assets/discover-banner.png'}
        alt="Banner Image"
        fill
        className="-z-10 object-cover"
      />
      <Suspense
        fallback={
          <div className="w-full h-10 rounded-md animate-pulse bg-ny-gray-200"></div>
        }>
        <HeaderDefault />
      </Suspense>
      <Link href="/search" className="w-full">
        <Input
          placeholder="Search Inspiration"
          prefix={<SearchIcon />}
          className="py-2 rounded-lg"
        />
      </Link>
    </section>
  );
};
