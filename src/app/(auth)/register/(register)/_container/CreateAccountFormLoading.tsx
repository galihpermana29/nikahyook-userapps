import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';
import { Button } from 'antd';

export default function CreateAccountFormLoading() {
  return (
    <>
      <FormItem
        className="my-0"
        required
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter your name!' }]}>
        <SkeletonInput active block />
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
        <SkeletonInput active block />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password!' }]}>
        <SkeletonInput active block />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Gender"
        name="gender"
        rules={[{ required: true, message: 'Please enter your gender!' }]}>
        <SkeletonInput active block />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Birth Date"
        name="date_of_birth"
        rules={[{ required: true, message: 'Please enter your birth date!' }]}>
        <SkeletonInput active block />
      </FormItem>

      <Button disabled className="mt-2 w-full" type="primary" htmlType="submit">
        Sign Up
      </Button>
    </>
  );
}
