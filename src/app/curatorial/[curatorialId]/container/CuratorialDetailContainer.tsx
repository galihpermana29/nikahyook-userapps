'use client';

import { ProductCard } from '@/shared/container/Card/ProductCard';
import { VendorCard } from '@/shared/container/Card/VendorCard';
import DetailHeader from '@/shared/container/DetailHeader/DetailHeader';
import { InspirationGrid } from '@/shared/container/Grid/InspirationGrid';
import DetailInfoSection from '@/shared/container/Section/DetailInfoSection';
import { TitledSection } from '@/shared/container/Section/TitledSection';
import { SwiperContainer } from '@/shared/container/Swiper/SwiperContainer';
import {
  IAllCuratorialResponseRoot,
  IProduct,
} from '@/shared/models/curatorialInterfaces';
import { IAllInspirationsResponse } from '@/shared/models/productInterfaces';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import Image from 'next/image';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import CuratorialAuthorSection from './section/CuratorialAuthorSection';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const CuratorialDetailContainer = ({
  curatorial,
}: {
  curatorial: IAllCuratorialResponseRoot;
}) => {
  const [inspirationLimit, setInspirationLimit] = useState(4);

  const handleLoadMoreInspirations = () => {
    setInspirationLimit((prev) => prev + 4);
  };

  const handleLoadLessInspirations = () => {
    setInspirationLimit(4);
  };

  return (
    <div>
      <DetailHeader
        title={curatorial.name}
        header_image_url={curatorial.images[0]}
        target_id={curatorial.id}
        wishlist_type="curatorial"
        isWishlisted={curatorial.is_wishlist}
      />
      <div className="space-y-5 mb-[64px]">
        <DetailInfoSection title={curatorial.name} />
        <section>
          <PhotoProvider>
            <SwiperContainer>
              {curatorial.images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className={`w-[180px] h-[135px] ${index === 0 && 'ml-4'} ${
                    index + 1 === curatorial.images.length && 'mr-4'
                  }`}>
                  <PhotoView key={index} src={image}>
                    <Image
                      src={image}
                      alt={curatorial.name}
                      className="object-cover rounded-lg"
                      fill
                    />
                  </PhotoView>
                </SwiperSlide>
              ))}
            </SwiperContainer>
          </PhotoProvider>
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
          titleSize="large"
          onLoadMore={handleLoadMoreInspirations}
          onLoadLess={handleLoadLessInspirations}
          inspirationLimit={inspirationLimit}
          inspirationLength={curatorial.inspirations.length}>
          <InspirationGrid
            data={
              curatorial.inspirations.slice(
                0,
                inspirationLimit
              ) as IAllInspirationsResponse[]
            }
          />
        </TitledSection>
        <TitledSection
          title="Products"
          titleSize="large"
          navigateTo={`/curatorial/${curatorial.id}/product`}>
          <SwiperContainer>
            {curatorial.products
              .slice(0, 10)
              .map((item: IProduct, index: number) => (
                <SwiperSlide
                  key={item.id}
                  className={`w-fit ${index === 0 && 'ml-4'} ${
                    index + 1 === curatorial.products.length && 'mr-4'
                  }`}>
                  <ProductCard
                    id={item.id}
                    title={item.title}
                    location={item.location.city.label}
                    price={item.price}
                    quantity_label={item.quantity_label}
                    rating={item.rating}
                    imageUrl={item.images[0]}
                    isInWishlist={item.is_wishlist}
                  />
                </SwiperSlide>
              ))}
          </SwiperContainer>
        </TitledSection>
        <TitledSection
          title="Vendors"
          titleSize="large"
          navigateTo={`/curatorial/${curatorial.id}/vendor`}>
          <div className="space-y-3 px-4">
            {curatorial.vendor.slice(0, 10).map((vendor) => (
              <div key={vendor.id}>
                <VendorCard
                  id={vendor.id}
                  navigateTo={`/vendor/${vendor.id}`}
                  vendor_name={vendor.name}
                  product_type_name={vendor.type}
                  price={vendor.lowest_price}
                  rating={vendor.avg_rating}
                  location={vendor.location.city.label}
                  profile_picture_uri={vendor.image}
                  images={vendor.vendor_detail.vendor_album}
                  isInWishlist={vendor.is_wishlist}
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
      {/* <BottomBar>
        <Button
          icon={<LovelyIcon />}
          className="flex items-center justify-center w-full rounded-[8px] h-[40px] bg-ny-primary-500 text-white text-body-2">
          Add to Plan
        </Button>
      </BottomBar> */}
    </div>
  );
};

export default CuratorialDetailContainer;
