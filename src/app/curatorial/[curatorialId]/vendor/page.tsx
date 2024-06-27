import { getCuratorialDetail } from '@/shared/actions/curatorialService';
import CuratorialVendorContainer from './container/CuratorialVendorContainer';
import React from 'react';

const CuratorialVendor = async ({
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
      <CuratorialVendorContainer vendors={data.data.vendor} />
    </>
  );
};

export default CuratorialVendor;
