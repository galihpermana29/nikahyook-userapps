import { useState } from 'react';

const useQuantityUpdate = (initialState: number) => {
  const [quantity, setQuantity] = useState<number>(initialState);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return {
    quantity,
    handleIncrement,
    handleDecrement,
  };
};

export default useQuantityUpdate;
