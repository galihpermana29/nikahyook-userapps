import {
  createWishlist,
  deleteWishlist,
} from '@/shared/actions/productService';
import { Button, ButtonProps, message } from 'antd';
import { useRouter } from 'next/navigation';
import { HeartIcon } from '../Icon/HeartIcon';

interface IWishlistButton extends ButtonProps {
  target_id: number | string;
  isActive?: boolean;
  refetch?: any;
  wishlist_type: 'inspiration' | 'product' | 'vendor' | 'curatorial';
}

export const WishListButton = ({
  target_id,
  isActive,
  refetch,
  wishlist_type = 'inspiration',
  ...props
}: IWishlistButton) => {
  const router = useRouter();

  const handleMutate = async () => {
    if (isActive) {
      const res = await deleteWishlist(wishlist_type, target_id);
      if (res.success) {
        message.success('Wishlist removed successfully!');
        if (refetch) refetch();
        router.refresh();
      } else {
        message.error('Failed to remove wishlist!');
      }
    } else {
      const res = await createWishlist(wishlist_type, target_id);
      if (res.success) {
        message.success('Wishlist added successfully!');
        if (refetch) refetch();
        router.refresh();
      } else {
        message.error('Failed to add wishlist!');
      }
    }
  };

  return (
    <Button
      size="small"
      icon={
        <HeartIcon
          className={`${
            isActive ? 'text-ny-primary-500' : 'text-ny-primary-100'
          }`}
        />
      }
      style={{ border: 'none' }}
      onClick={(e) => {
        e.stopPropagation();
        handleMutate();
      }}
      {...props}
    />
  );
};
