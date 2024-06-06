import { IVendorDetail } from './generalInterfaces';

export interface IAllCuratorialResponseRoot {
  id: number;
  name: string;
  expert_name: string;
  expert_photo: string;
  images: string[];
  total_price: number;
  description: string;
  status: string;
  products: IProduct[];
  vendor: IVendor[];
  inspirations: IInspiration[];
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
}

export interface IVendor {
  id: string;
  name: string;
  location: string;
  type: string;
  image: string;
  lowest_price: number;
  avg_rating: number;
  json_text: string;
  vendor_detail: IVendorDetail;
}

export interface IInspiration {
  id: number;
  name: string;
  image: string;
}
