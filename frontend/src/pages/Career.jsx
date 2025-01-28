import React from 'react'
import CareerHeroSection from '../components/pages Component/Career.component/CareerHeroSection'
import CareerContent from '../components/pages Component/Career.component/CareerContent'
import SearchJob from '../components/pages Component/Career.component/SearchJob'
import SkillgrowSeminar from '../components/pages Component/Career.component/SkillgrowSeminar'
import Industrivite from '../components/pages Component/Career.component/Industrivite'
import Navigation from '../components/generallComponent/Navigation'
import Footer from '../components/generallComponent/Footer'

export default function Career() {
  return (
      <div>
          <Navigation/>
          <main className='mt-10 md:mt-20'>
            <CareerHeroSection/>
            <CareerContent/>
            <SearchJob/>
            <SkillgrowSeminar/>
            <Industrivite/>
          </main>
          <Footer/>
        </div>
  )
}
