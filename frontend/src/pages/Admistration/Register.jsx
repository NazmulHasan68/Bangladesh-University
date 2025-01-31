import React from 'react'
import Navigation from '../../components/generallComponent/Navigation'
import Footer from '../../components/generallComponent/Footer'
import RegisterCompent from '../../components/pages Component/Admistration/Register/RegisterCompent'

export default function Register() {
  return (
    <div>
      <Navigation/>
        <div className='mt-16 md:mt-24'>
          <RegisterCompent/>
        </div>
      <Footer/>
    </div>
  )
}
