import type { IOrder } from '@/shared/models/orderInterfaces';
import { Card, Divider } from 'antd';
import OrderedProduct from '../OrderedProduct/OrderedProduct';

type TOrderItemProps = {
  item: IOrder;
  secondaryButton?: React.ReactNode;
  primaryButton?: React.ReactNode;
};

export default function ItemCard(props: TOrderItemProps) {
  const hasFooter = props.secondaryButton || props.primaryButton;

  return props.item.order_details.map((product) => (
    <Card
      key={product.id}
      classNames={{ body: 'space-y-3' }}
      title={product.vendor_name}>
      <OrderedProduct key={product.product_id} product={product} />

      {hasFooter ? <Divider /> : null}

      {hasFooter ? (
        <div className="space-y-2">
          {props.secondaryButton}

          {props.primaryButton}
        </div>
      ) : null}
    </Card>
  ));
}
