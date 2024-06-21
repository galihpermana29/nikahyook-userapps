import { 
  useState, 
  useEffect, 
  useCallback
} from 'react';

interface CheckboxState {
  checkedList: number[];
  isAllChecked: boolean;
  handleToggleCheckbox: (productId: number) => void;
  handleToggleAllCheckboxes: (productIds: number[], checked: boolean) => void;
  setCheckedList: React.Dispatch<React.SetStateAction<number[]>>;
}

const useCheckboxState = (
  initialState: number[],
  allProductIds: number[]
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

  return {
    checkedList,
    isAllChecked,
    handleToggleCheckbox,
    handleToggleAllCheckboxes,
    setCheckedList,
  };
};

export default useCheckboxState;
