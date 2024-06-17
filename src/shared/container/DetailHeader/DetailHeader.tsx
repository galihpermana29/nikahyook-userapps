import { TWishlist } from '@/shared/models/productInterfaces';
import { WishListButton } from '../Button/WishListButton';
import DetailTitle from './DetailTitle';
import Image from 'next/image';
import React from 'react';

type IDetailHeader = {
  title: string;
  header_image_url: string;
  target_id: number | string;
  wishlist_type: TWishlist;
  isWishlisted: boolean | undefined;
};

const DetailHeader = ({ title, header_image_url, target_id, wishlist_type, isWishlisted }: IDetailHeader) => {
  return (
    <>
      <DetailTitle title={title} />
      <div className="min-h-[270px] relative">
        <WishListButton
          target_id={target_id}
          wishlist_type={wishlist_type}
          isActive={isWishlisted}
          className="absolute right-2 bottom-2 z-10"
        />
        <Image
          className="object-cover"
          src={header_image_url}
          alt={`${title} header image`}
          fill
        />
      </div>
    </>
  );
};

export default DetailHeader;
