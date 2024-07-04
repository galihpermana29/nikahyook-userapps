'use client';

import { Button, message } from 'antd';
import { CartIcon } from '@/shared/container/Icon/CartIcon';
import { createCart } from '@/shared/actions/productService';
import { IAllProductsResponse } from '@/shared/models/productInterfaces';
import { MessageIcon } from '@/shared/container/Icon/MessageIcon';
import { SwiperContainer } from '@/shared/container/Swiper/SwiperContainer';
import { SwiperSlide } from 'swiper/react';
import { useMutation } from 'react-query';
import { VendorCard } from '@/shared/container/Card/VendorCard';
import BottomBar from '@/shared/container/BottomBar/BottomBar';
import CoverageAreaSection from './section/CoverageAreaSection';
import DetailHeader from '@/shared/container/DetailHeader/DetailHeader';
import DetailInfoSection from '@/shared/container/Section/DetailInfoSection';
import Image from 'next/image';
import React from 'react';
import ReviewSection from '@/shared/container/Section/ReviewSection';
import useQuoteProductToChat from '../usecase/useQuoteProductToChat';
import { useRouter } from 'next/navigation';

const ProductDetailContainer = ({
  product,
}: {
  product: IAllProductsResponse;
}) => {

  const router = useRouter();

  const { onClickMessage } = useQuoteProductToChat(product);

  const { mutate: mutateAddToCart, isLoading } = useMutation({
    mutationFn: createCart,
    onSuccess: (data) => {
      if (data?.success) {
        message.success('Product added to cart successfully!');
      } else {
        message.error('Product failed to be added to cart!');
      }
    },
    onError: (error: string | Error) => {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error(error as string);
      }
    },
  });

  return (
    <div>
      <DetailHeader
        title={product.title}
        header_image_url={product.images[0]}
        target_id={product.id}
        wishlist_type="product"
        isWishlisted={product.is_wishlist}
        titleIcon={
          <CartIcon
            className='text-ny-primary-500'
            onClick={() => router.push('/cart')}
          />
        }
      />
      <div className="space-y-5 mb-[64px]">
        <DetailInfoSection
          title={product.title}
          price={product.price}
          product_type={product.product_type_name}
          sold={20}
          totalReview={product.review.total_review}
          rating={product.rating}
          quantity_label={product.quantity_label}
        />
        <section>
          <SwiperContainer>
            {product.images.map((image, index) => (
              <SwiperSlide
                key={index}
                className={`w-[180px] h-[135px] ${index === 0 && 'ml-4'} ${index + 1 === product.images.length && 'mr-4'
                  }`}>
                <Image
                  src={image}
                  alt={product.title}
                  className="object-cover rounded-lg"
                  fill
                />
              </SwiperSlide>
            ))}
          </SwiperContainer>
        </section>
        <CoverageAreaSection coverage_area={product.coverage_area} />
        <section className="space-y-3 px-4">
          <h3 className="text-body-2 font-medium">Description</h3>
          <p className="text-caption-1 text-ny-gray-400">
            {product.description}
          </p>
        </section>
        <section className="space-y-3 px-4">
          <h2 className="text-body-2 font-medium">Vendor</h2>
          <VendorCard
            id={product.vendor.id}
            navigateTo={`/vendor/${product.vendor.id}`}
            vendor_name={product.vendor.name}
            product_type_name={product.vendor.type_name}
            price={product.vendor.lowest_price}
            rating={product.vendor.avg_rating}
            location={product.vendor.location.city.label}
            profile_picture_uri={product.vendor.image}
            images={product.vendor.vendor_detail.vendor_album}
            isInWishlist={product.vendor.is_wishlist}
          />
        </section>
        <ReviewSection
          avgRating={product.rating}
          totalReviews={product.review.total_review}
          reviews={product.review.review}
        />
      </div>
      <BottomBar>
        <div className="flex items-center gap-2">
          <Button
            onClick={onClickMessage}
            htmlType="button"
            icon={<MessageIcon />}
            className="flex items-center justify-center flex-1 rounded-[8px] h-[40px] bg-ny-primary-100 text-ny-primary-500 text-body-2">
            Message
          </Button>
          <Button
            icon={<CartIcon />}
            className="flex items-center justify-center flex-1 rounded-[8px] h-[40px] bg-ny-primary-500 text-white text-body-2"
            onClick={() => mutateAddToCart(product.id)}
            loading={isLoading}>
            Add to Cart
          </Button>
        </div>
      </BottomBar>
    </div>
  );
};

export default ProductDetailContainer;
