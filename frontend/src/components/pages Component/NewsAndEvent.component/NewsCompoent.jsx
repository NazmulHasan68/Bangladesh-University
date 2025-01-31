import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function NewsComponent() {
  const news = [
    { 
      title: 'Breaking News: Major Event in City', 
      date: '10 Jan 2025', 
      link: 'major-event-city', 
      img: 'https://picsum.photos/400/300?random=9', 
      description: 'A major event has taken place in the city, attracting attention from all around the world.'
    },
    { 
      title: 'New Tech Innovation Announced', 
      date: '12 Jan 2025', 
      link: 'tech-innovation', 
      img: 'https://picsum.photos/400/300?random=10', 
      description: 'A new technological innovation has been announced, promising to change the industry landscape.'
    },
    { 
      title: 'Local Community Hero Saves the Day', 
      date: '15 Jan 2025', 
      link: 'community-hero', 
      img: 'https://picsum.photos/400/300?random=11', 
      description: 'A local hero has stepped up to help their community in a time of need, receiving widespread praise.'
    },
    { 
      title: 'Global Economic Update', 
      date: '18 Jan 2025', 
      link: 'economic-update', 
      img: 'https://picsum.photos/400/300?random=12', 
      description: 'An update on the global economy, with insights from leading economists and industry experts.'
    },
    { 
      title: 'Sports Team Wins Championship', 
      date: '20 Jan 2025', 
      link: 'sports-championship', 
      img: 'https://picsum.photos/400/300?random=13', 
      description: 'The local sports team has won the national championship, bringing pride to the city.'
    },
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
      <h1 className="md:text-3xl text-xl font-bold text-sky-900 text-center">Latest News</h1>
      <Slider {...settings}>
        {news.map((item, index) => (
          <div key={index} className="p-4">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <img src={item.img} alt={item.title} className="w-full h-32 object-cover" />
              <div className="p-3">
                <h2 className="md:text-2xl text-xl font-bold mb-1 line-clamp-1">{item.title}</h2>
                <p className="text-gray-600 mb-2">{item.date}</p>
                <p className="text-gray-700 mb-2">{item.description}</p>
                <a href={`/${item.link}`} className="text-blue-500 hover:underline mt-1 block">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
