import SubrouteHeader from '@/app/budget/container/Header/SubrouteHeader';
import React from 'react';

const GuestEditLoading = () => {
  return (
    <>
      <SubrouteHeader title="Edit Guest" />
      <section className="space-y-4 p-4">
        <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse"></div>
        <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse"></div>
      </section>
    </>
  );
};

export default GuestEditLoading;
