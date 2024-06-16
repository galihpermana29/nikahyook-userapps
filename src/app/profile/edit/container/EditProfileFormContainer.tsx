'use client';

import { editProfile } from '@/shared/actions/userService';
import type { IEditProfileInputRoot } from '@/shared/models/userInterfaces';
import { clientSideReactQueryErrorDetection } from '@/shared/usecase/errorHandling';
import { getClientSession } from '@/shared/usecase/getClientSession';
import { Form, message, type FormProps } from 'antd';
import type { ReactNode } from 'react';
import { useMutation } from 'react-query';
import useTransformEditProfilePayload from '../../usecase/useTransformEditProfilePayload';
import dayjs from 'dayjs';

export default function EditProfileFormContainer(props: FormProps) {
  const [form] = Form.useForm();
  const session = getClientSession();
  const userId = session.user_id;
  const userDetail = session.user_detail;

  const { mutate, isLoading } = useMutation({
    mutationFn: (payload: IEditProfileInputRoot) => {
      const newPayload = useTransformEditProfilePayload(payload);
      return editProfile(newPayload, userId);
    },
    onMutate: () => {
      message.loading('Please wait, we are updating your profile...', 2);
    },
    onSuccess: (data) => {
      // throws when data.success is false, or when mutation errored
      clientSideReactQueryErrorDetection(data);
      message.success('You successfully updated your profile!');
    },
    // this should never fire,
    // unless something else happened.
    onError: (error: string | Error) => {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error(error as string);
      }
    },
  });

  const initialValues = {
    profile_image_uri: userDetail.profile_image_uri,
    name: userDetail.name,
    date_of_birth: dayjs(userDetail.date_of_birth),
    email: userDetail.email,
    gender: userDetail.detail.gender,
    phone_number: userDetail.phone_number,
  };

  return (
    <Form<IEditProfileInputRoot>
      disabled={isLoading}
      onFinish={mutate}
      form={form}
      initialValues={initialValues}
      {...props}>
      {props.children as ReactNode}
    </Form>
  );
}
