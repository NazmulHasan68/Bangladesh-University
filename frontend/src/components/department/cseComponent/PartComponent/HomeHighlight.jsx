import React from 'react';

export default function HomeHighlight() {
  const highlights = [
    {
      title: 'New Library Opening',
      description: 'Our new state-of-the-art library opens this fall.',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f'
    },
    {
      title: 'Sports Day 2024',
      description: 'Join us for a day of fun and sportsmanship!',
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7'
    },
    {
      title: 'Tech Conference',
      description: 'The annual tech conference is back this winter.',
      image: 'https://images.unsplash.com/photo-1587614382346-e3770fca27fa'
    }
  ];

  return (
    <div className='max-w-7xl mx-auto my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:my-10'>
      {highlights.map((highlight, index) => (
        <div key={index} className='relative rounded-lg shadow-lg overflow-hidden'>
          <img
            src={highlight.image}
            alt={highlight.title}
            className='w-full h-48 object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h3 className='text-lg font-semibold'>{highlight.title}</h3>
            <p className='text-lg'>{highlight.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
