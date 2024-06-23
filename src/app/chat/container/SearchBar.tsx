import { SearchIcon } from '@/shared/container/Icon/SearchIcon';
import { Input } from 'antd';
import { redirect } from 'next/navigation';

export default function SearchBar() {
  async function onSearch(formData: FormData) {
    'use server';

    const search = formData.get('search');
    return redirect(`/chat?search=${search}`);
  }

  return (
    <form action={onSearch}>
      <Input
        name="search"
        prefix={<SearchIcon className="size-fit" />}
        className="flex py-3"
        placeholder="Search vendor"
      />
    </form>
  );
}
