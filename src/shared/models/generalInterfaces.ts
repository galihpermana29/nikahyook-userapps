export interface IFetchGeneralResponse<T> {
  success: boolean;
  data: T;
}

export interface IFetchGeneralSuccessResponse<T> {
  data: T;
  status: string;
  meta_data: IMetaData;
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

// Interface for location in detail user
export interface ILocationDetail {
  value: string;
  label: string;
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
