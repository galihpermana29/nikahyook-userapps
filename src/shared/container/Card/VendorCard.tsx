import formatToRupiah from '@/shared/usecase/formatToRupiah';
import { Rate } from 'antd';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { WishListButton } from '../Button/WishListButton';
import { LocationIcon } from '../Icon/LocationIcon';
import { StarIcon } from '../Icon/StarIcon';

interface IVendorCard {
  profile_picture_uri?: string;
  vendor_name?: string;
  product_type_name?: string;
  price?: number;
  images?: string[];
  location?: string;
  rating?: number;
  navigateTo: string;
  onWishlistClick: () => void;
}

export const VendorCard = ({
  profile_picture_uri,
  images,
  location,
  product_type_name,
  vendor_name,
  navigateTo,
  onWishlistClick,
  price = 0,
  rating = 0,
}: IVendorCard) => {
  return (
    <div
      onClick={() => redirect(navigateTo)}
      className="shadow cursor-pointer flex flex-col gap-[6px] bg-white rounded-lg w-full p-2 text-caption-2 hover:bg-ny-gray-100/25 transition-colors duration-150">
      <div className="flex gap-2 items-center">
        <div className="min-w-[50px] min-h-[50px] relative overflow-hidden rounded-md bg-ny-gray-100 aspect-square ">
          {profile_picture_uri && (
            <Image
              src={profile_picture_uri}
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="flex w-full justify-between gap-2">
          <div>
            <h3 className="text-caption-2 font-medium line-clamp-1">
              {vendor_name ?? '-'}
            </h3>
            <p className="text-caption-3 text-ny-gray-400">
              {product_type_name ?? '-'}
            </p>
          </div>
          <WishListButton onMutateWishList={onWishlistClick} />
        </div>
      </div>
      <p className="text-caption-2 text-ny-primary-500">
        Price From {formatToRupiah(price)}
      </p>
      <div className="grid grid-cols-4 gap-[6px]">
        {images &&
          images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md bg-ny-gray-100 aspect-square size-[74px]">
              <Image
                src={img}
                alt={`Product Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-1">
          <LocationIcon className="text-ny-primary-500" />
          <p className="text-caption-3 line-clamp-1 text-ny-gray-400">
            {location ?? '-'}
          </p>
        </div>
        <div className="flex shrink-0 justify-center items-start">
          <Rate
            disabled
            allowHalf
            value={rating}
            character={<StarIcon className="size-[10px] -ml-2" />}
            className="w-full -translate-y-1"
          />
        </div>
      </div>
    </div>
  );
};
