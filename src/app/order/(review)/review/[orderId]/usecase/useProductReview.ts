'use client';

import {
  addReview,
  editReview,
  getReview,
} from '@/shared/actions/productService';
import { IFetchGeneralResponse } from '@/shared/models/generalInterfaces';
import {
  IProductReviewResponseData,
  type IAddProductReviewPayload,
  type IProductReviewData,
} from '@/shared/models/productInterfaces';
import { message } from 'antd';
import { useMutation, useQuery } from 'react-query';

export default function useProductReview(productId: number) {
  const addProductReview = (value: IAddProductReviewPayload) =>
    addReview(productId, value);

  const editProductReview = (value: IAddProductReviewPayload) =>
    editReview(productId, value);

  const reviewQuery = useQuery<
    IFetchGeneralResponse<IProductReviewData[] | undefined>,
    Error
  >({
    queryKey: ['review-query', { productId }],
    queryFn: () => getReview(productId),
    onError: (error) => {
      message.error(error.message);
    },
  });

  const addReviewMutation = useMutation<
    IFetchGeneralResponse<IProductReviewResponseData>,
    Error,
    IAddProductReviewPayload
  >({
    mutationKey: ['add-review', { productId }],
    mutationFn: addProductReview,
    onSuccess: () => {
      message.success('Successfully added a review!');
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  const editReviewMutation = useMutation<
    IFetchGeneralResponse<IProductReviewResponseData>,
    Error,
    IAddProductReviewPayload
  >({
    mutationKey: ['edit-review', { productId }],
    mutationFn: editProductReview,
    onSuccess: () => {
      message.success('Successfully edited a review!');
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  return { addReviewMutation, reviewQuery, editReviewMutation };
}
