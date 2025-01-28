import React from 'react'
import CseHeader from '../../components/department/cseComponent/CseHeader'
import CseHome from '../../components/department/cseComponent/CseHome'
import CseFooter from '../../components/department/cseComponent/CseFooter'
import { Outlet } from 'react-router-dom'


export default function Cse() {
    
  return (
    <main>
        <CseHeader/>
        <div className='mt-10 md:mt-20'>
            <Outlet/>
        </div>
        <CseFooter/>
    </main>
  )
}
