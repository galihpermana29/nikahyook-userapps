import { getAllVendorTypes } from '@/shared/actions/productService';
import LocationFormItem from '@/shared/container/Location/LocationFormItem';
import LocationFormItemLoading from '@/shared/container/Location/LocationFormItemLoading';
import useLocationInputValidator from '@/shared/usecase/useLocationInputValidator';
import { Form, Select } from 'antd';
import useFormInstance from 'antd/es/form/hooks/useFormInstance';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useQuery } from 'react-query';

function FilterVendor() {
  const searchParams = useSearchParams();
  const form = useFormInstance();

  const { cityValidator } = useLocationInputValidator(form);

  const vendor_type = searchParams.get('vendor_type_id') ?? undefined;

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

  return (
    <>
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
    </>
  );
}

export default FilterVendor;
