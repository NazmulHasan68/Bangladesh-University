import React from 'react'
import Navigation from '../../components/generallComponent/Navigation'
import Footer from '../../components/generallComponent/Footer'
import TreasurerComponent from '../../components/pages Component/Admistration/Treasusrer/TreasusrerCompent'

export default function Treasusrer() {
  return (
    <div>
      <Navigation/>
      <div className='mt-16 md:mt-24'>
        <TreasurerComponent/>
      </div>
      <Footer/>
    </div>
  )
}
