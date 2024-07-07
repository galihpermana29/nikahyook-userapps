import { IAllCartResponse } from '@/shared/models/cartInterfaces';
import { useState, useEffect } from 'react';

const useCalculateTotalPrice = (
  cartState: IAllCartResponse,
  lastValidCartRef: React.MutableRefObject<IAllCartResponse>,
  checkedList: number[]
) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateTotalPrice = (
    cart: IAllCartResponse,
    checkedProductIds: number[]
  ): number => {
    return cart.cart_items.reduce((total, item) => {
      return (
        total +
        item.products.reduce((itemTotal, product) => {
          if (checkedProductIds.includes(product.product_id)) {
            return itemTotal + product.Price * product.quantity;
          }
          return itemTotal;
        }, 0)
      );
    }, 0);
  };

  useEffect(() => {
    const newTotalPrice = calculateTotalPrice(cartState, checkedList);
    setTotalPrice(newTotalPrice);
  }, [cartState, checkedList]);

  const updateTotalPrice = (
    updatedCart: IAllCartResponse,
    updatedCheckedList: number[]
  ) => {
    const newTotalPrice = calculateTotalPrice(updatedCart, updatedCheckedList);
    setTotalPrice(newTotalPrice);
  };

  const revertTotalPrice = () => {
    const lastValidTotalPrice = calculateTotalPrice(
      lastValidCartRef.current,
      checkedList
    );
    setTotalPrice(lastValidTotalPrice);
  };

  return {
    totalPrice,
    updateTotalPrice,
    revertTotalPrice
  };
};

export default useCalculateTotalPrice;
