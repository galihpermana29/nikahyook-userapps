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
