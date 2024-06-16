export interface IFetchGeneralResponse<T> {
  success: boolean;
  data: T;
}

export interface IFetchGeneralSuccessResponse<T> {
  data: T;
  status: string;
  meta_data: IMetaData;
}

export interface IPostGeneralResponse<T> {
  success: boolean;
  data: T;
}

export interface IPostGeneralSuccessResponse<T> {
  status: string;
  data: T;
}

export interface IMetaData {
  total_items: number;
  total_pages: number;
  current_page: number;
  limit: number;
  next_page: number;
  previous_page: number;
}

export interface IReview {
  profile_image_url: string;
  name: string;
  rating: number;
  comment: string;
}

// Interface for json_text in vendor
export interface IVendorDetail {
  vendor_description?: string;
  vendor_album?: string[];
  bride_name: string;
  groom_name: string;
  plan_for: number;
  wedding_role: number;
  wedding_theme: number;
}

export interface IGeneralFilter {
  keyword?: string;
  min_price?: number;
  max_price?: number;
  product_type?: number;
  vendor_type?: number;
}

export type TOptionsRecordKeys = string | number | symbol;
export type TOptionsRecordType = Record<TOptionsRecordKeys, unknown>;

export interface IOptionsParams<
  T1 extends TOptionsRecordKeys,
  T2 extends TOptionsRecordKeys
> {
  value: T1;
  label: T2;
}

export interface ILocation {
  label: string;
  value: string;
}

export interface ICoverageArea {
  province: ILocation;
  city: ILocation;
}

export interface IFullLocation extends ICoverageArea {
  district: ILocation;
  village: ILocation;
  postal_code: number;
}

export interface IGeneralWishlistResponse {
  user_id: string;
}
