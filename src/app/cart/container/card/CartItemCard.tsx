import { Checkbox, CheckboxProps, InputNumber } from 'antd';
import { ICartProduct } from '@/shared/models/cartInterfaces';
import { InputNumberTrashIcon } from '@/shared/container/Icon/InputNumberTrashIcon';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import Image from 'next/image';
import React from 'react';

interface ICartItemCard {
  vendor_id: string;
  vendor_name: string;
  products: ICartProduct[];
  onIncrement: (productId: number, quantity: number) => void;
  onDecrement: (productId: number, quantity: number) => void;
  onProductCheckboxChange: (productId: number, checked: boolean) => void;
  onVendorCheckboxChange: (vendorId: string, checked: boolean) => void;
  checkedList: number[];
}

const CartItemCard = ({
  vendor_id,
  vendor_name,
  products,
  onIncrement,
  onDecrement,
  onProductCheckboxChange,
  onVendorCheckboxChange,
  checkedList,
}: ICartItemCard) => {
  const vendorChecked = products.every((product) =>
    checkedList.includes(product.product_id)
  );
  const indeterminate =
    !vendorChecked &&
    products.some((product) => checkedList.includes(product.product_id));

  const handleVendorCheckboxChange: CheckboxProps['onChange'] = (e) => {
    onVendorCheckboxChange(vendor_id, e.target.checked);
  };

  return (
    <div className="px-2 py-3 rounded-lg shadow space-y-3">
      <Checkbox
        value={vendor_id}
        checked={vendorChecked}
        indeterminate={indeterminate}
        onChange={handleVendorCheckboxChange}
      >
        <h3 className="text-caption-1 font-medium">{vendor_name}</h3>
      </Checkbox>

      {products.map((product) => (
        <div
          key={product.product_id}
          className="grid grid-cols-[auto,auto,1fr] gap-2 items-center"
        >
          <Checkbox
            value={product.product_id}
            checked={checkedList.includes(product.product_id)}
            onChange={(e) =>
              onProductCheckboxChange(product.product_id, e.target.checked)
            }
          />

          <div className="w-[100px] h-[100px] relative overflow-hidden">
            <Image
              src={product.image}
              alt={`${product.title} Image`}
              className="object-cover rounded-lg"
              fill
            />
          </div>

          <div className="flex flex-col justify-between h-full">
            <p className="text-caption-2 font-medium">{product.title}</p>
            <p className="text-caption-1 font-medium text-ny-primary-500">
              {formatToRupiah(product.Price)}
            </p>
            <div className="flex items-center justify-end gap-2">
              <InputNumber
                addonBefore={
                  <div
                    onClick={() => onDecrement(product.product_id, -1)}
                    className="cursor-pointer"
                  >
                    {product.quantity === 1 ? <InputNumberTrashIcon /> : '-'}
                  </div>
                }
                addonAfter={
                  <div
                    onClick={() => onIncrement(product.product_id, 1)}
                    className="cursor-pointer"
                  >
                    +
                  </div>
                }
                value={product.quantity}
                size="small"
                className="text-caption-2 max-w-[115px]"
                readOnly
              />
              <p className="text-caption-2 text-ny-gray-400">*Pcs</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CartItemCard);
