import { Button } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HeartIcon } from '../Icon/HeartIcon';
import { LocationIcon } from '../Icon/LocationIcon';
import { WishListButton } from '../Button/WishListButton';

interface ICuratorCard {
  imageUrl?: string;
  title?: string;
  location?: string;
  navigateTo: string;
  onWishlistClick: () => void;
}

export const CuratorCard = ({
  imageUrl,
  location,
  title,
  navigateTo,
  onWishlistClick,
}: ICuratorCard) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(navigateTo)}
      className="shadow-lg relative cursor-pointer rounded-lg w-[140px] overflow-hidden">
      <WishListButton
        onMutateWishList={onWishlistClick}
        className="absolute right-2 top-2"
      />
      <div className="bg-ny-gray-100 rounded-lg w-full aspect-square">
        {imageUrl && (
          <div className="relative w-full aspect-square">
            <Image
              src={`${title} Image`}
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
      <div className="px-2 py-3">
        <h2 className="text-caption-2 font-medium line-clamp-1 mb-1">
          {title ?? '-'}
        </h2>
        <div className="flex items-center gap-1">
          <LocationIcon className="text-ny-primary-500" />
          <p className="text-caption-3 text-ny-gray-400">{location ?? '-'}</p>
        </div>
      </div>
    </div>
  );
};
