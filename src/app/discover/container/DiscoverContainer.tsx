'use client';

import { CuratorCard } from '@/shared/container/Card/CuratorCard';
import { ProductCard } from '@/shared/container/Card/ProductCard';
import { VendorCard } from '@/shared/container/Card/VendorCard';
import { InspirationGrid } from '@/shared/container/Grid/InspirationGrid';
import { DiscoverSection } from '@/shared/container/Section/DiscoverSection';

const DiscoverContainer = () => {
  // INFO: get client side session
  // const sessionData = getClientSession();

  return (
    <main className="py-10 flex flex-col gap-10">
      <DiscoverSection title="Top Curators Pick" navigateTo="/">
        <CuratorCard
          navigateTo="/"
          onWishlistClick={() => {}}
          location="Malang"
          title="Rustic Wedding"
          imageUrl="https://images.unsplash.com/photo-1588963200960-44cf8e2b6fed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnVzdGljJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        />
      </DiscoverSection>

      <DiscoverSection title="Top Products" navigateTo="/">
        <ProductCard
          navigateTo="/"
          onWishlistClick={() => {}}
          title="Hampers Mewah Souvenir Pernikahan Ulang Tahun"
          location="Malang"
          price={200_000}
          rating={4.5}
          imageUrl="https://images.unsplash.com/photo-1521478706270-f2e33c203d95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGhhbXBlcnN8ZW58MHx8MHx8fDA%3D"
        />
      </DiscoverSection>

      <DiscoverSection title="Top Inspirations" navigateTo="/">
        <InspirationGrid
          data={[...Array(4).fill('dummy')]}
          onWishlistClick={() => {}}
        />
      </DiscoverSection>

      <DiscoverSection title="Top Vendors" navigateTo="/">
        <VendorCard
          navigateTo="/"
          onWishlistClick={() => {}}
          vendor_name="The Apurva Kempinski Bali"
          product_type_name="Venue"
          price={500_000}
          rating={4}
          location="Malang"
          profile_picture_uri="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
          images={[
            ...Array(4).fill(
              'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'
            ),
          ]}
        />
      </DiscoverSection>
    </main>
  );
};

export default DiscoverContainer;
