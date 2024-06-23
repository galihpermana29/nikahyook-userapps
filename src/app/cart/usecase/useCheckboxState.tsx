import {  
  useState, 
  useEffect, 
  useCallback 
} from 'react';

interface CartItem {
  vendor_id: string;
  products: { product_id: number }[];
}

interface CheckboxState {
  checkedList: number[];
  isAllChecked: boolean;
  handleToggleCheckbox: (productId: number) => void;
  handleToggleAllCheckboxes: (productIds: number[], checked: boolean) => void;
  handleVendorCheckboxChange: (vendorId: string, checked: boolean) => void;
}

const useCheckboxState = (
  initialState: number[],
  allProductIds: number[],
  cartItems: CartItem[]
): CheckboxState => {
  const [checkedList, setCheckedList] = useState<number[]>(initialState);
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    setIsAllChecked(
      allProductIds.length > 0 && checkedList.length === allProductIds.length
    );
  }, [checkedList, allProductIds]);

  const handleToggleCheckbox = useCallback((productId: number) => {
    setCheckedList((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  }, []);

  const handleToggleAllCheckboxes = useCallback(
    (productIds: number[], checked: boolean) => {
      setCheckedList(checked ? productIds : []);
    },
    []
  );

  const handleVendorCheckboxChange = useCallback(
    (vendorId: string, checked: boolean) => {
      const productsToChange = cartItems.find(
        (item) => item.vendor_id === vendorId
      )?.products;
      if (!productsToChange) return;

      const productIds = productsToChange.map((product) => product.product_id);

      setCheckedList((prev) => {
        if (checked) {
          // If checking, add only unchecked products to the list
          const uncheckedProductIds = productIds.filter(
            (id) => !prev.includes(id)
          );
          return [...prev, ...uncheckedProductIds];
        } else {
          // If unchecking, remove all products of this vendor from the list
          return prev.filter((id) => !productIds.includes(id));
        }
      });
    },
    [cartItems]
  );

  return {
    checkedList,
    isAllChecked,
    handleToggleCheckbox,
    handleToggleAllCheckboxes,
    handleVendorCheckboxChange,
  };
};

export default useCheckboxState;
