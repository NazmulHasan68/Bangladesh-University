import React from 'react'
import ClubHeroSection from '../components/pages Component/ClubComponent/ClubHeroSection'
import ClubMainPart from '../components/pages Component/ClubComponent/ClubMainPart'
import Navigation from '../components/generallComponent/Navigation'
import Footer from '../components/generallComponent/Footer'

export default function Club() {
  return (
      <div>
          <Navigation/>
          <div className='mt-10 md:mt-20'>
            <ClubHeroSection/>
            <ClubMainPart/>
          </div>
          <Footer/>
        </div>
  )
}
