'use client';

import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import { InputPassword } from '@/shared/container/ClientAntd/Input/Input';
import useFormInstance from 'antd/es/form/hooks/useFormInstance';
import useValidateConfirmPassword from '@/shared/usecase/useValidateConfirmPassword';

export default function ResetPasswordForm() {
  const form = useFormInstance();

  return (
    <>
      <FormItem
        className="my-0"
        required
        label="New Password"
        name="new_password"
        extra={
          <p className="text-caption-2 mt-2">
            Password must be at least 8 characters
          </p>
        }
        rules={[
          { required: true, message: 'Please enter your new password!' },
          { min: 8, message: 'Password must be at least 8 characters!' },
        ]}>
        <InputPassword
          name="new_password"
          placeholder="Enter your new password here!"
        />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Re-enter New Password"
        name="confirm_password"
        rules={[
          { required: true, message: 'Please confirm your new password!' },
          useValidateConfirmPassword({
            getFieldValue: form.getFieldValue,
            fieldName: 'new_password',
          }),
        ]}>
        <InputPassword
          name="confirm_password"
          placeholder="Confirm your password"
        />
      </FormItem>
    </>
  );
}
