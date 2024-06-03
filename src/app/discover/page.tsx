import { getAllProducts } from '@/shared/actions/productService';
import DiscoverContainer from './container/DiscoverContainer';

const Discover = async () => {
  const { data } = await getAllProducts();

  if (typeof data === 'string') {
    throw Error(data);
  }

  return (
    <div>
      <DiscoverContainer />
    </div>
  );
};

export default Discover;
