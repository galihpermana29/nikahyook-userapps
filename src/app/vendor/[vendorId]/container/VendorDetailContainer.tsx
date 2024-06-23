'use client';

import { Button } from 'antd';
import { IAllProductsResponse } from '@/shared/models/productInterfaces';
import { IAllUserResponse } from '@/shared/models/userInterfaces';
import { IReview } from '@/shared/models/generalInterfaces';
import { MessageIcon } from '@/shared/container/Icon/MessageIcon';
import { ProductCard } from '@/shared/container/Card/ProductCard';
import { SwiperContainer } from '@/shared/container/Swiper/SwiperContainer';
import { SwiperSlide } from 'swiper/react';
import { TitledSection } from '@/shared/container/Section/TitledSection';
import BottomBar from '@/shared/container/BottomBar/BottomBar';
import DetailHeader from '@/shared/container/DetailHeader/DetailHeader';
import DetailInfoSection from '@/shared/container/Section/DetailInfoSection';
import Image from 'next/image';
import React from 'react';
import ReviewSection from '@/shared/container/Section/ReviewSection';
import SocialMediaSection from './section/SocialMediaSection';

const VendorDetailContainer = ({
  vendor,
  products,
}: {
  vendor: IAllUserResponse;
  products: IAllProductsResponse[];
}) => {
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

  const {
    vendor_album,
    vendor_description,
    website,
    instagram,
    tiktok,
    facebook,
  } = vendor.detail?.vendor_detail || {};

  return (
    <div>
      <DetailHeader
        title={vendor.name}
        header_image_url={vendor.profile_image_uri}
        target_id={vendor.id}
        wishlist_type="vendor"
        isWishlisted={vendor.detail?.is_wishlist}
      />
      <div className="space-y-5 mb-[64px]">
        <DetailInfoSection
          title={vendor.name}
          price={vendor.detail?.lowest_price}
          startFrom={true}
          product_type={vendor.detail?.vendor_type_name}
          sold={20}
          totalReview={12}
          rating={vendor.detail?.avg_rating}
        />
        {vendor_album && vendor_album.length > 0 && (
          <section>
            <SwiperContainer>
              {vendor_album?.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className={`w-[180px] h-[135px] ${index === 0 ? 'ml-4' : ''} ${
                    index + 1 === vendor_album?.length ? 'mr-4' : ''
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
        )}
        <section className="space-y-3 px-4">
          <h3 className="text-body-2 font-medium">Vendor Location</h3>
          <p className="text-caption-1 text-ny-gray-400">
            {vendor.detail?.location.city.label}
          </p>
        </section>
        <section className="space-y-3 px-4">
          <h3 className="text-body-2 font-medium">Description</h3>
          <p className="text-caption-1 text-ny-gray-400">
            {vendor_description}
          </p>
        </section>
        {(website || instagram || tiktok || facebook) && (
          <SocialMediaSection
            website_url={website}
            instagram_url={instagram}
            tiktok_url={tiktok}
            facebook_url={facebook}
          />
        )}
        <TitledSection
          title="Products From This Vendor"
          titleSize="large"
          navigateTo={`${vendor.id}/product`}
        >
          <SwiperContainer>
            {products.map((product, index: number) => (
              <SwiperSlide
                key={product.id}
                className={`w-fit ${index === 0 ? 'ml-4' : ''} ${
                  index + 1 === products.length ? 'mr-4' : ''
                }`}
              >
                <ProductCard
                  id={product.id}
                  key={product.id}
                  title={product.title}
                  location={product.location.city.label}
                  price={product.price}
                  rating={product.rating}
                  imageUrl={product.images[0]}
                  isInWishlist={product.is_wishlist}
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
        <BottomBar>
          <div className="flex items-center gap-2">
            <Button
              icon={<MessageIcon />}
              className="flex items-center justify-center w-full rounded-[8px] h-[40px] bg-ny-primary-100 text-ny-primary-500 text-body-2"
            >
              Message
            </Button>
          </div>
        </BottomBar>
      </div>
    </div>
  );
};

export default VendorDetailContainer;
