import React from 'react'

export default function LibraryCollections() {
  return (
    <div className='max-w-7xl md:mx-auto mx-4 p-2 my-10 '>
      <div>
        <h1 className='text-center font-semibold text-xl text-sky-800'>Bangladesh University Library Collections</h1>
      </div>
      <div className='flex gap-1 items-center justify-between md:mx-20 my-10'>
        <div className='text-center'>
            <h1 className='font-bold text-sm md:text-xl'>1000+</h1>
            <p className='text-sm md:text-xl text-sky-500'>Printed Books</p>
            <div className='w-24 h-1 bg-red-500 rounded-full'></div>
        </div>
        <div className='text-center'>
            <h1 className='font-bold text-sm md:text-xl'>1000+</h1>
            <p className='text-sm md:text-xl text-sky-500 '>Printed Books</p>
            <div className='w-24 h-1 bg-red-500 rounded-full'></div>
        </div>
        <div className='text-center'>
            <h1 className='font-bold text-sm md:text-xl'>1000+</h1>
            <p className='text-sm md:text-xl text-sky-500 '>Printed Books</p>
            <div className='w-24 h-1 bg-red-500 rounded-full'></div>
        </div>
        <div className='text-center hidden md:flex flex-col'>
            <h1 className='font-bold text-sm md:text-xl'>1000+</h1>
            <p className='text-sm md:text-xl text-sky-500 '>Printed Books</p>
            <div className='w-24 h-1 bg-red-500 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}
