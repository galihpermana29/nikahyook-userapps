'use client';

import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import { InputPassword } from '@/shared/container/ClientAntd/Input/Input';
import useValidateConfirmPassword from '../../usecase/useValidateConfirmPassword';
import useFormInstance from 'antd/es/form/hooks/useFormInstance';
import { Button } from 'antd';

export default function ChangePasswordForm() {
  const form = useFormInstance();
  return (
    <>
      <FormItem
        className="my-0"
        required
        label="Old Password"
        name="old_password"
        rules={[{ required: true, message: 'Please enter your password!' }]}>
        <InputPassword placeholder="Enter your password here!" />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="New Password"
        name="new_password"
        rules={[
          { required: true, message: 'Please enter your new password!' },
        ]}>
        <InputPassword placeholder="Enter your new password here!" />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Confirm Password"
        name="confirm_password"
        rules={[
          { required: true, message: 'Please confirm your new password!' },
          useValidateConfirmPassword({
            getFieldValue: form.getFieldValue,
            fieldName: 'new_password',
          }),
        ]}>
        <InputPassword placeholder="Confirm your password" />
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
