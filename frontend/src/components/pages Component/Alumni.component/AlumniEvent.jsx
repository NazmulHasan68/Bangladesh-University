import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// Import required modules
import { Pagination } from 'swiper/modules';

const imageUrls = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
];

export default function AlumniEvent() {
  return (
    <div className='max-w-4xl mx-4 md:mx-auto h-[140px] md:h-[180px] rounded-3xl object-cover'>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-3xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


