import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { WishListButton } from '../Button/WishListButton';
import { LocationIcon } from '../Icon/LocationIcon';

interface ICuratorCard {
  id: number;
  imageUrl?: string;
  title?: string;
  location?: string;
  responsive?: boolean;
  onWishlistClick: () => void;
}

export const CuratorCard = ({
  id,
  imageUrl,
  location,
  title,
  onWishlistClick,
  responsive = false,
}: ICuratorCard) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/curatorial/${id}`)}
      className={`shadow-md relative cursor-pointer rounded-lg overflow-hidden hover:bg-ny-gray-100/25 transition-colors duration-150 ${
        responsive ? 'w-full' : 'w-[140px]'
      }`}>
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
      <div className={`px-2 py-3 ${responsive ? 'h-max' : 'h-[60px]'}`}>
        <h2 className="text-caption-2 font-medium line-clamp-2 mb-1">
          {title ?? '-'}
        </h2>
      </div>
    </div>
  );
};
