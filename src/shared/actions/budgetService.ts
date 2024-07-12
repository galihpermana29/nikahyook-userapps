'use server';

import { revalidateTag } from 'next/cache';
import type {
  IGetUserBudgetResponse,
  TBudget,
  TBudgetAllocation,
  TCreateBudgetPayload,
  TGetUserBudgetFilters,
  TUpdateBudgetPayload,
} from '../models/budgetInterfaces';
import type {
  IFetchGeneralResponse,
  IFetchGeneralSuccessResponse,
  IPostGeneralSuccessResponse,
} from '../models/generalInterfaces';
import convertObjectToQueryParams from '../usecase/convertObjectToQueryParams';
import { errorHandling } from '../usecase/errorHandling';
import { getServerSession } from '../usecase/getServerSession';

const endpoint = process.env.NEXT_PUBLIC_API as string;

export const getUserBudgets = async (
  filters?: TGetUserBudgetFilters
): Promise<IFetchGeneralResponse<IGetUserBudgetResponse>> => {
  const session = await getServerSession();
  const urlParams = filters ? convertObjectToQueryParams(filters) : null;

  const response = await fetch(endpoint + '/budgets?' + urlParams, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
    next: {
      tags: ['get-user-budgets'],
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data =
    (await response.json()) as IFetchGeneralSuccessResponse<IGetUserBudgetResponse>;

  return { success: true, data: data.data };
};

export const getBudgetById = async (
  id: string
): Promise<IFetchGeneralResponse<TBudget>> => {
  const session = await getServerSession();
  const response = await fetch(endpoint + `/budgets/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
    next: {
      tags: ['get-budget-by-id'],
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data = (await response.json()) as IFetchGeneralSuccessResponse<TBudget>;

  return { success: true, data: data.data };
};

export const getBudgetAllocations = async (): Promise<
  IFetchGeneralResponse<TBudgetAllocation>
> => {
  const session = await getServerSession();
  const response = await fetch(endpoint + '/budgets/allocations', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
    next: {
      tags: ['get-budget-allocations'],
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data =
    (await response.json()) as IFetchGeneralSuccessResponse<TBudgetAllocation>;

  return { success: true, data: data.data };
};

export const createBudget = async (
  payload: TCreateBudgetPayload
): Promise<IFetchGeneralResponse<number>> => {
  const session = await getServerSession();
  const response = await fetch(endpoint + `/budgets`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data = (await response.json()) as IFetchGeneralSuccessResponse<number>;
  revalidateTag('get-user-budgets');
  revalidateTag('get-budget-allocations');

  return { success: true, data: data.data };
};

export const deleteBudget = async (
  id: TBudget['id']
): Promise<IFetchGeneralResponse<number>> => {
  const session = await getServerSession();
  const response = await fetch(endpoint + `/budgets/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data = (await response.json()) as IPostGeneralSuccessResponse<number>;
  revalidateTag('get-user-budgets');
  revalidateTag('get-budget-allocations');

  return { success: true, data: data.data };
};

export const updateBudget = async (
  payload: TUpdateBudgetPayload,
  id: TBudget['id']
): Promise<IFetchGeneralResponse<number>> => {
  const session = await getServerSession();
  const response = await fetch(endpoint + `/budgets/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const data = (await response.json()) as IPostGeneralSuccessResponse<number>;
  revalidateTag('get-user-budgets');

  return { success: true, data: data.data };
};
