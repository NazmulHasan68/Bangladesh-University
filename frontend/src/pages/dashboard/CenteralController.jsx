import React from 'react'
import { Outlet } from 'react-router-dom'
import CentralDashSidebar from '../../components/DashBoard/CentralDashSidebar'

export default function CenteralController() {
  return (
    <div className='max-w-7xl md:mx-auto mx-4 flex flex-col md:flex-row gap-2 '>
        <div className=' basis-1/4'>
            <CentralDashSidebar/>
        </div>
        <div className='basis-3/4'>
            <Outlet/>
        </div>
    </div>
  )
}
