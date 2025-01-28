import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';

export default function TransportSlider() {
  return (
    <div className='max-w-7xl mx-4 mt-40 md:mx-auto h-[200px] md:h-[300px]  rounded-3xl'>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper rounded-3xl"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" className="w-[330px] opacity-100  h-full object-cover rounded-3xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" className="w-full h-full object-cover rounded-3xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" className="w-full h-full object-cover rounded-3xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" className="w-full h-full object-cover rounded-3xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
