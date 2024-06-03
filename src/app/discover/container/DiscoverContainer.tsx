'use client';

import { CuratorCard } from '@/shared/container/Card/CuratorCard';
import { ProductCard } from '@/shared/container/Card/ProductCard';
import { VendorCard } from '@/shared/container/Card/VendorCard';
import { getClientSession } from '@/shared/usecase/getClientSession';

const DiscoverContainer = () => {
  // INFO: get client side session
  const sessionData = getClientSession();

  return (
    <div className="">
      <div>{sessionData.email}</div>
      <div>curator</div>
      <div>product</div>

      <section className="flex gap-2">
        <CuratorCard navigateTo="/" onWishlistClick={() => {}} />
      </section>
      <section className="flex gap-2">
        <ProductCard
          navigateTo="/"
          title="lorem lorem lorem lorem loremadasd asdasd"
          onWishlistClick={() => {}}
        />
        <ProductCard navigateTo="/" title="lorem" onWishlistClick={() => {}} />
      </section>
      <section className="flex gap-2 mt-10 p-5">
        <VendorCard navigateTo="/" onWishlistClick={() => {}} />
      </section>
    </div>
  );
};

export default DiscoverContainer;
