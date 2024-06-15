import { LocationIcon } from '../Icon/LocationIcon';
import { Rate } from 'antd';
import { StarIcon } from '../Icon/StarIcon';
import { useRouter } from 'next/navigation';
import { WishListButton } from '../Button/WishListButton';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import Image from 'next/image';
import { NikahyookLogoIcon } from '../Icon/NikahyookLogoIcon';
import validateUrl from '@/shared/usecase/validateUrl';

interface IProductCard {
  id: number;
  imageUrl?: string;
  title?: string;
  location?: string;
  rating?: number;
  price?: number;
  isInWishlist?: boolean;
  responsive?: boolean;
  refetchFn?: any;
}

export const ProductCard = ({
  id,
  imageUrl,
  location,
  title,
  refetchFn,
  isInWishlist = false,
  responsive = false,
  rating = 0,
  price = 0,
}: IProductCard) => {
  const router = useRouter();

  let displayedImage = (
    <NikahyookLogoIcon className="w-10 h-10 text-ny-gray-200" />
  );

  if (imageUrl && validateUrl(imageUrl)) {
    displayedImage = (
      <Image
        src={imageUrl}
        alt={`${title} Image`}
        fill
        className="object-cover"
      />
    );
  }

  return (
    <div
      onClick={() => router.push(`/product/${id}`)}
      className={`shadow-md relative cursor-pointer rounded-lg overflow-hidden hover:bg-ny-gray-100/25 transition-colors duration-150 ${
        responsive ? 'w-full' : 'w-[140px]'
      }`}>
      <WishListButton
        target_id={id}
        wishlist_type="product"
        isActive={isInWishlist}
        refetch={refetchFn}
        className="absolute right-2 top-2 z-10"
      />
      <div className="bg-ny-gray-100 relative w-full aspect-square flex items-center justify-center">
        {displayedImage}
      </div>
      <div className="px-2 py-3 flex flex-col justify-between h-[105px]">
        <h2 className="text-caption-2 font-medium line-clamp-2 mb-1">
          {title ?? '-'}
        </h2>
        <div>
          <p className="text-caption-2 text-ny-primary-500">
            {formatToRupiah(price)}
          </p>
          <div className="flex gap-2 justify-between">
            <div className="flex items-center gap-1">
              <LocationIcon className="text-ny-primary-500 shrink-0" />
              <p className="text-caption-3 line-clamp-1 text-ny-gray-400">
                {location ?? '-'}
              </p>
            </div>
            <div className="flex shrink-0 justify-center items-start">
              <Rate
                disabled
                allowHalf
                value={rating}
                character={<StarIcon className="-ml-2" />}
                className="w-full -translate-y-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
