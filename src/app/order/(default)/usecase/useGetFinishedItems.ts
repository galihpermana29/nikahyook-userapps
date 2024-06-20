import defaultProductImage from '@/../public/assets/default-product-image.png';
import type { IOrder } from '@/shared/models/orderInterfaces';
import { useQuery } from 'react-query';

const finishedItems = [
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

function getFinishedItems() {
  return new Promise<typeof finishedItems>((resolve) =>
    setTimeout(() => resolve(finishedItems), 500)
  );
}

export default function useGetFinishedItems() {
  return useQuery<IOrder[], Error>({
    queryFn: getFinishedItems,
    queryKey: ['finished-order'],
  });
}
