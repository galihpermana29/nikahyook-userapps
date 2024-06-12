import { InspirationGrid } from '@/shared/container/Grid/InspirationGrid';
import React from 'react';

const TabInspiration = () => {
  const InspirationMockData = [
    'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1718087524/nikahyook/ttfgvawny9lurpr0p6ew.webp',
    'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1718087524/nikahyook/ttfgvawny9lurpr0p6ew.webp',
    'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1718087524/nikahyook/ttfgvawny9lurpr0p6ew.webp',
    'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1718087524/nikahyook/ttfgvawny9lurpr0p6ew.webp',
  ];
  return (
    <InspirationGrid data={InspirationMockData} onWishlistClick={() => {}} />
  );
};

export default TabInspiration;
