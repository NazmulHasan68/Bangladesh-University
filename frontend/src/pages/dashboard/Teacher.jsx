import React from 'react'
import { Outlet } from 'react-router-dom'
import TeacherDashSidebar from '../../components/DashBoard/TeacherDashSidebar'

export default function Teacher() {
  return (
    <div className='max-w-7xl md:mx-auto mx-4 flex flex-col md:flex-row gap-2 '>
        <div className=' basis-1/4'>
            <TeacherDashSidebar/>
        </div>
        <div className='basis-3/4'>
            <Outlet/>
        </div>
    </div>
  )
}
