import React from 'react'
import Navigation from '../../components/generallComponent/Navigation'
import Footer from '../../components/generallComponent/Footer'
import Celebration from '../../components/pages Component/Admission/Calender/Celebration'
import Activites from '../../components/pages Component/Admission/Calender/Activites'

export default function Calender() {
  return (
    <div>
        <Navigation/>
        <div className='mt-16 md:mt-24'>
            <Activites/>
            <Celebration/>
        </div>
        <Footer/>
  </div>
  )
}
