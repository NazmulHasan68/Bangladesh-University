import React from 'react';

export default function StudentCitivity() {
  const citivity = [
    { image: "https://swiperjs.com/demos/images/nature-1.jpg", name: "Photography", link: '/photography' },
    { image: "https://swiperjs.com/demos/images/nature-2.jpg", name: "Videography", link: '/videography' },
    { image: "https://swiperjs.com/demos/images/nature-3.jpg", name: "Robotics", link: '/robots' },
    { image: "https://swiperjs.com/demos/images/nature-4.jpg", name: "Content Writing", link: '/content-writing' },
    { image: "https://swiperjs.com/demos/images/nature-5.jpg", name: "Industrial Tour", link: '/industrial-tour' },
    { image: "https://swiperjs.com/demos/images/nature-6.jpg", name: "Annual Tour", link: '/annual-tour' },
    { image: "https://swiperjs.com/demos/images/nature-7.jpg", name: "Career Seminar", link: '/career-seminar' },
    { image: "https://swiperjs.com/demos/images/nature-8.jpg", name: "Contest Seminar", link: '/contest-seminar' },
    { image: "https://swiperjs.com/demos/images/nature-3.jpg", name: "Skills", link: '/skills' },
  ];

  return (
    <div className='max-w-6xl md:mx-auto mx-4 py-10'> 
      <div>
        <h1 className='md:text-xl text-lg font-bold py-6 text-red-400 '>Explore your creativity</h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
        {citivity.map((item, index) => (
          <div key={index} className='flex gap-4 items-center bg-slate-100 rounded-3xl shadow-md'>
            <div className='md:w-20 w-16'>
              <img src={item.image} alt={item.name} className='md:w-20 w-16 object-cover rounded-xl' />
            </div>
            <div className='flex flex-col'>
              <a href={item.link} className='md:text-xl pr-2 text-xs font-semibold text-slate-800 hover:text-blue-500'>{item.name}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
