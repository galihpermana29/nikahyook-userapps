import { Button, ButtonProps } from 'antd';
import { HeartIcon } from '../Icon/HeartIcon';

interface IWishlistButton extends ButtonProps {
  isActive?: boolean;
  onMutateWishList: () => void;
}

export const WishListButton = ({
  isActive,
  onMutateWishList,
  ...props
}: IWishlistButton) => {
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
      onClick={(e) => {
        e.stopPropagation();
        onMutateWishList();
      }}
      {...props}
    />
  );
};
