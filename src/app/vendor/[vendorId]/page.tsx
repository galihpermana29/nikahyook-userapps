import { getAllProduct } from '@/shared/actions/productService';
import { getUserDetail } from '@/shared/actions/userService';
import React from 'react';
import VendorDetailContainer from './container/VendorDetailContainer';

const VendorDetail = async ({ params }: { params: { vendorId: string } }) => {
  const { data: vendorData } = await getUserDetail(params.vendorId);

  if (typeof vendorData === 'string') {
    throw Error(vendorData);
  }

  const { data: productData } = await getAllProduct({
    vendor_id: params.vendorId,
    limit: 10,
    status: 'active',
  });

  if (typeof productData === 'string') {
    throw Error(productData);
  }

  return (
    <>
      <VendorDetailContainer
        vendor={vendorData.data}
        products={productData.data}
      />
    </>
  );
};

export default VendorDetail;
