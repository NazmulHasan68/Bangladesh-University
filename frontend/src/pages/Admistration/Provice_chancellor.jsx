import React from 'react'
import Navigation from '../../components/generallComponent/Navigation'
import Footer from '../../components/generallComponent/Footer'
import ProviceChancellor from '../../components/pages Component/Admistration/ProViceChancellor/ProviceChancellor'

export default function Provice_chancellor() {
  return (
    <div>
      <Navigation/>
      <div className='mt-16 md:mt-24'>
        <ProviceChancellor/>
      </div>
      <Footer/>
    </div>
  )
}
