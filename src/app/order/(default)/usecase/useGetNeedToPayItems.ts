import defaultProductImage from '@/../public/assets/default-product-image.png';
import type { IOrder } from '@/shared/models/orderInterfaces';
import { useQuery } from 'react-query';

const needToPayItems = [
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
  {
    orderId: 2,
    vendorName: 'The Bali Paradise',
    products: [
      {
        productName: 'Hampers Mewah Souvenir Pernikahan Ulang Tahun Siapa?',
        productPrice: 212000,
        productQty: 80,
        productImage: defaultProductImage.src,
      },
    ],
  },
] as IOrder[];

async function getNeedToPayItems() {
  return new Promise<typeof needToPayItems>((resolve) =>
    setTimeout(() => resolve(needToPayItems), 500)
  );
}

export default function useGetNeedToPayItems() {
  return useQuery<IOrder[], Error>({
    queryFn: getNeedToPayItems,
    queryKey: ['need-to-pay'],
  });
}
