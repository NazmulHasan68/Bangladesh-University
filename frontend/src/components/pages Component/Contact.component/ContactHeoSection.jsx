import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ContactHeoSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='max-w-7xl md:mx-auto mx-1 my-2 h-[200px] md:h-[250px] mt-16 md:mt-24'>
      <Slider {...settings} className=' rounded-3xl overflow-hidden'>
        <div>
          <img
            src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg1OXwwfDF8c2VhcmNofHx8fHx8fHwxNjEyNjk5NTU3&ixlib=rb-1.2.1&q=80&w=1080'
            alt='Slide 1'
            className='w-full h-[200px] md:h-[250px] rounded-md object-cover '
          />
        </div>
        <div>
          <img
            src='https://images.unsplash.com/photo-1517356403495-0f4f463bcd6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg1OXwwfDF8c2VhcmNofHx8fHx8fHwxNjEyNjk5NjU0&ixlib=rb-1.2.1&q=80&w=1080'
            alt='Slide 2'
            className='w-full h-[200px] md:h-[250px] rounded-md object-cover '
          />
        </div>
        <div>
          <img
            src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg1OXwwfDF8c2VhcmNofHx8fHx8fHwxNjEyNjk5NjU0&ixlib=rb-1.2.1&q=80&w=1080'
            alt='Slide 3'
            className='w-full h-[200px] md:h-[250px] rounded-md object-cover '
          />
        </div>
      </Slider>
    </div>
  );
}
