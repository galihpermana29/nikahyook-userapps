import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import { Input } from '@/shared/container/ClientAntd/Input/Input';

export default function ForgotPasswordForm() {
  return (
    <FormItem
      required
      className="my-0 py-0"
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
        {
          type: 'email',
          message: 'Please enter a valid email!',
        },
      ]}>
      <Input placeholder="Enter your email here!" />
    </FormItem>
  );
}
