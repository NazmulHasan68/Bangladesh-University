import React from 'react'
import AlumniSlider from '../components/pages Component/Alumni.component/AlumniSlider'
import AlumniContent from '../components/pages Component/Alumni.component/AlumniContent'
import AlumniGalary from '../components/pages Component/Alumni.component/AlumniGalary'
import AlumniEvent from '../components/pages Component/Alumni.component/AlumniEvent'
import AlumniEventContent from '../components/pages Component/Alumni.component/AlumniEventContent'
import AlumniImage from '../components/pages Component/Alumni.component/AlumniImage'
import Navigation from '../components/generallComponent/Navigation'
import Footer from '../components/generallComponent/Footer'

export default function Alumni() {
  return (
      <div>
          <Navigation/>
          <div className='mt-16 md:mt-24'>
            <AlumniSlider/>
            <AlumniContent/>
            <AlumniGalary/>
            <AlumniEvent/>
            <AlumniEventContent/>
            <AlumniImage/>
          </div>
          <Footer/>
        </div>
  )
}
