import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ContactHeroSection() {
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
    <div className='max-w-7xl md:mx-auto mx-1 my-2 h-[180px] md:h-[250px] mt-16 md:mt-24'>
      <Slider {...settings} className='rounded-xl overflow-hidden'>
        <div>
          <img
            src='https://www.w3schools.com/w3images/lights.jpg'
            alt='Slide 1'
            className='w-full h-[180px] md:h-[250px] rounded-md object-cover'
          />
        </div>
        <div>
          <img
            src='https://www.w3schools.com/w3images/forest.jpg'
            alt='Slide 2'
            className='w-full h-[180px] md:h-[250px] rounded-md object-cover'
          />
        </div>
        <div>
          <img
            src='https://www.w3schools.com/w3images/mountains.jpg'
            alt='Slide 3'
            className='w-full h-[180px] md:h-[250px] rounded-md object-cover'
          />
        </div>
      </Slider>
    </div>
  );
}
