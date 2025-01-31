import React from 'react';
import Slider from 'react-slick';

export default function SkillgrowSeminar() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For small screens (like tablets and mobiles)
        settings: {
          slidesToShow: 2, // Show 2 images on small screens
        },
      },
      {
        breakpoint: 480, // For very small screens (like small mobiles)
        settings: {
          slidesToShow: 1, // Show 1 image on very small screens
        },
      },
    ],
  };

  return (
    <div className='max-w-7xl md:mx-auto mx-4 my-4 mt-10'>
      <h1 className='text-center text-lg md:text-xl text-sky-800 font-semibold '>Skill Growth Seminar</h1>
      <div className=''>
        <Slider {...settings}>
          <div className='p-2'>
            <img src='https://picsum.photos/800/400?random=1' alt='Seminar 1' className='w-full h-[100px] md:h-[200px] rounded-2xl' />
          </div>
          <div className='p-2'>
            <img src='https://picsum.photos/800/400?random=2' alt='Seminar 2' className='w-full h-[100px] md:h-[200px] rounded-2xl' />
          </div>
          <div className='p-2'>
            <img src='https://picsum.photos/800/400?random=3' alt='Seminar 3' className='w-full h-[100px] md:h-[200px] rounded-2xl' />
          </div>
          <div className='p-2'>
            <img src='https://picsum.photos/800/400?random=4' alt='Seminar 4' className='w-full h-[100px] md:h-[200px] rounded-2xl' />
          </div>
          <div className='p-2'>
            <img src='https://picsum.photos/800/400?random=5' alt='Seminar 5' className='w-full h-[100px] md:h-[200px] rounded-2xl' />
          </div>
          <div className='p-2'>
            <img src='https://picsum.photos/800/400?random=6' alt='Seminar 6' className='w-full h-[100px] md:h-[200px] rounded-2xl' />
          </div>
        </Slider>
      </div>
      <div>
        <p className='text-xs md:text-xl text-sky-900 my-4 p-4'>The Skill Growth Seminar is an interactive event focused on enhancing personal and professional 
            skills. It covers topics like career development, leadership, and communication, offering participants valuable insights and opportunities for growth</p>
      </div>
    </div>
  );
}
