import Image from 'next/image';
import { WishListButton } from '../Button/WishListButton';
import splitArrayToChunks from '@/shared/usecase/splitArrayToChunks';

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
              className={`bg-ny-gray-100 relative overflow-hidden rounded-lg ${
                (index + 1) % 2 === 0 ? 'aspect-[4/3]' : 'row-span-2'
              }`}>
              {item && (
                <>
                  {item?.image && (
                    <Image
                      src={
                        'https://images.unsplash.com/photo-1716827527719-9ed75218a0f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8'
                      }
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
