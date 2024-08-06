import Image from 'next/image';
import { WishListButton } from '../Button/WishListButton';
import splitArrayToChunks from '@/shared/usecase/splitArrayToChunks';
import generateUUID from '@/shared/usecase/generateUUID';
import { NikahyookLogoIcon } from '../Icon/NikahyookLogoIcon';
import { IAllInspirationsResponse } from '@/shared/models/productInterfaces';
import EmptySection from '../Section/EmptySection';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
interface IInspirationGrid {
  data: IAllInspirationsResponse[];
  animated?: boolean;
  showWishlist?: boolean;
  refetchFn?: any;
  wishlisted?: boolean;
  padding?: boolean;
}

export const InspirationGrid = ({
  data,
  refetchFn,
  showWishlist = true,
  animated = false,
  wishlisted = false,
  padding = true,
}: IInspirationGrid) => {
  const dataChunks: IAllInspirationsResponse[][] = splitArrayToChunks(data);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-2 ${
        padding ? 'px-4' : ''
      }`}>
      {data.length === 0 ? (
        <EmptySection message="There are currently no inspirations..." />
      ) : (
        <PhotoProvider>
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
                        <PhotoView key={index} src={item.image}>
                          <Image
                            src={item.image}
                            alt="Inspiration Picture"
                            fill
                            className="object-cover"
                          />
                        </PhotoView>
                      )}
                      {showWishlist && (
                        <WishListButton
                          target_id={item.id}
                          isActive={wishlisted ? wishlisted : item.is_wishlist}
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
        </PhotoProvider>
      )}
    </div>
  );
};
