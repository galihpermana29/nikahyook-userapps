import type {
  IAddProductReviewPayload,
  IProductReviewData,
} from '@/shared/models/productInterfaces';

export default function formatQueryData(
  data: IProductReviewData
): IAddProductReviewPayload {
  return {
    description: data.description,
    rating: data.rating,
  };
}
