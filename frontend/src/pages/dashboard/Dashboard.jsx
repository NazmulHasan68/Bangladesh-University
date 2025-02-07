import React from 'react'
import Navigation from '../../components/generallComponent/Navigation'
import Footer from '../../components/generallComponent/Footer'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='mt-16 md:mt-24 '>
        <Navigation/>  
        <Outlet/>     
        <Footer/>
    </div>
  )
}
