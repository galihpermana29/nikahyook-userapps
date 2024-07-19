import { LocationIcon } from '../Icon/LocationIcon';
import { NikahyookLogoIcon } from '../Icon/NikahyookLogoIcon';
import { Rate } from 'antd';
import { StarIcon } from '../Icon/StarIcon';
import { useRouter } from 'next/navigation';
import { WishListButton } from '../Button/WishListButton';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import Image from 'next/image';
import validateUrl from '@/shared/usecase/validateUrl';
import formatToCapitalWord from '@/shared/usecase/formatToCapitalWord';

interface IVendorCard {
  id: string;
  profile_picture_uri?: string;
  vendor_name?: string;
  product_type_name?: string;
  price?: number;
  images?: string[];
  location?: string;
  rating?: number;
  isInWishlist?: boolean;
  navigateTo: string;
  refetchFn?: any;
}

export const VendorCard = ({
  id,
  profile_picture_uri,
  images,
  location,
  product_type_name,
  vendor_name,
  navigateTo,
  refetchFn,
  isInWishlist = false,
  price = 0,
  rating = 0,
}: IVendorCard) => {
  const filteredImages = images?.filter((_, index) => index < 4);

  let displayedProfilePicture = (
    <NikahyookLogoIcon className="w-5 h-5 text-ny-gray-200" />
  );

  if (profile_picture_uri && validateUrl(profile_picture_uri)) {
    displayedProfilePicture = (
      <Image
        src={profile_picture_uri}
        alt={`${vendor_name} Image`}
        fill
        className="object-cover"
      />
    );
  }

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(navigateTo)}
      className="shadow-md cursor-pointer flex flex-col justify-between gap-[6px] bg-white rounded-lg w-full p-2 text-caption-2 hover:bg-ny-gray-100/25 transition-colors duration-150">
      <div className="space-y-[6px]">
        <div className="flex gap-2 items-center">
          <div className="min-w-[50px] min-h-[50px] relative overflow-hidden rounded-md bg-ny-gray-100 aspect-square flex justify-center items-center">
            {displayedProfilePicture}
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
            <WishListButton
              target_id={id}
              wishlist_type="vendor"
              isActive={isInWishlist}
              refetch={refetchFn}
            />
          </div>
        </div>
        <p className="text-caption-2 text-ny-primary-500">
          Price From {formatToRupiah(price)}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-[6px]">
        {filteredImages &&
          filteredImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden flex items-center justify-center rounded-md bg-ny-gray-100 aspect-square">
              {img && validateUrl(img) ? (
                <Image
                  src={img}
                  alt={`Product Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <NikahyookLogoIcon className="w-5 h-5 text-ny-gray-200" />
              )}
            </div>
          ))}
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-1">
          <LocationIcon className="text-ny-primary-500" />
          <p className="text-caption-3 line-clamp-1 text-ny-gray-400">
            {formatToCapitalWord(location ?? '-')}
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
