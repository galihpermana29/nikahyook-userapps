import { getProductDetail } from '../../../shared/actions/productService';
import ProductDetailContainer from './container/ProductDetailContainer';
import React from 'react';

const ProductDetail = async ({ params }: { params: { productId: string } }) => {
  const { data } = await getProductDetail(params.productId);

  if (typeof data === 'string') {
    throw Error(data);
  }

  return (
    <>
      <ProductDetailContainer
        product={data.data}
      />
    </>
  );
};

export default ProductDetail;
