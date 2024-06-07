'use client';

import { Button } from 'antd';
import { IAllUserResponse } from '@/shared/models/userInterfaces';
import { IReview } from '@/shared/models/generalInterfaces';
import { MessageIcon } from '@/shared/container/Icon/MessageIcon';
import { ProductCard } from '@/shared/container/Card/ProductCard';
import { SwiperContainer } from '@/shared/container/Swiper/SwiperContainer';
import { SwiperSlide } from 'swiper/react';
import { TitledSection } from '@/shared/container/Section/TitledSection';
import DetailFooter from '@/shared/container/DetailFooter/DetailFooter';
import DetailHeader from '@/shared/container/DetailHeader/DetailHeader';
import DetailInfoSection from '@/shared/container/Section/DetailInfoSection';
import Image from 'next/image';
import React from 'react';
import ReviewSection from '@/shared/container/Section/ReviewSection';

const VendorDetailContainer = ({ vendor }: { vendor: IAllUserResponse }) => {
  // This is just temporary data while waiting for backend
  const reviewMockData: IReview[] = [
    {
      profile_image_url:
        'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1717122421/nikahyook/gxsgo2wdyhnykrgfoxg6.png',
      name: 'Zidan',
      rating: 4,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, nulla ut commodo fermentum, augue enim consectetur diam, ac vulputate dui turpis non ipsum. ',
    },
    {
      profile_image_url:
        'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1717122421/nikahyook/gxsgo2wdyhnykrgfoxg6.png',
      name: 'Zidan',
      rating: 4,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, nulla ut commodo fermentum, augue enim consectetur diam, ac vulputate dui turpis non ipsum. ',
    },
  ];

  return (
    <div>
      <DetailHeader
        title={vendor.name}
        header_image_url={vendor.profile_image_uri}
      />
      <div className="space-y-5 mb-[64px]">
        <DetailInfoSection
          title={vendor.name}
          price={vendor.detail?.lowest_price}
          product_type={vendor.detail?.vendor_type_name}
          sold={20}
          totalReview={12}
          rating={vendor.detail?.avg_rating}
        />
        <section>
          <SwiperContainer>
            {vendor.detail?.vendor_detail.vendor_album?.map((image, index) => (
              <SwiperSlide
                key={index}
                className={`w-[180px] h-[135px] ${index === 0 && 'ml-4'} ${
                  index + 1 ===
                    vendor.detail?.vendor_detail.vendor_album?.length && 'mr-4'
                }`}
              >
                <Image
                  src={image}
                  alt={vendor.name}
                  className="object-cover rounded-lg"
                  fill
                />
              </SwiperSlide>
            ))}
          </SwiperContainer>
        </section>
        <section className="space-y-3 px-4">
          <h3 className="text-body-2 font-medium">Description</h3>
          <p className="text-caption-1 text-ny-gray-400">
            {vendor.detail?.vendor_detail.vendor_description}
          </p>
        </section>
        <TitledSection
          title="Products From This Vendor"
          titleSize="large"
          navigateTo="product"
        >
          <SwiperContainer>
            {Array.from({ length: 10 }).map((_, index: number) => (
              <SwiperSlide
                key={index}
                className={`w-fit ${index === 0 && 'ml-4'} ${
                  index + 1 === 12 && 'mr-4'
                }`}
              >
                <ProductCard
                  key={index}
                  navigateTo="/"
                  onWishlistClick={() => {}}
                  title="Kempinski Wedding Hall 2"
                  location="Arjosari, 65126, Blimbing, Malang, East Java, Indonesia"
                  price={15000}
                  rating={5}
                  imageUrl="https://res.cloudinary.com/dcvnwpyd9/image/upload/v1716742049/nikahyook/tffegtyvok7py9j49tbj.jpg"
                />
              </SwiperSlide>
            ))}
          </SwiperContainer>
        </TitledSection>
        <ReviewSection
          avgRating={4}
          totalReviews={12}
          reviews={reviewMockData}
        />
        <DetailFooter>
          <div className="flex items-center gap-2">
            <Button
              icon={<MessageIcon />}
              className="flex items-center justify-center w-full rounded-[8px] h-[40px] bg-ny-primary-100 text-ny-primary-500 text-body-2"
            >
              Message
            </Button>
          </div>
        </DetailFooter>
      </div>
    </div>
  );
};

export default VendorDetailContainer;
