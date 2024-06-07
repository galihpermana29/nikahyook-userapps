import { getAllVendorTypes } from '@/shared/actions/productService';
import { Form, Select } from 'antd';
import { useQuery } from 'react-query';
import useUrlQuery from '../../usecase/useUrlQuery';
import { useSearchParams } from 'next/navigation';

function FilterVendor() {
  const searchParams = useSearchParams();

  const vendor_type = searchParams.get('vendor_type') ?? undefined;

  const { data: queryVendorTypes } = useQuery({
    queryKey: ['get-vendor-types'],
    queryFn: () =>
      getAllVendorTypes({
        status: 'active',
      }),
  });

  if (typeof queryVendorTypes?.data === 'string') {
    throw Error(queryVendorTypes.data);
  }

  const vendorTypeOptions = queryVendorTypes?.data.data.map(({ name, id }) => {
    return {
      label: name,
      value: id,
    };
  });

  const { urlQuery } = useUrlQuery();

  return (
    <>
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
    </>
  );
}

export default FilterVendor;
