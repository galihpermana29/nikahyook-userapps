import { DatePicker } from '@/shared/container/ClientAntd/DatePicker/DatePicker';
import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import {
  Input,
  InputPassword,
} from '@/shared/container/ClientAntd/Input/Input';
import { Button, Select } from 'antd';

export default function CreateAccountForm() {
  return (
    <>
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
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password!' }]}>
        <InputPassword placeholder="Enter your password here!" />
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
        rules={[{ required: true, message: 'Please enter your birth date!' }]}>
        <DatePicker className="w-full" />
      </FormItem>

      <Button className="mt-2 w-full" type="primary" htmlType="submit">
        Sign Up
      </Button>
    </>
  );
}
