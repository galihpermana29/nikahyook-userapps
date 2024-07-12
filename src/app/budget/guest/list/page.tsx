'use client';

import React from 'react';
import SubrouteHeader from '../../container/Header/SubrouteHeader';
import Link from 'next/link';
import AddIcon from '@/shared/container/Icon/AddIcon';
import { GuestCard } from './container/GuestCard';
import { useGetListsOfGuests } from './usecase/useGetListsOfGuests';
import GuestListLoading from './loading';
import EmptySection from '@/shared/container/Section/EmptySection';

const AddGuestPage = () => {
  const { data, isLoading } = useGetListsOfGuests();

  if (isLoading) return <GuestListLoading />;
  const guests = data?.data;

  return (
    <>
      <SubrouteHeader
        title="Guest List"
        extraComponent={
          <Link
            href="/budget/guest/list/add"
            className="flex items-center gap-2 text-caption-1 text-ny-primary-500">
            Add Guest
            <AddIcon />
          </Link>
        }
      />
      <div className="flex p-4 gap-3 flex-col">
        {guests && guests.length > 0 ? (
          guests.map((guest) => <GuestCard key={guest.id} guest={guest} />)
        ) : (
          <EmptySection message="No guests list found!" />
        )}
      </div>
    </>
  );
};

export default AddGuestPage;
