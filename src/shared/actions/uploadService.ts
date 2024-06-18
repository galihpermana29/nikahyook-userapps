'use server';

import type { IUploadResponseRoot } from '../models/uploadInterfaces';
import { errorHandling } from '../usecase/errorHandling';
import { getServerSession } from '../usecase/getServerSession';
import { IFetchGeneralResponse } from './../models/generalInterfaces';

const baseURL = process.env.NEXT_PUBLIC_API as string;

export async function uploadDocs(
  file: FormData
): Promise<IFetchGeneralResponse<IUploadResponseRoot | string>> {
  const sessionData = await getServerSession();

  const res = await fetch(baseURL + '/upload', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
    body: file,
  });

  if (!res.ok) {
    errorHandling(res);
  }

  const data = (await res.json()) as IUploadResponseRoot;

  return { success: true, data };
}
