import React from 'react'
import { LuSchool } from "react-icons/lu";
import { FaHubspot } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineSportsCricket } from "react-icons/md";

export default function HomeSecondPart() {
    const card = [
        {name : "University Life", icon:<LuSchool/>, title:"Explore Your Campus Adventure"},
        {name : "Research", icon:<FaHubspot/>, title:"Unite, Engage, Thrive"},
        {name : "Graduation", icon:<FaGraduationCap/>, title:"Your Academic Milestone"},
        {name : "Our Sports", icon:<MdOutlineSportsCricket/>, title:"Where Champions Are Forged"},
    ]
  return (
    <div className='max-w-5xl mx-auto p-4 bg-slate-50 flex justify-between items-center z-10 -mt-20'>
        {card.map((card, index)=>(
            <div key={index} className='flex flex-col gap-1 items-center justify-center'>
                <p className='text-3xl md:text-6xl text-slate-600'>{card.icon}</p>
                <h1 className='text-md md:text-2xl font-bold text-gray-800'>{card.name}</h1>
                <p className='text-xs md:text-md text-gray-600 line-clamp-1'>{card.title}</p>
            </div>
        ))}
    </div>
  )
}
