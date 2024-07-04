import { IAllCartResponse } from '@/shared/models/cartInterfaces';
import { 
    useState, 
    useEffect 
} from 'react';

const useCalculateTotalPrice = (
  cartState: IAllCartResponse,
  lastValidCartRef: React.MutableRefObject<IAllCartResponse>
) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateTotalPrice = (cart: IAllCartResponse): number => {
    return cart.cart_items.reduce((total, item) => {
      return (
        total +
        item.products.reduce((itemTotal, product) => {
          return itemTotal + product.Price * product.quantity;
        }, 0)
      );
    }, 0);
  };

  useEffect(() => {
    const newTotalPrice = calculateTotalPrice(cartState);
    setTotalPrice(newTotalPrice);
  }, [cartState]);

  const updateTotalPrice = (updatedCart: IAllCartResponse) => {
    const newTotalPrice = calculateTotalPrice(updatedCart);
    setTotalPrice(newTotalPrice);
  };

  const revertTotalPrice = () => {
    const lastValidTotalPrice = calculateTotalPrice(lastValidCartRef.current);
    setTotalPrice(lastValidTotalPrice);
  };

  return { totalPrice, updateTotalPrice, revertTotalPrice };
};

export default useCalculateTotalPrice;
