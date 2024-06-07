'use client';

import React from 'react';
import { Select as SelectAntd, type GetRef, type SelectProps } from 'antd';

type SelectRefType = GetRef<typeof SelectAntd>;

const Select = React.forwardRef<SelectRefType, SelectProps>(
  (props: SelectProps, ref) => {
    return <SelectAntd ref={ref} {...props} />;
  }
);

Select.displayName = 'Select';

export { Select };
