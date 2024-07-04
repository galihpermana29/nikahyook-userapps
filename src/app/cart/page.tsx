import { getAllCart } from '@/shared/actions/productService';
import CartContainer from './container/CartContainer';

export const dynamic = 'force-dynamic';

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
