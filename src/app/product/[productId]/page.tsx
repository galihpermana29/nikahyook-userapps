import { getDetailUser } from '@/shared/actions/userService';
import { getProductDetail } from '../../../shared/actions/productService';
import { IAllProductsResponse } from '@/shared/models/productInterfaces';
import { IDetailUserData } from '@/shared/models/userInterfaces';
import ProductDetailContainer from './container/ProductDetailContainer';
import React from 'react';

const ProductDetail = async ({ params }: { params: { productId: string } }) => {
  const { data } = await getProductDetail(params.productId);

  if (typeof data === 'string') {
    throw Error(data);
  }

  const productData = data as unknown as IAllProductsResponse;

  const { data: vendorResult } = await getDetailUser(productData.vendor_id);

  if (typeof vendorResult === 'string') {
    throw Error(vendorResult);
  }

  const vendorData = vendorResult as unknown as IDetailUserData;

  return (
    <>
      <ProductDetailContainer product={productData} vendor={vendorData} />
    </>
  );
};

export default ProductDetail;
