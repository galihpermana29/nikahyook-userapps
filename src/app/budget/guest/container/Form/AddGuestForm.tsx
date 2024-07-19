import ModalFooter from '@/app/order/(default)/container/Modal/ModalFooter';
import type { TUpdateGuestGroup } from '@/shared/models/guestInterfaces';
import type { TModalReducerReturn } from '@/shared/usecase/useModalReducer';
import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';
import { useAddGuestGroup } from '../../usecase/useAddGuestGroup';

type TAddGuestFormProps = {
  closeModal: TModalReducerReturn['closeModal'];
};

export const AddGuestForm = ({ closeModal }: TAddGuestFormProps) => {
  const { mutate, isLoading } = useAddGuestGroup(closeModal);

  return (
    <Form<TUpdateGuestGroup>
      onFinish={mutate}
      layout="vertical"
      className="pt-2 space-y-4">
      <Form.Item
        className="my-0"
        name={'name'}
        label="Guest name"
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
