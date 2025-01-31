import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ResearchAchievement() {
  const achievements = [
    { title: 'Innovative AI Research', date: '12 Jan 2025', link: 'ai-research', img: 'https://picsum.photos/400/300?random=9' },
    { title: 'Quantum Computing Breakthrough', date: '22 Feb 2025', link: 'quantum-computing', img: 'https://picsum.photos/400/300?random=10' },
    { title: 'Medical Research on Nanotech', date: '5 Mar 2025', link: 'medical-nanotech', img: 'https://picsum.photos/400/300?random=11' },
    { title: 'Sustainable Energy Solutions', date: '18 Apr 2025', link: 'sustainable-energy', img: 'https://picsum.photos/400/300?random=12' },
    { title: 'Space Exploration Initiatives', date: '30 May 2025', link: 'space-exploration', img: 'https://picsum.photos/400/300?random=13' },
    { title: 'Cybersecurity Advances', date: '15 Jun 2025', link: 'cybersecurity-advances', img: 'https://picsum.photos/400/300?random=14' },
    { title: 'Biotechnology Advancements', date: '22 Jul 2025', link: 'biotech-advancements', img: 'https://picsum.photos/400/300?random=15' },
    { title: 'Robotics Revolution', date: '10 Aug 2025', link: 'robotics-revolution', img: 'https://picsum.photos/400/300?random=16' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-slate-50 my-5 rounded-2xl">
      <h1 className='md:text-2xl text-lg font-bold text-sky-900 text-center'>Research Achievements</h1>
      <Slider {...settings}>
        {achievements.map((item, index) => (
          <div key={index} className="p-2">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <img src={item.img} alt={item.title} className="w-full h-32 object-cover" />
              <div className="p-2">
                <h2 className="md:text-2xl text-lg font-bold md:mb-1 line-clamp-1">{item.title}</h2>
                <p className="text-gray-600">{item.date}</p>
                <a href={`/${item.link}`} className="text-blue-500 hover:underline md:mt-1 block">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
