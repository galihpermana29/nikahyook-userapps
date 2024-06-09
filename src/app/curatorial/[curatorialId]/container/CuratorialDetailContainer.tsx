'use client';

import { Button } from 'antd';
import {
  IAllCuratorialResponseRoot,
  IProduct,
} from '@/shared/models/curatorialInterfaces';
import { InspirationGrid } from '@/shared/container/Grid/InspirationGrid';
import { LovelyIcon } from '@/shared/container/Icon/LovelyIcon';
import { ProductCard } from '@/shared/container/Card/ProductCard';
import { SwiperContainer } from '@/shared/container/Swiper/SwiperContainer';
import { SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation';
import { VendorCard } from '@/shared/container/Card/VendorCard';
import CuratorialAuthorSection from './section/CuratorialAuthorSection';
import DetailFooter from '@/shared/container/DetailFooter/DetailFooter';
import DetailHeader from '@/shared/container/DetailHeader/DetailHeader';
import DetailInfoSection from '@/shared/container/Section/DetailInfoSection';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import Image from 'next/image';
import React from 'react';
import { TitledSection } from '@/shared/container/Section/TitledSection';
const CuratorialDetailContainer = ({
  curatorial,
}: {
  curatorial: IAllCuratorialResponseRoot;
}) => {
  return (
    <div>
      <DetailHeader
        title={curatorial.name}
        header_image_url={curatorial.images[0]}
      />
      <div className="space-y-5 mb-[64px]">
        <DetailInfoSection title={curatorial.name} />
        <section>
          <SwiperContainer>
            {curatorial.images.map((image, index) => (
              <SwiperSlide
                key={index}
                className={`w-[180px] h-[135px] ${index === 0 && 'ml-4'} ${
                  index + 1 === curatorial.images.length && 'mr-4'
                }`}
              >
                <Image
                  src={image}
                  alt={curatorial.name}
                  className="object-cover rounded-lg"
                  fill
                />
              </SwiperSlide>
            ))}
          </SwiperContainer>
        </section>
        <CuratorialAuthorSection
          expert_name={curatorial.expert_name}
          expert_photo={curatorial.expert_photo}
        />
        <section className="space-y-3 px-4">
          <h3 className="text-body-2 font-medium">Description</h3>
          <p className="text-caption-1 text-ny-gray-400">
            {curatorial.description}
          </p>
        </section>
        <TitledSection
          title="Top Inspirations"
          titleSize='large'
          onLoadMore={() => {}}
        >
          <InspirationGrid
            data={curatorial.inspirations.slice(0, 4)}
            onWishlistClick={() => {}}
          />
        </TitledSection>
        <TitledSection
          title="Products"
          titleSize='large'
          navigateTo={`/curatorial/${curatorial.id}/product`}
        >
          <SwiperContainer>
            {curatorial.products
              .slice(0, 5)
              .map((item: IProduct, index: number) => (
                <SwiperSlide
                  key={item.id}
                  className={`w-fit ${index === 0 && 'ml-4'} ${
                    index + 1 === curatorial.products.length && 'mr-4'
                  }`}
                >
                  <ProductCard
                    navigateTo={`/product/${item.id}`}
                    onWishlistClick={() => {}}
                    title={item.title}
                    location={item.location}
                    price={item.price}
                    rating={item.rating}
                    imageUrl={item.images[0]}
                  />
                </SwiperSlide>
              ))}
          </SwiperContainer>
        </TitledSection>
        <TitledSection
          title="Vendors"
          titleSize='large'
          navigateTo={`/curatorial/${curatorial.id}/vendor`}
        >
          <div className="space-y-3 px-4">
            {curatorial.vendor.slice(0, 3).map((vendor) => (
              <div key={vendor.id}>
                <VendorCard
                  navigateTo="/"
                  onWishlistClick={() => {}}
                  vendor_name={vendor.name}
                  product_type_name={vendor.type}
                  price={vendor.lowest_price}
                  rating={vendor.avg_rating}
                  location={vendor.location}
                  profile_picture_uri={vendor.image}
                  images={vendor.vendor_detail.vendor_album}
                />
              </div>
            ))}
          </div>
        </TitledSection>
        <section className="flex flex-col justify-center items-center gap-[2px] text-center mx-4 py-[6px] bg-ny-info-100 border border-solid border-ny-info-400 rounded-lg">
          <p className="text-caption-2 text-ny-gray-400">Budget Total</p>
          <p className="text-body-2 text-ny-primary-500 font-medium">
            {formatToRupiah(curatorial.total_price)}
          </p>
          <p className="text-caption-2 text-ny-gray-400">
            *This budget is only an estimated calculation
          </p>
        </section>
      </div>
      <DetailFooter>
        <Button
          icon={<LovelyIcon />}
          className="flex items-center justify-center w-full rounded-[8px] h-[40px] bg-ny-primary-500 text-white text-body-2"
        >
          Add to Plan
        </Button>
      </DetailFooter>
    </div>
  );
};

export default CuratorialDetailContainer;
