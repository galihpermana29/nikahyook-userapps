import { SearchIcon } from '@/shared/container/Icon/SearchIcon';
import { Input } from 'antd';

export default function SearchBar({
  search,
}: {
  search: (keyword: string) => void;
}) {
  return (
    <Input
      onChange={(e) => search(e.target.value)}
      name="search"
      prefix={<SearchIcon className="size-fit" />}
      className="flex h-[35px]"
      placeholder="Search vendor"
    />
  );
}
