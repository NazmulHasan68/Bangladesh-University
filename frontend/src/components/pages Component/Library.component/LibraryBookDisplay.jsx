import React from 'react';
import logo from '../../../assets/commonPhoto/home4.jpg'

export default function LibraryBookDisplay() {
  return (
    <div className='max-w-7xl mx-4 md:mx-auto my-4 p-2 bg-slate-100 rounded-2xl '>
      <div className='text-center py-3'>
        <h1 className='text-xl font-semibold text-red-400'>Book collection</h1>
      </div>
      <div className='flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-80 overflow-y-auto'>
        {
          // Mapping over an array of 12 items
          Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="bg-white p-1 rounded-xl shadow-md h-60">
                <img src={logo} alt='book' className='w-full h-[80%] object-cover'/>
                <div className=' text-sky-800 px-2 py-2'>
                    <h1 className='text-sm font-bold line-clamp-1'>Book of world</h1>
                    <p className='text-xs line-clamp-1'>by Nazmul hasan</p>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
