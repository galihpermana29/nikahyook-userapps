'use client';

import { Button, Form, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import type { IAddProductReviewPayload } from '@/shared/models/productInterfaces';
import useProductReview from '../usecase/useProductReview';
import AddReviewForm from './Form/AddReviewForm';
import formatQueryData from '../repository/formatQueryData';
import AddReviewFormLoading from './Form/AddReviewFormLoading';

export default function AddReviewContainer({
  productId,
}: {
  productId: number;
}) {
  if (!productId) return;

  const [form] = useForm();
  const { addReviewMutation, reviewQuery, editReviewMutation } =
    useProductReview(productId);
  const { data, failureCount, isLoading } = reviewQuery;
  const { mutate: addReview, isLoading: isAddingReview } = addReviewMutation;
  const { mutate: editReview, isLoading: isEditingReview } = editReviewMutation;

  if (isLoading && failureCount < 2) return <AddReviewFormLoading />;

  const initialValues =
    data && data.data ? formatQueryData(data.data) : undefined;
  const shouldEdit = initialValues !== undefined;
  const isMutating = isAddingReview || isEditingReview;

  return (
    <Form<IAddProductReviewPayload>
      form={form}
      layout="inline"
      labelWrap
      onFinish={shouldEdit ? editReview : addReview}
      initialValues={initialValues}
      onFinishFailed={(e) =>
        message.error(e.errorFields.flatMap((e) => e.errors).join('\n'))
      }
      className="flex flex-col gap-4 w-full">
      <AddReviewForm />

      <Button loading={isMutating} type="primary" htmlType="submit">
        {shouldEdit ? 'Edit' : 'Submit'} review
      </Button>
    </Form>
  );
}
