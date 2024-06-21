import { useMutation } from 'react-query';
import { message } from 'antd';
import {
  IAllCartResponse,
  IDeleteCartPayloadRoot,
  IUpdateCartPayloadRoot,
} from '@/shared/models/cartInterfaces';
import { 
  updateCart, 
  deleteCart 
} from '@/shared/actions/productService';
import delayedReload from './useDelayedReload';

interface useMutateCartProps {
  cartState: IAllCartResponse;
  setCartState: React.Dispatch<React.SetStateAction<IAllCartResponse>>;
}

const useMutateCart = ({ cartState, setCartState }: useMutateCartProps) => {
  const { mutate: mutateUpdateCart, isLoading: isUpdating } = useMutation({
    mutationFn: (payload: IUpdateCartPayloadRoot) => updateCart(payload),
    onSuccess: (data) => {
      // if success  show nothing
      if (!data?.success) {
        message.error('Cart failed to be updated!');
        delayedReload();
      }
    },
    onError: (error: string | Error) => {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error(error as string);
      }
      delayedReload();
    },
  });

  const { mutate: mutateDeleteCart, isLoading: isDeleting } = useMutation({
    mutationFn: (payload: IDeleteCartPayloadRoot) => deleteCart(payload),
    onSuccess: (data) => {
      if (data?.success) {
        message.success('Product removed from cart succesfully!');
      } else {
        message.error('Failed to remove product from cart!');
        delayedReload();
      }
    },
    onError: (error: string | Error) => {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error(error as string);
      }
      delayedReload();
    },
  });

  const updateProductQuantity = (productId: number, change: number) => {
    // Find the product in the cart
    const updatedProduct = cartState.cart_items
      .flatMap((item) => item.products)
      .find((product) => product.product_id === productId);

    if (updatedProduct) {
      const newQuantity = updatedProduct.quantity + change;
      if (newQuantity > 0) {
        // If new quantity is valid, update the cart
        mutateUpdateCart({ product_id: productId, quantity: newQuantity });

        // Update local state
        const updatedCartItems = cartState.cart_items.map((item) => ({
          ...item,
          products: item.products.map((product) =>
            product.product_id === productId
              ? { ...product, quantity: newQuantity }
              : product
          ),
        }));
        setCartState({ ...cartState, cart_items: updatedCartItems });
      } else {
        // If new quantity is not valid, remove the product from the cart
        mutateDeleteCart({ cart_id: cartState.cart_id, product_id: productId });

        // Update local state
        const updatedCartItems = cartState.cart_items
          .map((item) => ({
            ...item,
            products: item.products.filter(
              (product) => product.product_id !== productId
            ),
          }))
          // Remove vendors with no products
          .filter((item) => item.products.length > 0);
        setCartState({ ...cartState, cart_items: updatedCartItems });
      }
    }
  };

  return {
    updateProductQuantity,
    isUpdating,
    isDeleting,
  };
};

export default useMutateCart;
