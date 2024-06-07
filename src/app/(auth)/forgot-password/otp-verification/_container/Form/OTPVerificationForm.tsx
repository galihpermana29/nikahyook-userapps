import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import { InputOTP } from '@/shared/container/ClientAntd/Input/Input';

export default function OTPVerificationForm() {
  return (
    <FormItem
      required
      className="my-0 py-0 w-full flex justify-center"
      name="otp"
      rules={[
        {
          required: true,
          message: 'Please input your OTP!',
        },
        {
          len: 4,
          message: 'Please enter all of your OTP code!',
        },
      ]}>
      <InputOTP size="large" length={4} />
    </FormItem>
  );
}
