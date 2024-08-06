'use client';

import { ITodo } from '@/shared/models/todoInterfaces';
import { SwiperContainer } from '@/shared/container/Swiper/SwiperContainer';
import { SwiperSlide } from 'swiper/react';
import { useFormatTime } from '../../usecase/useFormatTime';

const HeaderTodo = ({ todos }: { todos: ITodo[] }) => {
  return (
    <div className="relative">
      <SwiperContainer>
        {todos.map((item, index) => (
          <SwiperSlide key={index} className="w-[40%] sm:w-[30%]">
            <div className="bg-white space-y-2 w-full py-2 px-3 rounded-lg shadow h-full">
              <h2 className="text-caption-1 font-medium line-clamp-1">
                {item.name}
              </h2>
              <p className="text-caption-2 text-ny-gray-400 line-clamp-1">
                {item.date} - {useFormatTime(item.time)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </div>
  );
};

export default HeaderTodo;
