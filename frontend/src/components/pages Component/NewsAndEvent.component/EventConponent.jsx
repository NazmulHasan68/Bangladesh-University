import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function EventComponent() {
  const events = [
    { name: 'Winter Fest', date: '25 Jan 2025', link: 'winter-fest', img: 'https://picsum.photos/400/300?random=1' },
    { name: 'Spring Carnival', date: '15 Mar 2025', link: 'spring-carnival', img: 'https://picsum.photos/400/300?random=2' },
    { name: 'Summer Bash', date: '20 Jun 2025', link: 'summer-bash', img: 'https://picsum.photos/400/300?random=3' },
    { name: 'Autumn Fiesta', date: '10 Sep 2025', link: 'autumn-fiesta', img: 'https://picsum.photos/400/300?random=4' },
    { name: 'Halloween Night', date: '31 Oct 2025', link: 'halloween-night', img: 'https://picsum.photos/400/300?random=5' },
    { name: 'Thanksgiving Parade', date: '28 Nov 2025', link: 'thanksgiving-parade', img: 'https://picsum.photos/400/300?random=6' },
    { name: 'Christmas Gala', date: '25 Dec 2025', link: 'christmas-gala', img: 'https://picsum.photos/400/300?random=7' },
    { name: 'New Year Eve', date: '31 Dec 2025', link: 'new-year-eve', img: 'https://picsum.photos/400/300?random=8' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-slate-100 my-5 rounded-2xl">
        <h1 className='text-3xl font-bold text-sky-900 text-center'>Events</h1>
      <Slider {...settings}>
        {events.map((item, index) => (
          <div key={index} className="p-4">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
              <div className="p-2">
                <h2 className="text-2xl font-bold mb-1">{item.name}</h2>
                <p className="text-gray-600">{item.date}</p>
                <a href={`/${item.link}`} className="text-blue-500 hover:underline mt-1 block">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
