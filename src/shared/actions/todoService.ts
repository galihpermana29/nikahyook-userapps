'use server';

import {
  IFetchGeneralResponse,
  IFetchGeneralSuccessResponse,
} from '@/shared/models/generalInterfaces';
import { errorHandling } from '@/shared/usecase/errorHandling';
import { getServerSession } from '../usecase/getServerSession';
import { IAllTodoResponse, IPostTodoPayload } from '../models/todoInterfaces';

const baseURL = process.env.NEXT_PUBLIC_API as string;

export async function getAllTodos(
  params?: Record<string, any>
): Promise<
  IFetchGeneralResponse<IFetchGeneralSuccessResponse<IAllTodoResponse> | string>
> {
  const sessionData = await getServerSession();
  const res = await fetch(baseURL + '/todos?' + new URLSearchParams(params), {
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

export async function updateTodo(
  id: number,
  payload: IPostTodoPayload
): Promise<
  IFetchGeneralResponse<IFetchGeneralSuccessResponse<IAllTodoResponse> | string>
> {
  const sessionData = await getServerSession();
  const res = await fetch(baseURL + '/todos/' + id, {
    method: 'PATCH',
    body: JSON.stringify(payload),
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

export async function addTodo(
  payload: IPostTodoPayload
): Promise<
  IFetchGeneralResponse<IFetchGeneralSuccessResponse<IAllTodoResponse> | string>
> {
  const sessionData = await getServerSession();
  const res = await fetch(baseURL + '/todos', {
    method: 'POST',
    body: JSON.stringify(payload),
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
