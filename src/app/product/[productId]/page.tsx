import {
  getAllProducts,
  getProductDetail,
  getProductSold,
} from '../../../shared/actions/productService';
import ProductDetailContainer from './container/ProductDetailContainer';
import React from 'react';

const ProductDetail = async ({ params }: { params: { productId: string } }) => {
  const { data } = await getProductDetail(params.productId);

  if (typeof data === 'string') {
    throw Error(data);
  }

  const { data: productSoldData } = await getProductSold(params.productId);

  if (typeof productSoldData === 'string') throw Error(productSoldData);

  const { data: listOfRecomendationProduct } = await getAllProducts({
    limit: 10,
    status: 'active',
    tags: data?.data?.tags?.map((dx) => dx.id).join(','),
  });

  if (typeof listOfRecomendationProduct === 'string')
    throw Error(listOfRecomendationProduct);

  return (
    <>
      <ProductDetailContainer
        listOfRecomendationProduct={listOfRecomendationProduct.data}
        product={data.data}
        productSold={productSoldData.data}
      />
    </>
  );
};

export default ProductDetail;
