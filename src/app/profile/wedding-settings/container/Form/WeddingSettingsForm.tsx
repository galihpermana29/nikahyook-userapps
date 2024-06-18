import { DatePicker } from '@/shared/container/ClientAntd/DatePicker/DatePicker';
import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import { Input } from '@/shared/container/ClientAntd/Input/Input';
import { Select } from '@/shared/container/ClientAntd/Select/Select';
import LocationFormItem from '@/shared/container/Location/LocationFormItem';
import LocationFormItemLoading from '@/shared/container/Location/LocationFormItemLoading';
import { Button } from 'antd';
import { Suspense } from 'react';

export default function WeddingSettingsForm() {
  return (
    <>
      <FormItem
        className="my-0"
        required
        label="Wedding Role"
        name="wedding_role"
        rules={[{ required: true, message: 'Please enter wedding role!' }]}>
        <Select
          placeholder="Select your wedding role!"
          options={[{ label: 'Wedding Planner', value: 1 }]}
        />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Groom Name"
        name="groom_name"
        rules={[{ required: true, message: 'Please enter groom name!' }]}>
        <Input placeholder="Enter your groom name here!" />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Bride Name"
        name="bride_name"
        rules={[{ required: true, message: 'Please enter bride name!' }]}>
        <Input placeholder="Enter your bride name here!" />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Plan For"
        name="plan_for"
        rules={[{ required: true, message: 'Please enter your plan!' }]}>
        <Select
          placeholder="Enter your plan here!"
          options={[
            { label: 'Reception', value: 1 },
            { label: 'Marriage Ceremony', value: 2 },
          ]}
        />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Wedding Theme"
        name="wedding_theme"
        rules={[
          { required: true, message: 'Please enter your wedding theme!' },
        ]}>
        <Select
          placeholder="Enter your wedding theme here!"
          options={[
            { label: 'Modern', value: 1 },
            { label: 'Classic', value: 2 },
          ]}
        />
      </FormItem>

      <Suspense fallback={<LocationFormItemLoading showCity />}>
        <LocationFormItem
          locationFieldName="location"
          containerProps={{ className: 'w-full flex flex-col gap-3' }}
          provinceProps={{ placeholder: 'Enter your province here!' }}
          cityProps={{ placeholder: 'Enter your city here!' }}
          showCity
        />
      </Suspense>

      <FormItem
        className="my-0"
        required
        label="Wedding Date"
        name="wedding_date"
        rules={[
          { required: true, message: 'Please enter your wedding date!' },
        ]}>
        <DatePicker
          className="w-full"
          placeholder="Enter your wedding date here!"
        />
      </FormItem>

      <div className="flex items-center pt-3 w-full gap-2 mt-auto">
        <Button
          href="/profile"
          className="w-full text-ny-primary-500 bg-ny-primary-100">
          Cancel
        </Button>
        <Button className="w-full" type="primary" htmlType="submit">
          Save
        </Button>
      </div>
    </>
  );
}
