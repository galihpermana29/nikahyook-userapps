import { CuratorCard } from '@/shared/container/Card/CuratorCard';
import generateUUID from '@/shared/usecase/generateUUID';
import React from 'react';

const TabCuratorial = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {Array.from({ length: 6 }, () => (
        <CuratorCard
          key={generateUUID()}
          id={12345}
          responsive
          onWishlistClick={() => {}}
          title={'curatorial name'}
          imageUrl={
            'https://res.cloudinary.com/dcvnwpyd9/image/upload/v1718087555/nikahyook/gjvbev5zgf32kpn0nyrw.webp'
          }
        />
      ))}
    </div>
  );
};

export default TabCuratorial;
