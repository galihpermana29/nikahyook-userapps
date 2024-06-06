export interface IAllProductsResponse {
  id: number;
  product_type_id: number;
  product_type_name: string;
  title: string;
  tags: Tag[];
  vendor_id: string;
  vendor_name: string;
  price: number;
  description: string;
  images: string[];
  status: string;
  vendor: IVendor;
}

export interface Tag {
  id: number;
  name: string;
}

export interface IAllCuratorialsResponse {
  id: number;
  name: string;
  expert_name: string;
  expert_photo: string;
  images: string[];
  total_price: number;
  description: string;
  status: string;
  location: string;
}

export interface IAllInspirationsResponse {
  id: number;
  name: string;
  image: string;
  tags: Tag[];
  status: string;
}
export interface IVendor {
  id: string;
  name: string;
  type_name: string;
  type_id: number;
  location: string;
  lowest_price: number;
  avg_rating: number;
  image: string;
  json_text: string;
}

export interface IUserVendorDetail {
  vendor_description?: string;
  vendor_album?: string[];
}
