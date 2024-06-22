import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import { Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';

export default function AddReviewForm() {
  return (
    <>
      <FormItem
        required
        label="Select your rating"
        name="rating"
        className="my-0"
        rules={[{ required: true, message: 'Please enter your rating!' }]}>
        <Rate allowHalf />
      </FormItem>

      <FormItem
        required
        label="Enter your review"
        name="review"
        className="my-0"
        rules={[{ required: true, message: 'Please enter your review!' }]}>
        <TextArea placeholder="Enter a description..." />
      </FormItem>
    </>
  );
}
