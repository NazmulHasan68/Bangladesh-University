import React from 'react';

export default function Industrivite() {
  return (
    <div className='max-w-7xl md:mx-auto mx-4 my-4'>
      <h1 className='text-center text-xl font-bold text-sky-700'>Industry Visit</h1>
      <div className='flex flex-col md:flex-row gap-4 justify-between items-center h-auto'>
        <div className=' basis-1/3 p-5 '>
          <img 
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' 
            alt='Industry Visit'
            className='w-full h-auto rounded-xl'
          />
        </div>
        <div className=' basis-2/3'>
          <p className='text-xs md:text-xl text-sky-800'>
            The Industry Visit offers students a unique opportunity to explore real-world 
            applications of their academic knowledge. Participants will visit leading 
            companies and organizations, gaining firsthand insights into industry practices,
            trends, and innovations, while connecting with professionals for networking and
            career opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
