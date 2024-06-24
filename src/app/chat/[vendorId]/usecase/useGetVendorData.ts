import gacoanVendorProfileImage from '@/../public/assets/gacoan.png';
import invillaVendorProfileImage from '@/../public/assets/invilla.png';

const vendorDataList = [
  {
    vendorId: '30e7b88d-666b-4251-aeaa-358acf0a80a6',
    vendorName: 'In Villa',
    vendorProfileImage: invillaVendorProfileImage.src,
  },
  {
    vendorId: '43dc4511-9d28-4867-9f87-b9090ca1b4a5',
    vendorName: 'Gacoan',
    vendorProfileImage: gacoanVendorProfileImage.src,
  },
  {
    vendorId: '89f7a123-456c-789b-0def-123456789abc',
    vendorName: 'The Flower Boutique',
    vendorProfileImage: invillaVendorProfileImage.src,
  },
  {
    vendorId: '9876fedc-ba98-7654-3210-0fedcba98765',
    vendorName: 'DJ Soundwave',
    vendorProfileImage: gacoanVendorProfileImage.src,
  },
  {
    vendorId: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    vendorName: 'Sweet Treats Bakery',
    vendorProfileImage: invillaVendorProfileImage.src,
  },
];

export default function useGetVendorData(vendorId: string) {
  const vendor = vendorDataList.find(
    (vendor) => vendor.vendorId === vendorId
  ) ?? {
    vendorId: '30e7b88d-666b-4251-aeaa-358acf0a80a6',
    vendorName: 'In Villa',
    vendorProfileImage: invillaVendorProfileImage.src,
  };

  return vendor;
}
