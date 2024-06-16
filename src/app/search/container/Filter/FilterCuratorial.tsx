import {
  getAllProductTypes,
  getAllVendorTypes,
} from '@/shared/actions/productService';
import LocationFormItem from '@/shared/container/Location/LocationFormItem';
import LocationFormItemLoading from '@/shared/container/Location/LocationFormItemLoading';
import useLocationInputValidator from '@/shared/usecase/useLocationInputValidator';
import { Form, InputNumber, Select } from 'antd';
import { Rule } from 'antd/es/form';
import useFormInstance from 'antd/es/form/hooks/useFormInstance';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
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
  const form = useFormInstance();

  const { cityValidator } = useLocationInputValidator(form);

  const product_type = searchParams.get('product_type') ?? undefined;
  const vendor_type = searchParams.get('vendor_type_id') ?? undefined;
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
        name={'vendor_type_id'}
        label="Vendor Type"
        className="my-[10px]"
        initialValue={vendor_type && parseInt(vendor_type)}>
        <Select
          className="h-[35px]"
          placeholder="Choose vendor type"
          options={vendorTypeOptions}
        />
      </Form.Item>
      <Suspense fallback={<LocationFormItemLoading showCity />}>
        <LocationFormItem
          locationFieldName="location"
          containerProps={{ className: 'w-full flex flex-col gap-3' }}
          provinceProps={{ placeholder: 'Choose province' }}
          cityProps={{ placeholder: 'Choose city' }}
          showCity
          formItemRules={{
            province: [{ required: false }],
            city: [
              { required: false },
              {
                validator: cityValidator,
              },
            ],
          }}
        />
      </Suspense>
      <Form.Item
        name={'min_price'}
        label="Min Price"
        initialValue={min_price}
        className="my-[10px]"
        rules={minPriceRules}>
        <InputNumber<number>
          placeholder="Add min price"
          className="w-full"
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
          }
          parser={(value) =>
            value?.replace(/IDR\s?|\.\s?|/g, '') as unknown as number
          }
          prefix={<div className="border-r pr-2 mr-2">IDR</div>}
        />
      </Form.Item>
      <Form.Item
        name={'max_price'}
        label="Max Price"
        initialValue={max_price}
        className="my-[10px]"
        rules={maxPriceRules}>
        <InputNumber<number>
          placeholder="Add max price"
          className="w-full"
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
          }
          parser={(value) =>
            value?.replace(/IDR\s?|\.\s?|/g, '') as unknown as number
          }
          prefix={<div className="border-r pr-2 mr-2">IDR</div>}
        />
      </Form.Item>
    </>
  );
}

export default FilterCuratorial;
