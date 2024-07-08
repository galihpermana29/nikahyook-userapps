'use client';

import type { TModalReducerReturn } from '@/shared/usecase/useModalReducer';
import { Form } from 'antd';
import UploadReceiptForm from '../Form/UploadReceiptForm';
import ModalFooter from './ModalFooter';
import { useForm } from 'antd/es/form/Form';
import type { IOrderPaymentInput } from '@/shared/models/orderInterfaces';
import useUploadReceipt from '../../usecase/useUploadReceipt';

export default function UploadReceiptModal({
  closeModal,
  orderId,
}: {
  orderId: string | undefined;
  closeModal: TModalReducerReturn['closeModal'];
}) {
  if (!orderId) return;

  const [form] = useForm();
  const { mutate, isLoading } = useUploadReceipt({ id: orderId, closeModal });

  return (
    <Form<IOrderPaymentInput>
      form={form}
      onFinish={mutate}
      disabled={isLoading}
      className="flex flex-col gap-5 justify-center pt-3">
      <UploadReceiptForm />

      <ModalFooter closeModal={closeModal} />
    </Form>
  );
}
