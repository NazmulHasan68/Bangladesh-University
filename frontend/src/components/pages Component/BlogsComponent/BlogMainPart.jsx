import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function BlogMainPart() {
  return (
    <div className='flex gap-2 md:gap-10 max-w-7xl md:mx-auto mx-2 p-1 rounded-2xl bg-slate-100 my-4'>
      <div className='basis-1/5 md:basis-1/4 flex flex-col gap-1 h-full bg-slate-200'>
        <h1 className='text-xs md:text-xl font-bold py-2 px-2 w-full bg-red-400 text-white'>Department</h1>
        <div className='px-1 md:px-4 flex flex-col md:gap-1  text-slate-600 py-2 md:py-4'>
            <Link to={'dept'}>CSE</Link>
            <Link to={'dept'}>EEE</Link>
            <Link to={'dept'}>Arch</Link>
            <Link to={'dept'}>Math</Link>
            <Link to={'dept'}>Pharmacy</Link>
            <Link to={'dept'}>Law</Link>
            <Link to={'dept'}>BBA</Link>
            <Link to={'dept'}>Sociology</Link>
            <Link to={'dept'}>English</Link>
            <Link to={'dept'}>Economic</Link>
            <Link to={'dept'}>Economic</Link>
            </div>

        <h1 className='text-xs md:text-xl font-bold py-2 px-2 w-full bg-red-400 text-white md:mt-32'>Category</h1>
        <div className='px-1 md:px-4 flex flex-col md:gap-1 text-slate-600 py-2 md:py-4'>
            <Link to={'dept'}>Science</Link>
            <Link to={'dept'}>Store</Link>
            <Link to={'dept'}>Capmus life</Link>
            <Link to={'dept'}>Sports</Link>
            <Link to={'dept'}>Artical</Link>
        </div>
      </div>
      <div className='basis-4/5 md:basis-3/4'>
        <Outlet/>
      </div>
    </div>
  )
}
