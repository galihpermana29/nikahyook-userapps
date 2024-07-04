import type { IOrder } from '@/shared/models/orderInterfaces';
import { Card, Divider } from 'antd';
import OrderedProduct from '../OrderedProduct/OrderedProduct';

type TOrderItemProps = {
  item: IOrder;
  secondaryButton?: React.ReactNode;
  primaryButton?: React.ReactNode;
};

export default function ItemCard(props: TOrderItemProps) {
  const hasFooter = !!props.secondaryButton || !!props.primaryButton;
  const vendorName = props.item.order_details[0].vendor_name;

  return (
    <Card
      key={props.item.id}
      classNames={{ body: 'space-y-3' }}
      title={vendorName}>
      {props.item.order_details.map((product) => (
        <OrderedProduct key={product.product_id} orderDetail={product} />
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
