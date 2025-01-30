import React from 'react'
import Navigation from '../../components/generallComponent/Navigation'
import Footer from '../../components/generallComponent/Footer'
import Offer from '../../components/pages Component/Admission/Offers/Offer'

export default function Offers() {
  return (
    <div>
      <Navigation/>
      <div className='mt-16 md:mt-20'>
        <Offer/>
      </div>
      <Footer/>
    </div>
  )
}
