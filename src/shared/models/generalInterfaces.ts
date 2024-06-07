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

export interface IGeneralFilter {
  keyword?: string;
  min_price?: number;
  max_price?: number;
  product_type?: number;
  vendor_type?: number;
}
