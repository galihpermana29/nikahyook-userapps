import PageTitle from '@/shared/container/PageTitle/PageTitle';
import React from 'react';
import SendMessageArea from './container/SendMessageArea';
import RoomChatContainer from './container/RoomChatContainer';
import { getUserDetail } from '@/shared/actions/userService';
import { getProductDetail } from '@/shared/actions/productService';
import { IAllProductsResponse } from '@/shared/models/productInterfaces';
import { IFetchGeneralSuccessResponse } from '@/shared/models/generalInterfaces';

export default async function VendorRoomChatPage({
  params,
  searchParams,
}: {
  params: { vendorId: string };
  searchParams: { productId: string };
}) {
  const detailVendor = await getUserDetail(params.vendorId);
  let detailProductQuoted = Object.prototype.hasOwnProperty.call(
    searchParams,
    'productId'
  )
    ? await getProductDetail(searchParams.productId)
    : null;

  if (typeof detailVendor.data === 'string') {
    throw Error(detailVendor.data);
  }

  if (typeof detailProductQuoted?.data === 'string') {
    detailProductQuoted = null;
  }

  return (
    <div className="relative">
      <div className="fixed md:static z-[99] top-0 left-0 right-0 bg-white">
        <PageTitle title={detailVendor.data.data.name} />
      </div>
      <RoomChatContainer vendor={detailVendor.data.data} />
      <SendMessageArea
        vendor={detailVendor.data.data}
        quotedProduct={
          detailProductQuoted
            ? (
                detailProductQuoted.data as IFetchGeneralSuccessResponse<IAllProductsResponse>
              ).data
            : null
        }
      />
    </div>
  );
}
