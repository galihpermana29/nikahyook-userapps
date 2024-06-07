export interface IRegisterPayloadRoot {
  name: string;
  email: string;
  password: string;
  gender: string;
  date_of_birth: string;
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
