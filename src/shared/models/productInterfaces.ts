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
