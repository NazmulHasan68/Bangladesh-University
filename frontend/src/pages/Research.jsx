import React from 'react'
import ResearchHeroSection from '../components/pages Component/Research.component/ResearchHeroSection'
import ReseachContent from '../components/pages Component/Research.component/ReseachContent'
import ThesisComponent from '../components/pages Component/Research.component/ThesisComponent'
import ResearchTeaching from '../components/pages Component/Research.component/ReseachTeaching'
import ResearchAchievement from '../components/pages Component/Research.component/ResearchAchivement'
import Navigation from '../components/generallComponent/Navigation'
import Footer from '../components/generallComponent/Footer'

export default function Research() {
  return (
      <div>
          <Navigation/>
          <div className='mt-10 md:mt-20'>
              <ResearchHeroSection/>
              <ReseachContent/>
              <ThesisComponent/>
              <ResearchTeaching/>
              <ResearchAchievement/>
          </div>
          <Footer/>
      </div>
  )
}
