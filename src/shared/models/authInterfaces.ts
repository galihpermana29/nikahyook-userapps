export interface IRegisterInputRoot {
  name: string;
  email: string;
  password: string;
  gender: string;
  date_of_birth: string;
}

export interface IRegisterDetailPayloadRoot {
  json_text: string;
  gender: string;
  location: string;
  wedding_date: string;
}

export interface IRegisterPayloadRoot {
  name: string;
  email: string;
  password: string;
  type: string;
  role_id: number;
  profile_image_uri: string;
  date_of_birth: string;
  detail: IRegisterDetailPayloadRoot;
}

export interface IRegisterResponseRoot {
  data: string;
  status: string;
}

export interface ICreateProfileInputRoot {
  wedding_role: string;
  groom_name: string;
  bride_name: string;
  plan_for: string;
  wedding_theme: string;
  location: string;
  wedding_date: string;
}

export interface ICreateProfilePayloadRoot {
  wedding_role: string;
  groom_name: string;
  bride_name: string;
  plan_for: string;
  wedding_theme: string;
  location: string;
  wedding_date: string;
}

export interface ICreateProfileResponseRoot {
  data: string;
  status: string;
}
