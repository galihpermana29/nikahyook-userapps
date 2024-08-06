import ColorfulBackgroundCard from '@/shared/container/ColorfulBackgroundCard/ColorfulBackgroundCard';
import type { IOrder } from '@/shared/models/orderInterfaces';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);

export default function OrderDetailHeader({ order }: { order: IOrder }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="text-body-2">Order Details</h1>
      <ColorfulBackgroundCard className="p-3 rounded-lg">
        <div className="flex items-center gap-6 sm:gap-20 justify-center text-center">
          <div className="flex flex-col gap-[2px] items-center">
            <span className="text-caption-2 text-ny-gray-400">Order Id</span>
            <span className="text-body-1 font-medium">#{order.id}</span>
          </div>

          <div className="flex flex-col gap-[2px] items-center">
            <span className="text-caption-2 text-ny-gray-400">Date</span>
            <div className="flex gap-2 items-center justify-center text-body-1 font-medium flex-wrap">
              <span>
                {dayjs(order.order_time, 'DD-MM-YYYY HH:mm:ss').format('LLL')}
              </span>
            </div>
          </div>
        </div>
      </ColorfulBackgroundCard>
    </div>
  );
}
