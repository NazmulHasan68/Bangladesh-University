import React from 'react'
import Navigation from '../../components/generallComponent/Navigation'
import Footer from '../../components/generallComponent/Footer'
import Waiver from '../../components/pages Component/Admission/Course/Waiver'

export default function Courses() {
  return (
    <div>
        <Navigation/>
        <div className='mt-16 md:mt-24'>
          <Waiver/>
        </div>
        <Footer/>
  </div>
  )
}
