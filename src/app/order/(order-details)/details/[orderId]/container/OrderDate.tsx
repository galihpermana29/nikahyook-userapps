'use client';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
import useMounted from '@/shared/usecase/useMounted';
import { Skeleton } from 'antd';

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

export const OrderDate = ({ order_time }: { order_time: string }) => {
  const mounted = useMounted();
  if (!mounted)
    return (
      <Skeleton active className="h-[24px] w-36 bg-ny-primary-100 rounded-lg" />
    );

  return (
    <span>
      {dayjs
        .utc(order_time, 'DD-MM-YYYY HH:mm:ss')
        .local()
        .format('DD MMM YYYY[,] HH:mm')}
    </span>
  );
};
