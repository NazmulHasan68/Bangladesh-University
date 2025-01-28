import React from 'react'
import StudentHeroSection from '../components/pages Component/Student.componet/StudentHeroSection'
import StudentClub from '../components/pages Component/Student.componet/StudentClub'
import OnlinePortalLink from '../components/generallComponent/OnlinePortalLink'
import StudentCitivity from '../components/pages Component/Student.componet/StudentCitivity'
import StudentContent from '../components/pages Component/Student.componet/StudentContent'
import Navigation from '../components/generallComponent/Navigation'
import Footer from '../components/generallComponent/Footer'

function Student() {
  return (
    <div>
      <Navigation/>
      <div className='mt-16 md:mt-24'>
        <StudentHeroSection/>
        <OnlinePortalLink/>
        <StudentClub/>
        <StudentContent/>
        <StudentCitivity/>
      </div>
      <Footer/>
    </div>
  )
}

export default Student
