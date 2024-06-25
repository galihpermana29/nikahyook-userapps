import { SearchIcon } from '@/shared/container/Icon/SearchIcon';
import { Input } from 'antd';
// import useGetChats from '../usecase/useGetChats';

export default function SearchBar() {
  return (
    <Input
      // onChange={(e) => setKeyword(e.target.value)}
      name="search"
      prefix={<SearchIcon className="size-fit" />}
      className="flex h-[35px]"
      placeholder="Search vendor"
    />
  );
}
