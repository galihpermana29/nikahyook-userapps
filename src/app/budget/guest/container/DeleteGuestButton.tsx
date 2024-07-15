'use client';

import { TrashIcon } from '@/shared/container/Icon/TrashIcon';
import type { TGuestGroup } from '@/shared/models/guestInterfaces';
import React from 'react';
import { useDeleteGuestGroup } from '../usecase/useDeleteGuestGroup';

export const DeleteGuestButton = ({
  id,
  name,
}: {
  id: TGuestGroup['id'];
  name: TGuestGroup['name'];
}) => {
  const { mutate } = useDeleteGuestGroup(id, name);

  return (
    <TrashIcon onClick={() => mutate()} className="hover:cursor-pointer" />
  );
};
