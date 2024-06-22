import defaultProductImage from '@/../public/assets/default-product-image.png';
import type { IOrder } from '@/shared/models/orderInterfaces';

const paidItems = [
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

export default async function useGetPaidItems() {
  return new Promise<typeof paidItems>((resolve) =>
    setTimeout(() => resolve(paidItems), 500)
  );
}
