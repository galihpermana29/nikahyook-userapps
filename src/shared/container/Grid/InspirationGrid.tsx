import Image from 'next/image';
import { WishListButton } from '../Button/WishListButton';
import splitArrayToChunks from '@/shared/usecase/splitArrayToChunks';
import generateUUID from '@/shared/usecase/generateUUID';
import { NikahyookLogoIcon } from '../Icon/NikahyookLogoIcon';
import { IAllInspirationsResponse } from '@/shared/models/productInterfaces';

interface IInspirationGrid {
  data: IAllInspirationsResponse[];
  animated?: boolean;
  showWishlist?: boolean;
  refetchFn?: any;
}

export const InspirationGrid = ({
  data,
  refetchFn,
  showWishlist = true,
  animated = false,
}: IInspirationGrid) => {
  const dataChunks: IAllInspirationsResponse[][] = splitArrayToChunks(data);

  return (
    <div className="flex flex-col gap-2 px-4">
      {dataChunks.map((chunk) => (
        <div
          key={generateUUID()}
          className="grid grid-cols-2 grid-rows-3 gap-2">
          {chunk.map((item, index) => (
            <div
              key={generateUUID()}
              className={`bg-ny-gray-100 relative overflow-hidden flex items-center justify-center rounded-lg ${
                (index + 1) % 2 === 0 ? 'aspect-[4/3]' : 'row-span-2'
              } ${animated && 'animate-pulse'}`}>
              {!item && !animated && (
                <NikahyookLogoIcon className="text-ny-gray-200 w-10 h-10" />
              )}

              {item && (
                <>
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="Inspiration Picture"
                      fill
                      className="object-cover"
                    />
                  )}
                  {showWishlist && (
                    <WishListButton
                      target_id={item.id}
                      isActive={item.is_wishlist}
                      wishlist_type="inspiration"
                      refetch={refetchFn}
                      className="absolute bottom-2 right-2"
                    />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
