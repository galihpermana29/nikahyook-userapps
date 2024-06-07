import { getUserDetail } from '@/shared/actions/userService';
import React from 'react';
import VendorDetailContainer from './container/VendorDetailContainer';

const VendorDetail = async ({ params }: { params: { vendorId: string } }) => {
  const { data } = await getUserDetail(params.vendorId);

  if (typeof data === 'string') {
    throw Error(data);
  }

  return (
    <>
      <VendorDetailContainer vendor={data.data} />
    </>
  );
};

export default VendorDetail;
