import { Button } from 'antd';
import React from 'react';

interface IFormButtonGroup {
  onCancel: () => void;
  onSubmit: () => void;
}

function FormButtonGroup({ onCancel, onSubmit }: IFormButtonGroup) {
  return (
    <div className="fixed bg-white px-4 bottom-0 py-3 grid grid-cols-2 gap-2 w-full max-w-screen-sm">
      <Button
        onClick={onCancel}
        className="hover:!bg-ny-primary-100 hover:!text-ny-primary-500 h-[35px] bg-ny-primary-100 text-ny-primary-500 text-caption-1  font-[400] rounded-[8px]">
        Cancel
      </Button>
      <Button
        htmlType="submit"
        type="primary"
        onClick={onSubmit}
        className=" hover:!text-white h-[35px] bg-gradient-to-r from-ny-primary-500 to-ny-primary-300 text-white text-caption-1  font-[400] rounded-[8px]">
        Save
      </Button>
    </div>
  );
}

export default FormButtonGroup;
