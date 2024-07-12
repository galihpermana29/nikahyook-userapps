import React from 'react';
import SubrouteHeader from '../../container/Header/SubrouteHeader';
import Link from 'next/link';
import AddIcon from '@/shared/container/Icon/AddIcon';

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
      <section className="space-y-4 p-4">
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
