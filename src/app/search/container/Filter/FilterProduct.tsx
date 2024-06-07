import { getAllProductTypes } from '@/shared/actions/productService';
import { Form, Input, Select } from 'antd';
import { Rule } from 'antd/es/form';
import { useSearchParams } from 'next/navigation';
import { useQuery } from 'react-query';

interface IFilterProduct {
  minPriceRules: Rule[];
  maxPriceRules: Rule[];
}

function FilterProduct({
  minPriceRules = [],
  maxPriceRules = [],
}: IFilterProduct) {
  const searchParams = useSearchParams();

  const product_type = searchParams.get('product_type') ?? undefined;
  const min_price = searchParams.get('min_price') ?? undefined;
  const max_price = searchParams.get('max_price') ?? undefined;

  const { data: queryProductTypes } = useQuery({
    queryKey: ['get-product-types'],
    queryFn: () =>
      getAllProductTypes({
        status: 'active',
      }),
  });

  if (typeof queryProductTypes?.data === 'string') {
    throw Error(queryProductTypes.data);
  }

  const productTypeOptions = queryProductTypes?.data.data.map(
    ({ name, id }) => {
      return {
        label: name,
        value: id,
      };
    }
  );

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

export default FilterProduct;
