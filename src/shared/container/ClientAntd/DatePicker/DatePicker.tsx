'use client';

import {
  DatePicker as DatePickerAntd,
  type DatePickerProps,
  type GetRef,
} from 'antd';
import React from 'react';

type DatePickerRefType = GetRef<typeof DatePickerAntd>;

const DatePicker = React.forwardRef<DatePickerRefType, DatePickerProps>(
  (props: DatePickerProps, ref) => {
    return <DatePickerAntd ref={ref} {...props} />;
  }
);

DatePicker.displayName = 'DatePicker';

export { DatePicker };
