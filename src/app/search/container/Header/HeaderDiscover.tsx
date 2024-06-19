import FilterIcon from '@/shared/container/Icon/FilterIcon';
import { LetfArrowIcon } from '@/shared/container/Icon/LeftArrow';
import { SearchIcon } from '@/shared/container/Icon/SearchIcon';
import { IGeneralFilter } from '@/shared/models/generalInterfaces';
import { Button, Form, Input, Popover } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import useFilterAction from '../../usecase/useFilterAction';
import useGenerateFilterItems from '../../usecase/useGenerateFilterItems';

interface IHeaderDiscover {
  inputPlaceholder: string;
  inputDefaultValue: string;
  onSearchChange: Dispatch<SetStateAction<IGeneralFilter>>;
  searchForm: FormInstance;
  filterForm: FormInstance;
}

function HeaderDiscover({
  inputDefaultValue,
  inputPlaceholder,
  onSearchChange,
  searchForm,
  filterForm,
}: IHeaderDiscover) {
  const filterItems = useGenerateFilterItems(filterForm);

  const { onApplyFilter, onResetFilter } = useFilterAction(filterForm);

  const filterContent = (
    <Form
      form={filterForm}
      layout="vertical"
      className="min-w-[200px] flex flex-col divide-y gap-1"
      onFinish={onApplyFilter}>
      <div>{filterItems}</div>
      <div className="flex gap-2 justify-end pt-2">
        <Button
          onClick={onResetFilter}
          className="hover:!bg-ny-primary-100 hover:!text-ny-primary-500 h-[35px] bg-ny-primary-100 text-ny-primary-500 text-caption-1  font-[400] rounded-[8px]">
          Reset
        </Button>
        <Button
          htmlType="submit"
          className="hover:!bg-ny-primary-500 hover:!text-white h-[35px] bg-ny-primary-500 text-white text-caption-1  font-[400] rounded-[8px]">
          Apply
        </Button>
      </div>
    </Form>
  );

  return (
    <header>
      <div className="flex items-center gap-2 p-4">
        <Link
          href={'/discover'}
          className="hover:bg-ny-gray-100/30 transition-colors duration-150 rounded-lg">
          <LetfArrowIcon className="shrink-0" />
        </Link>
        <Form form={searchForm} className="w-full">
          <Form.Item name={'keyword'} className="w-full !m-0">
            <Input
              placeholder={`Search ${inputPlaceholder}`}
              prefix={<SearchIcon />}
              className="py-2 rounded-lg"
              autoFocus
              defaultValue={inputDefaultValue}
              onChange={(e) => {
                onSearchChange((prev) => ({
                  ...prev,
                  keyword: e.target.value,
                }));
              }}
            />
          </Form.Item>
        </Form>
        <Popover
          content={filterContent}
          trigger="click"
          placement="bottomRight">
          <Button
            size="small"
            className="bg-ny-primary-100 !p-5 border-ny-primary-100 rounded-lg shrink-0 text-ny-primary-500"
            icon={<FilterIcon />}
          />
        </Popover>
      </div>
    </header>
  );
}

export default HeaderDiscover;
