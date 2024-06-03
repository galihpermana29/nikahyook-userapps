import { getAllProducts } from '@/shared/actions/productService';
import { BottomNav } from '@/shared/container/Navigation/BottomNav';
import DiscoverContainer from './container/DiscoverContainer';

const Discover = async () => {
  const { data } = await getAllProducts();

  if (typeof data === 'string') {
    throw Error(data);
  }

  return (
    <div className="bg-ny-gray-50">
      <DiscoverContainer />
      <BottomNav />
    </div>
  );
};

export default Discover;
