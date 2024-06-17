import { 
  IFullLocation, 
  IVendorDetail 
} from './generalInterfaces';

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
  is_wishlist: boolean;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  location: IFullLocation;
  rating: number;
  images: string[];
  is_wishlist: boolean;
}

export interface IVendor {
  id: string;
  name: string;
  location: IFullLocation;
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
