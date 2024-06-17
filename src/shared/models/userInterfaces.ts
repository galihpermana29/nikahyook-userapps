import {
  IFullLocation,
  IGeneralWishlistResponse,
  ILocation,
  IVendorDetail,
} from './generalInterfaces';

export interface ILoginResponseRoot {
  user_id: string;
  email: string;
  token: string;
  permissions: string[];
  type: string;
  role_id: number;
  role_name: string;
  profile_picture_uri?: string;
}

export interface ILoginPayloadRoot {
  email: string;
  password: string;
}

export interface IAllUserResponse {
  id: string;
  name: string;
  email: string;
  date_of_birth: string;
  type: string;
  role_id: number;
  role_name: string;
  status: string;
  profile_image_uri: string;
  detail?: IUserVendorDetail;
}

export interface IUserVendorDetail {
  json_text: string;
  location: IFullLocation;
  vendor_type_id: number;
  vendor_type_name: string;
  lowest_price: number;
  avg_rating: number;
  vendor_detail: IVendorDetail;
  is_wishlist: boolean;
}

export interface IUserVendorAdditionalDetail {
  vendor_description?: string;
  vendor_location?: string;
  vendor_type?: string;
  vendor_album?: string | string[];
}

export interface IDetailUserData {
  id: string;
  name: string;
  email: string;
  date_of_birth: string;
  type: string;
  role_id: number;
  role_name: string;
  status: string;
  profile_image_uri: string;
  detail: IUserDetailData;
}

export interface IDetailUserResponseRoot {
  data: IDetailUserData;
}

export interface IUserDetailData {
  json_text?: string;
  location?: ILocation;
  date_of_birth?: string;
  gender?: string;
  wedding_date?: string;
  vendor_type_id?: string;
  vendor_type_name?: string;
}

export interface IVendorWishlist {
  id: string;
  name: string;
  location: IFullLocation;
  type: string;
  image: string;
  lowest_price: number;
  avg_rating: number;
  json_text: string;
}

export interface IAllVendorWishlistResponse extends IGeneralWishlistResponse {
  vendors: IVendorWishlist[];
}
