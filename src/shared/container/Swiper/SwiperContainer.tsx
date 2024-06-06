import React, { ReactNode } from 'react';
import { Swiper } from 'swiper/react';

export const SwiperContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={'auto'}
      grabCursor
      className="py-5 -my-5">
      {children}
    </Swiper>
  );
};
