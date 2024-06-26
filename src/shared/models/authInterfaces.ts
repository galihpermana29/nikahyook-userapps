import type { ILocation } from './generalInterfaces';
import type { IDetailUserData } from './userInterfaces';

export interface ISessionData extends ILoginResponseRoot {
  user_detail: IDetailUserData;
}

export interface IForgotPasswordPayload {
  email: string;
}

export interface IResetPasswordPayload {
  new_password: string;
}

export interface IResetPasswordResponseRoot {
  data: string;
  status: string;
}

export interface ILoginResponseRoot {
  user_id: string;
  email: string;
  token: string;
  permissions: string[];
  type: string;
  role_id: number;
  role_name: string;
}

export interface ILoginPayloadRoot {
  email: string;
  password: string;
}

export interface IRegisterInputRoot {
  name: string;
  email: string;
  password: string;
  gender: string;
  phone_number: string;
  date_of_birth: string;
}

export interface IRegisterDetailPayloadRoot {
  json_text: string;
  gender: string;
  location: ILocation;
  wedding_date: string;
  date_of_birth: string;
}

export interface IRegisterPayloadRoot
  extends Omit<IRegisterInputRoot, 'date_of_birth'> {
  type: string;
  role_id: number;
  profile_image_uri: string;
  detail: IRegisterDetailPayloadRoot;
}

export type TRegisterResponseData = string;
export interface IRegisterResponseRoot {
  data: TRegisterResponseData;
  status: string;
}

export interface ICreateProfileInputRoot {
  wedding_role: string;
  groom_name: string;
  bride_name: string;
  plan_for: string;
  wedding_theme: string;
  location: ILocation;
  wedding_date: string;
}

export interface ICreateProfilePayloadRoot {
  detail: Omit<IRegisterDetailPayloadRoot, 'gender' | 'date_of_birth'>;
}

export type TCreateProfileResponseData = string;
export interface ICreateProfileResponseRoot {
  data: TCreateProfileResponseData;
  status: string;
}
