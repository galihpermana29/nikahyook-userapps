import React from 'react';
import Link from 'next/link';
import AddIcon from '@/shared/container/Icon/AddIcon';
import SubrouteHeader from '../container/Header/SubrouteHeader';

const GuestListLoading = () => {
  return (
    <>
      <SubrouteHeader
        title="Guest List"
        extraComponent={
          <Link
            href="/guest/list/add"
            className="flex items-center gap-2 text-caption-1 text-ny-primary-500">
            Add Guest
            <AddIcon />
          </Link>
        }
      />
      <section className="space-y-4 pt-2">
        <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse"></div>
        <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse"></div>
        <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse"></div>
        <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse"></div>
        <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse"></div>
      </section>
    </>
  );
};

export default GuestListLoading;
