import defaultProductImage from '@/../public/assets/default-product-image.png';
import type { IOrder } from '@/shared/models/orderInterfaces';

const orderedData = [
  {
    orderId: 1,
    vendorName: 'The Apurva Kempinski Bali',
    products: [
      {
        productName: 'Hampers Mewah Souvenir Pernikahan Ulang Tahun Siapa?',
        productPrice: 212000,
        productQty: 80,
        productImage: defaultProductImage.src,
      },
      {
        productName: 'Solet Teflon Spatula Special Souvenir',
        productPrice: 212000,
        productQty: 80,
        productImage: defaultProductImage.src,
      },
    ],
  },
] as IOrder[];

export default async function useGetOrderedItems() {
  return new Promise<typeof orderedData>((resolve) =>
    setTimeout(() => resolve(orderedData), 500)
  );
}
