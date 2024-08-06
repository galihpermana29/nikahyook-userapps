'use server';

// put anything fetch request that related to our user service in here

import {
  IFetchGeneralResponse,
  IFetchGeneralSuccessResponse,
  type IPostGeneralResponse,
} from '@/shared/models/generalInterfaces';
import { IResetPasswordResponseRoot } from './../models/authInterfaces';
import {
  IAllUserResponse,
  type IChangePasswordPayloadRoot,
  type IEditProfileInputRoot,
  type IUserDetailData,
  type IUserStatistics,
  type IUserStatisticsResponseRoot,
} from '@/shared/models/userInterfaces';
import { errorHandling } from '@/shared/usecase/errorHandling';
import { cookies, headers } from 'next/headers';
import { getServerSession } from '../usecase/getServerSession';
import type {
  ICreateProfilePayloadRoot,
  IRegisterPayloadRoot,
  IRegisterResponseRoot,
  ICreateProfileResponseRoot,
  ISessionData,
  ILoginPayloadRoot,
  ILoginResponseRoot,
  IForgotPasswordPayload,
  IResetPasswordPayload,
  ILoginOAuthResponseRoot,
} from '../models/authInterfaces';
import { redirect } from 'next/navigation';

const baseURL = process.env.NEXT_PUBLIC_API as string;

export async function setSessions(sessionData: ISessionData) {
  cookies().set('session', JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  });

  cookies().set('client-session', JSON.stringify(sessionData), {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  });
}

export async function clearSessions() {
  cookies().delete('session');
  cookies().delete('client-session');

  return redirect('/login');
}

export async function forgotPassword(
  payload: IForgotPasswordPayload
): Promise<IPostGeneralResponse<string>> {
  const headerProto = headers().get('x-forwarded-proto');
  const headerForwardedHost = headers().get('x-forwarded-host');
  const res = await fetch(baseURL + '/auth/forgot-password', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      Origin: `${headerProto}://${headerForwardedHost}/`,
    },
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const { data } = await res.json();

  return { success: true, data };
}

export async function validateResetToken(token: string) {
  const res = await fetch(baseURL + '/auth/validate-reset-token', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function resetPassword(
  payload: IResetPasswordPayload,
  token: string | null
): Promise<IFetchGeneralResponse<IResetPasswordResponseRoot | string>> {
  if (!token) return { success: false, data: 'No token found!' };

  const res = await fetch(baseURL + '/auth/reset-password', {
    method: 'POST',
    body: JSON.stringify({ new_password: payload.new_password }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function register(
  payload: IRegisterPayloadRoot
): Promise<IFetchGeneralResponse<IRegisterResponseRoot | string>> {
  const res = await fetch(baseURL + '/users', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = (await res.json()) as IRegisterResponseRoot;

  return { success: true, data: data.data };
}

export async function createProfile(
  payload: ICreateProfilePayloadRoot,
  id: string | null
): Promise<IFetchGeneralResponse<ICreateProfileResponseRoot | string>> {
  const sessionData = await getServerSession();

  const res = await fetch(baseURL + '/users/' + id, {
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

  const oldUserDetail = sessionData.user_detail;

  const newUserDetail = {
    wedding_date: payload.detail.wedding_date,
    json_text: payload.detail.json_text,
    location: payload.detail.location,
  } as IUserDetailData;

  const newSessionData = {
    ...sessionData,
    user_detail: {
      ...oldUserDetail,
      detail: newUserDetail,
    },
  } as ISessionData;

  await setSessions(newSessionData);

  return { success: true, data };
}

export async function editProfile(
  payload: IEditProfileInputRoot,
  id: string
): Promise<
  IFetchGeneralResponse<IFetchGeneralSuccessResponse<string> | string>
> {
  const sessionData = await getServerSession();

  const res = await fetch(baseURL + '/users/' + id, {
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

  const oldUserDetail = sessionData.user_detail;
  const oldDetail = sessionData.user_detail.detail;
  const newSessionData = {
    ...sessionData,
    user_detail: {
      ...oldUserDetail,
      email: payload.email,
      date_of_birth: payload.date_of_birth,
      name: payload.name,
      phone_number: payload.phone_number,
      profile_image_uri: payload.profile_image_uri,
      detail: {
        ...oldDetail,
        gender: payload.gender,
      },
    },
  } as ISessionData;

  await setSessions(newSessionData);

  return { success: true, data };
}

export async function loginOauth(payload: {
  token_email: string;
}): Promise<IFetchGeneralResponse<ILoginOAuthResponseRoot | string>> {
  const loginRes = await fetch(baseURL + '/auth/login-google', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!loginRes.ok) {
    return errorHandling(loginRes);
  }

  const loginData =
    (await loginRes.json()) as IFetchGeneralResponse<ILoginOAuthResponseRoot>;

  return { success: true, data: loginData.data };
}

export async function getDetailForLoginCookies(
  id: string,
  token: string,
  loginData: ILoginResponseRoot | ILoginOAuthResponseRoot
) {
  const detailRes = await fetch(baseURL + '/users/' + id, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!detailRes.ok) {
    return errorHandling(detailRes);
  }

  const userDetail = await detailRes.json();

  await setSessions({ ...loginData, user_detail: userDetail.data });
}

export async function login(
  payload: ILoginPayloadRoot
): Promise<IFetchGeneralResponse<ILoginResponseRoot | string>> {
  const loginRes = await fetch(baseURL + '/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!loginRes.ok) {
    return errorHandling(loginRes);
  }

  const loginData =
    (await loginRes.json()) as IFetchGeneralResponse<ILoginResponseRoot>;

  if (loginData.data.type !== 'user') {
    return { success: false, data: 'Data not found!' };
  }

  await getDetailForLoginCookies(
    loginData.data.user_id,
    loginData.data.token,
    loginData.data
  );
  // const detailRes = await fetch(baseURL + '/users/' + loginData.data.user_id, {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${loginData.data.token}`,
  //   },
  // });

  // if (!detailRes.ok) {
  //   return errorHandling(detailRes);
  // }

  // const userDetail = await detailRes.json();

  // await setSessions({ ...loginData.data, user_detail: userDetail.data });

  return { success: true, data: loginData.data };
}

export async function editPassword(payload: IChangePasswordPayloadRoot) {
  const session = await getServerSession();
  const loginRes = await login({
    email: session.email,
    password: payload.old_password,
  });

  if (!loginRes.success) {
    // this is to give error that makes sense
    // if we dont do this, its just gonna return error 500: something went wrong
    // and not 'old password is invalid` etc.
    // it can also be used to renew user cookie
    if (loginRes.data === 'INVALID_PASSWORD') {
      return { success: false, data: 'Your old password is wrong!' };
    }

    return { success: false, data: loginRes.data };
  }

  const newPayload = {
    user_id: session.user_id,
    old_password: payload.old_password,
    new_password: payload.new_password,
  } as IChangePasswordPayloadRoot;

  const res = await fetch(baseURL + '/users/password', {
    method: 'PATCH',
    body: JSON.stringify(newPayload),
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  return { success: true, data };
}

export async function getAllUsers(
  params?: Record<string, any>
): Promise<
  IFetchGeneralResponse<
    IFetchGeneralSuccessResponse<IAllUserResponse[]> | string
  >
> {
  const sessionData = await getServerSession();
  const res = await fetch(baseURL + '/users?' + new URLSearchParams(params), {
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

export async function getUserDetail(
  id: string
): Promise<
  IFetchGeneralResponse<IFetchGeneralSuccessResponse<IAllUserResponse> | string>
> {
  const sessionData = await getServerSession();
  const res = await fetch(baseURL + '/users/' + id, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
    },
  });

  if (!res.ok) {
    return errorHandling(res);
  }

  const data = await res.json();

  if (data.data && data.data.detail) {
    data.data.detail.vendor_detail = data.data.detail.json_text
      ? JSON.parse(data.data.detail.json_text)
      : {};
  }

  return { success: true, data };
}

export const getUserStatistics = async (): Promise<
  IFetchGeneralResponse<IUserStatistics>
> => {
  const session = await getServerSession();

  const response = await fetch(
    baseURL + `/users/${session.user_id}/statistics`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
      next: {
        tags: ['get-user-statistics'],
      },
    }
  );

  if (!response.ok) {
    const error = await errorHandling(response);
    throw new Error(error.data);
  }

  const { data } =
    (await response.json()) as IFetchGeneralSuccessResponse<IUserStatisticsResponseRoot>;

  const returnedData = {
    budget: { progress: data.progress_budget, total: data.total_budget },
    guests: data.total_guest,
    inspirations: data.total_inspiration,
    reviews: data.total_review,
    vendors: data.total_vendor,
    todo: {
      done: data.total_todo_done,
      total: data.total_todo,
      progress:
        parseFloat((data.total_todo_done / data.total_todo).toFixed(2)) * 100,
    },
  } as IUserStatistics;

  return { success: true, data: returnedData };
};
