'use client';

import { TrashIcon } from '@/shared/container/Icon/TrashIcon';
import type { TGuestGroup } from '@/shared/models/guestInterfaces';
import React from 'react';
import { useDeleteGuestGroup } from '../edit/[id]/usecase/useDeleteGuestGroup';

export const DeleteGuestButton = ({ id }: { id: TGuestGroup['id'] }) => {
  const { mutate } = useDeleteGuestGroup(id);
  return (
    <TrashIcon onClick={() => mutate()} className="hover:cursor-pointer" />
  );
};
