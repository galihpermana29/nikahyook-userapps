import {
  IFullLocation,
  IGeneralWishlistResponse,
  ILocation,
  IReview,
  IVendorDetail,
} from './generalInterfaces';

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
  detail: IUserVendorDetail;
  phone_number: string;
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
  review: IReview;
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
  phone_number: string;
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

export interface IEditProfileInputRoot {
  name: string;
  email: string;
  gender: string;
  phone_number: string;
  date_of_birth: string;
  profile_image_uri?: string;
}

export interface IUserJSONDetail {
  wedding_role: string | null;
  groom_name: string | null;
  bride_name: string | null;
  plan_for: string | null;
  wedding_theme: string | null;
}

export interface IChangePasswordPayloadRoot {
  user_id: string;
  old_password: string;
  new_password: string;
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

export interface IUserStatisticsResponseRoot {
  total_budget: number;
  progress_budget: string;
  total_inspiration: number;
  total_guest: number;
  total_vendor: number;
  total_todo_done: number;
  total_todo: number;
  progress_todo: string;
  total_review: number;
}

export interface IUserStatistics {
  inspirations: number;
  guests: number;
  vendors: number;
  reviews: number;
  todo: {
    total: number;
    done: number;
    progress: number;
  };
  budget: {
    total: number;
    progress: string;
  };
}
