import { DatePicker } from '@/shared/container/ClientAntd/DatePicker/DatePicker';
import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import { Input } from '@/shared/container/ClientAntd/Input/Input';
import { Select } from '@/shared/container/ClientAntd/Select/Select';
import { SkeletonInput } from '@/shared/container/ClientAntd/Skeleton/Skeleton';
import { Button } from 'antd';

export default function CreateProfileFormLoading() {
  return (
    <>
      <FormItem
        className="my-0"
        required
        label="Wedding Role"
        name="wedding_role"
        rules={[{ required: true, message: 'Please enter wedding role!' }]}>
        <SkeletonInput active block />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Groom Name"
        name="groom_name"
        rules={[{ required: true, message: 'Please enter groom name!' }]}>
        <SkeletonInput active block />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Bride Name"
        name="bride_name"
        rules={[{ required: true, message: 'Please enter bride name!' }]}>
        <SkeletonInput active block />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Plan For"
        name="plan_for"
        rules={[{ required: true, message: 'Please enter your plan!' }]}>
        <SkeletonInput active block />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Wedding Theme"
        name="wedding_theme"
        rules={[
          { required: true, message: 'Please enter your wedding theme!' },
        ]}>
        <SkeletonInput active block />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Location"
        name="location"
        rules={[{ required: true, message: 'Please enter your location!' }]}>
        <SkeletonInput active block />
      </FormItem>

      <FormItem
        className="my-0"
        required
        label="Wedding Date"
        name="wedding_date"
        rules={[
          { required: true, message: 'Please enter your wedding date!' },
        ]}>
        <SkeletonInput active block />
      </FormItem>

      <Button disabled className="mt-2 w-full" type="primary" htmlType="submit">
        Next
      </Button>
    </>
  );
}
