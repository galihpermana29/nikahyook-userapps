import {
  ICoverageArea,
  IFullLocation,
  IGeneralWishlistResponse,
  IVendorDetail,
} from './generalInterfaces';

export interface IAllProductsResponse {
  id: number;
  product_type_id: number;
  product_type_name: string;
  title: string;
  tags: Tag[];
  vendor_id: string;
  price: number;
  rating: number;
  description: string;
  images: string[];
  status: string;
  vendor: IVendor;
  location: IFullLocation;
  coverage_area: ICoverageArea[];
  is_wishlist: boolean;
}

export interface Tag {
  id: number;
  name: string;
}

export interface IAllProductTypeResponse {
  id: number;
  name: string;
  status: string;
}

export interface IAllVendorTypeResponse {
  id: number;
  name: string;
  status: string;
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
  is_wishlist: boolean;
  ispirations: IAllInspirationsResponse[];
  product: IAllProductsResponse;
  vendor: IVendor[];
}

export interface IAllInspirationsResponse {
  id: number;
  name: string;
  image: string;
  tags: Tag[];
  status: string;
  is_wishlist: boolean;
}
export interface IVendor {
  id: string;
  name: string;
  type_name: string;
  type_id: number;
  location: IFullLocation;
  lowest_price: number;
  avg_rating: number;
  image: string;
  json_text: string;
  vendor_detail: IVendorDetail;
}

export interface IAllProductWhislistResponse extends IGeneralWishlistResponse {
  products: IAllProductsResponse[];
}

export interface IAllInspirationsWishlistResponse
  extends IGeneralWishlistResponse {
  inspirations: IAllInspirationsResponse[];
}

export type TWishlist = 'inspiration' | 'product' | 'vendor' | 'curatorial';
