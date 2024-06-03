import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { WishListButton } from '../Button/WishListButton';
import { LocationIcon } from '../Icon/LocationIcon';
import { Rate } from 'antd';
import { StarIcon } from '../Icon/StarIcon';
import formatToRupiah from '@/shared/usecase/formatToRupiah';

interface IProductCard {
  imageUrl?: string;
  title?: string;
  location?: string;
  rating?: number;
  price?: number;
  navigateTo: string;
  onWishlistClick: () => void;
}

export const ProductCard = ({
  imageUrl,
  location,
  title,
  navigateTo,
  onWishlistClick,
  rating = 0,
  price = 0,
}: IProductCard) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(navigateTo)}
      className="shadow-lg relative cursor-pointer rounded-lg w-[140px] overflow-hidden hover:bg-ny-gray-100/25 transition-colors duration-150">
      <WishListButton
        onMutateWishList={onWishlistClick}
        className="absolute right-2 top-2 z-10"
      />
      <div className="bg-ny-gray-100 relative w-full aspect-square">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={`${title} Image`}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="px-2 py-3 flex flex-col justify-between h-[110px]">
        <h2 className="text-caption-2 font-medium line-clamp-2 mb-1">
          {title ?? '-'}
        </h2>
        <div>
          <p className="text-caption-2 text-ny-primary-500">
            {formatToRupiah(price)}
          </p>
          <div className="flex gap-2 justify-between">
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
