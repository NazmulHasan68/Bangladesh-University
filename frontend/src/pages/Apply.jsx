import React from 'react'
import ApplySlider from '../components/pages Component/Apply.component/applySlider'
import ApplyContact from '../components/pages Component/Apply.component/ApplyContact'
import ApplyCategory from '../components/pages Component/Apply.component/ApplyCategory'
import History from '../components/pages Component/Home.component/History'
import Navigation from '../components/generallComponent/Navigation'
import Footer from '../components/generallComponent/Footer'

export default function Apply() {
  return (
      <div>
          <Navigation/>
          <div className='mt-8 md:mt-16 '>
            <ApplySlider/>
            <ApplyContact/>
            <ApplyCategory/>
            <History/>
          </div>
          <Footer/>
      </div>
  )
}
