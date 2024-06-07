'use server';

import {
  IFetchGeneralResponse,
  IFetchGeneralSuccessResponse,
} from '@/shared/models/generalInterfaces';
import {
  IAllCuratorialsResponse,
  IAllInspirationsResponse,
  IAllProductsResponse,
  IAllProductTypeResponse,
  IAllVendorTypeResponse,
} from '@/shared/models/productInterfaces';
import { errorHandling } from '@/shared/usecase/errorHandling';
import { getServerSession } from '../usecase/getServerSession';

// Anything related to product

const baseURL = process.env.NEXT_PUBLIC_API as string;

export async function getAllProducts(
  params?: Record<string, any>
): Promise<
  IFetchGeneralResponse<
    IFetchGeneralSuccessResponse<IAllProductsResponse[]> | string
  >
> {
  const sessionData = await getServerSession();
  const res = await fetch(
    baseURL + '/products?' + new URLSearchParams(params),
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionData.token}`,
      },
    }
  );

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function getAllInspirations(
  params?: Record<string, any>
): Promise<
  IFetchGeneralResponse<
    IFetchGeneralSuccessResponse<IAllInspirationsResponse[]> | string
  >
> {
  const sessionData = await getServerSession();
  const res = await fetch(
    baseURL + '/inspirations?' + new URLSearchParams(params),
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionData.token}`,
      },
    }
  );

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function getAllCuratorials(
  params?: Record<string, any>
): Promise<
  IFetchGeneralResponse<
    IFetchGeneralSuccessResponse<IAllCuratorialsResponse[]> | string
  >
> {
  const sessionData = await getServerSession();
  const res = await fetch(
    baseURL + '/curatorials?' + new URLSearchParams(params),
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionData.token}`,
      },
    }
  );

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function getProductDetail(
  id: string
): Promise<
  IFetchGeneralResponse<
    IFetchGeneralSuccessResponse<IAllProductsResponse> | string
  >
> {
  const sessionData = await getServerSession();
  const res = await fetch(baseURL + '/products/' + id, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function getAllProductTypes(
  params?: Record<string, any>
): Promise<
  IFetchGeneralResponse<
    IFetchGeneralSuccessResponse<IAllProductTypeResponse[]> | string
  >
> {
  const sessionData = await getServerSession();
  const res = await fetch(
    baseURL + '/product-types?' + new URLSearchParams(params),
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionData.token}`,
      },
    }
  );

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function getAllVendorTypes(
  params?: Record<string, any>
): Promise<
  IFetchGeneralResponse<
    IFetchGeneralSuccessResponse<IAllVendorTypeResponse[]> | string
  >
> {
  const sessionData = await getServerSession();
  const res = await fetch(
    baseURL + '/vendor-types?' + new URLSearchParams(params),
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionData.token}`,
      },
    }
  );

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}
