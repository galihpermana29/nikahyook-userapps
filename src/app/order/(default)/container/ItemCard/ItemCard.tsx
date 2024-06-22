import type { IOrder } from '@/shared/models/orderInterfaces';
import generateUUID from '@/shared/usecase/generateUUID';
import { Card, Divider } from 'antd';
import OrderedProduct from '../OrderedProduct/OrderedProduct';

type TOrderItemProps = {
  item: IOrder;
  secondaryButton?: React.ReactNode;
  primaryButton?: React.ReactNode;
};

export default function ItemCard(props: TOrderItemProps) {
  const hasFooter = props.secondaryButton || props.primaryButton;

  return (
    <Card classNames={{ body: 'space-y-3' }} title={props.item.vendorName}>
      {props.item.products.map((product, index) => (
        <OrderedProduct
          key={product.productName + index + generateUUID()}
          product={product}
        />
      ))}

      {hasFooter ? <Divider /> : null}

      {hasFooter ? (
        <div className="space-y-2">
          {props.secondaryButton}

          {props.primaryButton}
        </div>
      ) : null}
    </Card>
  );
}
