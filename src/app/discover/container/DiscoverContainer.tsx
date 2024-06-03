'use client';

import { getClientSession } from '@/shared/usecase/getClientSession';

const DiscoverContainer = () => {
  // INFO: get client side session
  const sessionData = getClientSession();

  return (
    <div className="">
      <div>{sessionData.email}</div>
      <div>curator</div>
      <div>product</div>
    </div>
  );
};

export default DiscoverContainer;
