import React from 'react'
import { Link } from 'react-router-dom'

export default function OnlinePortalLink() {
  return (
    <div className='max-w-5xl md:mx-auto mx-4 my-4 bg-slate-200 rounded-xl md:py-14 py-10 flex justify-center items-center'>
      <div className='flex gap-4 items-center'>
        <h1 className='text-xl font-semibold text-slate-700'>Please check your </h1>
        <Link to={'/portal'} className='px-6 py-2 rounded-full bg-red-400 hover:bg-red-600 text-white'>Online Portal</Link>
      </div>
    </div>
  )
}
