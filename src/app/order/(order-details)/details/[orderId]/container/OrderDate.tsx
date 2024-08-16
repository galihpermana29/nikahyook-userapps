'use client';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

export const OrderDate = ({ order_time }: { order_time: string }) => {
  return (
    <span>
      {dayjs
        .utc(order_time, 'DD-MM-YYYY HH:mm:ss')
        .local()
        .format('DD MMM YYYY[,] HH:mm')}
    </span>
  );
};
