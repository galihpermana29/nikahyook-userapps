import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import Input from '@/shared/container/ClientAntd/Input/Input';
import { Button } from 'antd';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <>
      <FormItem
        rules={[{ required: true, message: 'Please input your email!' }]}
        className="my-0"
        required
        name="email"
        label="Email">
        <Input placeholder="Enter your email here!" />
      </FormItem>

      <FormItem
        rules={[{ required: true, message: 'Please input your password!' }]}
        className="my-0"
        required
        name="password"
        label="Password">
        <Input type="password" placeholder="Enter your password here!" />
      </FormItem>

      <Link
        href="/forgot-password"
        className="text-right text-ny-primary-500 -mt-1 text-caption-1">
        Forgot Password?
      </Link>

      <Button size="large" className="mt-2" type="primary" htmlType="submit">
        Login
      </Button>
    </>
  );
}
