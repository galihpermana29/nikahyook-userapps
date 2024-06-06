import Image from 'next/image';
import { WishListButton } from '../Button/WishListButton';
import splitArrayToChunks from '@/shared/usecase/splitArrayToChunks';
import generateUUID from '@/shared/usecase/generateUUID';

interface IInspirationGrid {
  data: any[];
  onWishlistClick: () => void;
}

export const InspirationGrid = ({
  data,
  onWishlistClick,
}: IInspirationGrid) => {
  const dataChunks = splitArrayToChunks(data);

  return (
    <div className="flex flex-col gap-2 px-4">
      {dataChunks.map((chunk) => (
        <div className="grid grid-cols-2 grid-rows-3 gap-2">
          {chunk.map((item, index) => (
            <div
              key={generateUUID()}
              className={`bg-ny-gray-100 relative overflow-hidden rounded-lg ${
                (index + 1) % 2 === 0 ? 'aspect-[4/3]' : 'row-span-2'
              }`}>
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
                  <WishListButton
                    onMutateWishList={onWishlistClick}
                    className="absolute bottom-2 right-2"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
