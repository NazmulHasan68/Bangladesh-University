import React from 'react';

export default function ThesisComponent() {
  return (
    <div className='max-w-6xl md:mx-auto mx-4 my-4 p-6 bg-slate-100 rounded-xl '>
      <h1 className='md:text-3xl text-md font-bold text-sky-900 py-4'>Thesis / Dissertation</h1>
      <div className='flex gap-2 md:gap-6 items-center'>
        <img 
          src='https://picsum.photos/200/200?grayscale' 
          alt='Thesis Research' 
          className='md:w-48 w-24 h-24 md:h-48 object-cover rounded-3xl shadow-md'
        />
        <div>
          <p className='text-xs md:text-lg text-sky-800 leading-relaxed'>
            The research environment is further enhanced through close industry-academic 
            collaborations. A notable example is the MoU signed between the Computer Science 
            and Engineering Department and Grameen Phone, promoting such partnerships for 
            mutual growth and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}
