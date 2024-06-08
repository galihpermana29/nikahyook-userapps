import { getAllProduct } from '@/shared/actions/productService';
import React from 'react';
import VendorProductContainer from './container/VendorProductContainer';

const VendorProduct = async ({ params }: { params: { vendorId: string } }) => {
  const { data } = await getAllProduct({
    vendor_id: params.vendorId,
    limit: 10,
    status: 'active',
  });

  if (typeof data === 'string') {
    throw Error(data);
  }

  return (
    <>
      <VendorProductContainer products={data.data} />
    </>
  );
};

export default VendorProduct;
