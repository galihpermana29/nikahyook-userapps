import React from 'react';
import { WishListButton } from '../Button/WishListButton';
import Image from 'next/image';
import DetailTitle from './DetailTitle';

type IDetailHeader = {
  title: string;
  header_image_url: string;
};

const DetailHeader = ({ title, header_image_url }: IDetailHeader) => {
  return (
    <>
      <DetailTitle title={title} />
      <div className="min-h-[270px] relative">
        <WishListButton
          onMutateWishList={() => {}}
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
