import React from 'react'
import LeaderHeroSection from '../../components/pages Component/About.compoent/LeaderHeroSection'
import LeaderDescription from '../../components/pages Component/About.compoent/LeaderDescription'
import Navigation from '../../components/generallComponent/Navigation'
import Footer from '../../components/generallComponent/Footer'

export default function Leader() {
  return (
      <div>
          <Navigation/>
          <div className='mt-10 md:mt-20'>
            <LeaderHeroSection/>
            <LeaderDescription/>
          </div>
          <Footer/>
        </div>
  )
}
