import FormItem from '@/shared/container/ClientAntd/FormItem/FormItem';
import { FileUploaderWrapper } from '@/shared/container/FileUploaderWrapper/FileUploaderWrapper';

export default function UploadReceiptForm() {
  return (
    <FormItem required className="my-0" name="receipt">
      <FileUploaderWrapper
        className="mx-auto w-full flex justify-center"
        formFieldName="receipt"
      />
    </FormItem>
  );
}
