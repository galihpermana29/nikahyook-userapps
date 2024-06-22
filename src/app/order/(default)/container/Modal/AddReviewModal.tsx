import type { TModalReducerReturn } from '@/shared/usecase/useModalReducer';
import { Form, message } from 'antd';
import AddReviewForm from '../Form/AddReviewForm';
import { useForm } from 'antd/es/form/Form';
import ModalFooter from './ModalFooter';

export default function AddReviewModal({
  closeModal,
  orderId,
}: {
  orderId: string | undefined;
  closeModal: TModalReducerReturn['closeModal'];
}) {
  const [form] = useForm();
  if (!orderId) return;

  function handleAddReview(id: string) {
    return message.success(
      `Upload receipt! ID: ${id}, form: ${JSON.stringify(
        form.getFieldsValue()
      )}`
    );
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={() => handleAddReview(orderId)}
      className="flex flex-col gap-5 justify-center pt-3">
      <AddReviewForm />

      <ModalFooter closeModal={closeModal} />
    </Form>
  );
}
