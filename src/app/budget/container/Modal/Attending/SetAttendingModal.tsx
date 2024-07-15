import ModalFooter from '@/app/order/(default)/container/Modal/ModalFooter';
import type { TModalReducerReturn } from '@/shared/usecase/useModalReducer';
import { Button, Form, InputNumber } from 'antd';
import React from 'react';
import { useSetTargetAttending } from '@/app/budget/usecase/useSetTargetAttending';
import type {
  TGuestAttending,
  TUpdateGuestAttendingPayload,
} from '@/shared/models/guestInterfaces';

type TAttendingModalProps = {
  closeModal: TModalReducerReturn['closeModal'];
  initialValue: TGuestAttending['target_guest'];
};

export const SetAttendingModal = ({
  closeModal,
  initialValue,
}: TAttendingModalProps) => {
  const { mutate, isLoading } = useSetTargetAttending(closeModal);

  return (
    <div className="flex flex-col gap-0 items-center justify-center pt-2">
      <Form<TUpdateGuestAttendingPayload>
        onFinish={mutate}
        layout="vertical"
        className="w-full">
        <Form.Item
          name={'target_attending'}
          label="Guest Attending"
          className="pb-1"
          initialValue={initialValue}
          rules={[{ required: true, message: 'Target guest is required!' }]}>
          <InputNumber
            className="w-full"
            placeholder="Enter your target guest attending number"
          />
        </Form.Item>
        <ModalFooter
          primaryButton={
            <Button
              loading={isLoading}
              type="primary"
              className="w-full"
              htmlType="submit">
              Submit
            </Button>
          }
          closeModal={closeModal}
        />
      </Form>
    </div>
  );
};
