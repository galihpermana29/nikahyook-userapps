import { getAllTags } from '@/shared/actions/productService';
import { Form, Select } from 'antd';
import { useSearchParams } from 'next/navigation';
import { useQuery } from 'react-query';

function FilterInspiration() {
  const searchParams = useSearchParams();

  const tags = searchParams.get('tags') ?? undefined;

  const { data: queryTags } = useQuery({
    queryKey: ['get-tags'],
    queryFn: () =>
      getAllTags({
        status: 'active',
      }),
  });

  if (typeof queryTags?.data === 'string') {
    throw Error(queryTags.data);
  }

  const tagOptions = queryTags?.data.data.map(({ name, id }) => {
    return {
      label: name,
      value: id,
    };
  });

  return (
    <>
      <Form.Item
        name={'tags'}
        label="Tag"
        initialValue={tags && parseInt(tags)}
        className="my-[10px]">
        <Select
          className="h-[35px]"
          placeholder="Choose tag"
          options={tagOptions}
        />
      </Form.Item>
    </>
  );
}

export default FilterInspiration;
