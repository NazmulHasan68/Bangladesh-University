import React from 'react'
import ClubSidebar from './ClubSidebar'
import { Outlet } from 'react-router-dom'

export default function ClubMainPart() {
  return (
    <div className='max-w-7xl md:mx-auto mx-4 '>
      <div className='flex gap-4'>
        <div className=' basis-1/5'>
            <ClubSidebar/>
        </div>
        <div className=' basis-4/5'>
            <Outlet/>
        </div>
      </div>
    </div>
  )
}
