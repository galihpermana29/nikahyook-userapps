import React from 'react';
import CuratorialProductContainer from './container/CuratorialProductContainer';
import { getCuratorialDetail } from '@/shared/actions/curatorialService';

const CuratorialProduct = async ({
  params,
}: {
  params: { curatorialId: string };
}) => {

  const { data } = await getCuratorialDetail(params.curatorialId);

  if (typeof data === 'string') {
    throw Error(data);
  }

  return (
    <>
      <CuratorialProductContainer products={data.data.products} />
    </>
  );
};

export default CuratorialProduct;
