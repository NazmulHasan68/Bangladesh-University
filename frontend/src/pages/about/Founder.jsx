import React from 'react'
import SpeachFounder from '../../components/pages Component/Home.component/SpeachFounder'
import FounderHeroSection from '../../components/pages Component/About.compoent/FounderHeroSection'
import FounderLifeStyle from '../../components/pages Component/About.compoent/FounderLifeStyle'
import Navigation from '../../components/generallComponent/Navigation'
import Footer from '../../components/generallComponent/Footer'

export default function Founder() {
  return (
      <div>
          <Navigation/>
          <div className='mt-10 md:mt-20'>
              <FounderHeroSection/>
              <SpeachFounder/>
              <FounderLifeStyle/>
          </div>
          <Footer/>
        </div>
  )
}
