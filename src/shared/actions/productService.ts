'use server';

import {
  IFetchGeneralResponse,
  IFetchGeneralSuccessResponse,
  IPostGeneralResponse,
  IPostGeneralSuccessResponse,
} from '@/shared/models/generalInterfaces';
import {
  IAllCuratorialsResponse,
  IAllInspirationsResponse,
  IAllProductsResponse,
  IAllProductTypeResponse,
  IAllVendorTypeResponse,
  Tag,
  TWishlist,
  type IAddProductReviewPayload,
  type IProductReviewData,
  type IProductReviewResponseData,
} from '@/shared/models/productInterfaces';
import { errorHandling } from '@/shared/usecase/errorHandling';
import { getServerSession } from '../usecase/getServerSession';
import {
  IAllCartResponse,
  IDeleteCartPayloadRoot,
  IUpdateCartPayloadRoot,
} from '../models/cartInterfaces';

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

export async function getAllProduct(
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

  if (data.data && Array.isArray(data.data)) {
    data.data = data.data.map((product: IAllProductsResponse) => {
      if (product.vendor && product.vendor.json_text) {
        product.vendor.vendor_detail = JSON.parse(product.vendor.json_text);
      }
      return product;
    });
  }

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

  if (data.data && data.data.vendor) {
    data.data.vendor.vendor_detail = data.data.vendor.json_text
      ? JSON.parse(data.data.vendor.json_text)
      : {};
  }

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

export async function createWishlist(
  type: TWishlist,
  target_id: string | number
): Promise<IPostGeneralResponse<IPostGeneralSuccessResponse<any> | string>> {
  const sessionData = await getServerSession();
  const payload = {
    [`${type}_id`]: target_id,
  };

  const res = await fetch(
    baseURL + `/wishlists/${sessionData.user_id}/${type}s`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionData.token}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function deleteWishlist(
  type: TWishlist,
  target_id: string | number
): Promise<IPostGeneralResponse<IPostGeneralSuccessResponse<any> | string>> {
  const sessionData = await getServerSession();
  const payload = {
    [`${type}_id`]: target_id,
  };

  const res = await fetch(
    baseURL + `/wishlists/${sessionData.user_id}/${type}s`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${sessionData.token}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function getAllTags(
  params?: Record<string, any>
): Promise<
  IFetchGeneralResponse<IFetchGeneralSuccessResponse<Tag[]> | string>
> {
  const sessionData = await getServerSession();
  const res = await fetch(baseURL + '/tags?' + new URLSearchParams(params), {
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

export async function getAllWishlist(
  type: TWishlist,
  params?: Record<string, any>
): Promise<IFetchGeneralResponse<IFetchGeneralSuccessResponse<any | string>>> {
  const sessionData = await getServerSession();
  const res = await fetch(
    baseURL +
      `/wishlists/${sessionData.user_id}/${type}s?'` +
      new URLSearchParams(params),
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

export async function createCart(
  id: number
): Promise<IPostGeneralResponse<number | string>> {
  const sessionData = await getServerSession();
  const payload = {
    product_id: id,
    quantity: 1,
  };

  const res = await fetch(baseURL + `/carts/${sessionData.user_id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function getAllCart(): Promise<
  IFetchGeneralResponse<IFetchGeneralResponse<IAllCartResponse> | string>
> {
  const sessionData = await getServerSession();
  const res = await fetch(baseURL + `/carts/${sessionData.user_id}`, {
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

export async function updateCart(
  payload: IUpdateCartPayloadRoot
): Promise<IPostGeneralResponse<IPostGeneralSuccessResponse<any> | string>> {
  const sessionData = await getServerSession();

  const res = await fetch(baseURL + `/carts/${sessionData.user_id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function deleteCart(
  payload: IDeleteCartPayloadRoot
): Promise<IPostGeneralResponse<IPostGeneralSuccessResponse<any> | string>> {
  const sessionData = await getServerSession();

  const res = await fetch(baseURL + `/carts/${sessionData.user_id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function addReview(
  productId: number,
  payload: IAddProductReviewPayload
): Promise<IFetchGeneralResponse<IProductReviewResponseData>> {
  const sessionData = await getServerSession();
  const response = await fetch(baseURL + `/reviews/${productId}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data =
    (await response.json()) as IFetchGeneralResponse<IProductReviewResponseData>;

  return { success: true, data: data.data };
}

export async function getReview(
  productId: number
): Promise<IFetchGeneralResponse<IProductReviewData | undefined>> {
  const sessionData = await getServerSession();
  const searchParams = new URLSearchParams({ user_id: sessionData.user_id });
  const response = await fetch(baseURL + '/reviews?' + searchParams, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const { data } = (await response.json()) as IFetchGeneralResponse<
    IProductReviewData[]
  >;

  const returned = data.find((review) => review.product_id === productId);

  return { success: true, data: returned };
}

export async function editReview(
  productId: number,
  payload: IAddProductReviewPayload
): Promise<IFetchGeneralResponse<IProductReviewResponseData>> {
  const sessionData = await getServerSession();
  const response = await fetch(baseURL + '/reviews/' + productId, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const { data } =
    (await response.json()) as IFetchGeneralResponse<IProductReviewResponseData>;

  return { success: true, data };
}
