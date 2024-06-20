export interface IAllCartResponse {
    cart_id: number;
    user_id: string;
    cart_items: ICartItem[]
}

export interface ICartItem {
    vendor_id: string;
    vendor_name: string;
    products: ICartProduct[]
}

export interface ICartProduct {
    product_id: number;
    title: string;
    quantity: number;
    image: string;
    Price: number;
}

export interface IUpdateCartPayloadRoot {
    product_id: number;
    quantity: number;
}