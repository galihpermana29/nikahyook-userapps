'use client';

import FormItem from 'antd/es/form/FormItem';
import { type SelectProps } from 'antd';
import useMounted from '@/shared/usecase/useMounted';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import LocationFormItemLoading from './LocationFormItemLoading';
import generateUUID from '@/shared/usecase/generateUUID';
import useFormInstance from 'antd/es/form/hooks/useFormInstance';
import type { DefaultOptionType } from 'antd/es/select';
import type { IOptionsParams } from '@/shared/models/generalInterfaces';

// only import components when it will be shown

const ClientSelectLocationProvinces = dynamic(
  () => import('../Select/ClientSelectLocationProvinces')
);
const ClientSelectLocationCities = dynamic(
  () => import('../Select/ClientSelectLocationCities')
);
const ClientSelectLocationDistricts = dynamic(
  () => import('../Select/ClientSelectLocationDistricts')
);
const ClientSelectLocationVillages = dynamic(
  () => import('../Select/ClientSelectLocationVillages')
);

type TLocationFormItemProps = {
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  locationFieldName: string;
  provinceProps?: SelectProps;
  showCity?: boolean;
  cityProps?: SelectProps;
  showDistrict?: boolean;
  districtProps?: SelectProps;
  showVillage?: boolean;
  villageProps?: SelectProps;
};

export default function LocationFormItem({
  containerProps,
  locationFieldName,
  provinceProps,
  showCity,
  cityProps,
  showDistrict,
  districtProps,
  showVillage,
  villageProps,
}: TLocationFormItemProps) {
  const mounted = useMounted();
  const form = useFormInstance();
  const [selected, setSelected] = useState(getInitialState());

  function getInitialState() {
    const initialFormValue = form.getFieldValue('location') as
      | IOptionsParams<string, string>
      | undefined;

    if (!initialFormValue)
      return {
        province: undefined,
        city: undefined,
        district: undefined,
        village: undefined,
      };

    const values = initialFormValue.value;

    switch (values.length) {
      case 2:
        return {
          province: values,
          city: undefined,
          district: undefined,
          village: undefined,
        };
      case 4:
        return {
          province: values.slice(0, 2),
          city: values.slice(2),
          district: undefined,
          village: undefined,
        };
      case 7:
        return {
          province: values.slice(0, 2),
          city: values.slice(2, 4),
          district: values.slice(4),
          village: undefined,
        };
      case 10:
        return {
          province: values.slice(0, 2),
          city: values.slice(2, 4),
          district: values.slice(4, 7),
          village: values.slice(7),
        };
      default:
        return {
          province: undefined,
          city: undefined,
          district: undefined,
          village: undefined,
        };
    }
  }

  // field name conditionals, the last element shown will have "name"
  // as "name" = locationFieldName in the form
  const provinceItemName =
    !showCity && !showDistrict && !showVillage
      ? locationFieldName
      : 'province-select';

  const cityItemName =
    showCity && !showDistrict && !showVillage
      ? locationFieldName
      : 'city-select';

  const districtItemName =
    showDistrict && !showVillage ? locationFieldName : 'district-select';

  const villageItemName = showVillage ? locationFieldName : 'village-select';

  // INFO: field name order matters
  // this maps form name to key name in selected state
  const selectStateMap = {
    [provinceItemName]: 'province' as const,
    [cityItemName]: 'city' as const,
    [districtItemName]: 'district' as const,
    [villageItemName]: 'village' as const,
  };

  function handleValueChange(
    changedField: string,
    value: string,
    option: DefaultOptionType
  ) {
    // get only the field name as an array
    const fieldNames = Object.keys(selectStateMap);

    // get the index of the field that changed
    const changedIndex = fieldNames.findIndex(
      (fieldName) => fieldName === changedField
    );

    // get the fields name that will have to reset its value
    const fieldsToReset = fieldNames.slice(changedIndex + 1);

    // get key value object from list of state fields to be reset
    const stateFieldsToResetKeyValue = Object.fromEntries(
      fieldsToReset.map((field) => [selectStateMap[field], undefined])
    );

    // get key value object from list of form fields to be reset
    const formFieldsToResetKeyValue = Object.fromEntries(
      fieldsToReset.map((field) => [field, undefined])
    );

    // set selected state accordingly
    setSelected((prev) => ({
      // keep previous value if not reset or changed
      ...prev,
      // reset every state fields needed
      ...stateFieldsToResetKeyValue,
      // change the changedField state field to be value
      [selectStateMap[changedField]]: value,
    }));

    // set changedField form field to new value
    form.setFieldValue(changedField, option);

    // reset every form fields needed to be reset
    form.setFieldsValue(formFieldsToResetKeyValue);
  }

  // return loading state whenever client isnt loaded
  // this is to avoid hydration error.
  if (!mounted) return <LocationFormItemLoading />;

  return (
    <div {...containerProps}>
      {/* always show province as fist select */}
      <FormItem
        className="my-0"
        required
        label="Province"
        name={provinceItemName}
        rules={[{ required: true, message: 'Please enter your province!' }]}>
        <ClientSelectLocationProvinces
          onChange={(value, option) =>
            handleValueChange(provinceItemName, value, option)
          }
          {...provinceProps}
        />
      </FormItem>

      {/* only show when province is selected, and the components accepts city props as true */}
      {selected['province'] && showCity ? (
        <FormItem
          className="my-0"
          required
          label="City"
          name={cityItemName}
          rules={[{ required: true, message: 'Please enter your city!' }]}>
          <ClientSelectLocationCities
            key={selected['province'] + generateUUID()}
            onChange={(value, option) =>
              handleValueChange(cityItemName, value, option)
            }
            provinceId={selected['province']}
            {...cityProps}
          />
        </FormItem>
      ) : null}

      {/* only show when city is selected, and the components accepts district props as true */}
      {selected['city'] && showDistrict ? (
        <FormItem
          className="my-0"
          required
          label="District"
          name={districtItemName}
          rules={[{ required: true, message: 'Please enter your district!' }]}>
          <ClientSelectLocationDistricts
            key={selected['city'] + generateUUID()}
            onChange={(value, option) =>
              handleValueChange(districtItemName, value, option)
            }
            cityId={selected['city']}
            {...districtProps}
          />
        </FormItem>
      ) : null}

      {/* only show when district is selected, and the components accepts village props as true */}
      {selected['district'] && showVillage ? (
        <FormItem
          className="my-0"
          required
          label="Village"
          name={villageItemName}
          rules={[{ required: true, message: 'Please enter your village!' }]}>
          <ClientSelectLocationVillages
            key={selected['district'] + generateUUID()}
            onChange={(value, option) =>
              handleValueChange(villageItemName, value, option)
            }
            districtId={selected['district']}
            {...villageProps}
          />
        </FormItem>
      ) : null}
    </div>
  );
}
