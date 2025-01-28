import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export default function SearchJob() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='max-w-7xl md:mx-auto mx-4 my-4'>
      <h1 className='text-xl font-bold text-sky-800 py-3'>Search job here</h1>
      <Slider {...settings}>
        <div className='p-2'>
          <Link to={'/'} className='md:px-10 px-4 p-2 md:p-4 rounded-xl bg-sky-500 text-red-200 block'>
            BDjobs
          </Link>
        </div>
        <div className='p-2'>
          <Link to={'/'} className='md:px-10 px-4 p-2 md:p-4 rounded-xl bg-sky-500 text-red-200 block'>
            Cakri.com
          </Link>
        </div>
        <div className='p-2'>
          <Link to={'/'} className='md:px-10 px-4 p-2 md:p-4 rounded-xl bg-sky-500 text-red-200 block'>
            Fiver
          </Link>
        </div>
        <div className='p-2'>
          <Link to={'/'} className='md:px-10 px-4 p-2 md:p-4 rounded-xl bg-sky-500 text-red-200 block'>
            Frilancer
          </Link>
        </div>
        <div className='p-2'>
          <Link to={'/'} className='md:px-10 px-4 p-2 md:p-4 rounded-xl bg-sky-500 text-red-200 block'>
            Bank
          </Link>
        </div>
        <div className='p-2'>
          <Link to={'/'} className='md:px-10 px-4 p-2 md:p-4 rounded-xl bg-sky-500 text-red-200 block'>
            jobFinder
          </Link>
        </div>
      </Slider>
    </div>
  );
}
