import { TWishlist } from '@/shared/models/productInterfaces';
import { WishListButton } from '../Button/WishListButton';
import Image from 'next/image';
import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

type IDetailHeader = {
  title: string;
  header_image_url: string;
  target_id: number | string;
  wishlist_type: TWishlist;
  isWishlisted: boolean | undefined;
  titleIcon?: React.ReactNode;
  callbackUrl?: string;
};

const DetailHeader = ({
  title,
  header_image_url,
  target_id,
  wishlist_type,
  isWishlisted,
  titleIcon,
  callbackUrl,
}: IDetailHeader) => {
  return (
    <PhotoProvider>
      <PageTitle backUrl={callbackUrl} title={title}>
        {titleIcon}
      </PageTitle>
      <div className="min-h-[270px] relative md:rounded-2xl md:mt-5 overflow-hidden">
        <WishListButton
          target_id={target_id}
          wishlist_type={wishlist_type}
          isActive={isWishlisted}
          className="absolute right-2 bottom-2 z-10"
        />
        <PhotoView src={header_image_url}>
          <Image
            className="object-cover"
            src={header_image_url}
            alt={`${title} header image`}
            fill
          />
        </PhotoView>
      </div>
    </PhotoProvider>
  );
};

export default DetailHeader;
