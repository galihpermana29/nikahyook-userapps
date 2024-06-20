import { useState } from 'react';

interface CheckboxState {
  checkedList: number[];
  handleToggleCheckbox: (productId: number) => void;
  handleToggleAllCheckboxes: (productIds: number[], checked: boolean) => void;
}

const useCheckboxState = (initialState: number[]): CheckboxState => {
  const [checkedList, setCheckedList] = useState<number[]>(initialState);

  const handleToggleCheckbox = (productId: number) => {
    setCheckedList((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const handleToggleAllCheckboxes = (
    productIds: number[],
    checked: boolean
  ) => {
    setCheckedList(checked ? productIds : []);
  };

  return {
    checkedList,
    handleToggleCheckbox,
    handleToggleAllCheckboxes,
  };
};

export default useCheckboxState;
