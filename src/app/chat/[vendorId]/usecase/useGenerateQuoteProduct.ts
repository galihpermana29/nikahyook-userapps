import { IAllProductsResponse } from '@/shared/models/productInterfaces';

const useGenerateQuoteProduct = (
  detailProduct: IAllProductsResponse | null
) => {
  if (detailProduct) {
    const payloadForCard = {
      productName: detailProduct.title,
      productImage: detailProduct.images[0],
      productPrice: Number(detailProduct.price),
      productQuantityLabel: detailProduct.quantity_label,
    };
    return payloadForCard;
  }

  return null;
};

export default useGenerateQuoteProduct;
