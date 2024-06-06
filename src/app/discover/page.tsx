import { BottomNav } from '@/shared/container/Navigation/BottomNav';
import DiscoverContainer from './container/DiscoverContainer';

const Discover = async () => {
  return (
    <div className="bg-ny-gray-50">
      <DiscoverContainer />
      <BottomNav />
    </div>
  );
};

export default Discover;
