import {
  IAllCuratorialResponseRoot,
  IVendor,
} from '../models/curatorialInterfaces';
import {
  IFetchGeneralResponse,
  IFetchGeneralSuccessResponse,
} from '../models/generalInterfaces';
import { errorHandling } from '../usecase/errorHandling';
import { getServerSession } from '../usecase/getServerSession';

const baseURL = process.env.NEXT_PUBLIC_API as string;

export async function getCuratorialDetail(
  id: string
): Promise<
  IFetchGeneralResponse<
    IFetchGeneralSuccessResponse<IAllCuratorialResponseRoot> | string
  >
> {
  const sessionData = await getServerSession();
  const res = await fetch(baseURL + '/curatorials/' + id, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  if (data.data && data.data.vendor) {
    data.data.vendor = data.data.vendor.map((vendor: IVendor) => ({
      ...vendor,
      vendor_detail: vendor.json_text ? JSON.parse(vendor.json_text) : {},
    }));
  }

  return { success: true, data };
}
