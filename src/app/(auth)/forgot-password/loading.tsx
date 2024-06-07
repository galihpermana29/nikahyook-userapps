import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import ResetPasswordFormContainer from '../_container/ResetPasswordFormContainer';
import { Button } from 'antd';
import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';

export default function ForgotPasswordLoading() {
  return (
    <ResetPasswordFormContainer
      disabled
      className="w-full flex flex-col gap-5"
      layout="vertical">
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
        ]}>
        <SkeletonInput block active />
      </FormItem>

      <Button disabled>Send Email</Button>
    </ResetPasswordFormContainer>
  );
}
