import type { TModalReducerReturn } from '@/shared/usecase/useModalReducer';
import { Form, message } from 'antd';
import UploadReceiptForm from '../Form/UploadReceiptForm';
import ModalFooter from './ModalFooter';
import { useForm } from 'antd/es/form/Form';

export default function UploadReceiptModal({
  closeModal,
  orderId,
}: {
  orderId: string | undefined;
  closeModal: TModalReducerReturn['closeModal'];
}) {
  const [form] = useForm();
  if (!orderId) return;

  function handleOnUploadReceipt(id: string) {
    return message.success(
      `Upload receipt! ID: ${id}, form: ${JSON.stringify(
        form.getFieldsValue()
      )}`
    );
  }

  return (
    <Form
      form={form}
      onFinish={() => handleOnUploadReceipt(orderId)}
      className="flex flex-col gap-5 justify-center pt-3">
      <UploadReceiptForm />

      <ModalFooter closeModal={closeModal} />
    </Form>
  );
}
