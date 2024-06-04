import { Button } from 'antd';
import React from 'react';
import { LetfArrowIcon } from '../Icon/LeftArrow';
import { WishListButton } from '../Button/WishListButton';
import Image from 'next/image';

type IDetailHeader = {
  title: string;
  header_image_url: string;
};

const DetailHeader = ({ title, header_image_url }: IDetailHeader) => {
  return (
    <>
      <div className="px-4 py-2 flex items-center gap-3">
        <Button type="link" icon={<LetfArrowIcon />} />
        <h1 className="text-body-1 font-semibold truncate">{title}</h1>
      </div>
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
