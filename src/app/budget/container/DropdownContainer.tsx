'use client';

import useModalReducer, {
  type IModalDefinition,
} from '@/shared/usecase/useModalReducer';
import { Button, Dropdown, Space, Modal, type MenuProps } from 'antd';
import React from 'react';
import ArrowIcon from '@/shared/container/Icon/ArrowIcon';
import { useRouter } from 'next/navigation';
import { SetAttendingModal } from './Modal/Attending/SetAttendingModal';
import type { TGuestAttending } from '@/shared/models/guestInterfaces';

export const DropdownContainer = ({
  currentTargetGuestAttending,
}: {
  currentTargetGuestAttending: TGuestAttending['target_guest'];
}) => {
  const router = useRouter();
  const { modalState, openModal, closeModal } = useModalReducer();

  const modalType = {
    'set-attending': {
      title: 'Guest Attending',
      element: (
        <SetAttendingModal
          initialValue={currentTargetGuestAttending}
          closeModal={closeModal}
        />
      ),
    },
  } as Record<string, IModalDefinition>;

  const menuItems: MenuProps['items'] = [
    {
      label: 'Set target',
      key: 'set-target',
      onClick: () => openModal('set-attending'),
    },
    {
      label: 'See guest list',
      key: 'see-guest-list',
      onClick: () => router.push('/budget/guest'),
    },
  ];

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

      <Dropdown menu={{ items: menuItems }}>
        <Button className="text-ny-primary-500 font-medium border-0 bg-transparent shadow-none">
          <Space>
            Guest Action
            <ArrowIcon className="rotate-180" />
          </Space>
        </Button>
      </Dropdown>
    </>
  );
};
