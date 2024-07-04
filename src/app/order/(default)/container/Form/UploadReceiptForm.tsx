import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import { FileUploaderWrapper } from '@/shared/container/FileUploaderWrapper/FileUploaderWrapper';

export default function UploadReceiptForm() {
  return (
    <>
      <FormItem required className="my-0" name="payment_file_uri">
        <FileUploaderWrapper
          className="mx-auto w-full flex justify-center"
          formFieldName="payment_file_uri"
        />
      </FormItem>
      <FormItem
        required
        className="my-0 hidden"
        name="status"
        initialValue={'payment in review'}
      />
    </>
  );
}
