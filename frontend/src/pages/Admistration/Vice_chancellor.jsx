import React from 'react'
import Navigation from '../../components/generallComponent/Navigation'
import Footer from '../../components/generallComponent/Footer'
import ViceChancellor from '../../components/pages Component/Admistration/ViceChancellor/ViceChancellor'

export default function Vice_chancellor() {
  return (
    <div>
      <Navigation/>
      <div className='mt-12 md:mt-20'>
        <ViceChancellor/>
      </div>
      <Footer/>
    </div>
  )
}
