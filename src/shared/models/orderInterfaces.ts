// this is only for typing mock data
// might need to change later when API is ready

export interface IOrderProduct {
  productName: string;
  productPrice: number;
  productQty: number;
  productImage: string;
  productDescription: string;
}

export interface IOrder {
  orderId: number;
  vendorName: string;
  orderDate: string;
  products: IOrderProduct[];
}
