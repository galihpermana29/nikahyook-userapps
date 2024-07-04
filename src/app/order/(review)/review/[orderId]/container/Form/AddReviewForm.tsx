import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import { Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';

export default function AddReviewForm() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2 w-full justify-between">
        <label htmlFor="rating" className="mr-auto text-caption-1">
          Your rating
        </label>

        <FormItem
          required
          name="rating"
          className="my-0"
          noStyle
          rules={[{ required: true, message: 'Please enter your rating!' }]}>
          <Rate allowHalf />
        </FormItem>
      </div>

      <FormItem
        required
        name="description"
        className="my-0"
        noStyle
        rules={[{ required: true, message: 'Please enter your review!' }]}>
        <TextArea placeholder="Enter a description..." />
      </FormItem>
    </div>
  );
}
