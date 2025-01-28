import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomeSlider() {
    const slides = [
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNsaWRlcnxlbnwwfHx8fDE2MjkxMjQ4NTI&ixlib=rb-1.2.1&q=80&w=800',
        'https://images.unsplash.com/photo-1587614382346-e3770fca27fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fHNsaWRlcnxlbnwwfHx8fDE2MjkxMjQ4NTI&ixlib=rb-1.2.1&q=80&w=800',
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNsaWRlcnxlbnwwfHx8fDE2MjkxMjQ4NTI&ixlib=rb-1.2.1&q=80&w=800',
        'https://images.unsplash.com/photo-1547721064-da6cfb341d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHNsaWRlcnxlbnwwfHx8fDE2MjkxMjQ4NTI&ixlib=rb-1.2.1&q=80&w=800',
        // Add more Unsplash image URLs as needed
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
      };
    
  return (
    <div>
      <div className='max-w-7xl mx-auto relative -z-10'>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                <div key={index} className='h-[2200px] md:h-[300px] relative'>
                    <img src={slide} alt={`Slide ${index + 1}`} className="w-full object-cover h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
                </div>
                ))}
            </Slider>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
                <p className='text-xl text-left text-red-600'>Join with us</p>
                <h1 className='text-2xl md:text-3xl font-bold mb-3'>Where the Champions are Made</h1>
                <button className='px-6 py-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition'>Apply Now</button>
            </div>
        </div>
    </div>
  )
}
