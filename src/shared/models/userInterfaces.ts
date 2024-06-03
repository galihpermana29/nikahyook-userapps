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
