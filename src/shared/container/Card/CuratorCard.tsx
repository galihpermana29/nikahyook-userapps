import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { WishListButton } from '../Button/WishListButton';
import { NikahyookLogoIcon } from '../Icon/NikahyookLogoIcon';
import validateUrl from '@/shared/usecase/validateUrl';

interface ICuratorCard {
  id: number;
  imageUrl?: string;
  title?: string;
  isInWishlist: boolean;
  responsive?: boolean;
  refetchFn?: any;
}

export const CuratorCard = ({
  id,
  imageUrl,
  title,
  refetchFn,
  isInWishlist = false,
  responsive = false,
}: ICuratorCard) => {
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
      onClick={() => router.push(`/curatorial/${id}`)}
      className={`shadow-md relative cursor-pointer rounded-lg overflow-hidden hover:bg-ny-gray-100/25 transition-colors duration-150 ${
        responsive ? 'w-full' : 'w-[140px]'
      }`}>
      <WishListButton
        target_id={id}
        wishlist_type="curatorial"
        isActive={isInWishlist}
        refetch={refetchFn}
        className="absolute right-2 top-2 z-10"
      />
      <div className="bg-ny-gray-100 relative w-full aspect-square flex items-center justify-center">
        {displayedImage}
      </div>
      <div className={`px-2 py-3 ${responsive ? 'h-max' : 'h-[60px]'}`}>
        <h2 className="text-caption-2 font-medium line-clamp-2 mb-1">
          {title ?? '-'}
        </h2>
      </div>
    </div>
  );
};
