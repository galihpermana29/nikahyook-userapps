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
}

export interface IAllInspirationsResponse {
  id: number;
  name: string;
  image: string;
  tags: Tag[];
  status: string;
}
