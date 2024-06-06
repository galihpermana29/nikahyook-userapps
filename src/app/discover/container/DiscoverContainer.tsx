import {
  getAllCuratorials,
  getAllInspirations,
  getAllProducts,
} from '@/shared/actions/productService';
import { getAllUsers } from '@/shared/actions/userService';
import { HeroSection } from './Section/HeroSection';
import { TopCuratorsPickSection } from './Section/TopCuratorsPickSection';
import { TopInspirationsSection } from './Section/TopInspirationsSection';
import { TopProductsSection } from './Section/TopProductsSection';
import { TopVendorsSection } from './Section/TopVendorsSection';

const DiscoverContainer = async () => {
  const { data: curatorialsData } = await getAllCuratorials({
    limit: 10,
    status: 'active',
  });
  const { data: productsData } = await getAllProducts({
    limit: 10,
    status: 'active',
  });
  const { data: inspirationsData } = await getAllInspirations({
    limit: 4,
    status: 'active',
  });
  const { data: vendorsData } = await getAllUsers({
    limit: 5,
    type: 'vendor',
    status: 'active',
  });

  if (typeof curatorialsData === 'string') {
    throw Error(curatorialsData);
  }
  if (typeof productsData === 'string') {
    throw Error(productsData);
  }
  if (typeof inspirationsData === 'string') {
    throw Error(inspirationsData);
  }
  if (typeof vendorsData === 'string') {
    throw Error(vendorsData);
  }

  return (
    <main className="flex flex-col gap-5 pb-24">
      <HeroSection />
      <TopCuratorsPickSection data={curatorialsData.data} />
      <TopProductsSection data={productsData.data} />
      <TopInspirationsSection data={inspirationsData.data} />
      <TopVendorsSection data={vendorsData.data} />
    </main>
  );
};

export default DiscoverContainer;
