'use client';

import { notifyAddReview } from '@/shared/actions/productService';
import type { IAllProductsResponse } from '@/shared/models/productInterfaces';
import { useMutation } from 'react-query';

export const useNotifyReview = (productId: IAllProductsResponse['id']) => {
  return useMutation({
    mutationKey: ['notify-add-review', { productId }],
    mutationFn: () => notifyAddReview(productId),
  });
};
