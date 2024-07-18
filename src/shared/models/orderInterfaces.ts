export type TOrderStatus =
  | 'waiting for approval'
  | 'waiting for payment'
  | 'payment in review'
  | 'payment done'
  | 'order failed';

export interface IOrder {
  id: number;
  user_id: string;
  status: TOrderStatus;
  order_time: string;
  order_details: IOrderDetail[];
  invoice_file_uri: string | null;
  payments_file_uri: string | null;
  payment_file_uri_with_timestamp: string | null;
  total_price: number;
}

export interface IOrderDetail {
  id: number;
  vendor_id: string;
  vendor_name: string;
  product_id: number;
  product_title: string;
  quantity: number;
  quantity_label: string;
  image: string;
  price: number;
  description: string | null;
}

export interface IOrderPaymentInput {
  status: TOrderStatus;
  payment_file_uri: string;
}
export interface IOrderPaymentPayload {
  status: TOrderStatus;
  payment_file_uri: string[];
}
