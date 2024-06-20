import { getAllCart } from '@/shared/actions/productService';
import CartContainer from './container/CartContainer';

const Cart = async () => {
  const { data } = await getAllCart();

  if (typeof data === 'string') {
    throw Error(data);
  }
  return (
    <>
      <CartContainer cart={data.data} />
    </>
  );
};

export default Cart;
