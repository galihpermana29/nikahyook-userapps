import { useMutation } from 'react-query';
import { message } from 'antd';
import {
  IAllCartResponse,
  IUpdateCartPayloadRoot,
} from '@/shared/models/cartInterfaces';
import { updateCart, deleteCart } from '@/shared/actions/productService';

interface useMutateCartProps {
  cartState: IAllCartResponse;
  setCartState: React.Dispatch<React.SetStateAction<IAllCartResponse>>;
}

const useMutateCart = ({ cartState, setCartState }: useMutateCartProps) => {
  const { mutate: mutateUpdateCart, isLoading: isUpdating } = useMutation({
    mutationFn: (variables: IUpdateCartPayloadRoot) => {
      return updateCart(variables.product_id, variables.quantity);
    },
    onSuccess: (data) => {
      // if success  show nothing
      if (!data?.success) {
        message.error('Cart failed to be updated!');
        window.location.reload();
      }
    },
    onError: (error: string | Error) => {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error(error as string);
      }
      window.location.reload();
    },
  });

  const { mutate: mutateDeleteCart, isLoading: isDeleting } = useMutation({
    mutationFn: (variables: { cart_id: number; product_id: number }) => {
      return deleteCart(variables.cart_id, variables.product_id);
    },
    onSuccess: (data) => {
      if (data?.success) {
        message.success('Product removed from cart!');
      } else {
        message.error('Failed to remove product from cart!');
      }
    },
    onError: (error: string | Error) => {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error(error as string);
      }
    },
  });

  const updateProductQuantity = (productId: number, change: number) => {
    const updatedProduct = cartState.cart_items
      .flatMap((item) => item.products)
      .find((product) => product.product_id === productId);

    if (updatedProduct) {
      const newQuantity = updatedProduct.quantity + change;
      if (newQuantity > 0) {
        mutateUpdateCart({ product_id: productId, quantity: newQuantity });
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
        mutateDeleteCart({ cart_id: cartState.cart_id, product_id: productId });
        const updatedCartItems = cartState.cart_items
          .map((item) => ({
            ...item,
            products: item.products.filter(
              (product) => product.product_id !== productId
            ),
          }))
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
