'use client';

import './style.scss';
import { Button, Checkbox, CheckboxProps } from 'antd';
import { IAllCartResponse } from '@/shared/models/cartInterfaces';
import { MessageIcon } from '@/shared/container/Icon/MessageIcon';
import { ReceiveIcon } from '@/shared/container/Icon/ReceiveIcon';
import BottomBar from '@/shared/container/BottomBar/BottomBar';
import CartItemCard from './card/CartItemCard';
import PageTitle from '@/shared/container/PageTitle/PageTitle';
import React, { useState, useMemo } from 'react';
import useCheckboxState from '../usecase/useCheckboxState';
import useMutateCart from '../usecase/useMutateCart';
import NoResult from '@/shared/container/NoResult/NoResult';

interface ICartContainer {
  cart: IAllCartResponse;
}

const CartContainer = ({ cart }: ICartContainer) => {
  const [cartState, setCartState] = useState<IAllCartResponse>(cart);

  const allProductIds = useMemo(
    () =>
      cartState.cart_items.flatMap((item) =>
        item.products.map((product) => product.product_id)
      ),
    [cartState]
  );

  const {
    checkedList,
    isAllChecked,
    handleToggleCheckbox,
    handleToggleAllCheckboxes,
    handleVendorCheckboxChange,
  } = useCheckboxState([], allProductIds, cartState.cart_items);

  const { updateProductQuantity, isUpdating, isDeleting } = useMutateCart({
    cartState,
    setCartState,
  });

  const handleSelectAllCheckboxChange: CheckboxProps['onChange'] = (e) => {
    handleToggleAllCheckboxes(allProductIds, e.target.checked);
  };

  return (
    <div>
      <PageTitle title="My Cart">
        <div className="flex items-center gap-3">
          <MessageIcon />
          <ReceiveIcon />
        </div>
      </PageTitle>
      {cartState.cart_items.length === 0 ? (
        <NoResult text="No items to be shown" />
      ) : (
        <>
          <section className="p-4 border-t border-ny-gray-100 space-y-3 mb-[76px]">
            {cartState.cart_items.map((item) => (
              <CartItemCard
                key={item.vendor_id}
                vendor_id={item.vendor_id}
                vendor_name={item.vendor_name}
                products={item.products}
                onIncrement={updateProductQuantity}
                onDecrement={updateProductQuantity}
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
                checked={isAllChecked}
                onChange={handleSelectAllCheckboxChange}
              >
                All
              </Checkbox>
              <Button
                className="flex items-center justify-center w-fit rounded-[8px] h-[40px] bg-ny-primary-500 text-white text-body-2"
                loading={isUpdating || isDeleting}
              >
                Checkout
              </Button>
            </div>
          </BottomBar>
        </>
      )}
    </div>
  );
};

export default CartContainer;
