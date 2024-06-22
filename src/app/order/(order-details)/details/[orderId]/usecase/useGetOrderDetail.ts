import defaultProductImage from '@/../public/assets/default-product-image.png';
import type { IOrder } from '@/shared/models/orderInterfaces';

const orderedData = {
  orderId: 1,
  vendorName: 'The Apurva Kempinski Bali',
  orderDate: '2024-05-21',
  products: [
    {
      productName: 'Hampers Mewah Souvenir Pernikahan Ulang Tahun Siapa?',
      productPrice: 212000,
      productQty: 80,
      productImage: defaultProductImage.src,
      productDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros non augue aliquet vehicula. Donec laoreet posuere sapien. Nunc tortor enim, lacinia quis efficitur nec, euismod sit amet sem. Aliquam eget velit a tellus vestibulum tempus porta id leo. Integer felis dolor, luctus vitae massa et, sagittis sagittis massa. Sed vitae lectus sollicitudin, sodales arcu id, imperdiet mauris. Pellentesque a tellus efficitur, ullamcorper eros a, placerat est.',
    },
    {
      productName: 'Solet Teflon Spatula Special Souvenir',
      productPrice: 212000,
      productQty: 80,
      productImage: defaultProductImage.src,
      productDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros non augue aliquet vehicula. Donec laoreet posuere sapien. Nunc tortor enim, lacinia quis efficitur nec, euismod sit amet sem. Aliquam eget velit a tellus vestibulum tempus porta id leo. Integer felis dolor, luctus vitae massa et, sagittis sagittis massa. Sed vitae lectus sollicitudin, sodales arcu id, imperdiet mauris. Pellentesque a tellus efficitur, ullamcorper eros a, placerat est.',
    },
    {
      productName: 'Solet Teflon Spatula Special Souvenir',
      productPrice: 212000,
      productQty: 80,
      productImage: defaultProductImage.src,
      productDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros non augue aliquet vehicula. Donec laoreet posuere sapien. Nunc tortor enim, lacinia quis efficitur nec, euismod sit amet sem. Aliquam eget velit a tellus vestibulum tempus porta id leo. Integer felis dolor, luctus vitae massa et, sagittis sagittis massa. Sed vitae lectus sollicitudin, sodales arcu id, imperdiet mauris. Pellentesque a tellus efficitur, ullamcorper eros a, placerat est.',
    },
    {
      productName: 'Solet Teflon Spatula Special Souvenir',
      productPrice: 212000,
      productQty: 80,
      productImage: defaultProductImage.src,
      productDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros non augue aliquet vehicula. Donec laoreet posuere sapien. Nunc tortor enim, lacinia quis efficitur nec, euismod sit amet sem. Aliquam eget velit a tellus vestibulum tempus porta id leo. Integer felis dolor, luctus vitae massa et, sagittis sagittis massa. Sed vitae lectus sollicitudin, sodales arcu id, imperdiet mauris. Pellentesque a tellus efficitur, ullamcorper eros a, placerat est.',
    },
    {
      productName: 'Solet Teflon Spatula Special Souvenir',
      productPrice: 212000,
      productQty: 80,
      productImage: defaultProductImage.src,
      productDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros non augue aliquet vehicula. Donec laoreet posuere sapien. Nunc tortor enim, lacinia quis efficitur nec, euismod sit amet sem. Aliquam eget velit a tellus vestibulum tempus porta id leo. Integer felis dolor, luctus vitae massa et, sagittis sagittis massa. Sed vitae lectus sollicitudin, sodales arcu id, imperdiet mauris. Pellentesque a tellus efficitur, ullamcorper eros a, placerat est.',
    },
    {
      productName: 'Solet Teflon Spatula Special Souvenir',
      productPrice: 212000,
      productQty: 80,
      productImage: defaultProductImage.src,
      productDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros non augue aliquet vehicula. Donec laoreet posuere sapien. Nunc tortor enim, lacinia quis efficitur nec, euismod sit amet sem. Aliquam eget velit a tellus vestibulum tempus porta id leo. Integer felis dolor, luctus vitae massa et, sagittis sagittis massa. Sed vitae lectus sollicitudin, sodales arcu id, imperdiet mauris. Pellentesque a tellus efficitur, ullamcorper eros a, placerat est.',
    },
  ],
} as IOrder;

export default async function useGetOrderDetail(id: string) {
  return new Promise<IOrder | undefined>((resolve) =>
    resolve(orderedData.orderId.toString() === id ? orderedData : undefined)
  );
}
