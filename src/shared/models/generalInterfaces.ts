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
