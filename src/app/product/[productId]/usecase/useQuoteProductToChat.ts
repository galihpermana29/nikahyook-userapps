import { IAllProductsResponse } from '@/shared/models/productInterfaces';
import { useRouter } from 'next/navigation';

const useQuoteProductToChat = (product: IAllProductsResponse) => {
  const router = useRouter();

  const onClickMessage = () => {
    const productPayload = {
      productId: product.id.toString(),
    };

    const params = new URLSearchParams(productPayload);
    router.push(`/chat/${product.vendor_id}?${params}`);
  };

  return { onClickMessage };
};

export default useQuoteProductToChat;
