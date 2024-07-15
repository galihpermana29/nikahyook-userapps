'use client';

import React from 'react';
import type {
  TGuestGroup,
  TUpdateGuestGroup,
} from '@/shared/models/guestInterfaces';
import { useEditGuestGroup } from '../../usecase/useEditGuestGroup';
import { useGetGuestGroup } from '../../usecase/useGetGuestGroup';
import { GuestEditLoading } from '../GuestEditLoading';
import { formatInitialValues } from '../../repository/formatInitialValues';
import { Button, Form, Input, InputNumber } from 'antd';
import ModalFooter from '@/app/order/(default)/container/Modal/ModalFooter';
import type { TModalReducerReturn } from '@/shared/usecase/useModalReducer';

export const EditGuestForm = ({
  closeModal,
  guestId,
}: {
  closeModal: TModalReducerReturn['closeModal'];
  guestId?: TGuestGroup['id'];
}) => {
  if (!guestId) return;

  const { mutate } = useEditGuestGroup(guestId, closeModal);
  const { data, isLoading } = useGetGuestGroup(guestId);
  if (isLoading) return <GuestEditLoading />;

  const initialValues = formatInitialValues(data);

  return (
    <Form<TUpdateGuestGroup>
      onFinish={mutate}
      layout="vertical"
      initialValues={initialValues}
      className="space-y-4 pt-2">
      <Form.Item
        className="my-0"
        name={'name'}
        label="Guest Name"
        rules={[{ required: true, message: 'Guest name is required!' }]}>
        <Input className="w-full" placeholder="Enter guest name" />
      </Form.Item>
      <Form.Item
        className="my-0"
        name={'total'}
        label="Total guest"
        rules={[{ required: true, message: 'Total guest is required!' }]}>
        <InputNumber className="w-full" placeholder="Enter total guest" />
      </Form.Item>

      <ModalFooter
        closeModal={closeModal}
        primaryButton={
          <Button
            loading={isLoading}
            type="primary"
            className="w-full"
            htmlType="submit">
            Submit
          </Button>
        }
      />
    </Form>
  );
};
