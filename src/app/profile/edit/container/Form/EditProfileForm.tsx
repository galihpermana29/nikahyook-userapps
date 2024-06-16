import { DatePicker } from '@/shared/container/ClientAntd/DatePicker/DatePicker';
import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import { Input } from '@/shared/container/ClientAntd/Input/Input';
import { FileUploaderWrapper } from '@/shared/container/FileUploaderWrapper/FileUploaderWrapper';
import { Button, Select } from 'antd';

export default function EditProfileForm() {
  return (
    <>
      <div className="flex justify-center w-full">
        <FormItem className="my-0" required name="profile_image_uri">
          <FileUploaderWrapper
            maxCount={1}
            listType="picture-circle"
            formFieldName="profile_image_uri"
          />
        </FormItem>
      </div>
      <div className="flex flex-col w-full gap-3 flex-grow">
        <FormItem
          className="my-0"
          required
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}>
          <Input placeholder="Enter your name here!" />
        </FormItem>

        <FormItem
          className="my-0"
          required
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}>
          <Input placeholder="Enter your email here!" />
        </FormItem>

        <FormItem
          className="my-0"
          required
          label="Phone number"
          name="phone_number"
          rules={[
            { required: true, message: 'Please enter your phone number!' },
          ]}>
          <Input placeholder="Enter your phone number here!" />
        </FormItem>

        <FormItem
          className="my-0"
          required
          label="Gender"
          name="gender"
          rules={[{ required: true, message: 'Please enter your gender!' }]}>
          <Select
            placeholder="Enter your gender here!"
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
          />
        </FormItem>

        <FormItem
          className="my-0"
          required
          label="Birth Date"
          name="date_of_birth"
          rules={[
            { required: true, message: 'Please enter your birth date!' },
          ]}>
          <DatePicker className="w-full" />
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
      </div>
    </>
  );
}
