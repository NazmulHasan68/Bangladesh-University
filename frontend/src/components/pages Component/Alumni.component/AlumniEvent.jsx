import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imageUrls = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
];

export default function AlumniEvent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '40px',
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: '30px' } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: '20px' } }
    ]
  };

  return (
    <div className='max-w-5xl mx-4 md:mx-auto h-[150px] md:h-[180px] my-10 rounded-3xl'>
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index} className="px-2">
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="w-full h-[150px] md:h-[180px] object-cover rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
