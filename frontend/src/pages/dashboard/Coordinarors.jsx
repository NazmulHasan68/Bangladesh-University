import React from 'react'
import DashboardSidebar from '../../components/DashBoard/DashboardSidebar'
import { Outlet } from 'react-router-dom'

export default function Coordinarors() {
  return (
    <div className='max-w-7xl md:mx-auto mx-4 flex flex-col md:flex-row gap-2 h-screen'>
        <div className=' basis-1/4'>
            <DashboardSidebar/>
        </div>
        <div className='basis-3/4'>
            <Outlet/>
        </div>
    </div>
  )
}
