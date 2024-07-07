import { useMutation } from 'react-query';
import { message } from 'antd';
import {
  IAllCartResponse,
  IDeleteCartPayloadRoot,
  IUpdateCartPayloadRoot,
} from '@/shared/models/cartInterfaces';
import { updateCart, deleteCart } from '@/shared/actions/productService';
import { useDebounce } from '@uidotdev/usehooks';
import {
  useCallback,
  useEffect,
  useState,
  useRef
} from 'react';
import useCalculateTotalPrice from './useCalculateTotalPrice';

interface useMutateCartProps {
  cartState: IAllCartResponse;
  setCartState: React.Dispatch<React.SetStateAction<IAllCartResponse>>;
  checkedList: number[];
}

interface DebouncedPayload {
  productId: number;
  quantity: number;
  previousQuantity: number;
}

const useMutateCart = ({ cartState, setCartState, checkedList }: useMutateCartProps) => {
  const [debouncedPayload, setDebouncedPayload] =
    useState<DebouncedPayload | null>(null);
  const debouncedValue = useDebounce(debouncedPayload, 600);
  // Ref to store the last valid cart state in case of failed requests
  const lastValidCartRef = useRef<IAllCartResponse>(cartState);
  const {
    totalPrice,
    updateTotalPrice,
    revertTotalPrice
  } = useCalculateTotalPrice(cartState, lastValidCartRef, checkedList);

  const { mutate: mutateUpdateCart, isLoading: isUpdating } = useMutation({
    mutationFn: (payload: IUpdateCartPayloadRoot) => updateCart(payload),
    onSuccess: (data) => {
      if (data?.success) {
        lastValidCartRef.current = cartState;
        updateTotalPrice(cartState, checkedList);
      } else {
        message.error('Cart failed to be updated!');
        setCartState(lastValidCartRef.current);
        revertTotalPrice();
      }
    },
    onError: (error: string | Error) => {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error(error as string);
      }
      setCartState(lastValidCartRef.current);
      revertTotalPrice();
    },
  });

  const { mutate: mutateDeleteCart, isLoading: isDeleting } = useMutation({
    mutationFn: (payload: IDeleteCartPayloadRoot) => deleteCart(payload),
    onSuccess: (data) => {
      if (data?.success) {
        message.success('Product removed from cart successfully!');
        lastValidCartRef.current = cartState;
        updateTotalPrice(cartState, checkedList);
      } else {
        message.error('Failed to remove product from cart!');
        setCartState(lastValidCartRef.current);
        revertTotalPrice();
      }
    },
    onError: (error: string | Error) => {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error(error as string);
      }
      setCartState(lastValidCartRef.current);
      revertTotalPrice();
    },
  });

  useEffect(() => {
    if (debouncedValue) {
      mutateUpdateCart({
        product_id: debouncedValue.productId,
        quantity: debouncedValue.quantity,
      });
    }
  }, [debouncedValue, mutateUpdateCart]);

  const updateProductQuantity = useCallback(
    (productId: number, change: number) => {
      const updatedProduct = cartState.cart_items
        .flatMap((item) => item.products)
        .find((product) => product.product_id === productId);

      if (updatedProduct) {
        const previousQuantity = updatedProduct.quantity;
        const newQuantity = previousQuantity + change;

        if (newQuantity <= 0) {
          // Immediately delete the product if new quantity is 0 or negative
          mutateDeleteCart({
            cart_id: cartState.cart_id,
            product_id: productId,
          });
          // Update local state
          const updatedCartItems = cartState.cart_items
            .map((item) => ({
              ...item,
              products: item.products.filter(
                (product) => product.product_id !== productId
              ),
            }))
            .filter((item) => item.products.length > 0);
          setCartState({ ...cartState, cart_items: updatedCartItems });
          // Clear the debounced payload to prevent unnecessary updates
          setDebouncedPayload(null);
        } else {
          // Update local state immediately
          const updatedCartItems = cartState.cart_items.map((item) => ({
            ...item,
            products: item.products.map((product) =>
              product.product_id === productId
                ? { ...product, quantity: newQuantity }
                : product
            ),
          }));
          setCartState({ ...cartState, cart_items: updatedCartItems });
          setDebouncedPayload({
            productId,
            quantity: newQuantity,
            previousQuantity,
          });
        }
      }
    },
    [cartState, setCartState, mutateDeleteCart]
  );

  return {
    updateProductQuantity,
    isUpdating,
    isDeleting,
    totalPrice,
  };
};

export default useMutateCart;
