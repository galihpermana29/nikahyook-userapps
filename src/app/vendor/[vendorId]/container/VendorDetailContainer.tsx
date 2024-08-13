'use client';

import { Button } from 'antd';
import { IAllProductsResponse } from '@/shared/models/productInterfaces';
import { IAllUserResponse } from '@/shared/models/userInterfaces';
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
import Link from 'next/link';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const VendorDetailContainer = ({
  vendor,
  products,
}: {
  vendor: IAllUserResponse;
  products: IAllProductsResponse[];
}) => {
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
          sold={(vendor.detail as any).total_product_sold}
          totalReview={
            vendor.detail?.review.total_review
              ? vendor.detail.review.total_review
              : 0
          }
          rating={vendor.detail?.avg_rating}
        />
        {vendor_album && vendor_album.length > 0 && (
          <section>
            <PhotoProvider>
              <SwiperContainer>
                {vendor_album?.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className={`w-[180px] h-[135px] ${
                      index === 0 ? 'ml-4' : ''
                    } ${index + 1 === vendor_album?.length ? 'mr-4' : ''}`}>
                    <PhotoView src={image} key={index}>
                      <Image
                        src={image}
                        alt={vendor.name}
                        className="object-cover rounded-lg"
                        fill
                      />
                    </PhotoView>
                  </SwiperSlide>
                ))}
              </SwiperContainer>
            </PhotoProvider>
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
          navigateTo={`${vendor.id}/product`}>
          <SwiperContainer>
            {products.slice(0, 10).map((product, index: number) => (
              <SwiperSlide
                key={product.id}
                className={`w-fit ${index === 0 ? 'ml-4' : ''} ${
                  index + 1 === products.length ? 'mr-4' : ''
                }`}>
                <ProductCard
                  id={product.id}
                  key={product.id}
                  title={product.title}
                  location={product.location.city.label}
                  price={product.price}
                  quantity_label={product.quantity_label}
                  rating={product.rating}
                  imageUrl={product.images[0]}
                  isInWishlist={product.is_wishlist}
                />
              </SwiperSlide>
            ))}
          </SwiperContainer>
        </TitledSection>
        <ReviewSection
          avgRating={vendor.detail?.avg_rating ? vendor.detail.avg_rating : 0}
          totalReviews={
            vendor.detail?.review.total_review
              ? vendor.detail.review.total_review
              : 0
          }
          reviews={
            vendor.detail?.review.review ? vendor.detail.review.review : []
          }
        />
        <BottomBar>
          <div className="flex items-center gap-2">
            <Link href={`/chat/${vendor.id}`} className="w-full">
              <Button
                icon={<MessageIcon />}
                className="flex items-center justify-center w-full rounded-[8px] h-[40px] bg-ny-primary-100 text-ny-primary-500 text-body-2">
                Message
              </Button>
            </Link>
          </div>
        </BottomBar>
      </div>
    </div>
  );
};

export default VendorDetailContainer;
