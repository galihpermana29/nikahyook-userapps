import React from 'react';
import CuratorialDetailContainer from './container/CuratorialDetailContainer';
import { getCuratorialDetail } from '@/shared/actions/curatorialService';

const CuratorialDetail = async ({
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
      <CuratorialDetailContainer curatorial={data.data} />
    </>
  );
};

export default CuratorialDetail;
