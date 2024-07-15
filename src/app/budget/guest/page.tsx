'use client';

import React from 'react';
import { GuestCard } from './container/GuestCard';
import EmptySection from '@/shared/container/Section/EmptySection';
import { useGetListsOfGuests } from './usecase/useGetListsOfGuests';
import GuestListLoading from './loading';
import { Button, Modal } from 'antd';
import SubrouteHeader from '../container/Header/SubrouteHeader';
import AddIcon from '@/shared/container/Icon/AddIcon';
import useModalReducer, {
  type IModalDefinition,
} from '@/shared/usecase/useModalReducer';
import { AddGuestForm } from './container/Form/AddGuestForm';
import { EditGuestForm } from './container/Form/EditGuestForm';
import type { TGuestGroup } from '@/shared/models/guestInterfaces';

const AddGuestPage = () => {
  const { data, isLoading } = useGetListsOfGuests();

  const { modalState, openModal, closeModal } = useModalReducer();

  const modalType = {
    'add-guest': {
      title: 'Add Guest',
      element: <AddGuestForm closeModal={closeModal} />,
    },
    'edit-guest': {
      title: 'Edit Guest',
      element: (
        <EditGuestForm
          closeModal={closeModal}
          guestId={
            modalState.isOpen ? (modalState.id as TGuestGroup['id']) : undefined
          }
        />
      ),
    },
  } as Record<string, IModalDefinition>;

  if (isLoading) return <GuestListLoading />;
  const guests = data?.data;

  return (
    <>
      {modalState.isOpen ? (
        <Modal
          open={modalState.isOpen}
          onCancel={closeModal}
          footer={null}
          title={modalType[modalState.type]['title']}>
          {modalType[modalState.type]['element']}
        </Modal>
      ) : null}

      <SubrouteHeader
        title="Guest List"
        extraComponent={
          <Button
            onClick={() => openModal('add-guest')}
            className="flex items-center gap-2 text-caption-1 text-ny-primary-500 border-0 p-0">
            Add Guest
            <AddIcon />
          </Button>
        }
      />

      <div className="flex p-4 gap-3 flex-col">
        {guests && guests.length > 0 ? (
          guests.map((guest) => (
            <GuestCard
              onClick={() => openModal('edit-guest', guest.id)}
              key={guest.id}
              guest={guest}
            />
          ))
        ) : (
          <EmptySection message="No guests list found!" />
        )}
      </div>
    </>
  );
};

export default AddGuestPage;
