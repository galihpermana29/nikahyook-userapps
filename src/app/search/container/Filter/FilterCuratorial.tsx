import {
  getAllProductTypes,
  getAllVendorTypes,
} from '@/shared/actions/productService';
import { Form, Input, Select } from 'antd';
import { Rule } from 'antd/es/form';
import { useSearchParams } from 'next/navigation';
import { useQuery } from 'react-query';

interface IFilterCuratorial {
  minPriceRules: Rule[];
  maxPriceRules: Rule[];
}

function FilterCuratorial({
  minPriceRules = [],
  maxPriceRules = [],
}: IFilterCuratorial) {
  const searchParams = useSearchParams();

  const product_type = searchParams.get('product_type') ?? undefined;
  const vendor_type = searchParams.get('vendor_type') ?? undefined;
  const min_price = searchParams.get('min_price') ?? undefined;
  const max_price = searchParams.get('max_price') ?? undefined;

  const { data: queryProductTypes } = useQuery({
    queryKey: ['get-product-types'],
    queryFn: () =>
      getAllProductTypes({
        status: 'active',
      }),
  });

  const { data: queryVendorTypes } = useQuery({
    queryKey: ['get-vendor-types'],
    queryFn: () =>
      getAllVendorTypes({
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
        className="my-[10px]"
        initialValue={product_type && parseInt(product_type)}>
        <Select
          className="h-[35px]"
          placeholder="Choose product type"
          options={productTypeOptions}
        />
      </Form.Item>
      <Form.Item
        name={'vendor_type'}
        label="Vendor Type"
        className="my-[10px]"
        initialValue={vendor_type && parseInt(vendor_type)}>
        <Select
          className="h-[35px]"
          placeholder="Choose vendor type"
          options={vendorTypeOptions}
        />
      </Form.Item>
      <Form.Item name={'location'} label="Location" className="my-[10px]">
        <Select className="h-[35px]" placeholder="Choose location" />
      </Form.Item>
      <Form.Item
        name={'min_price'}
        label="Min Price"
        initialValue={min_price}
        className="my-[10px]"
        rules={minPriceRules}>
        <Input
          placeholder="Add min price"
          prefix={<div className="border-r pr-2 mr-2">IDR</div>}
        />
      </Form.Item>
      <Form.Item
        name={'max_price'}
        label="Max Price"
        initialValue={max_price}
        className="my-[10px]"
        rules={maxPriceRules}>
        <Input
          placeholder="Add max price"
          prefix={<div className="border-r pr-2 mr-2">IDR</div>}
        />
      </Form.Item>
    </>
  );
}

export default FilterCuratorial;
