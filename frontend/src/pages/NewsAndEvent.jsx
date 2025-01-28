import React from 'react'
import NewsEventHeroSection from '../components/pages Component/NewsAndEvent.component/NewsEventHeroSection'
import EventConponent from '../components/pages Component/NewsAndEvent.component/EventConponent'
import EventContent from '../components/pages Component/NewsAndEvent.component/EventContent'
import FutureEventDate from '../components/pages Component/NewsAndEvent.component/FutureEventDate'
import NewsComponent from '../components/pages Component/NewsAndEvent.component/NewsCompoent'
import Navigation from '../components/generallComponent/Navigation'
import Footer from '../components/generallComponent/Footer'

export default function NewsAndEvent() {
  return (
      <div>
          <Navigation/>
          <div className='mt-10 md:mt-20'>
            <NewsEventHeroSection/>
            <EventContent/>
            <EventConponent/>
            <FutureEventDate/>
            <NewsComponent/>
          </div>
          <Footer/>
      </div>
  )
}
