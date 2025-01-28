import React from 'react'
import TransportSlider from '../components/pages Component/Transport.component/TransportSlider'
import TransportContent from '../components/pages Component/Transport.component/TransportContent'
import TransportRoute from '../components/pages Component/Transport.component/TransportRoute'
import TransportPolicy from '../components/pages Component/Transport.component/TransportPolicy'
import SpeachFounder from '../components/pages Component/Home.component/SpeachFounder'
import Footer from '../components/generallComponent/Footer'
import Navigation from '../components/generallComponent/Navigation'

export default function Transports() {
  return (
    <div>
          <Navigation/>
          <div  className='mt-10 md:mt-16'>
            <TransportSlider/>
            <TransportContent/>
            <TransportRoute/>
            <TransportPolicy/>
            <SpeachFounder/>
          </div>
          <Footer/>
    </div>
  )
}
