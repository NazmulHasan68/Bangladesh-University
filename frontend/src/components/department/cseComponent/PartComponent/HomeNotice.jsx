import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

export default function HomeNotice() {
  const data = [
    { name: "Spring Final Examination - 2024", label: "#" },
    { name: "Summer Semester Registration - 2024", label: "#" },
    { name: "Orientation Program for New Students", label: "#" },
    { name: "Research Symposium - 2024", label: "#" },
    { name: "Alumni Meet - 2024", label: "#" }
  ];

  return (
    <div className='max-w-7xl mx-auto flex gap-4 flex-col md:flex-row items-center my-5 md:mt-20 mt-10'>
      <div className='flex-1'>
        <img 
          src='https://images.unsplash.com/photo-1571260899304-425eee4c7efc' 
          alt='University Event' 
          className='w-full h-full object-cover rounded-lg' 
        />
      </div>
      <div className='flex-1 mx-2'>
        {data.map((card, index) => (
          <div key={index} className='flex cursor-pointer justify-between p-2 rounded-2xl text-red-400 shadow-lg text-lg my-4 px-4 bg-slate-100 items-center'>
            <h3>{card.name}</h3>
            <IoIosArrowForward />
          </div>
        ))}
      </div>
    </div>
  );
}
