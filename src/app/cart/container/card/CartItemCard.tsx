import React from 'react';
import { Checkbox, CheckboxProps, InputNumber } from 'antd';
import Image from 'next/image';
import { ICartProduct } from '@/shared/models/cartInterfaces';
import formatToRupiah from '@/shared/usecase/formatToRupiah';
import { InputNumberTrashIcon } from '@/shared/container/Icon/InputNumberTrashIcon';

interface ICartItemCard {
  vendor_id: string;
  vendor_name: string;
  products: ICartProduct[];
  onIncrement: (productId: number) => void;
  onDecrement: (productId: number) => void;
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
    const checked = e.target.checked;
    onVendorCheckboxChange(vendor_id, checked);
  };

  return (
    <div className="px-2 py-3 rounded-lg shadow space-y-2">
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
          className="flex items-center gap-2 w-full"
        >
          <Checkbox
            value={product.product_id}
            checked={checkedList.includes(product.product_id)}
            onChange={(e) =>
              onProductCheckboxChange(product.product_id, e.target.checked)
            }
          />

          <div className="min-w-[100px] min-h-[100px] relative overflow-hidden">
            <Image
              src={product.image}
              alt={`${product.title} Image`}
              className="object-cover rounded-lg"
              fill
            />
          </div>
          <div className="flex flex-col justify-between w-full h-full">
            <p className="text-caption-2 font-medium">{product.title}</p>
            <p className="text-caption-1 font-medium text-ny-primary-500">
              {formatToRupiah(product.Price)}
            </p>
            <div className="flex items-center justify-end gap-2">
              <InputNumber
                addonBefore={
                  <div
                    onClick={() => onDecrement(product.product_id)}
                    className='cursor-pointer'
                  >
                    {product.quantity === 1 ? <InputNumberTrashIcon /> : '-'}
                  </div>
                }
                addonAfter={
                  <div
                    onClick={() => onIncrement(product.product_id)}
                    className='cursor-pointer'
                  >
                    +
                  </div>
                }
                value={product.quantity}
                size="small"
                className="text-caption-2 max-w-[115px]"
                disabled={true}
              />
              <p className="text-caption-2 text-ny-gray-400">*Pcs</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemCard;
