'use client';

import './style.scss';
import { Button, 
  Checkbox, 
  CheckboxProps 
} from 'antd';
import { IAllCartResponse } from '@/shared/models/cartInterfaces';
import { MessageIcon } from '@/shared/container/Icon/MessageIcon';
import { ReceiveIcon } from '@/shared/container/Icon/ReceiveIcon';
import BottomBar from '@/shared/container/BottomBar/BottomBar';
import CartItemCard from './card/CartItemCard';
import DetailTitle from '@/shared/container/DetailHeader/DetailTitle';
import React, { useState } from 'react';
import useCheckboxState from '../usecase/useCheckboxState';
import useQuantityUpdate from '../usecase/useQuantityUpdate';
import useMutateCart from '../repositories/useMutateCart';

const CartContainer = ({ cart }: { cart: IAllCartResponse }) => {
  const [cartState, setCartState] = useState<IAllCartResponse>(cart);
  const { checkedList, handleToggleCheckbox, handleToggleAllCheckboxes } =
    useCheckboxState([]);
  const {
    handleIncrement: handleProductIncrement,
    handleDecrement: handleProductDecrement,
  } = useQuantityUpdate(1);
  const { updateProductQuantity, isUpdating, isDeleting } = useMutateCart({
    cartState,
    setCartState,
  });

  const handleVendorCheckboxChange = (vendorId: string) => {
    const productsToChange = cartState.cart_items.find(
      (item) => item.vendor_id === vendorId
    )?.products;
    if (!productsToChange) return;

    const productIds = productsToChange.map((product) => product.product_id);
    productIds.forEach((productId) => handleToggleCheckbox(productId));
  };

  const handleIncrement = (productId: number) => {
    handleProductIncrement();
    updateProductQuantity(productId, 1);
  };

  const handleDecrement = (productId: number) => {
    handleProductDecrement();
    updateProductQuantity(productId, -1);
  };

  const handleSelectAllCheckboxChange: CheckboxProps['onChange'] = (e) => {
    const checked = e.target.checked;
    const allProductIds = cartState.cart_items
      .flatMap((item) => item.products)
      .map((product) => product.product_id);
    handleToggleAllCheckboxes(allProductIds, checked);
  };

  return (
    <div>
      <DetailTitle title="My Cart">
        <div className="flex items-center gap-3">
          <MessageIcon />
          <ReceiveIcon />
        </div>
      </DetailTitle>
      <section className="p-4 border-t border-ny-gray-100 space-y-3 mb-[76px]">
        {cartState.cart_items.map((item) => (
          <CartItemCard
            key={item.vendor_id}
            vendor_id={item.vendor_id}
            vendor_name={item.vendor_name}
            products={item.products}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onProductCheckboxChange={handleToggleCheckbox}
            onVendorCheckboxChange={handleVendorCheckboxChange}
            checkedList={checkedList}
          />
        ))}
      </section>
      <BottomBar>
        <div className="flex justify-between">
          <Checkbox
            className="text-caption-2 text-ny-gray-400"
            onChange={(e) => handleSelectAllCheckboxChange(e)}
          >
            Semua
          </Checkbox>
          <Button
            className="flex items-center justify-center w-fit rounded-[8px] h-[40px] bg-ny-primary-500 text-white text-body-2"
            disabled={isUpdating || isDeleting}
          >
            Checkout
          </Button>
        </div>
      </BottomBar>
    </div>
  );
};

export default CartContainer;
