'use client';

import { CuratorCard } from '@/shared/container/Card/CuratorCard';
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
    </div>
  );
};

export default DiscoverContainer;
