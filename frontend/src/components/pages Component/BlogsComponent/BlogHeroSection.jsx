import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

export default function BlogHeroSection() {
  return (
    <div className="relative max-w-7xl mx-auto mt-16 md:mt-24 md:h-60 h-48 bg-slate-700/70 flex flex-col justify-center items-center md:rounded-3xl">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent z-0"></div> */}
      <div className="absolute inset-0 bg-[url('https://www.state.gov/wp-content/uploads/2019/04/shutterstock_83045623-e1555360482941.jpg')] md:rounded-2xl bg-cover bg-center bg-no-repeat z-[-1]">
      </div>
      <div className="relative z-10">
        <div className='text-left ml-16'>
          <h1 className="text-xs md:text-md font-medium text-yellow-300 rotate-15">Express</h1>
          <h1 className="md:text-4xl text-xl font-bold text-red-400">Your critivity by wriiting</h1>
          <h1 className="md:text-right ml-40 italic text-sm md:text-xl text-white">Blogs</h1>
        </div>
        <div className="flex items-center bg-slate-50 rounded-full h-10 relative mx-1">
          <IoSearchOutline className="absolute top-3 left-3 text-xl text-slate-500" />
          <input
            type="text"
            placeholder="search here"
            className="outline-none focus:outline-none border-none flex-1 pl-10 bg-transparent text-slate-600"
          />
          <div className="px-4 border-l border-gray-500 text-slate-500 cursor-pointer">Search</div>
        </div>
      </div>
    </div>
  );
}

