'use client';

import FormItem from 'antd/es/form/FormItem';
import { type SelectProps } from 'antd';
import useMounted from '@/shared/usecase/useMounted';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import ClientSelectLocationCities from '../Select/ClientSelectLocationCities';
import LocationFormItemLoading from './LocationFormItemLoading';
import generateUUID from '@/shared/usecase/generateUUID';

// only import components when it will be shown
const ClientSelectLocationProvinces = dynamic(
  () => import('../Select/ClientSelectLocationProvinces')
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
  const [selected, setSelected] = useState({
    province: undefined,
    city: undefined,
    district: undefined,
    village: undefined,
  });

  // field name conditionals, the last element shown will have "name"
  // as "name" = locationFieldName in the form
  const provinceItemName =
    !showCity && !showDistrict && !showVillage
      ? locationFieldName
      : 'province-select';

  const cityItemName =
    !showDistrict && !showVillage ? locationFieldName : 'city-select';

  const districtItemName = !showVillage ? locationFieldName : 'district-select';

  const villageItemName = showVillage && locationFieldName;

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
          value={selected['province']}
          onChange={(value) =>
            setSelected({
              province: value,
              city: undefined,
              district: undefined,
              village: undefined,
            })
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
            value={selected['city']}
            key={selected['province'] + generateUUID()}
            onChange={(value) =>
              setSelected((prev) => ({
                ...prev,
                city: value,
                district: undefined,
                village: undefined,
              }))
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
            onChange={(value) =>
              setSelected((prev) => ({
                ...prev,
                district: value,
                village: undefined,
              }))
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
            onChange={(value) =>
              setSelected((prev) => ({ ...prev, village: value }))
            }
            districtId={selected['district']}
            {...villageProps}
          />
        </FormItem>
      ) : null}
    </div>
  );
}
