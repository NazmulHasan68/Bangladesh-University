import React from 'react'
import MissionCompoent from '../../components/pages Component/About.compoent/MissionCompoent'
import MissionContent from '../../components/pages Component/About.compoent/MissionContent'
import Navigation from '../../components/generallComponent/Navigation'
import Footer from '../../components/generallComponent/Footer'

export default function Mission() {
  return (
      <div>
          <Navigation/>
          <div className='mt-10 md:mt-20'>
            <MissionCompoent/>
            <MissionContent/>
          </div>
          <Footer/>
        </div>
  )
}
