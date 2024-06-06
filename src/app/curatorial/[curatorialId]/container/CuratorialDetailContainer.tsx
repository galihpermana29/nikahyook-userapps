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
import { VendorCard } from '@/shared/container/Card/VendorCard';
import CuratorialItemSection from '../section/CuratorialItemSection';
import DetailFooter from '@/shared/container/DetailFooter/DetailFooter';
import DetailHeader from '@/shared/container/DetailHeader/DetailHeader';
import DetailInfoSection from '@/shared/container/Section/DetailInfoSection';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import Image from 'next/image';
import React from 'react';

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
      <div className="space-y-5 mb-[64px]">
        <section className="px-4 flex items-center gap-2">
          <div className="relative size-[40px]">
            <Image
              src={curatorial.expert_photo}
              alt={`${curatorial.name} Expert Photo`}
              fill
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-caption-2 text-ny-primary-500">
              Meet the Expert
            </p>
            <p className="text-caption-1 font-medium">
              {curatorial.expert_name}{' '}
              <span className="text-caption-2 text-ny-gray-400">| Curator</span>
            </p>
          </div>
        </section>
        <section className="space-y-3 px-4">
          <h3 className="text-body-2 font-medium">Description</h3>
          <p className="text-caption-1 text-ny-gray-400">
            {curatorial.description}
          </p>
        </section>
        <CuratorialItemSection title="Top Inspirations">
          <InspirationGrid
            data={curatorial.inspirations}
            onWishlistClick={() => {}}
          />
        </CuratorialItemSection>
        <CuratorialItemSection title="Products">
          <SwiperContainer>
            {curatorial.products.map((item: IProduct, index: number) => (
              <SwiperSlide
                key={item.id}
                className={`w-fit ${index === 0 && 'ml-4'} ${
                  index + 1 === curatorial.products.length && 'mr-4'
                }`}
              >
                <ProductCard
                  navigateTo="/"
                  onWishlistClick={() => {}}
                  title={item.title}
                  location={'Malang'}
                  price={item.price}
                  rating={4}
                  imageUrl={item.images[0]}
                />
              </SwiperSlide>
            ))}
          </SwiperContainer>
        </CuratorialItemSection>
        <CuratorialItemSection title="Vendors">
          <div className="space-y-3 px-4">
            {curatorial.vendor.map((vendor) => (
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
            ))}
          </div>
        </CuratorialItemSection>
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
          className="w-full rounded-[8px] h-[40px] bg-ny-primary-500 text-white text-body-2"
        >
          Add to Plan
        </Button>
      </DetailFooter>
    </div>
  );
};

export default CuratorialDetailContainer;
