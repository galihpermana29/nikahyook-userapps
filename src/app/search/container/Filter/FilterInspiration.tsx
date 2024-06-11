import {
  getAllProductTypes,
  getAllVendorTypes,
} from '@/shared/actions/productService';
import { Form, Select } from 'antd';
import { useSearchParams } from 'next/navigation';
import { useQuery } from 'react-query';

function FilterInspiration() {
  const searchParams = useSearchParams();

  const product_type = searchParams.get('product_type') ?? undefined;
  const vendor_type = searchParams.get('vendor_type') ?? undefined;

  const { data: queryVendorTypes } = useQuery({
    queryKey: ['get-vendor-types'],
    queryFn: () =>
      getAllVendorTypes({
        status: 'active',
      }),
  });

  const { data: queryProductTypes } = useQuery({
    queryKey: ['get-product-types'],
    queryFn: () =>
      getAllProductTypes({
        status: 'active',
      }),
  });

  if (typeof queryProductTypes?.data === 'string') {
    throw Error(queryProductTypes.data);
  } else if (typeof queryVendorTypes?.data === 'string') {
    throw Error(queryVendorTypes.data);
  }

  const productTypeOptions = queryProductTypes?.data.data.map(
    ({ name, id }) => {
      return {
        label: name,
        value: id,
      };
    }
  );

  const vendorTypeOptions = queryVendorTypes?.data.data.map(({ name, id }) => {
    return {
      label: name,
      value: id,
    };
  });

  return (
    <>
      <Form.Item
        name={'product_type'}
        label="Product Type"
        initialValue={product_type && parseInt(product_type)}
        className="my-[10px]">
        <Select
          className="h-[35px]"
          placeholder="Choose product type"
          options={productTypeOptions}
        />
      </Form.Item>
      <Form.Item
        name={'vendor_type'}
        label="Vendor Type"
        initialValue={vendor_type && parseInt(vendor_type)}
        className="my-[10px]">
        <Select
          className="h-[35px]"
          placeholder="Choose vendor type"
          options={vendorTypeOptions}
        />
      </Form.Item>
    </>
  );
}

export default FilterInspiration;
